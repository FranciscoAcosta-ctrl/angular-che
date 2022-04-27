import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavElchedelbarrioComponent } from './nav-elchedelbarrio/nav-elchedelbarrio.component';
import { HomeElchedelbarrioComponent } from './home-elchedelbarrio/home-elchedelbarrio.component';
import { MenuElchedelbarrioComponent } from './menu-elchedelbarrio/menu-elchedelbarrio.component';
import { UbiElchedelbarrioComponent } from './ubi-elchedelbarrio/ubi-elchedelbarrio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavElchedelbarrioComponent,
    HomeElchedelbarrioComponent,
    MenuElchedelbarrioComponent,
    UbiElchedelbarrioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
