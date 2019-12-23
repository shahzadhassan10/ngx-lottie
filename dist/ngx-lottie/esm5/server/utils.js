/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { readFile } from 'fs';
import { Observable } from 'rxjs';
/**
 * @param {?} path
 * @return {?}
 */
export function readFileWithAnimationData(path) {
    // `Promise` is not used here to avoid creation of microtasks
    return new Observable(function (observer) {
        readFile(path, { encoding: 'utf-8' }, function (error, data) {
            if (error) {
                observer.error(error);
            }
            else {
                observer.next(data);
            }
            observer.complete();
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbG90dGllL3NlcnZlci8iLCJzb3VyY2VzIjpbInV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBSWxDLE1BQU0sVUFBVSx5QkFBeUIsQ0FBQyxJQUFZO0lBQ3BELDZEQUE2RDtJQUM3RCxPQUFPLElBQUksVUFBVSxDQUFnQixVQUFDLFFBQVE7UUFDNUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRSxVQUFDLEtBQUssRUFBRSxJQUFJO1lBQ2hELElBQUksS0FBSyxFQUFFO2dCQUNULFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQjtZQUVELFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBbmltYXRpb25EYXRhIH0gZnJvbSAnLi9zeW1ib2xzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGaWxlV2l0aEFuaW1hdGlvbkRhdGEocGF0aDogc3RyaW5nKSB7XG4gIC8vIGBQcm9taXNlYCBpcyBub3QgdXNlZCBoZXJlIHRvIGF2b2lkIGNyZWF0aW9uIG9mIG1pY3JvdGFza3NcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPEFuaW1hdGlvbkRhdGE+KChvYnNlcnZlcikgPT4ge1xuICAgIHJlYWRGaWxlKHBhdGgsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSwgKGVycm9yLCBkYXRhKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChkYXRhKTtcbiAgICAgIH1cblxuICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iXX0=