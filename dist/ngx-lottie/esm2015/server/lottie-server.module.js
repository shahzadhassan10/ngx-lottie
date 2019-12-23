/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, InjectionToken, APP_INITIALIZER } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { appInitializerFactory } from './internals';
/** @type {?} */
export const LOTTIE_SERVER_OPTIONS = new InjectionToken('LOTTIE_SERVER_OPTIONS');
export class LottieServerModule {
    /**
     * @param {?} options
     * @return {?}
     */
    static forRoot(options) {
        return {
            ngModule: LottieServerModule,
            providers: [
                {
                    provide: LOTTIE_SERVER_OPTIONS,
                    useValue: options
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: appInitializerFactory,
                    multi: true,
                    deps: [LOTTIE_SERVER_OPTIONS, TransferState]
                }
            ]
        };
    }
}
LottieServerModule.decorators = [
    { type: NgModule }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG90dGllLXNlcnZlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbG90dGllL3NlcnZlci8iLCJzb3VyY2VzIjpbImxvdHRpZS1zZXJ2ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUcxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRXBELE1BQU0sT0FBTyxxQkFBcUIsR0FBRyxJQUFJLGNBQWMsQ0FDckQsdUJBQXVCLENBQ3hCO0FBR0QsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUE0QjtRQUNoRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjtvQkFDOUIsUUFBUSxFQUFFLE9BQU87aUJBQ2xCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUscUJBQXFCO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxhQUFhLENBQUM7aUJBQzdDO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBbEJGLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0aW9uVG9rZW4sIEFQUF9JTklUSUFMSVpFUiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNmZXJTdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBMb3R0aWVTZXJ2ZXJPcHRpb25zIH0gZnJvbSAnLi9zeW1ib2xzJztcbmltcG9ydCB7IGFwcEluaXRpYWxpemVyRmFjdG9yeSB9IGZyb20gJy4vaW50ZXJuYWxzJztcblxuZXhwb3J0IGNvbnN0IExPVFRJRV9TRVJWRVJfT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxMb3R0aWVTZXJ2ZXJPcHRpb25zPihcbiAgJ0xPVFRJRV9TRVJWRVJfT1BUSU9OUydcbik7XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgTG90dGllU2VydmVyTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KG9wdGlvbnM6IExvdHRpZVNlcnZlck9wdGlvbnMpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPExvdHRpZVNlcnZlck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTG90dGllU2VydmVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBMT1RUSUVfU0VSVkVSX09QVElPTlMsXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICB1c2VGYWN0b3J5OiBhcHBJbml0aWFsaXplckZhY3RvcnksXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgZGVwczogW0xPVFRJRV9TRVJWRVJfT1BUSU9OUywgVHJhbnNmZXJTdGF0ZV1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==