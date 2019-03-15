import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { LottieServerModule } from 'ngx-lottie/server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    LottieServerModule.forRoot({
      preloadAnimations: {
        folder: 'dist/assets',
        animations: ['data.json']
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
