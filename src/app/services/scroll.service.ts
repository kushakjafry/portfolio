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
  scrollIntoView(el: string) {
    const elem: HTMLElement = this[el];
    elem.scrollIntoView({ behavior: 'smooth' });
  }
}
