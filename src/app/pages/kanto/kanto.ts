import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card';

@Component({
  selector: 'app-kanto',
  standalone: true,
  imports: [PokemonCardComponent], // <-- Add it here
  templateUrl: './kanto.html',
  styleUrl: './kanto.css',
})
export class KantoComponent {
  pokemonService = inject(PokemonService);
}