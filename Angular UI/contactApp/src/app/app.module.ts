import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {FormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

let routes : Routes =[
  {path : "",component : RegistrationFormComponent},
  {path : "register" , component : RegistrationFormComponent},
  {path : "login", component : LoginFormComponent},
  {path : "success/:profileId/addContacts" , component : AddContactsComponent},
  {path : "success/:profileId/editProfile",component : EditProfileComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    AddContactsComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
