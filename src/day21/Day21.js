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
    this.itemWeaponsShop.set('Dagger', {cost: 8, damage: 4, armor: 0});
    this.itemWeaponsShop.set('Shortsword', {cost: 10, damage: 5, armor: 0});
    this.itemWeaponsShop.set('Warhammer', {cost: 25, damage: 6, armor: 0});
    this.itemWeaponsShop.set('Longsword', {cost: 40, damage: 7, armor: 0});
    this.itemWeaponsShop.set('Greataxe', {cost: 74, damage: 8, armor: 0});
    // Armor
    this.itemAmorShop.set('Leather', {cost: 13, damage: 0, armor: 1});
    this.itemAmorShop.set('Chainmail', {cost: 31, damage: 0, armor: 2});
    this.itemAmorShop.set('Splintmail', {cost: 53, damage: 0, armor: 3});
    this.itemAmorShop.set('Bandedmail', {cost: 75, damage: 0, armor: 4});
    this.itemAmorShop.set('Platemail', {cost: 102, damage: 0, armor: 5});
    // Rings
    this.itemRingsShop.set('Damage1', {cost: 25, damage: 1, armor: 0});
    this.itemRingsShop.set('Damage2', {cost: 50, damage: 2, armor: 0});
    this.itemRingsShop.set('Damage3', {cost: 100, damage: 3, armor: 0});
    this.itemRingsShop.set('Defense1', {cost: 20, damage: 0, armor: 1});
    this.itemRingsShop.set('Defense2', {cost: 40, damage: 0, armor: 2});
    this.itemRingsShop.set('Defense3', {cost: 80, damage: 0, armor: 3});

    this.shopCombinations = this.combinations();

    this.bossLife = parseInt(this.storeData[0].split(':')[1], 10);
    this.bossDmg = parseInt(this.storeData[1].split(':')[1], 10);
    this.bossAmor = parseInt(this.storeData[2].split(':')[1], 10);
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

    const regex2 = /Damage1|Damage2|Damage3|Defense1|Defense2|Defense3/gm;
    Array.from(combArray).filter((item) => {
      if (regex2.test(item.toString())) {
        for (const [rings] of this.itemRingsShop) {
          if (item.indexOf(rings) >= 0)
            continue;
          combArray.add(item + ',' + rings);
        }
      }
    });

    const regex1 = /Dagger|Shortsword|Warhammer|Longsword|Greataxe/gm;
    return Array.from(combArray).filter((item) => {
      return regex1.test(item.toString());
    });
  }

  getPlayerData(itemSet, player) {
    const shopItems = itemSet.split(',');

    let ring1 = 0;
    let ring2 = 0;

    const weaponItem = this.itemWeaponsShop.get(shopItems[0]);
    let cost = weaponItem.cost;
    let armor = weaponItem.armor;
    let damage = weaponItem.damage;

    if (shopItems.length > 1) {
      const armorItem = this.itemAmorShop.get(shopItems[1]);
      if (armorItem) {
        cost += armorItem.cost;
        armor += armorItem.armor;
        damage += armorItem.damage;
      }
    }
    if (shopItems.length > 2) {
      const ringItem = this.itemRingsShop.get(shopItems[2]);
      if (ringItem) {
        cost += ringItem.cost;
        armor += ringItem.armor;
        damage += ringItem.damage;
      }
    }
    if (shopItems.length > 3) {
      const ringItem = this.itemRingsShop.get(shopItems[3]);
      if (ringItem) {
        cost += ringItem.cost;
        armor += ringItem.armor;
        damage += ringItem.damage;
      }
    }

    // For demo data.
    if (player.damage) {
      const {damage: playerDamage, armor: playerArmor} = player;
      damage = playerDamage;
      armor = playerArmor;
      cost = 2;
    }

    return {damage, armor, cost, itemSet};
  }

  battle(player) {
    let wins = [];
    let minCost = Number.MAX_VALUE;
    let winItemSet = '';

    this.shopCombinations.forEach((itemSet) => {
      let bossRounds = 0;
      let playerRounds = 0;
      let playerLife = player.life;
      let bossLife = this.bossLife;

      const {damage: playerDamage, armor: playerArmor, cost} = this.getPlayerData(itemSet, player);
      do {
        if (playerRounds === bossRounds) {
          // Spielzug Player
          bossLife -= Math.max(1, playerDamage - this.bossAmor);
          playerRounds += 1;
        } else {
          // Spielzug Boss
          playerLife -= Math.max(1, this.bossDmg - playerArmor);
          bossRounds += 1;
        }
      } while (playerLife > 0 && bossLife > 0);

      if (playerLife > bossLife) {
        const lastMinCost = minCost;
        minCost = Math.min(minCost, cost);
        if (minCost < lastMinCost)
          winItemSet = itemSet;
      }
    });

    //const minCost = wins.reduce((acc, value) => Math.min(acc, value.cost), Number.MAX_VALUE);
    return {minCost, winItemSet};
  }

  calcPartOne(player) {
    const {minCost, winItemSet} = this.battle(player);
    console.log(winItemSet);
    return minCost;
  }

  calcPartTwo() {
    let result = 0;
    this.storeData.forEach((item) => {
    });
    return result;
  }
}

export default Day21;

