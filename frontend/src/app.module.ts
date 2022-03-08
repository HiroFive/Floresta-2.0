import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { I18NextModule } from 'angular-i18next';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/shared/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, I18NextModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
