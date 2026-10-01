import { Component, input, output } from '@angular/core';
import { MartItem } from '../../models/pokemon';

@Component({
  selector: 'app-mart-item-card',
  standalone: true,
  templateUrl: './pokemart-item-card.html',
  styleUrl: './pokemart-item-card.css',
})
export class PokemartItemCardComponent {
  item = input.required<MartItem>();
  addToCart = output<MartItem>();
}