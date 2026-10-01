import { Injectable, signal } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  kantoList = signal<Pokemon[]>([
    {
      id: 6,
      name: 'Charizard',
      type: 'Fire / Flying',
      heldItem: 'Charizardite X',
      description: 'Spits fire that is hot enough to melt boulders.',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    },
    {
      id: 9,
      name: 'Blastoise',
      type: 'Water',
      heldItem: 'Mystic Water',
      description: 'The rocket cannons on its shell fire jets of water.',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    },
    {
      id: 3,
      name: 'Venusaur',
      type: 'Grass / Poison',
      heldItem: 'Miracle Seed',
      description: 'The plant blooms when it absorbs solar energy.',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    },
    {
      id: 94,
      name: 'Gengar',
      type: 'Ghost / Poison',
      heldItem: 'Spell Tag',
      description: 'Hides in shadows. It is said that if Gengar is hiding, the room cools by 10°F.',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
    },
    {
      id: 149,
      name: 'Dragonite',
      type: 'Dragon / Flying',
      heldItem: 'Dragon Scale',
      description: 'It can fly in spite of its big build. It circles the globe in 16 hours.',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
    },
    {
      id: 25,
      name: 'Pikachu',
      type: 'Electric',
      heldItem: 'Light Ball',
      description: 'When several of these Pokémon gather, their electricity can cause lightning storms.',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
  ]);

  johtoList = signal<Pokemon[]>([
    {
      id: 157,
      name: 'Typhlosion',
      type: 'Fire',
      heldItem: 'Charcoal',
      description: 'Has a secret devastating move. It creates heat shimmers that blind opponents.',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png',
    },
    {
      id: 160,
      name: 'Feraligatr',
      type: 'Water',
      heldItem: 'Sea Incense',
      description: 'When it bites with its massive jaws, it violently shakes its head to tear foes.',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png',
    },
    {
      id: 154,
      name: 'Meganium',
      type: 'Grass',
      heldItem: 'Rose Incense',
      description: 'The fragrance of a Meganium flower calms aggressive emotions.',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png',
    },
    {
      id: 248,
      name: 'Tyranitar',
      type: 'Rock / Dark',
      heldItem: 'Hard Stone',
      description: 'Its body cannot be harmed by any attack, so it is very eager to challenge enemies.',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png',
    },
    {
      id: 212,
      name: 'Scizor',
      type: 'Bug / Steel',
      heldItem: 'Metal Coat',
      description: 'It swings its eye-patterned pincers up to scare opponents.',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png',
    },
    {
      id: 181,
      name: 'Ampharos',
      type: 'Electric',
      heldItem: 'Magnet',
      description: 'The bright light on its tail can be seen far out at sea.',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png',
    },
  ]);

  hoennList = signal<Pokemon[]>([
    {
      id: 257,
      name: 'Blaziken',
      type: 'Fire / Fighting',
      heldItem: 'Focus Sash',
      description: 'Can clear a 30-story building in a leap with fiery kicks.',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png',
    },
    {
      id: 260,
      name: 'Swampert',
      type: 'Water / Ground',
      heldItem: 'Soft Sand',
      description: 'Its arms are hard as rock. One swing can batter down a heavy boulder.',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png',
    },
    {
      id: 254,
      name: 'Sceptile',
      type: 'Grass',
      heldItem: 'Scope Lens',
      description: 'Leaves growing on its arms can slice down thick trees.',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png',
    },
    {
      id: 376,
      name: 'Metagross',
      type: 'Steel / Psychic',
      heldItem: 'Choice Band',
      description: 'Has four brains that are joined to form a supercomputer network.',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png',
    },
    {
      id: 373,
      name: 'Salamence',
      type: 'Dragon / Flying',
      heldItem: 'Life Orb',
      description: 'Long dreamed of having wings. Flying brings it ultimate happiness.',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png',
    },
    {
      id: 282,
      name: 'Gardevoir',
      type: 'Psychic / Fairy',
      heldItem: 'Twisted Spoon',
      description: 'It will unleash a black hole to protect its trusted Trainer.',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png',
    },
  ]);

  kanto = this.kantoList.asReadonly();
  johto = this.johtoList.asReadonly();
  hoenn = this.hoennList.asReadonly();
}