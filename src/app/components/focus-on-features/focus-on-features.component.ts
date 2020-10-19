import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-focus-on-features',
  templateUrl: './focus-on-features.component.html',
  styleUrls: ['./focus-on-features.component.scss'],
})
export class FocusOnFeaturesComponent implements OnInit {
  @ViewChild('image', { static: true }) image: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit() {
    this.initScrollAnimations();
  }

  initScrollAnimations(): void {
    gsap.to(this.image.nativeElement, {
      scrollTrigger: {
        trigger: this.image.nativeElement,
        scrub: true,
        end: '50% center ',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.1,
      scale: 1.0,
      height: 500
    });
  }
}
