import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from '../artist/artist.component';
import { ArtistlistComponent } from '../artistlist/artistlist.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'artistlist', component: ArtistlistComponent },
  { path: 'artist/:id', component: ArtistComponent},
  // { path: 'companies', component: CompaniesComponent },
  // { path: 'add-company', component: AddCompanyComponent},
  // { path: 'company/:id', component: CompanyDetailsComponent},
  // { path: 'companies', component: CompaniesComponent},
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class RoutingModule { }
