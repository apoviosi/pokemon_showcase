import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card';

@Component({
  selector: 'app-johto',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './johto.html',
  styleUrl: './johto.css',
})
export class JohtoComponent {
  pokemonService = inject(PokemonService);
}