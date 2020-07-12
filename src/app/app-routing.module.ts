import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SearchPatientsComponent } from './components/search-patients/search-patients.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'search-patients',
    component: SearchPatientsComponent
  },
  {
    path: 'patient-details',
    component: PatientDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
