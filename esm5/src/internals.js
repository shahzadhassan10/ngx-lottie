/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @type {?} */
var getLottiePlayer = function () {
    return import(/* webpackChunkName: 'lottie' */ 'lottie-web/build/player/lottie.js');
};
var ɵ0 = getLottiePlayer;
/**
 * @param {?} options
 * @param {?} container
 * @return {?}
 */
function resolveOptions(options, container) {
    /** @type {?} */
    var defaulOptions = {
        container: container,
        renderer: 'svg',
        loop: true,
        autoplay: true
    };
    return Object.assign(defaulOptions, options);
}
/**
 * @param {?} zone
 * @param {?} options
 * @param {?} container
 * @return {?}
 */
export function loadAnimation(zone, options, container) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var player;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options = resolveOptions(options, container);
                    return [4 /*yield*/, getLottiePlayer()];
                case 1:
                    player = _a.sent();
                    return [2 /*return*/, zone.runOutsideAngular(function () { return player.loadAnimation((/** @type {?} */ (options))); })];
            }
        });
    });
}
/**
 * Some dispatched events are in the `snake_case` registry, for convenience,
 * we create this object that will map event name to the `camelCase` registry
 * @type {?}
 */
var eventsMap = {
    complete: 'complete',
    loopComplete: 'loopComplete',
    enterFrame: 'enterFrame',
    segmentStart: 'segmentStart',
    config_ready: 'configReady',
    data_ready: 'dataReady',
    data_failed: 'dataFailed',
    loaded_images: 'loadedImages',
    DOMLoaded: 'domLoaded',
    destroy: 'destroy'
};
/**
 * @param {?} name - Name of the event in the `snake_case` dispatched by Lottie
 * @return {?} - Resolved event name in the `camelCase`
 */
function mapEventToCamelCase(name) {
    return eventsMap[name];
}
/**
 * @param {?} instance
 * @param {?} name
 * @return {?}
 */
export function getEventEmitterFromDirectiveInstance(instance, name) {
    return (/** @type {?} */ (instance[mapEventToCamelCase(name)]));
}
/**
 * Events that can be dispatched by `Animationitem`
 * @see https://github.com/airbnb/lottie-web#events
 * @type {?}
 */
