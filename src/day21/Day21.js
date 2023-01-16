import Day from '../base/Day';
import {allCombinations} from "../utils/Uti";

class Day21 extends Day {
  itemWeaponsShop = new Map();
  itemAmorShop = new Map();
  itemRingsShop = new Map();
  shopCombinations;
  bossDmg;
  bossLife;
  bossAmor;
  lifePlayer = 100;

  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
    this.init();
  }

  init() {
    // Weapons
    this.itemWeaponsShop.set('Dagger', { cost: 8, damage: 4, armor: 0 });
    this.itemWeaponsShop.set('Shortsword', { cost: 10, damage: 5, armor: 0 });
    this.itemWeaponsShop.set('Warhammer', { cost: 25, damage: 6, armor: 0 });
    this.itemWeaponsShop.set('Longsword', { cost: 40, damage: 7, armor: 0 });
    this.itemWeaponsShop.set('Greataxe', { cost: 74, damage: 8, armor: 0 });
    // Armor
    this.itemAmorShop.set('Leather', { cost: 13, damage: 0, armor: 1 });
    this.itemAmorShop.set('Chainmail', { cost: 31, damage: 0, armor: 2 });
    this.itemAmorShop.set('Splintmail', { cost: 53, damage: 0, armor: 3 });
    this.itemAmorShop.set('Bandedmail', { cost: 75, damage: 0, armor: 4 });
    this.itemAmorShop.set('Platemail', { cost: 102, damage: 0, armor: 5 });
    // Rings
    this.itemRingsShop.set('Damage1', { cost: 25, damage: 1, armor: 0 });
    this.itemRingsShop.set('Damage2', { cost: 50, damage: 2, armor: 0 });
    this.itemRingsShop.set('Damage3', { cost: 100, damage: 3, armor: 0 });
    this.itemRingsShop.set('Defense1', { cost: 20, damage: 0, armor: 1 });
    this.itemRingsShop.set('Defense2', { cost: 40, damage: 0, armor: 2 });
    this.itemRingsShop.set('Defense3', { cost: 80, damage: 0, armor: 3 });

    this.shopCombinations = this.combinations();

    this.bossDmg = this.storeData[1];
    this.bossLife = this.storeData[1];
    this.bossAmor = this.storeData[1];
  }

  combinations() {
    const combArray = new Set();
    for (const [weapon] of this.itemWeaponsShop) {
      for (const [amor] of this.itemAmorShop) {
        for (const [rings] of this.itemRingsShop) {
          const allComb = allCombinations([weapon, amor, rings]);
          allComb.forEach((combinations) => {
            combArray.add(combinations);
          })
        }
      }
    }

    const regex = /Damage1|Damage2|Damage3|Defense1|Defense2|Defense3/gm;
    Array.from(combArray).filter((item) => {
      if (regex.test(item)) {
        for (const [rings] of this.itemRingsShop) {
          if (item.indexOf(rings) >= 0)
            continue;
          combArray.add(item + ',' + rings);
        }
      }
    });

    return combArray;
  }

  getPlayerData(itemSet) {
    const shopItems = itemSet.split(',');
  }

  battle() {
    this.shopCombinations.forEach((itemSet) => {
      const { life, amor, damage } = this.getPlayerData(itemSet);


    });
  }

  calcPartOne() {
    const battleResults = this.battle();
    return battleResults.length;
  }

  calcPartTwo() {
    let result = 0;
    this.storeData.forEach((item) => {
    });
    return result;
  }
}

export default Day21;

