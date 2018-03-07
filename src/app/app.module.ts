import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArtistsService } from './artists.service';
import { ShowsService } from './shows.service';

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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ArtistprofileComponent } from './artistprofile/artistprofile.component';
import { ShowpageComponent } from './showpage/showpage.component';
import { ShowPageDetailsComponent } from './show-page-details/show-page-details.component';
import { ShowImgComponent } from './show-img/show-img.component';

import { HttpModule } from '@angular/http';
import { EmbedVideo } from 'ngx-embed-video';


@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    ShowsListComponent,
    ArtistComponent,
    ArtistlistComponent,
    HomeComponent,
    AddArtistComponent,
    ArtistprofileComponent,
    ShowpageComponent,
    ShowPageDetailsComponent,
    ShowImgComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
   ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpModule,
    EmbedVideo.forRoot()
  ],
  providers: [ArtistsService, ShowsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
