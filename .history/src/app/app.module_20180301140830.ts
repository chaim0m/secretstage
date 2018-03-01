import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { ShowComponent } from './show/show.component';
import { ShowsListComponent } from './shows-list/shows-list.component';

import { ArtistComponent } from './artist/artist.component';
import { ArtistlistComponent } from './artistlist/artistlist.component';



@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    ShowsListComponent,
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
