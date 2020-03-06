import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './components/login/login.component';
import {TestListComponent} from './components/student/test-list/test-list.component';
import { PostTestComponent } from './components/teacher/post-test/post-test.component';
import { RegistrationComponent } from './components/teacher/registration/registration.component';
import { StudentregistrationComponent } from './components/student/studentregistration/studentregistration.component';
import { StudentforgetpasswordComponent } from './components/student/studentforgetpassword/studentforgetpassword.component';
import { AddquestionComponent } from './components/teacher/addquestion/addquestion.component';
import { CrudComponent } from './components/admin/crud/crud.component';
import { FirstLoginComponent } from './components/first-login/first-login.component';
import { MainRegistrationComponent } from './components/main-registration/main-registration.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginServiceService} from './components/login/login-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestListComponent,
    PostTestComponent,
    RegistrationComponent,
    StudentregistrationComponent,
    StudentforgetpasswordComponent,
    AddquestionComponent,
    CrudComponent,
    FirstLoginComponent,
    MainRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
