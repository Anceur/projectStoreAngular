import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core'
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


export const routes: Routes = [
    
        {
            path : '',redirectTo:'login',pathMatch:'full'
        },
        {
            path:'login',
            component:LoginComponent
        },
        {
            path :'layout',
            component:LayoutComponent,
        },
        
          
           
         {
            path : 'dashboard',
            component:DashboardComponent,
        }
        
        
    

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }