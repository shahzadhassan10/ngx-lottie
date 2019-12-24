/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, InjectionToken, APP_INITIALIZER } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { appInitializerFactory } from './internals';
/** @type {?} */
export var LOTTIE_SERVER_OPTIONS = new InjectionToken('LOTTIE_SERVER_OPTIONS');
var LottieServerModule = /** @class */ (function () {
    function LottieServerModule() {
    }
    /**
     * @param {?} options
     * @return {?}
     */
    LottieServerModule.forRoot = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
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
    };
    LottieServerModule.decorators = [
        { type: NgModule }
    ];
    return LottieServerModule;
}());
export { LottieServerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG90dGllLXNlcnZlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbG90dGllL3NlcnZlci8iLCJzb3VyY2VzIjpbImxvdHRpZS1zZXJ2ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUcxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRXBELE1BQU0sS0FBTyxxQkFBcUIsR0FBRyxJQUFJLGNBQWMsQ0FDckQsdUJBQXVCLENBQ3hCO0FBRUQ7SUFBQTtJQW1CQSxDQUFDOzs7OztJQWpCZSwwQkFBTzs7OztJQUFyQixVQUFzQixPQUE0QjtRQUNoRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjtvQkFDOUIsUUFBUSxFQUFFLE9BQU87aUJBQ2xCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUscUJBQXFCO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxhQUFhLENBQUM7aUJBQzdDO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBbEJGLFFBQVE7O0lBbUJULHlCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FsQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdGlvblRva2VuLCBBUFBfSU5JVElBTElaRVIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zZmVyU3RhdGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgTG90dGllU2VydmVyT3B0aW9ucyB9IGZyb20gJy4vc3ltYm9scyc7XG5pbXBvcnQgeyBhcHBJbml0aWFsaXplckZhY3RvcnkgfSBmcm9tICcuL2ludGVybmFscyc7XG5cbmV4cG9ydCBjb25zdCBMT1RUSUVfU0VSVkVSX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48TG90dGllU2VydmVyT3B0aW9ucz4oXG4gICdMT1RUSUVfU0VSVkVSX09QVElPTlMnXG4pO1xuXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIExvdHRpZVNlcnZlck1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChvcHRpb25zOiBMb3R0aWVTZXJ2ZXJPcHRpb25zKTogTW9kdWxlV2l0aFByb3ZpZGVyczxMb3R0aWVTZXJ2ZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IExvdHRpZVNlcnZlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogTE9UVElFX1NFUlZFUl9PUFRJT05TLFxuICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgdXNlRmFjdG9yeTogYXBwSW5pdGlhbGl6ZXJGYWN0b3J5LFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgIGRlcHM6IFtMT1RUSUVfU0VSVkVSX09QVElPTlMsIFRyYW5zZmVyU3RhdGVdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=