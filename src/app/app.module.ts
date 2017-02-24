import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

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
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}