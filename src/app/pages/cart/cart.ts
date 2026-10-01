import { Component, inject } from '@angular/core';
import { PokemartService } from '../../services/pokemart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartComponent {
  martService = inject(PokemartService);
}