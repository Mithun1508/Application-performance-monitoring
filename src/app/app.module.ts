import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PerformanceComponent } from './performance.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, PerformanceComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(private ngZone: NgZone) {
    const stable$ = this.ngZone.onStable;
    const cdZoneSpec = Zone.current.get('ChangeDetectionTrackingZone');
    cdZoneSpec.startTracking(stable$);
  }
}
