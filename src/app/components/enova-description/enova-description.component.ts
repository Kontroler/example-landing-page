import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-enova-description',
  templateUrl: './enova-description.component.html',
  styleUrls: ['./enova-description.component.scss'],
})
export class EnovaDescriptionComponent implements OnInit {
  @ViewChild('image', { static: true }) image: ElementRef<HTMLDivElement>;
  @ViewChild('heading1', { static: true }) heading1: ElementRef<HTMLDivElement>;
  @ViewChild('paragraph1', { static: true }) paragraph1: ElementRef<HTMLDivElement>;
  @ViewChild('paragraph2', { static: true }) paragraph2: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit() {
    this.initialAnimations();
  }

  initScrollAnimations(): void {
    gsap.to(this.image.nativeElement, {
      scrollTrigger: {
        trigger: this.image.nativeElement,
        scrub: true,
        end: '100% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.1,
      scale: 1.0,
    });
  }

  initialAnimations(): void {
    gsap.from(this.image.nativeElement, {
      duration: 3,
      x: 500,
      opacity: 0,
      scale: 0.5,
    });
    gsap.from(this.heading1.nativeElement, {
      duration: 1,
      x: -500,
      opacity: 0,
      scale: 0.5,
    });
    gsap.from(this.paragraph1.nativeElement, {
      duration: 1,
      x: -500,
      delay: 1,
      opacity: 0,
      scale: 0.5,
    });
    gsap.from(this.paragraph2.nativeElement, {
      duration: 1,
      x: -500,
      delay: 2,
      opacity: 0,
      scale: 0.5,
    });
  }
}
