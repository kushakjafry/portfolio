import { Component, Inject, OnInit } from '@angular/core';
import * as Typewriter from 't-writer.js';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public scrollService: ScrollService
  ) {}
  options: AnimationOptions = {
    path: '/assets/animations/18123-developer.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const target = document.querySelector('.tw');
      const writer = new Typewriter(target, {
        loop: true,
        typeColor: '#2f89fc',
        cursorColor: '#2f89fc',
        typeSpeed: 200,
        deleteSpeed: 100,
      });

      writer.strings(2000, 'Website', 'App').start();
      this.scrollService.home = document.querySelector('html');
      this.scrollService.portfolios = document.querySelector('#portfolioSec');
      this.scrollService.services = document.querySelector('#servicesSec');
      this.scrollService.about = document.querySelector('#aboutSec');
      this.scrollService.contact = document.querySelector('#contactSec');
    }
  }
}
