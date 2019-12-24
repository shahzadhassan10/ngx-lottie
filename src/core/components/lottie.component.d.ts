import { OnInit, ChangeDetectorRef, NgZone, ElementRef } from '@angular/core';
import { LottieEventsService } from '../services/lottie-events.service';
import { BaseDirective } from '../directives/base.directive';
export declare class LottieComponent extends BaseDirective implements OnInit {
    private readonly ref;
    private readonly zone;
    private readonly platformId;
    private readonly lottieEventsService;
    container: ElementRef<HTMLElement>;
    constructor(ref: ChangeDetectorRef, zone: NgZone, platformId: string, lottieEventsService: LottieEventsService);
    ngOnInit(): void;
}
