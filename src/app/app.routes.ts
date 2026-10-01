import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Kanto } from './pages/kanto/kanto';
import { Johto } from './pages/johto/johto';
import { Hoenn } from './pages/hoenn/hoenn';
import { Pokemart } from './pages/pokemart/pokemart';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'kanto', component: Kanto },
  { path: 'johto', component: Johto },
  { path: 'hoenn', component: Hoenn },
  { path: 'pokemart', component: Pokemart },
  { path: 'cart', component: Cart },
  { path: '**', redirectTo: 'home' }
];