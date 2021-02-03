import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
  keyframes,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('Contact => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' })),
        ],
        { optional: true }
      ),
    ]),
  ]),
  transition('Home => *', [
    query(':enter, :leave', [
      style({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'translateY(100%)',
      }),
    ]),
    query(':enter', [
      style({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        opacity: 1,
      }),
    ]),
    // Animate the new page in
    query(':enter', [
      animate('400ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
  ]),
  transition('About => Home', [
    query(':leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: 1,
        zIndex: 11,
        transform: 'translateY(0)',
      }),
    ]),
    // Animate the new page in
    query(':leave', [
      animate('600ms ease', style({ transform: 'translateY(100%)' })),
    ]),
  ]),
]);
