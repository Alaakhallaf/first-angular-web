import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { FooterComponent } from "../footer/footer.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StarComponent, FooterComponent, NavBarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
