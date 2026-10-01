import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { KantoComponent } from './pages/kanto/kanto';
import { JohtoComponent } from './pages/johto/johto';
import { HoennComponent } from './pages/hoenn/hoenn';
import { PokemartComponent } from './pages/pokemart/pokemart';
import { CartComponent } from './pages/cart/cart';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'kanto', component: KantoComponent },
  { path: 'johto', component: JohtoComponent },
  { path: 'hoenn', component: HoennComponent },
  { path: 'pokemart', component: PokemartComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'home' }
];