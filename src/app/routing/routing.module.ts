import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from '../artist/artist.component';
import { ArtistlistComponent } from '../artistlist/artistlist.component';
import { ShowsListComponent } from '../shows-list/shows-list.component';
import { ShowComponent } from '../show/show.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'artistlist', component: ArtistlistComponent },
  { path: 'artist/:id', component: ArtistComponent},
  { path: 'show/:id', component: ShowComponent },
  { path: 'showslist', component: ShowsListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
