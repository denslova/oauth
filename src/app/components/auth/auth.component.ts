import { AuthoriserService } from './../../services/authoriser.service';
import { Component, OnInit } from '@angular/core';
import { environment } from "environments/environment";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {



  constructor(private authService: AuthoriserService) { }

  ngOnInit() {
  
  }
  


}
