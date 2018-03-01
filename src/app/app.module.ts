import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { ShowsListComponent } from './shows-list/shows-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    ShowsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
