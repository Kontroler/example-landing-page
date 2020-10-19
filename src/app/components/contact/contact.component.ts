import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @ViewChild('name', { static: true }) name: ElementRef<HTMLDivElement>;
  @ViewChild('email', { static: true }) email: ElementRef<HTMLDivElement>;
  @ViewChild('message', { static: true }) message: ElementRef<HTMLDivElement>;
  @ViewChild('send', { static: true }) send: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit() {
    this.initScrollAnimations();
  }

  initScrollAnimations(): void {
    gsap.from(this.name.nativeElement, {
      scrollTrigger: {
        trigger: this.name.nativeElement,
        scrub: true,
        end: 'top center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      x: -300,
    });
    gsap.from(this.email.nativeElement, {
      scrollTrigger: {
        trigger: this.email.nativeElement,
        scrub: true,
        end: 'top center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      x: 300,
    });
    gsap.from(this.message.nativeElement, {
      scrollTrigger: {
        trigger: this.message.nativeElement,
        scrub: true,
        end: 'top center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      x: -300,
    });
    gsap.from(this.send.nativeElement, {
      scrollTrigger: {
        trigger: this.send.nativeElement,
        scrub: true,
        end: '-90% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      x: 300,
    });
  }
}
