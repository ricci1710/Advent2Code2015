import Day from '../base/Day';
import {allCombinations} from "../utils/Uti";

class Day17 extends Day {
  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
    this.storeData = this.storeData.map(item => parseInt(item, 10));
  }

  /**
   * vector mit allen behältern => allcombination und dann filter auf 150 liter
   * @param literSize
   * @returns {number}
   */
  calcPartOne(literSize) {
    let result = 0;
    const combinations = allCombinations(this.storeData);
    combinations.forEach((item) => {
      const containerSizes = item.split(',');
      const sum = containerSizes.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue, 10), 0);
      if (sum === literSize)
        result += 1;
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

export default Day17;

