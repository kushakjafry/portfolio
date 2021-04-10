import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit, OnInit {
  @ViewChild('fullMenu') fullMenu: ElementRef | undefined;
  visibleMenu: boolean = true;
  @ViewChildren('navlink') pageMenu!: QueryList<ElementRef>;
  navAnimationListener!: () => void;
  navLinksAnimationListener!: () => void;
  navLinkAnimationListener!: () => void;
  constructor(
    private renderer: Renderer2,
    private router: Router,
    private scrollService: ScrollService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart || event instanceof NavigationEnd) {
        if (event.url.includes('/portfolio/')) {
          this.visibleMenu = false;
        } else {
          this.visibleMenu = true;
        }
      }
    });
  }
  ngAfterViewInit(): void {
    this.renderer.setStyle(this.fullMenu?.nativeElement, 'display', 'none');
  }
  showNav() {
    this.renderer.addClass(this.fullMenu?.nativeElement, 'show');
    this.renderer.setStyle(this.fullMenu?.nativeElement, 'display', 'flex');
    console.log(this.pageMenu);
    this.navLinksAnimationListener = this.renderer.listen(
      this.fullMenu.nativeElement,
      'animationend',
      () => {
        this.pageMenu.forEach((link, index) => {
          this.renderer.setStyle(
            link.nativeElement,
            'animation',
            `slideIn 1s ${index / 7}s`
          );
          let newLinkListner = this.renderer.listen(
            link.nativeElement,
            'animationend',
            () => {
              this.renderer.addClass(link.nativeElement, 'show');
              if (newLinkListner) {
                newLinkListner();
              }
            }
          );
        });
        this.navLinksAnimationListener();
      }
    );
  }
  hideNav() {
    this.renderer.removeClass(this.fullMenu?.nativeElement, 'show');
    this.pageMenu.forEach((link) => {
      this.renderer.removeClass(link.nativeElement, 'show');
    });
    this.navAnimationListener = this.renderer.listen(
      this.fullMenu?.nativeElement,
      'animationend',
      () => {
        this.renderer.setStyle(this.fullMenu?.nativeElement, 'display', 'none');
        this.navAnimationListener();
      }
    );
  }
  linkClicked(el: string) {
    this.scrollService.scrollIntoView(el);
    this.hideNav();
  }
}
