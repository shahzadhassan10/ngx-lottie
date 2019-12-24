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
    return new Observable((observer) => {
        readFile(path, { encoding: 'utf-8' }, (error, data) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbG90dGllL3NlcnZlci8iLCJzb3VyY2VzIjpbInV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBSWxDLE1BQU0sVUFBVSx5QkFBeUIsQ0FBQyxJQUFZO0lBQ3BELDZEQUE2RDtJQUM3RCxPQUFPLElBQUksVUFBVSxDQUFnQixDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ2hELFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDcEQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JCO1lBRUQsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhZEZpbGUgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFuaW1hdGlvbkRhdGEgfSBmcm9tICcuL3N5bWJvbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEZpbGVXaXRoQW5pbWF0aW9uRGF0YShwYXRoOiBzdHJpbmcpIHtcbiAgLy8gYFByb21pc2VgIGlzIG5vdCB1c2VkIGhlcmUgdG8gYXZvaWQgY3JlYXRpb24gb2YgbWljcm90YXNrc1xuICByZXR1cm4gbmV3IE9ic2VydmFibGU8QW5pbWF0aW9uRGF0YT4oKG9ic2VydmVyKSA9PiB7XG4gICAgcmVhZEZpbGUocGF0aCwgeyBlbmNvZGluZzogJ3V0Zi04JyB9LCAoZXJyb3IsIGRhdGEpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGEpO1xuICAgICAgfVxuXG4gICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9KTtcbn1cbiJdfQ==