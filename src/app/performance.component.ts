import { Component, Input } from '@angular/core';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'performance',
  template: `
  <div *ngFor="let t of tasks$ | async">
  -----------------------------------<br/>
    task source :{{t.task.source}}<br/>
    task type: {{t.task.type}}<br/>
    task performance: {{t.performance}}<br/>
  -----------------------------------<br/>
  </div>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class PerformanceComponent  {
  tasks$;
  constructor() {
    const cdZoneSpec = Zone.current.get('ChangeDetectionTrackingZone');
    this.tasks$ = cdZoneSpec.performance$.pipe(scan((acc: any, t: any) => {
      return acc.concat([t]);
    }, []));
  }

}
