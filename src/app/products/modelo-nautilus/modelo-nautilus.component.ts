import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-modelo-nautilus',
  templateUrl: './modelo-nautilus.component.html',
  styleUrls: ['./modelo-nautilus.component.css']
})
export class ModeloNautilusComponent implements AfterViewInit {
  @ViewChild('productImageSlider', { static: false }) productImageSlider!: ElementRef;

  ngAfterViewInit() {
    // Configuración del Swiper de Imágenes Grandes
    const productImageSwiper = new Swiper(this.productImageSlider.nativeElement, {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.slider-product-next',
        prevEl: '.slider-product-prev'
      }
    });

    // Configuración del Swiper de Miniaturas Verticales
    const productThumbSwiper = new Swiper('.product-image-thumb', {
      slidesPerView: 'auto',
      spaceBetween: 15,
      direction: 'vertical',
      navigation: {
        nextEl: '.swiper-thumb-next',
        prevEl: '.swiper-thumb-prev'
      }
    });

    // Enlazar los dos Swipers
    productImageSwiper.controller.control = productThumbSwiper;
    productThumbSwiper.controller.control = productImageSwiper;
  }
}
