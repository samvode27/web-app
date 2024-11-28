import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeComponent } from './pages/employe/employe.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectEmployeComponent } from './pages/project-employe/project-employe.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'                                                                                               
    },
    {
        path: 'login',
        component: LoginComponent                                                                                               
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
           {
               path: 'dashboard',
               component: DashboardComponent                                                                                        
           },      
           {
               path: 'employe',
               component: EmployeComponent                                                                                        
           },  
           {
               path: 'project',
               component: ProjectComponent                                                                                        
           },
           {
               path: 'project-employe',
               component: ProjectEmployeComponent                                                                                        
           }                                                                                   
        ]                                                                                               
    }                                                                                                                                                                                                    
];
