import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistlistComponent } from './artistlist/artistlist.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