export var lottieEvents = [
    'complete',
    'loopComplete',
    'enterFrame',
    'segmentStart',
    'config_ready',
    'data_ready',
    'data_failed',
    'loaded_images',
    'DOMLoaded',
    'destroy'
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvdHRpZS8iLCJzb3VyY2VzIjpbInNyYy9pbnRlcm5hbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBWU0sZUFBZSxHQUFHO0lBQ3RCLE9BQU8sTUFBTSxDQUFDLGdDQUFnQyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFDdEYsQ0FBQzs7Ozs7OztBQUVELFNBQVMsY0FBYyxDQUFDLE9BQTZCLEVBQUUsU0FBc0I7O1FBQ3JFLGFBQWEsR0FBa0I7UUFDbkMsU0FBUyxXQUFBO1FBQ1QsUUFBUSxFQUFFLEtBQUs7UUFDZixJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9DLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQWdCLGFBQWEsQ0FDakMsSUFBWSxFQUNaLE9BQTZCLEVBQzdCLFNBQXNCOzs7Ozs7b0JBRXRCLE9BQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUM5QixxQkFBTSxlQUFlLEVBQUUsRUFBQTs7b0JBQWhDLE1BQU0sR0FBRyxTQUF1QjtvQkFDdEMsc0JBQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsYUFBYSxDQUFDLG1CQUFBLE9BQU8sRUFBQyxDQUFDLEVBQTlCLENBQThCLENBQUMsRUFBQzs7OztDQUNyRTs7Ozs7O0lBTUssU0FBUyxHQUF3RDtJQUNyRSxRQUFRLEVBQUUsVUFBVTtJQUNwQixZQUFZLEVBQUUsY0FBYztJQUM1QixVQUFVLEVBQUUsWUFBWTtJQUN4QixZQUFZLEVBQUUsY0FBYztJQUM1QixZQUFZLEVBQUUsYUFBYTtJQUMzQixVQUFVLEVBQUUsV0FBVztJQUN2QixXQUFXLEVBQUUsWUFBWTtJQUN6QixhQUFhLEVBQUUsY0FBYztJQUM3QixTQUFTLEVBQUUsV0FBVztJQUN0QixPQUFPLEVBQUUsU0FBUztDQUNuQjs7Ozs7QUFNRCxTQUFTLG1CQUFtQixDQUFDLElBQXFCO0lBQ2hELE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxvQ0FBb0MsQ0FDbEQsUUFBdUIsRUFDdkIsSUFBcUI7SUFFckIsT0FBTyxtQkFBQSxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBNkIsQ0FBQztBQUMxRSxDQUFDOzs7Ozs7QUFNRCxNQUFNLEtBQU8sWUFBWSxHQUFtQztJQUMxRCxVQUFVO0lBQ1YsY0FBYztJQUNkLFlBQVk7SUFDWixjQUFjO0lBQ2QsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxTQUFTO0NBQ1YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1pvbmUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBMb3R0aWVPcHRpb25zLFxuICBMb3R0aWUsXG4gIExvdHRpZUV2ZW50TmFtZSxcbiAgQW5pbWF0aW9uSXRlbSxcbiAgTWFwcGVkTG90dGllRXZlbnROYW1lLFxuICBMb3R0aWVFdmVudFxufSBmcm9tICcuL3N5bWJvbHMnO1xuaW1wb3J0IHsgQmFzZURpcmVjdGl2ZSB9IGZyb20gJy4vY29yZS9kaXJlY3RpdmVzL2Jhc2UuZGlyZWN0aXZlJztcblxuY29uc3QgZ2V0TG90dGllUGxheWVyID0gKCk6IFByb21pc2U8TG90dGllPiA9PiB7XG4gIHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2xvdHRpZScgKi8gJ2xvdHRpZS13ZWIvYnVpbGQvcGxheWVyL2xvdHRpZS5qcycpO1xufTtcblxuZnVuY3Rpb24gcmVzb2x2ZU9wdGlvbnMob3B0aW9uczogTG90dGllT3B0aW9ucyB8IG51bGwsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiBMb3R0aWVPcHRpb25zIHtcbiAgY29uc3QgZGVmYXVsT3B0aW9uczogTG90dGllT3B0aW9ucyA9IHtcbiAgICBjb250YWluZXIsXG4gICAgcmVuZGVyZXI6ICdzdmcnLFxuICAgIGxvb3A6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWVcbiAgfTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihkZWZhdWxPcHRpb25zLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRBbmltYXRpb24oXG4gIHpvbmU6IE5nWm9uZSxcbiAgb3B0aW9uczogTG90dGllT3B0aW9ucyB8IG51bGwsXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnRcbik6IFByb21pc2U8QW5pbWF0aW9uSXRlbT4ge1xuICBvcHRpb25zID0gcmVzb2x2ZU9wdGlvbnMob3B0aW9ucywgY29udGFpbmVyKTtcbiAgY29uc3QgcGxheWVyID0gYXdhaXQgZ2V0TG90dGllUGxheWVyKCk7XG4gIHJldHVybiB6b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHBsYXllci5sb2FkQW5pbWF0aW9uKG9wdGlvbnMhKSk7XG59XG5cbi8qKlxuICogU29tZSBkaXNwYXRjaGVkIGV2ZW50cyBhcmUgaW4gdGhlIGBzbmFrZV9jYXNlYCByZWdpc3RyeSwgZm9yIGNvbnZlbmllbmNlLFxuICogd2UgY3JlYXRlIHRoaXMgb2JqZWN0IHRoYXQgd2lsbCBtYXAgZXZlbnQgbmFtZSB0byB0aGUgYGNhbWVsQ2FzZWAgcmVnaXN0cnlcbiAqL1xuY29uc3QgZXZlbnRzTWFwOiB7IFtrZXkgaW4gTG90dGllRXZlbnROYW1lXTogTWFwcGVkTG90dGllRXZlbnROYW1lIH0gPSB7XG4gIGNvbXBsZXRlOiAnY29tcGxldGUnLFxuICBsb29wQ29tcGxldGU6ICdsb29wQ29tcGxldGUnLFxuICBlbnRlckZyYW1lOiAnZW50ZXJGcmFtZScsXG4gIHNlZ21lbnRTdGFydDogJ3NlZ21lbnRTdGFydCcsXG4gIGNvbmZpZ19yZWFkeTogJ2NvbmZpZ1JlYWR5JyxcbiAgZGF0YV9yZWFkeTogJ2RhdGFSZWFkeScsXG4gIGRhdGFfZmFpbGVkOiAnZGF0YUZhaWxlZCcsXG4gIGxvYWRlZF9pbWFnZXM6ICdsb2FkZWRJbWFnZXMnLFxuICBET01Mb2FkZWQ6ICdkb21Mb2FkZWQnLFxuICBkZXN0cm95OiAnZGVzdHJveSdcbn07XG5cbi8qKlxuICogQHBhcmFtIG5hbWUgLSBOYW1lIG9mIHRoZSBldmVudCBpbiB0aGUgYHNuYWtlX2Nhc2VgIGRpc3BhdGNoZWQgYnkgTG90dGllXG4gKiBAcmV0dXJucyAtIFJlc29sdmVkIGV2ZW50IG5hbWUgaW4gdGhlIGBjYW1lbENhc2VgXG4gKi9cbmZ1bmN0aW9uIG1hcEV2ZW50VG9DYW1lbENhc2UobmFtZTogTG90dGllRXZlbnROYW1lKTogTWFwcGVkTG90dGllRXZlbnROYW1lIHtcbiAgcmV0dXJuIGV2ZW50c01hcFtuYW1lXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50RW1pdHRlckZyb21EaXJlY3RpdmVJbnN0YW5jZShcbiAgaW5zdGFuY2U6IEJhc2VEaXJlY3RpdmUsXG4gIG5hbWU6IExvdHRpZUV2ZW50TmFtZVxuKSB7XG4gIHJldHVybiBpbnN0YW5jZVttYXBFdmVudFRvQ2FtZWxDYXNlKG5hbWUpXSBhcyBFdmVudEVtaXR0ZXI8TG90dGllRXZlbnQ+O1xufVxuXG4vKipcbiAqIEV2ZW50cyB0aGF0IGNhbiBiZSBkaXNwYXRjaGVkIGJ5IGBBbmltYXRpb25pdGVtYFxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYWlyYm5iL2xvdHRpZS13ZWIjZXZlbnRzXG4gKi9cbmV4cG9ydCBjb25zdCBsb3R0aWVFdmVudHM6IFJlYWRvbmx5QXJyYXk8TG90dGllRXZlbnROYW1lPiA9IFtcbiAgJ2NvbXBsZXRlJyxcbiAgJ2xvb3BDb21wbGV0ZScsXG4gICdlbnRlckZyYW1lJyxcbiAgJ3NlZ21lbnRTdGFydCcsXG4gICdjb25maWdfcmVhZHknLFxuICAnZGF0YV9yZWFkeScsXG4gICdkYXRhX2ZhaWxlZCcsXG4gICdsb2FkZWRfaW1hZ2VzJyxcbiAgJ0RPTUxvYWRlZCcsXG4gICdkZXN0cm95J1xuXTtcbiJdfQ==