import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private renderer: Renderer2) {}
  title = 'portfolio';
  @ViewChild('scrollbar') scrollBar: ElementRef;
  @ViewChild('header') header: ElementRef;
  @HostListener('window:scroll', ['$event'])
  onScroll($event) {
    // this.renderer.setStyle(this.header.nativeElement, 'padding', '1em 0');
    // this.renderer.setStyle(
    //   this.header.nativeElement,
    //   'background-color',
    //   'black'
    // );
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
      // this.renderer.setStyle(
      //   this.header.nativeElement,
      //   'background-color',
      //   'transparent'
      // );
      // this.renderer.setStyle(
      //   this.header
      // )
      this.renderer.removeClass(this.header.nativeElement, 'scrolled');
    }
  }
}
