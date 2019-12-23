/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { makeStateKey } from '@angular/platform-browser';
import { join } from 'path';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { transformAnimationFilenameToKey } from 'ngx-lottie';
import { readFileWithAnimationData } from './utils';
/**
 * @param {?} state
 * @param {?} animations
 * @param {?} pathsToAnimations
 * @return {?}
 */
function readAndTransferAnimationData(state, animations, pathsToAnimations) {
    /** @type {?} */
    var sources = [];
    var _loop_1 = function (i, length_1) {
        /** @type {?} */
        var path = pathsToAnimations[i];
        /** @type {?} */
        var source = readFileWithAnimationData(path).pipe(tap(function (animationData) {
            transferAnimationData(state, animations[i], animationData);
        }));
        sources.push(source);
    };
    for (var i = 0, length_1 = animations.length; i < length_1; i++) {
        _loop_1(i, length_1);
    }
    return sources;
}
/**
 * @param {?} state
 * @param {?} animation
 * @param {?} animationData
 * @return {?}
 */
function transferAnimationData(state, animation, animationData) {
    animation = transformAnimationFilenameToKey(animation);
    /** @type {?} */
    var key = makeStateKey(animation);
    state.set(key, JSON.parse(animationData));
}
/**
 * @param {?} options
 * @param {?} state
 * @return {?}
 */
export function appInitializerFactory(options, state) {
    /** @type {?} */
    var pathsToAnimations = resolveLottiePaths(options);
    /** @type {?} */
    var sources = readAndTransferAnimationData(state, options.preloadAnimations.animations, pathsToAnimations);
    return function () { return forkJoin(sources).toPromise(); };
}
/**
 * @param {?} __0
 * @return {?}
 */
