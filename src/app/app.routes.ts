import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'' ,redirectTo:'home', pathMatch:'full'},

    {path:'about' ,component:AboutComponent ,title:'about'},
    {path:'home' ,component:HomeComponent ,title:'home' },
    {path:'portfolio' ,component:PortfolioComponent, title:'port'},
    {path:'contact' ,component:ContactComponent, title:'contact'},
    {path:'**' ,component:NotFoundComponent , title:'not found'},


  




];
