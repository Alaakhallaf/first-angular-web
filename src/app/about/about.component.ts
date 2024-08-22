import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { WstarComponent } from "../wstar/wstar.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [StarComponent, NavBarComponent, FooterComponent, WstarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
