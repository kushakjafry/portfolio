import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('fullMenu') fullMenu: ElementRef | undefined;
  @ViewChildren('navlink') pageMenu!: QueryList<ElementRef>;
  navAnimationListener!: () => void;
  navLinksAnimationListener!: () => void;
  navLinkAnimationListener!: () => void;
  constructor(private renderer: Renderer2) {}
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
}
