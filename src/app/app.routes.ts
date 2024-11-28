import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { MatSelectModule } from '@angular/material/select';  // Import MatSelectModule
import { MatOptionModule } from '@angular/material/core';  


export const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'footer', component: FooterComponent },    
  { path: 'login', component: LoginComponent }, 
  { path: 'signup', component: SignupComponent }, 
  { path: 'patientdashboard', component: PatientDashboardComponent }, 
  { path: 'doctordashboard', component: DoctorDashboardComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),   MatSelectModule,  // Add MatSelectModule here
    MatOptionModule ], 
  exports: [RouterModule]    
})
export class AppRoutingModule { }
