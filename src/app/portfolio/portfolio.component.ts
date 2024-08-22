import { RouterLinkActive } from '@angular/router';
import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { VariableBinding } from '@angular/compiler';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent, NavBarComponent, FooterComponent,FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
 image:string="";
  isclicked:boolean =false;
  open(src:string) {
    
   this.isclicked=true;
   this.image=src;
  }
close(){
  this.isclicked=false;
}
onImgClicl(event:MouseEvent){
  event.stopImmediatePropagation();
}

   images:string[]=[
    './assets/images/images 61.png',
    './assets/images/images 62.png',

    './assets/images/images 63.png',

    './assets/images/images 61.png',
    './assets/images/images 62.png',
    './assets/images/images 63.png'

   ]
}
