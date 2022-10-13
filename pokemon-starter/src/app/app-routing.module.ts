import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckComponent } from './components/deck/deck.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: "deck", component: DeckComponent },
  // :id is a variable in the URL which can have different values
  { path: "details/:id", component: PokemonDetailsComponent },
  // without pathMatch: full, this would match anything starting with details/
  { path: "details", pathMatch: "full", redirectTo: "/" },
  { path: "profile", component: EditProfileComponent },
  { path: "", component: PokemonListComponent }, // the root path (homepage)
  { path: "**", component: NotFoundComponent } // ** wildcard catches all
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
