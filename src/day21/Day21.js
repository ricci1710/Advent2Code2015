import Day from '../base/Day';
import {permutations} from "itertools";

class Day21 extends Day {
  itemShop = new Map();
  itemNames;
  lifePlayer = 100;

  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
    this.init();
  }

  init(iterable, r) {
    // Weapons
    this.itemShop.set('Dagger', {cost: 8, damage: 4, armor: 0});
    this.itemShop.set('Shortsword', {cost: 10, damage: 5, armor: 0});
    this.itemShop.set('Warhammer', {cost: 25, damage: 6, armor: 0});
    this.itemShop.set('Longsword', {cost: 40, damage: 7, armor: 0});
    this.itemShop.set('Greataxe', {cost: 74, damage: 8, armor: 0});
    // Armor
    this.itemShop.set('Leather', {cost: 13, damage: 0, armor: 1});
    this.itemShop.set('Chainmail', {cost: 31, damage: 0, armor: 2});
    this.itemShop.set('Splintmail', {cost: 53, damage: 0, armor: 3});
    this.itemShop.set('Bandedmail', {cost: 75, damage: 0, armor: 4});
    this.itemShop.set('Platemail', {cost: 102, damage: 0, armor: 5});
    // Rings
    this.itemShop.set('Damage1', {cost: 25, damage: 1, armor: 0});
    this.itemShop.set('Damage2', {cost: 50, damage: 2, armor: 0});
    this.itemShop.set('Damage3', {cost: 100, damage: 3, armor: 0});
    this.itemShop.set('Defense1', {cost: 20, damage: 0, armor: 1});
    this.itemShop.set('Defense2', {cost: 40, damage: 0, armor: 2});
    this.itemShop.set('Defense3', {cost: 80, damage: 0, armor: 3});

    this.itemNames = Array.from(this.itemShop.keys());
    const c = Array.from(permutations(['Dagger', 'Leather', 'Chainmail'], 2));
    // dagger, dagger&leather, dagger&Chainmail..., dagger&leather&Damage1, dagger&Chainmail&Damage1
  }

  calcPartOne() {
    let result = 0;
    this.storeData.forEach((item) => {
    });
    return result;
  }

  calcPartTwo() {
    let result = 0;
    this.storeData.forEach((item) => {
    });
    return result;
  }
}

export default Day21;

