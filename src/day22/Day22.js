import Day from '../base/Day';

class Day22 extends Day {
  player = {hitPoints: 0, mana: 0};
  boss = {hitPoints: 0, damage: 0};
  spells = [];
  wizardBook = new Map();


  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);

    this.wizardBook.set('Magic Missile', {mana: 53, damage: 4});
    this.wizardBook.set('Drain', {mana: 73, damage: 2, heal: 2});
    this.wizardBook.set('Shield', {mana: 113, turns: 6, armor: 7});
    this.wizardBook.set('Poison', {mana: 173, turns: 6, damage: 7});
    this.wizardBook.set('Recharge', {mana: 229, turns: 5, addMana: 101});

    this.spells = Array.from(this.wizardBook.keys());
    this.boss.hitPoints = parseInt(this.storeData[0].split(':')[1].trim(), 10);
    this.boss.damage = parseInt(this.storeData[1].split(':')[1].trim(), 10);
  }

  playerTurn(playerHitPoints, bossHitPoints, manaPool, wizardPath) {
    const battleValues = this.wizardBook.get(this.spells[0]);
    if (manaPool - battleValues.mana > 0)
      manaPool -= battleValues.mana;
    
    if (this.player.hitPoints > 0 && this.boss.hitPoints > 0)
      this.bossTurn(playerHitPoints, bossHitPoints, manaPool, wizardPath);
  }

  bossTurn(playerHitPoints, bossHitPoints, manaPool, wizardPath) {
    if (this.player.hitPoints > 0 && this.boss.hitPoints > 0)
      this.battle(playerHitPoints, bossHitPoints, manaPool, wizardPath)
  }

  battle(playerHitPoints, bossHitPoints, manaPool, wizardPath) {
    if (playerHitPoints > 0 && bossHitPoints > 0)
      this.playerTurn(playerHitPoints, bossHitPoints, manaPool, wizardPath);
  }

  calcPartOne(player) {
    this.player = player;
    const wizardPath = [];
    this.battle(this.player.hitPoints, this.boss.hitPoints, this.player.mana, wizardPath);
    return 0;
  }

  calcPartTwo(player) {

    const wizardPath = [];
    this.battle(this.player.hitPoints, this.boss.hitPoints, this.player.mana, wizardPath);
    return 0;
  }
}

export default Day22;

