import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { WstarComponent } from "../wstar/wstar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StarComponent, NavBarComponent, FooterComponent, WstarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
