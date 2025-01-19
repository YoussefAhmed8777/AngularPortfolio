import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home',component:HomeComponent,title:'Home',pathMatch:'full'},
  {path:'about',component:AboutComponent,title:'About',pathMatch:'full'},
  {path:'portfolio',component:PortfolioComponent,title:'Portfolio',pathMatch:'full'},
  {path:'contact',component:ContactComponent,title:'Contact',pathMatch:'full'},
];
