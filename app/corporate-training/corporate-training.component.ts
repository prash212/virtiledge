import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-corporate-training',
  templateUrl: './corporate-training.component.html',
  styleUrls: ['./corporate-training.component.css']
})
export class CorporateTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);

    $('.offers').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      navSpeed: 1000,
      dotsSpeed: 1000,
      dragEndSpeed: 1000,
      margin: 30,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        768: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
    });

  }

}
