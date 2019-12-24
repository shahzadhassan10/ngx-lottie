import { OnInit, ChangeDetectorRef, NgZone, ElementRef } from '@angular/core';
import { LottieEventsService } from '../services/lottie-events.service';
import { BaseDirective } from './base.directive';
export declare class LottieDirective extends BaseDirective implements OnInit {
    private readonly ref;
    private readonly zone;
    private readonly platformId;
    private readonly lottieEventsService;
    private readonly host;
    constructor(ref: ChangeDetectorRef, zone: NgZone, platformId: string, lottieEventsService: LottieEventsService, host: ElementRef<HTMLElement>);
    ngOnInit(): void;
}
