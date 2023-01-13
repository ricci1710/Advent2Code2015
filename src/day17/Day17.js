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
   * @returns {*}
   */
  calcPartOne(literSize) {
    const result = [];
    const combinations = allCombinations(this.storeData);
    combinations.forEach((item) => {
      const containerSizes = item.split(',');
      const sum = containerSizes.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue, 10), 0);
      if (sum === literSize)
        result.push(containerSizes.length);
    });
    return result;
  }

  calcPartTwo(literSize) {
    const combinations = this.calcPartOne(literSize);
    let minContainerCount = Number.MAX_VALUE;
    combinations.forEach((containerCount) => minContainerCount = Math.min(minContainerCount, containerCount));
    const res = combinations.reduce((accumulator, currentValue) => {
      return (currentValue === minContainerCount) ? accumulator + 1 : accumulator;
    }, 0);
    return res;
  }
}

export default Day17;

