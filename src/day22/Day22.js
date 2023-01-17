import Day from '../base/Day';

class Day22 extends Day {
  player = { hitPoints: 0, mana: 0 };
  boss = { hitPoints: 0, damage: 0 };

  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);

    this.boss.hitPoints = parseInt(this.storeData[0].split(':')[1].trim(), 10);
    this.boss.damage = parseInt(this.storeData[1].split(':')[1].trim(), 10);
  }

  calcPartOne(player) {
    let result = 0;
    this.storeData.forEach((item) => {
    });
    return result;
  }

  calcPartTwo(player) {
    let result = 0;
    this.storeData.forEach((item) => {
    });
    return result;
  }
}

export default Day22;

