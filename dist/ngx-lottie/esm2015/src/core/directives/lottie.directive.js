/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ChangeDetectorRef, NgZone, Inject, Self, PLATFORM_ID, ElementRef } from '@angular/core';
import { LottieEventsService } from '../services/lottie-events.service';
import { BaseDirective } from './base.directive';
export class LottieDirective extends BaseDirective {
    /**
     * @param {?} ref
     * @param {?} zone
     * @param {?} platformId
     * @param {?} lottieEventsService
     * @param {?} host
     */
    constructor(ref, zone, platformId, lottieEventsService, host) {
        super();
        this.ref = ref;
        this.zone = zone;
        this.platformId = platformId;
        this.lottieEventsService = lottieEventsService;
        this.host = host;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.loadAnimation(this.ref, this.zone, this.platformId, this.lottieEventsService, this.host.nativeElement, this);
    }
}
LottieDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lottie]',
                providers: [LottieEventsService]
            },] }
];
/** @nocollapse */
LottieDirective.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: LottieEventsService, decorators: [{ type: Self }] },
    { type: ElementRef, decorators: [{ type: Self }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LottieDirective.prototype.ref;
    /**
     * @type {?}
     * @private
     */
    LottieDirective.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    LottieDirective.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    LottieDirective.prototype.lottieEventsService;
    /**
     * @type {?}
     * @private
     */
    LottieDirective.prototype.host;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG90dGllLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1sb3R0aWUvIiwic291cmNlcyI6WyJzcmMvY29yZS9kaXJlY3RpdmVzL2xvdHRpZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixNQUFNLEVBQ04sSUFBSSxFQUNKLFdBQVcsRUFDWCxVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWpELE1BQU0sT0FBTyxlQUFnQixTQUFRLGFBQWE7Ozs7Ozs7O0lBQ2hELFlBQ21CLEdBQXNCLEVBQ3RCLElBQVksRUFDUyxVQUFrQixFQUMvQixtQkFBd0MsRUFDeEMsSUFBNkI7UUFFdEQsS0FBSyxFQUFFLENBQUM7UUFOUyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1MsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUMvQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLFNBQUksR0FBSixJQUFJLENBQXlCO0lBR3hELENBQUM7Ozs7SUFFTSxRQUFRO1FBQ2IsS0FBSyxDQUFDLGFBQWEsQ0FDakIsSUFBSSxDQUFDLEdBQUcsRUFDUixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLG1CQUFtQixFQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFDdkIsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUNqQzs7OztZQWRDLGlCQUFpQjtZQUNqQixNQUFNO3lDQWtCSCxNQUFNLFNBQUMsV0FBVztZQVhkLG1CQUFtQix1QkFZdkIsSUFBSTtZQWZQLFVBQVUsdUJBZ0JQLElBQUk7Ozs7Ozs7SUFKTCw4QkFBdUM7Ozs7O0lBQ3ZDLCtCQUE2Qjs7Ozs7SUFDN0IscUNBQXdEOzs7OztJQUN4RCw4Q0FBaUU7Ozs7O0lBQ2pFLCtCQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgT25Jbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgTmdab25lLFxuICBJbmplY3QsXG4gIFNlbGYsXG4gIFBMQVRGT1JNX0lELFxuICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMb3R0aWVFdmVudHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG90dGllLWV2ZW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IEJhc2VEaXJlY3RpdmUgfSBmcm9tICcuL2Jhc2UuZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xvdHRpZV0nLFxuICBwcm92aWRlcnM6IFtMb3R0aWVFdmVudHNTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMb3R0aWVEaXJlY3RpdmUgZXh0ZW5kcyBCYXNlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSByZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgem9uZTogTmdab25lLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm1JZDogc3RyaW5nLFxuICAgIEBTZWxmKCkgcHJpdmF0ZSByZWFkb25seSBsb3R0aWVFdmVudHNTZXJ2aWNlOiBMb3R0aWVFdmVudHNTZXJ2aWNlLFxuICAgIEBTZWxmKCkgcHJpdmF0ZSByZWFkb25seSBob3N0OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PlxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLmxvYWRBbmltYXRpb24oXG4gICAgICB0aGlzLnJlZixcbiAgICAgIHRoaXMuem9uZSxcbiAgICAgIHRoaXMucGxhdGZvcm1JZCxcbiAgICAgIHRoaXMubG90dGllRXZlbnRzU2VydmljZSxcbiAgICAgIHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cbn1cbiJdfQ==