import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemartItemCard } from './pokemart-item-card';

describe('PokemartItemCard', () => {
  let component: PokemartItemCard;
  let fixture: ComponentFixture<PokemartItemCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemartItemCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemartItemCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