export function resolveLottiePaths(_a) {
    var preloadAnimations = _a.preloadAnimations;
    var folder = preloadAnimations.folder, animations = preloadAnimations.animations;
    /** @type {?} */
    var path = join(process.cwd(), folder);
    return animations.map(function (animation) { return join(path, animation); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvdHRpZS9zZXJ2ZXIvIiwic291cmNlcyI6WyJpbnRlcm5hbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU1QixPQUFPLEVBQWMsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQXFCLCtCQUErQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR2hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7OztBQUVwRCxTQUFTLDRCQUE0QixDQUNuQyxLQUFvQixFQUNwQixVQUErQixFQUMvQixpQkFBb0M7O1FBRTlCLE9BQU8sR0FBeUIsRUFBRTs0QkFFL0IsQ0FBQyxFQUFNLFFBQU07O1lBQ2QsSUFBSSxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQzs7WUFFM0IsTUFBTSxHQUFHLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDakQsR0FBRyxDQUFDLFVBQUMsYUFBYTtZQUNoQixxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUNIO1FBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBVkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLFFBQU0sRUFBRSxDQUFDLEVBQUU7Z0JBQWxELENBQUMsRUFBTSxRQUFNO0tBVXJCO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQzs7Ozs7OztBQUVELFNBQVMscUJBQXFCLENBQzVCLEtBQW9CLEVBQ3BCLFNBQTRCLEVBQzVCLGFBQTRCO0lBRTVCLFNBQVMsR0FBRywrQkFBK0IsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7UUFDakQsR0FBRyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUM7SUFDbkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQzVDLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxPQUE0QixFQUFFLEtBQW9COztRQUNoRixpQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7O1FBQy9DLE9BQU8sR0FBRyw0QkFBNEIsQ0FDMUMsS0FBSyxFQUNMLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQ3BDLGlCQUFpQixDQUNsQjtJQUVELE9BQU8sY0FBTSxPQUFBLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBN0IsQ0FBNkIsQ0FBQztBQUM3QyxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxFQUEwQztRQUF4Qyx3Q0FBaUI7SUFDNUMsSUFBQSxpQ0FBTSxFQUFFLHlDQUFVOztRQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUM7SUFFeEMsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0FBQzlELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2ZlclN0YXRlLCBtYWtlU3RhdGVLZXkgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmb3JrSm9pbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBbmltYXRpb25GaWxlbmFtZSwgdHJhbnNmb3JtQW5pbWF0aW9uRmlsZW5hbWVUb0tleSB9IGZyb20gJ25neC1sb3R0aWUnO1xuXG5pbXBvcnQgeyBMb3R0aWVTZXJ2ZXJPcHRpb25zLCBQYXRoVG9BbmltYXRpb24sIEFuaW1hdGlvbkRhdGEgfSBmcm9tICcuL3N5bWJvbHMnO1xuaW1wb3J0IHsgcmVhZEZpbGVXaXRoQW5pbWF0aW9uRGF0YSB9IGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiByZWFkQW5kVHJhbnNmZXJBbmltYXRpb25EYXRhKFxuICBzdGF0ZTogVHJhbnNmZXJTdGF0ZSxcbiAgYW5pbWF0aW9uczogQW5pbWF0aW9uRmlsZW5hbWVbXSxcbiAgcGF0aHNUb0FuaW1hdGlvbnM6IFBhdGhUb0FuaW1hdGlvbltdXG4pOiBPYnNlcnZhYmxlPHN0cmluZz5bXSB7XG4gIGNvbnN0IHNvdXJjZXM6IE9ic2VydmFibGU8c3RyaW5nPltdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IGFuaW1hdGlvbnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwYXRoID0gcGF0aHNUb0FuaW1hdGlvbnNbaV07XG5cbiAgICBjb25zdCBzb3VyY2UgPSByZWFkRmlsZVdpdGhBbmltYXRpb25EYXRhKHBhdGgpLnBpcGUoXG4gICAgICB0YXAoKGFuaW1hdGlvbkRhdGEpID0+IHtcbiAgICAgICAgdHJhbnNmZXJBbmltYXRpb25EYXRhKHN0YXRlLCBhbmltYXRpb25zW2ldLCBhbmltYXRpb25EYXRhKTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHNvdXJjZXMucHVzaChzb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuIHNvdXJjZXM7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZmVyQW5pbWF0aW9uRGF0YShcbiAgc3RhdGU6IFRyYW5zZmVyU3RhdGUsXG4gIGFuaW1hdGlvbjogQW5pbWF0aW9uRmlsZW5hbWUsXG4gIGFuaW1hdGlvbkRhdGE6IEFuaW1hdGlvbkRhdGFcbik6IHZvaWQge1xuICBhbmltYXRpb24gPSB0cmFuc2Zvcm1BbmltYXRpb25GaWxlbmFtZVRvS2V5KGFuaW1hdGlvbik7XG4gIGNvbnN0IGtleSA9IG1ha2VTdGF0ZUtleShhbmltYXRpb24pO1xuICBzdGF0ZS5zZXQoa2V5LCBKU09OLnBhcnNlKGFuaW1hdGlvbkRhdGEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcEluaXRpYWxpemVyRmFjdG9yeShvcHRpb25zOiBMb3R0aWVTZXJ2ZXJPcHRpb25zLCBzdGF0ZTogVHJhbnNmZXJTdGF0ZSkge1xuICBjb25zdCBwYXRoc1RvQW5pbWF0aW9ucyA9IHJlc29sdmVMb3R0aWVQYXRocyhvcHRpb25zKTtcbiAgY29uc3Qgc291cmNlcyA9IHJlYWRBbmRUcmFuc2ZlckFuaW1hdGlvbkRhdGEoXG4gICAgc3RhdGUsXG4gICAgb3B0aW9ucy5wcmVsb2FkQW5pbWF0aW9ucy5hbmltYXRpb25zLFxuICAgIHBhdGhzVG9BbmltYXRpb25zXG4gICk7XG5cbiAgcmV0dXJuICgpID0+IGZvcmtKb2luKHNvdXJjZXMpLnRvUHJvbWlzZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUxvdHRpZVBhdGhzKHsgcHJlbG9hZEFuaW1hdGlvbnMgfTogTG90dGllU2VydmVyT3B0aW9ucyk6IFBhdGhUb0FuaW1hdGlvbltdIHtcbiAgY29uc3QgeyBmb2xkZXIsIGFuaW1hdGlvbnMgfSA9IHByZWxvYWRBbmltYXRpb25zO1xuICBjb25zdCBwYXRoID0gam9pbihwcm9jZXNzLmN3ZCgpLCBmb2xkZXIpO1xuXG4gIHJldHVybiBhbmltYXRpb25zLm1hcCgoYW5pbWF0aW9uKSA9PiBqb2luKHBhdGgsIGFuaW1hdGlvbikpO1xufVxuIl19