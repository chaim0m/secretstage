import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArtistsService } from './artists.service';
import { ShowComponent } from './show/show.component';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistlistComponent } from './artistlist/artistlist.component';
import { RouterModule, Routes } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import { AddArtistComponent } from './add-artist/add-artist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ArtistprofileComponent } from './artistprofile/artistprofile.component';
import { ShowpageComponent } from './showpage/showpage.component';




@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    ShowsListComponent,
    ArtistComponent,
    ArtistlistComponent,
    HomeComponent,
    AddArtistComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ArtistprofileComponent,
    ShowpageComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
    
  ],
  providers: [ArtistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
