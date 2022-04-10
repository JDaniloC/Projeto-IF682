import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { HomeModule } from './home/home.module';
import { ChatsModule } from './chats/chats.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
		CoreModule,
    HomeModule,
    ChatsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }