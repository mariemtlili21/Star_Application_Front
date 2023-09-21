import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   {
     path: '',
    redirectTo: '/home',
     pathMatch: 'full'
   },
 
  {path:'registration',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'footer',component:FooterComponent},
  {path:'home',component:HomeComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
