import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from "environments/environment";

export const devData = environment.devDataEnv;



@Injectable()
export class AuthoriserService implements OnInit{

  title: string = 'Auth started!';
  urlParams: any = {};  

   getJsonFromUrl() : any {
    var query = location.search.substr(1);
    var result = {};
    query.split("&").forEach(function(part) {
      var item = part.split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    });
    console.log(result);
    return result;
  } 

  constructor(public http: Http) { 
    console.log("data service connected");
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1' )
    .map(res => res.json());
  }
  postCode(user) {
    return this.http.post('https://canvas.fxlongterm.com/login/oauth2/token', user )
    .map(res => res.json());
  }      

  ngOnInit() {
    this.urlParams = this.getJsonFromUrl();
    if ("error" in this.urlParams) {
      document.write("The following error: " + this.urlParams.error);
    }
    if ("code" in this.urlParams) {

      devData.code = this.urlParams.code;

    // this.authService.getPosts().subscribe((posts) => {
    //   console.log(posts);
    //   console.log("code is here: " + devData.code);
    // });
      this.postCode(devData).subscribe((res) => {
        console.log(res);
          if ('access_token' in res) {
              localStorage.setItem("canvas_access_token", res.access_token);
          }
          if ('refresh_token' in res) {
              localStorage.setItem("canvas_refresh_token", res.refresh_token);
          }
         window.location.href = (devData.redirect_uri);
         console.log(devData.redirect_uri);
         //document.write("Auth complete peepz!");      
      }); //end Observable     
    }//end if code 
  }//end if

}
