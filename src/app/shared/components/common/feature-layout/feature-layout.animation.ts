import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
    /* order */
    /* 1 */ query(':enter', style(
            {
                position: 'fixed',
                width: '100%',
                overflow: 'auto',
                top: '0',
                left: '0',
                border: '48px solid transparent',
                borderBottomWidth: '0',
                borderRightWidth: '0',
                maxWidth: '100%',
                height: '100%',
                maxHeight: '100%',
                padding: '30px 22px',
                opacity: '0'
            }
        )
            , { optional: true }),
    /* 2 */ group([  // block executes in parallel
            query(':enter', [
                style({ opacity: '0', transform: 'translateY(15px)' }),
                animate('0.5s ease-in-out', style({ opacity: '1', transform: 'translateY(0px)' }))
            ],
                { optional: true }),
            // query(':leave', [
            //     style({ opacity: '1', transform: 'translateY(0%)' }),
            //     animate('0.5s ease-in-out', style({ opacity: '0', transform: 'translateY(-100%)' }))
            // ],
            //     { optional: true }),
        ])
    ])
]);

// export const routerTransition = trigger('routerTransition', [
//     transition('* <=> *', [
//       /* order */
//       /* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%' })
//             , { optional: true }),
//       /* 2 */ group([  // block executes in parallel
//             query(':enter', [
//                 style({ transform: 'translateX(-100%)' }),
//                 animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
//             ], { optional: true }),
//             query(':leave', [
//                 style({ transform: 'translateX(0%)', right: '95px', top: '0' }),
//                 animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
//             ], { optional: true }),
//         ])
//     ])
// ]);

