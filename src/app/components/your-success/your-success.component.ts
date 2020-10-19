import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-your-success',
  templateUrl: './your-success.component.html',
  styleUrls: ['./your-success.component.scss'],
})
export class YourSuccessComponent implements OnInit {
  @ViewChild('text', { static: true }) text: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit() {
    this.initScrollAnimations();
  }

  initScrollAnimations(): void {
    gsap.from(this.text.nativeElement, {
      scrollTrigger: {
        trigger: this.text.nativeElement,
        scrub: true,
        end: '100% top ',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.1,
      scale: 1.2,
      y: -300,
    });
  }
}
