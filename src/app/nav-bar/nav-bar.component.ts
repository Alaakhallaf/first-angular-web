import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  @ViewChild('navBar') el!: ElementRef;

  @HostListener('window:scroll') onScroll() {
    if (window.scrollY > 100) {
      this.el.nativeElement.style.paddingBlock = '10px';
    } else {
      this.el.nativeElement.style.paddingBlock = '30px'; 
    }
  }
}
