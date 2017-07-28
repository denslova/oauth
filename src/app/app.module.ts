import { DataService } from './services/data.service';
import { AuthoriserService } from './services/authoriser.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { WelcomeComponent } from './components/welcome/welcome.component';
//import { AngularFireModule } from 'angularfire2';
import { RouterModule, Routes} from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionComponent } from './components/question/question.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';


const appRoutes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'welcome', component: WelcomeComponent},  
  { path: 'auth', component: AuthComponent}  
]


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AuthComponent,
    NavbarComponent,
    QuestionListComponent,
    QuestionComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthoriserService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
