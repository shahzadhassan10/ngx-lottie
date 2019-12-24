/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Inject, ChangeDetectorRef, NgZone, ElementRef, ViewChild, Self, PLATFORM_ID } from '@angular/core';
import { LottieEventsService } from '../services/lottie-events.service';
import { BaseDirective } from '../directives/base.directive';
export class LottieComponent extends BaseDirective {
    /**
     * @param {?} ref
     * @param {?} zone
     * @param {?} platformId
     * @param {?} lottieEventsService
     */
    constructor(ref, zone, platformId, lottieEventsService) {
        super();
        this.ref = ref;
        this.zone = zone;
        this.platformId = platformId;
        this.lottieEventsService = lottieEventsService;
        this.container = (/** @type {?} */ (null));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.loadAnimation(this.ref, this.zone, this.platformId, this.lottieEventsService, this.container.nativeElement, this);
    }
}
LottieComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-lottie',
                template: `
    <div
      #container
      [style.width.px]="width"
      [style.height.px]="height"
      style="margin: 0 auto"
      [ngStyle]="styles"
      [ngClass]="containerClass"
    ></div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [LottieEventsService]
            }] }
];
/** @nocollapse */
LottieComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: LottieEventsService, decorators: [{ type: Self }] }
];
LottieComponent.propDecorators = {
    container: [{ type: ViewChild, args: ['container',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG90dGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1sb3R0aWUvIiwic291cmNlcyI6WyJzcmMvY29yZS9jb21wb25lbnRzL2xvdHRpZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBRXZCLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1QsSUFBSSxFQUNKLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFpQjdELE1BQU0sT0FBTyxlQUFnQixTQUFRLGFBQWE7Ozs7Ozs7SUFJaEQsWUFDbUIsR0FBc0IsRUFDdEIsSUFBWSxFQUNTLFVBQWtCLEVBQy9CLG1CQUF3QztRQUVqRSxLQUFLLEVBQUUsQ0FBQztRQUxTLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDUyxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQy9CLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFONUQsY0FBUyxHQUE0QixtQkFBQSxJQUFJLEVBQUMsQ0FBQztJQVNsRCxDQUFDOzs7O0lBRU0sUUFBUTtRQUNiLEtBQUssQ0FBQyxhQUFhLENBQ2pCLElBQUksQ0FBQyxHQUFHLEVBQ1IsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxtQkFBbUIsRUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQzVCLElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQzs7O1lBckNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDakM7Ozs7WUF6QkMsaUJBQWlCO1lBQ2pCLE1BQU07eUNBZ0NILE1BQU0sU0FBQyxXQUFXO1lBekJkLG1CQUFtQix1QkEwQnZCLElBQUk7Ozt3QkFQTixTQUFTLFNBQUMsV0FBVzs7OztJQUF0QixvQ0FDa0Q7Ozs7O0lBR2hELDhCQUF1Qzs7Ozs7SUFDdkMsK0JBQTZCOzs7OztJQUM3QixxQ0FBd0Q7Ozs7O0lBQ3hELDhDQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uSW5pdCxcbiAgSW5qZWN0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgTmdab25lLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIFNlbGYsXG4gIFBMQVRGT1JNX0lEXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMb3R0aWVFdmVudHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG90dGllLWV2ZW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IEJhc2VEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2Jhc2UuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctbG90dGllJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICAjY29udGFpbmVyXG4gICAgICBbc3R5bGUud2lkdGgucHhdPVwid2lkdGhcIlxuICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJoZWlnaHRcIlxuICAgICAgc3R5bGU9XCJtYXJnaW46IDAgYXV0b1wiXG4gICAgICBbbmdTdHlsZV09XCJzdHlsZXNcIlxuICAgICAgW25nQ2xhc3NdPVwiY29udGFpbmVyQ2xhc3NcIlxuICAgID48L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0xvdHRpZUV2ZW50c1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIExvdHRpZUNvbXBvbmVudCBleHRlbmRzIEJhc2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInKVxuICBwdWJsaWMgY29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiA9IG51bGwhO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHpvbmU6IE5nWm9uZSxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICBAU2VsZigpIHByaXZhdGUgcmVhZG9ubHkgbG90dGllRXZlbnRzU2VydmljZTogTG90dGllRXZlbnRzU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLmxvYWRBbmltYXRpb24oXG4gICAgICB0aGlzLnJlZixcbiAgICAgIHRoaXMuem9uZSxcbiAgICAgIHRoaXMucGxhdGZvcm1JZCxcbiAgICAgIHRoaXMubG90dGllRXZlbnRzU2VydmljZSxcbiAgICAgIHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzXG4gICAgKTtcbiAgfVxufVxuIl19