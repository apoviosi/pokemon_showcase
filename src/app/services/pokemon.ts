import { Injectable, signal } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  kantoList = signal<Pokemon[]>([
    { id: 1, name: 'Charizard', type: 'Fire / Flying', heldItem: 'Charizardite X', description: 'Spits fire that is hot enough to melt boulders.', image: '🔥' },
    { id: 2, name: 'Blastoise', type: 'Water', heldItem: 'Mystic Water', description: 'The rocket cannons on its shell fire jets of water.', image: '💧' },
    { id: 3, name: 'Venusaur', type: 'Grass / Poison', heldItem: 'Miracle Seed', description: 'The plant blooms when it absorbs solar energy.', image: '🍃' },
    { id: 4, name: 'Gengar', type: 'Ghost / Poison', heldItem: 'Spell Tag', description: 'Hides in shadows. It is said that if Gengar is hiding, the room cools by 10°F.', image: '👻' },
    { id: 5, name: 'Dragonite', type: 'Dragon / Flying', heldItem: 'Dragon Scale', description: 'It can fly in spite of its big build. It circles the globe in 16 hours.', image: '🐉' },
    { id: 6, name: 'Pikachu', type: 'Electric', heldItem: 'Light Ball', description: 'When several of these Pokémon gather, their electricity can cause lightning storms.', image: '⚡' }
  ]);

  johtoList = signal<Pokemon[]>([
    { id: 7, name: 'Typhlosion', type: 'Fire', heldItem: 'Charcoal', description: 'Has a secret devastating move. It creates heat shimmers that blind opponents.', image: '🌋' },
    { id: 8, name: 'Feraligatr', type: 'Water', heldItem: 'Sea Incense', description: 'When it bites with its massive jaws, it violently shakes its head to tear foes.', image: '🐊' },
    { id: 9, name: 'Meganium', type: 'Grass', heldItem: 'Rose Incense', description: 'The fragrance of a Meganium flower calms aggressive emotions.', image: '🌸' },
    { id: 10, name: 'Tyranitar', type: 'Rock / Dark', heldItem: 'Hard Stone', description: 'Its body cannot be harmed by any attack, so it is very eager to challenge enemies.', image: '🦖' },
    { id: 11, name: 'Scizor', type: 'Bug / Steel', heldItem: 'Metal Coat', description: 'It swings its eye-patterned pincers up to scare opponents.', image: '✂️' },
    { id: 12, name: 'Ampharos', type: 'Electric', heldItem: 'Magnet', description: 'The bright light on its tail can be seen far out at sea.', image: '💡' }
  ]);

  hoennList = signal<Pokemon[]>([
    { id: 13, name: 'Blaziken', type: 'Fire / Fighting', heldItem: 'Focus Sash', description: 'Can clear a 30-story building in a leap with fiery kicks.', image: '🥊' },
    { id: 14, name: 'Swampert', type: 'Water / Ground', heldItem: 'Soft Sand', description: 'Its arms are hard as rock. One swing can batter down a heavy boulder.', image: '🌊' },
    { id: 15, name: 'Sceptile', type: 'Grass', heldItem: 'Scope Lens', description: 'Leaves growing on its arms can slice down thick trees.', image: '🦎' },
    { id: 16, name: 'Metagross', type: 'Steel / Psychic', heldItem: 'Choice Band', description: 'Has four brains that are joined to form a supercomputer network.', image: '🧠' },
    { id: 17, name: 'Salamence', type: 'Dragon / Flying', heldItem: 'Life Orb', description: 'Long dreamed of having wings. Flying brings it ultimate happiness.', image: '🦇' },
    { id: 18, name: 'Gardevoir', type: 'Psychic / Fairy', heldItem: 'Twisted Spoon', description: 'It will unleash a black hole to protect its trusted Trainer.', image: '✨' }
  ]);

  kanto = this.kantoList.asReadonly();
  johto = this.johtoList.asReadonly();
  hoenn = this.hoennList.asReadonly();
}