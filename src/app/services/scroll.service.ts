import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  home: HTMLElement;
  about: HTMLElement;
  services: HTMLElement;
  portfolios: HTMLElement;
  contact: HTMLElement;
  constructor() {}
  scrollIntoView(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
