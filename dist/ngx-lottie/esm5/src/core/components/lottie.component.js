/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, Inject, ChangeDetectorRef, NgZone, ElementRef, ViewChild, Self, PLATFORM_ID } from '@angular/core';
import { LottieEventsService } from '../services/lottie-events.service';
import { BaseDirective } from '../directives/base.directive';
var LottieComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LottieComponent, _super);
    function LottieComponent(ref, zone, platformId, lottieEventsService) {
        var _this = _super.call(this) || this;
        _this.ref = ref;
        _this.zone = zone;
        _this.platformId = platformId;
        _this.lottieEventsService = lottieEventsService;
        _this.container = (/** @type {?} */ (null));
        return _this;
    }
    /**
     * @return {?}
     */
    LottieComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.loadAnimation.call(this, this.ref, this.zone, this.platformId, this.lottieEventsService, this.container.nativeElement, this);
    };
    LottieComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-lottie',
                    template: "\n    <div\n      #container\n      [style.width.px]=\"width\"\n      [style.height.px]=\"height\"\n      style=\"margin: 0 auto\"\n      [ngStyle]=\"styles\"\n      [ngClass]=\"containerClass\"\n    ></div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [LottieEventsService]
                }] }
    ];
    /** @nocollapse */
    LottieComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: LottieEventsService, decorators: [{ type: Self }] }
    ]; };
    LottieComponent.propDecorators = {
        container: [{ type: ViewChild, args: ['container',] }]
    };
    return LottieComponent;
}(BaseDirective));
export { LottieComponent };
if (false) {
    /** @type {?} */
    LottieComponent.prototype.container;
    /**
     * @type {?}
     * @private
     */
    LottieComponent.prototype.ref;
    /**
     * @type {?}
     * @private
     */
    LottieComponent.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    LottieComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    LottieComponent.prototype.lottieEventsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG90dGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1sb3R0aWUvIiwic291cmNlcyI6WyJzcmMvY29yZS9jb21wb25lbnRzL2xvdHRpZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUV2QixNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixVQUFVLEVBQ1YsU0FBUyxFQUNULElBQUksRUFDSixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTdEO0lBZXFDLDJDQUFhO0lBSWhELHlCQUNtQixHQUFzQixFQUN0QixJQUFZLEVBQ1MsVUFBa0IsRUFDL0IsbUJBQXdDO1FBSm5FLFlBTUUsaUJBQU8sU0FDUjtRQU5rQixTQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixVQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1MsZ0JBQVUsR0FBVixVQUFVLENBQVE7UUFDL0IseUJBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQU41RCxlQUFTLEdBQTRCLG1CQUFBLElBQUksRUFBQyxDQUFDOztJQVNsRCxDQUFDOzs7O0lBRU0sa0NBQVE7OztJQUFmO1FBQ0UsaUJBQU0sYUFBYSxZQUNqQixJQUFJLENBQUMsR0FBRyxFQUNSLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsbUJBQW1CLEVBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUM1QixJQUFJLENBQ0wsQ0FBQztJQUNKLENBQUM7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxxTkFTVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQ2pDOzs7O2dCQXpCQyxpQkFBaUI7Z0JBQ2pCLE1BQU07NkNBZ0NILE1BQU0sU0FBQyxXQUFXO2dCQXpCZCxtQkFBbUIsdUJBMEJ2QixJQUFJOzs7NEJBUE4sU0FBUyxTQUFDLFdBQVc7O0lBc0J4QixzQkFBQztDQUFBLEFBdENELENBZXFDLGFBQWEsR0F1QmpEO1NBdkJZLGVBQWU7OztJQUMxQixvQ0FDa0Q7Ozs7O0lBR2hELDhCQUF1Qzs7Ozs7SUFDdkMsK0JBQTZCOzs7OztJQUM3QixxQ0FBd0Q7Ozs7O0lBQ3hELDhDQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uSW5pdCxcbiAgSW5qZWN0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgTmdab25lLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIFNlbGYsXG4gIFBMQVRGT1JNX0lEXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMb3R0aWVFdmVudHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG90dGllLWV2ZW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IEJhc2VEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2Jhc2UuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctbG90dGllJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICAjY29udGFpbmVyXG4gICAgICBbc3R5bGUud2lkdGgucHhdPVwid2lkdGhcIlxuICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJoZWlnaHRcIlxuICAgICAgc3R5bGU9XCJtYXJnaW46IDAgYXV0b1wiXG4gICAgICBbbmdTdHlsZV09XCJzdHlsZXNcIlxuICAgICAgW25nQ2xhc3NdPVwiY29udGFpbmVyQ2xhc3NcIlxuICAgID48L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0xvdHRpZUV2ZW50c1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIExvdHRpZUNvbXBvbmVudCBleHRlbmRzIEJhc2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInKVxuICBwdWJsaWMgY29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiA9IG51bGwhO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHpvbmU6IE5nWm9uZSxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICBAU2VsZigpIHByaXZhdGUgcmVhZG9ubHkgbG90dGllRXZlbnRzU2VydmljZTogTG90dGllRXZlbnRzU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLmxvYWRBbmltYXRpb24oXG4gICAgICB0aGlzLnJlZixcbiAgICAgIHRoaXMuem9uZSxcbiAgICAgIHRoaXMucGxhdGZvcm1JZCxcbiAgICAgIHRoaXMubG90dGllRXZlbnRzU2VydmljZSxcbiAgICAgIHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzXG4gICAgKTtcbiAgfVxufVxuIl19