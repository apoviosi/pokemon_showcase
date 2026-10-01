import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card';

@Component({
  selector: 'app-hoenn',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './hoenn.html',
  styleUrl: './hoenn.css',
})
export class HoennComponent {
  pokemonService = inject(PokemonService);
}