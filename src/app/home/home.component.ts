import { Component, OnInit, NgZone } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ngzone: NgZone) { }
  //loading
  cargando: boolean = false;
  //customOptions?: OwlOptions; // Declaración sin asignación inicial

  customOptions: OwlOptions = {
    
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 10,
    navSpeed: 700,
    navText: ['<div aria-hidden="true">PREV</div>',
      '<div aria-hidden="true">NEXT</div>'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false,
  }

    ngOnInit(): void {
      
      
  }

}
