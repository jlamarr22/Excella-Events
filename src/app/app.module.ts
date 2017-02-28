import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { UtilsModule } from './components/calendar/utils/module';
import { CalendarComponent } from './components/calendar/calendar.component';

// Must export the config
export const firebaseConfig = {
	apiKey: "AIzaSyADHrLkUBPIKxMfQ1k48TKfNBwKheuyhH4",
	authDomain: "excella-events.firebaseapp.com",
	databaseURL: "https://excella-events.firebaseio.com",
	storageBucket: "excella-events.appspot.com",
	messagingSenderId: "1008739225266"
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    UtilsModule
  ],
  declarations: [ AppComponent, CalendarComponent ],
  bootstrap: [ AppComponent, CalendarComponent ]
})
export class AppModule {}
