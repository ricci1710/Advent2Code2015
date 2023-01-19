import Day from '../base/Day';

class Day25 extends Day {
  firstCode = 20151125;
  factor = 252533;
  divisor = 33554393;
  playground = [];
  destination = { row: 0, column: 0 };

  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);

    const data = this.storeData[0];
    const rowIndex = data.indexOf('row ');
    const rowIndexEnd = data.indexOf(',', rowIndex);
    this.destination.row = parseInt(data.substring(rowIndex + 4, rowIndexEnd));

    const columnIndex = this.storeData[0].indexOf('column ');
    this.destination.column = parseInt(data.substring(columnIndex + 7, data.length - 1));
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

