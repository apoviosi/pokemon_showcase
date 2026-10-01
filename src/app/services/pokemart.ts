import { Injectable, signal, computed } from '@angular/core';
import { MartItem } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemartService {
  items = signal<MartItem[]>([
    { id: 1, name: 'Poké Ball', price: 200, description: 'Catches wild Pokémon.', image: '🔴' },
    { id: 2, name: 'Great Ball', price: 600, description: 'Better catch rate than a Poké Ball.', image: '🔵' },
    { id: 3, name: 'Ultra Ball', price: 1200, description: 'Very high catch rate in the wild.', image: '🟡' },
    { id: 4, name: 'Potion', price: 300, description: 'Restores 20 HP of a Pokémon.', image: '🧪' },
    { id: 5, name: 'Super Potion', price: 700, description: 'Restores 50 HP of a Pokémon.', image: '🍶' },
    { id: 6, name: 'Hyper Potion', price: 1200, description: 'Restores 200 HP of a Pokémon.', image: '🧴' },
    { id: 7, name: 'Max Potion', price: 2500, description: 'Fully restores HP of a Pokémon.', image: '✨' },
    { id: 8, name: 'Revive', price: 1500, description: 'Revives a fainted Pokémon to half HP.', image: '💎' },
    { id: 9, name: 'Max Revive', price: 4000, description: 'Fully restores a fainted Pokémon.', image: '⭐' },
    { id: 10, name: 'Full Heal', price: 600, description: 'Heals all status conditions.', image: '🌿' },
  ]);

  private cartItems = signal<MartItem[]>([]);
  cart = this.cartItems.asReadonly();

  totalPrice = computed(() =>
    this.cartItems().reduce((total, item) => total + item.price, 0)
  );

  addToCart(item: MartItem) {
    this.cartItems.update((current) => [...current, item]);
  }

  removeFromCart(index: number) {
    this.cartItems.update((current) => current.filter((_, i) => i !== index));
  }

  clearCart() {
    this.cartItems.set([]);
  }
}