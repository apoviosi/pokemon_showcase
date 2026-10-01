import { Component, inject } from '@angular/core';
import { PokemartService } from '../../services/pokemart';
import { PokemartItemCardComponent } from '../../components/pokemart-item-card/pokemart-item-card';

@Component({
  selector: 'app-pokemart',
  standalone: true,
  imports: [PokemartItemCardComponent],
  templateUrl: './pokemart.html',
  styleUrl: './pokemart.css',
})
export class PokemartComponent {
  martService = inject(PokemartService);
}