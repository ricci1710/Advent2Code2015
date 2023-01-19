import Day from '../base/Day';

class Day25 extends Day {
  firstCode = 20151125;
  factor = 252533;
  divisor = 33554393;

  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
  }

  static getNextCode(value, factor, divisor) {
    return (value * factor) % divisor;
  }

  getNextCode(value) {
    const nextCode = (value * this.factor) % this.divisor;
    return nextCode;
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

export default Day25;

