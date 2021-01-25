import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.meta.addTag({
      name: 'description',
      content: 'My personal portfolio.',
    });
    this.meta.addTag({ name: 'author', content: 'Kushak Jafry' });
    this.meta.addTag({
      name: 'keywords',
      content: 'Portfolio, Angular, Strapi',
    });
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 500,
      });
    }
  }
  title = 'portfolio';
  @ViewChild('scrollbar') scrollBar: ElementRef;
  @ViewChild('header') header: ElementRef;
  @HostListener('window:scroll', ['$event'])
  onScroll($event) {
    this.renderer.addClass(this.header.nativeElement, 'scrolled');
    this.renderer.setStyle(
      this.scrollBar.nativeElement,
      'width',
      `${
        (window.pageYOffset /
          (document.body.scrollHeight - window.innerHeight)) *
        100
      }%`
    );
    if (window.pageYOffset === 0) {
      this.renderer.removeClass(this.header.nativeElement, 'scrolled');
    }
  }
}
