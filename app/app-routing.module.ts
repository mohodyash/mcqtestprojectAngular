import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TestListComponent } from './components/student/test-list/test-list.component';
import { PostTestComponent } from './components/teacher/post-test/post-test.component';
import { RegistrationComponent } from './components/teacher/registration/registration.component';
import { StudentregistrationComponent } from './components/student/studentregistration/studentregistration.component';
import { StudentforgetpasswordComponent } from './components/student/studentforgetpassword/studentforgetpassword.component';
import { AddquestionComponent } from './components/teacher/addquestion/addquestion.component';
import { CrudComponent } from './components/admin/crud/crud.component';
import { MainRegistrationComponent } from './components/main-registration/main-registration.component';



const routes: Routes = [
     {
        path:'',
        component:LoginComponent
     },
     {
       path:'login',
       component:LoginComponent
     },
     {
       path:'register',
       component:MainRegistrationComponent
     },
     {
       path:'student/testlist',
       component:TestListComponent
     },
     {
       path:'register/student',
       component:StudentregistrationComponent
     },
     {
       path:'student/forget',
       component:StudentforgetpasswordComponent
     },
     {
       path:'teacher/posttest',
       component:PostTestComponent
     },
     {
       path:'register/teacher',
       component:RegistrationComponent
     },
     {
       path: 'teacher/addquestion',
       component:AddquestionComponent
     },
     {
       path: 'admin/crud',
       component:CrudComponent
     }
     
    

     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
