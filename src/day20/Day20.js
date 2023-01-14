import Day from '../base/Day';

class Day20 extends Day {
  presentCount;

  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
    this.presentCount = parseInt(this.storeData[0], 10);
  }

  /**
   * lowest house number?
   * @returns {number}
   */
  calcPartOne() {
    let houseNumber = 0;
    let presents = 0;
    do {
      presents += 10;
      houseNumber += 1;
    } while (presents < this.presentCount);

    return houseNumber;
  }

  calcPartTwo() {
    let result = 0;
    this.storeData.forEach((item) => {
    });
    return result;
  }
}

export default Day20;

