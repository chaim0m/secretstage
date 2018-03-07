import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from '../artist/artist.component';
import { ArtistlistComponent } from '../artistlist/artistlist.component';
import { ShowsListComponent } from '../shows-list/shows-list.component';
import { ShowComponent } from '../show/show.component';
import { ShowpageComponent } from '../showpage/showpage.component';
import { HomeComponent } from '../home/home.component';
import { AddArtistComponent } from '../add-artist/add-artist.component';
import { ArtistprofileComponent } from '../artistprofile/artistprofile.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'artistlist', component: ArtistlistComponent },

  { path: 'show/:id', component: ShowpageComponent },
  { path: 'showslist', component: ShowsListComponent},
  { path: 'artist/:id', component: ArtistprofileComponent},
  { path: 'artistlist/artistprofile/:id', component: ArtistprofileComponent},
  { path: 'addartist', component: AddArtistComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
