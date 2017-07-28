
import { Component, OnInit } from '@angular/core';
import { AuthoriserService } from './../../services/authoriser.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {



  constructor(private authService: AuthoriserService) { 
    console.log('Constructor ran ');
    this.authService.ngOnInit();
  }

  ngOnInit() {}
 
}//end class
