import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SearchPatientsComponent } from './components/search-patients/search-patients.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { HeaderComponent } from './Shared/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchPatientsComponent,
    PatientDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
