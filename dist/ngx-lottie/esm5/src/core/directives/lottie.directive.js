/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ChangeDetectorRef, NgZone, Inject, Self, PLATFORM_ID, ElementRef } from '@angular/core';
import { LottieEventsService } from '../services/lottie-events.service';
import { BaseDirective } from './base.directive';
var LottieDirective = /** @class */ (function (_super) {
    tslib_1.__extends(LottieDirective, _super);
    function LottieDirective(ref, zone, platformId, lottieEventsService, host) {
        var _this = _super.call(this) || this;
        _this.ref = ref;
        _this.zone = zone;
        _this.platformId = platformId;
        _this.lottieEventsService = lottieEventsService;
        _this.host = host;
        return _this;
    }
    /**
     * @return {?}
     */
    LottieDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.loadAnimation.call(this, this.ref, this.zone, this.platformId, this.lottieEventsService, this.host.nativeElement, this);
    };
    LottieDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[lottie]',
                    providers: [LottieEventsService]
                },] }
    ];
    /** @nocollapse */
    LottieDirective.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: LottieEventsService, decorators: [{ type: Self }] },
        { type: ElementRef, decorators: [{ type: Self }] }
    ]; };
    return LottieDirective;
}(BaseDirective));
export { LottieDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG90dGllLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1sb3R0aWUvIiwic291cmNlcyI6WyJzcmMvY29yZS9kaXJlY3RpdmVzL2xvdHRpZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULGlCQUFpQixFQUNqQixNQUFNLEVBQ04sTUFBTSxFQUNOLElBQUksRUFDSixXQUFXLEVBQ1gsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRDtJQUlxQywyQ0FBYTtJQUNoRCx5QkFDbUIsR0FBc0IsRUFDdEIsSUFBWSxFQUNTLFVBQWtCLEVBQy9CLG1CQUF3QyxFQUN4QyxJQUE2QjtRQUx4RCxZQU9FLGlCQUFPLFNBQ1I7UUFQa0IsU0FBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUNTLGdCQUFVLEdBQVYsVUFBVSxDQUFRO1FBQy9CLHlCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsVUFBSSxHQUFKLElBQUksQ0FBeUI7O0lBR3hELENBQUM7Ozs7SUFFTSxrQ0FBUTs7O0lBQWY7UUFDRSxpQkFBTSxhQUFhLFlBQ2pCLElBQUksQ0FBQyxHQUFHLEVBQ1IsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxtQkFBbUIsRUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQ3ZCLElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQzs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQ2pDOzs7O2dCQWRDLGlCQUFpQjtnQkFDakIsTUFBTTs2Q0FrQkgsTUFBTSxTQUFDLFdBQVc7Z0JBWGQsbUJBQW1CLHVCQVl2QixJQUFJO2dCQWZQLFVBQVUsdUJBZ0JQLElBQUk7O0lBZVQsc0JBQUM7Q0FBQSxBQXpCRCxDQUlxQyxhQUFhLEdBcUJqRDtTQXJCWSxlQUFlOzs7Ozs7SUFFeEIsOEJBQXVDOzs7OztJQUN2QywrQkFBNkI7Ozs7O0lBQzdCLHFDQUF3RDs7Ozs7SUFDeEQsOENBQWlFOzs7OztJQUNqRSwrQkFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIE9uSW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE5nWm9uZSxcbiAgSW5qZWN0LFxuICBTZWxmLFxuICBQTEFURk9STV9JRCxcbiAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG90dGllRXZlbnRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvdHRpZS1ldmVudHMuc2VydmljZSc7XG5pbXBvcnQgeyBCYXNlRGlyZWN0aXZlIH0gZnJvbSAnLi9iYXNlLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tsb3R0aWVdJyxcbiAgcHJvdmlkZXJzOiBbTG90dGllRXZlbnRzU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTG90dGllRGlyZWN0aXZlIGV4dGVuZHMgQmFzZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHpvbmU6IE5nWm9uZSxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICBAU2VsZigpIHByaXZhdGUgcmVhZG9ubHkgbG90dGllRXZlbnRzU2VydmljZTogTG90dGllRXZlbnRzU2VydmljZSxcbiAgICBAU2VsZigpIHByaXZhdGUgcmVhZG9ubHkgaG9zdDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD5cbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5sb2FkQW5pbWF0aW9uKFxuICAgICAgdGhpcy5yZWYsXG4gICAgICB0aGlzLnpvbmUsXG4gICAgICB0aGlzLnBsYXRmb3JtSWQsXG4gICAgICB0aGlzLmxvdHRpZUV2ZW50c1NlcnZpY2UsXG4gICAgICB0aGlzLmhvc3QubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXNcbiAgICApO1xuICB9XG59XG4iXX0=