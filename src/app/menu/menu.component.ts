import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 10) {
       let element = document.getElementById('menu-top');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('menu-top');
        element.classList.remove('sticky');
     }
  }

}
