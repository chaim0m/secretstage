import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ShowComponent } from './show/show.component';
import { ShowsListComponent } from './shows-list/shows-list.component';
=======
import { ArtistComponent } from './artist/artist.component';
import { ArtistlistComponent } from './artistlist/artistlist.component';
>>>>>>> 4770b682e569f7041d7ae1498b745fd7a09b4fd3


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ShowComponent,
    ShowsListComponent
=======
    ArtistComponent,
    ArtistlistComponent
>>>>>>> 4770b682e569f7041d7ae1498b745fd7a09b4fd3
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
