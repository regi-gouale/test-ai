import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testai';

  constructor() {
    console.log('AppComponent constructor');
  }

  ngOnInit() {
    console.log('AppComponent ngOnInit');
  }

  toggleNav() {
    const toggleMenuBtn = document.querySelector('#menu-btn');
    const toggleMenuImg = document.querySelector('#menu-btn img');
    const toggledMenu = document.querySelector('#toggled-menu');
    const menuLinks = document.querySelector('#main-nav ul a');

    toggledMenu?.classList.toggle('-translate-y-full');
    if (toggledMenu?.classList.contains('-translate-y-full')) {
      toggleMenuImg
        ?.setAttribute('src', './../assets/bars.svg');
        toggleMenuBtn
          ?.setAttribute('aria-expanded', 'false');
      // document.querySelector('#toggled-menu')?.classList.remove('translate-y-0');
    }else{
      toggleMenuImg
        ?.setAttribute('src', './../assets/xmark.svg');
        toggleMenuBtn
          ?.setAttribute('aria-expanded', 'true');
      // document.querySelector('#toggled-menu')?.classList.add('translate-y-0');
    }
    console.log('AppComponent toggleNav');
  }

}
