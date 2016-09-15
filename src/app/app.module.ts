import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { MdToolbarModule } from '@angular2-material/toolbar';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardItemComponent } from './components/dashboard-item/dashboard-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    MdCoreModule.forRoot(),
    MdButtonModule.forRoot(),
    MdIconModule.forRoot(),
    MdToolbarModule.forRoot(),

    routes
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
