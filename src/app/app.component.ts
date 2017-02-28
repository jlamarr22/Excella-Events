import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { CalendarComponent } from './components/calendar/calendar.component';

@Component({
  selector: 'app-root',
  template: `<mwl-demo-component></mwl-demo-component>`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  test: FirebaseObjectObservable<any>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
    this.test = af.database.object('/test');
    var something = '1';
  }
}
