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
    const sources = [];
    for (let i = 0, length = animations.length; i < length; i++) {
        /** @type {?} */
        const path = pathsToAnimations[i];
        /** @type {?} */
        const source = readFileWithAnimationData(path).pipe(tap((animationData) => {
            transferAnimationData(state, animations[i], animationData);
        }));
        sources.push(source);
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
    const key = makeStateKey(animation);
    state.set(key, JSON.parse(animationData));
}
/**
 * @param {?} options
 * @param {?} state
 * @return {?}
 */
export function appInitializerFactory(options, state) {
    /** @type {?} */
    const pathsToAnimations = resolveLottiePaths(options);
    /** @type {?} */
    const sources = readAndTransferAnimationData(state, options.preloadAnimations.animations, pathsToAnimations);
    return () => forkJoin(sources).toPromise();
}
/**
 * @param {?} __0
 * @return {?}
 */
export function resolveLottiePaths({ preloadAnimations }) {
    const { folder, animations } = preloadAnimations;
    /** @type {?} */
    const path = join(process.cwd(), folder);
    return animations.map((animation) => join(path, animation));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvdHRpZS9zZXJ2ZXIvIiwic291cmNlcyI6WyJpbnRlcm5hbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU1QixPQUFPLEVBQWMsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQXFCLCtCQUErQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR2hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7OztBQUVwRCxTQUFTLDRCQUE0QixDQUNuQyxLQUFvQixFQUNwQixVQUErQixFQUMvQixpQkFBb0M7O1VBRTlCLE9BQU8sR0FBeUIsRUFBRTtJQUV4QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztjQUNyRCxJQUFJLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDOztjQUUzQixNQUFNLEdBQUcseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNqRCxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUNwQixxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUNIO1FBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN0QjtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7Ozs7Ozs7QUFFRCxTQUFTLHFCQUFxQixDQUM1QixLQUFvQixFQUNwQixTQUE0QixFQUM1QixhQUE0QjtJQUU1QixTQUFTLEdBQUcsK0JBQStCLENBQUMsU0FBUyxDQUFDLENBQUM7O1VBQ2pELEdBQUcsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDO0lBQ25DLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUM1QyxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsT0FBNEIsRUFBRSxLQUFvQjs7VUFDaEYsaUJBQWlCLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDOztVQUMvQyxPQUFPLEdBQUcsNEJBQTRCLENBQzFDLEtBQUssRUFDTCxPQUFPLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUNwQyxpQkFBaUIsQ0FDbEI7SUFFRCxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUM3QyxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxFQUFFLGlCQUFpQixFQUF1QjtVQUNyRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxpQkFBaUI7O1VBQzFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQztJQUV4QyxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM5RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNmZXJTdGF0ZSwgbWFrZVN0YXRlS2V5IH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZm9ya0pvaW4gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQW5pbWF0aW9uRmlsZW5hbWUsIHRyYW5zZm9ybUFuaW1hdGlvbkZpbGVuYW1lVG9LZXkgfSBmcm9tICduZ3gtbG90dGllJztcblxuaW1wb3J0IHsgTG90dGllU2VydmVyT3B0aW9ucywgUGF0aFRvQW5pbWF0aW9uLCBBbmltYXRpb25EYXRhIH0gZnJvbSAnLi9zeW1ib2xzJztcbmltcG9ydCB7IHJlYWRGaWxlV2l0aEFuaW1hdGlvbkRhdGEgfSBmcm9tICcuL3V0aWxzJztcblxuZnVuY3Rpb24gcmVhZEFuZFRyYW5zZmVyQW5pbWF0aW9uRGF0YShcbiAgc3RhdGU6IFRyYW5zZmVyU3RhdGUsXG4gIGFuaW1hdGlvbnM6IEFuaW1hdGlvbkZpbGVuYW1lW10sXG4gIHBhdGhzVG9BbmltYXRpb25zOiBQYXRoVG9BbmltYXRpb25bXVxuKTogT2JzZXJ2YWJsZTxzdHJpbmc+W10ge1xuICBjb25zdCBzb3VyY2VzOiBPYnNlcnZhYmxlPHN0cmluZz5bXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBhbmltYXRpb25zLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcGF0aCA9IHBhdGhzVG9BbmltYXRpb25zW2ldO1xuXG4gICAgY29uc3Qgc291cmNlID0gcmVhZEZpbGVXaXRoQW5pbWF0aW9uRGF0YShwYXRoKS5waXBlKFxuICAgICAgdGFwKChhbmltYXRpb25EYXRhKSA9PiB7XG4gICAgICAgIHRyYW5zZmVyQW5pbWF0aW9uRGF0YShzdGF0ZSwgYW5pbWF0aW9uc1tpXSwgYW5pbWF0aW9uRGF0YSk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBzb3VyY2VzLnB1c2goc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiBzb3VyY2VzO1xufVxuXG5mdW5jdGlvbiB0cmFuc2ZlckFuaW1hdGlvbkRhdGEoXG4gIHN0YXRlOiBUcmFuc2ZlclN0YXRlLFxuICBhbmltYXRpb246IEFuaW1hdGlvbkZpbGVuYW1lLFxuICBhbmltYXRpb25EYXRhOiBBbmltYXRpb25EYXRhXG4pOiB2b2lkIHtcbiAgYW5pbWF0aW9uID0gdHJhbnNmb3JtQW5pbWF0aW9uRmlsZW5hbWVUb0tleShhbmltYXRpb24pO1xuICBjb25zdCBrZXkgPSBtYWtlU3RhdGVLZXkoYW5pbWF0aW9uKTtcbiAgc3RhdGUuc2V0KGtleSwgSlNPTi5wYXJzZShhbmltYXRpb25EYXRhKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBJbml0aWFsaXplckZhY3Rvcnkob3B0aW9uczogTG90dGllU2VydmVyT3B0aW9ucywgc3RhdGU6IFRyYW5zZmVyU3RhdGUpIHtcbiAgY29uc3QgcGF0aHNUb0FuaW1hdGlvbnMgPSByZXNvbHZlTG90dGllUGF0aHMob3B0aW9ucyk7XG4gIGNvbnN0IHNvdXJjZXMgPSByZWFkQW5kVHJhbnNmZXJBbmltYXRpb25EYXRhKFxuICAgIHN0YXRlLFxuICAgIG9wdGlvbnMucHJlbG9hZEFuaW1hdGlvbnMuYW5pbWF0aW9ucyxcbiAgICBwYXRoc1RvQW5pbWF0aW9uc1xuICApO1xuXG4gIHJldHVybiAoKSA9PiBmb3JrSm9pbihzb3VyY2VzKS50b1Byb21pc2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVMb3R0aWVQYXRocyh7IHByZWxvYWRBbmltYXRpb25zIH06IExvdHRpZVNlcnZlck9wdGlvbnMpOiBQYXRoVG9BbmltYXRpb25bXSB7XG4gIGNvbnN0IHsgZm9sZGVyLCBhbmltYXRpb25zIH0gPSBwcmVsb2FkQW5pbWF0aW9ucztcbiAgY29uc3QgcGF0aCA9IGpvaW4ocHJvY2Vzcy5jd2QoKSwgZm9sZGVyKTtcblxuICByZXR1cm4gYW5pbWF0aW9ucy5tYXAoKGFuaW1hdGlvbikgPT4gam9pbihwYXRoLCBhbmltYXRpb24pKTtcbn1cbiJdfQ==