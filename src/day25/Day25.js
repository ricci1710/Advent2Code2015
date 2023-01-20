import Day from '../base/Day';

class Day25 extends Day {
  firstCode = 20151125;
  finishedCode = 20151125;
  codeTable = [];
  factor = 252533;
  divisor = 33554393;
  destination = {row: 0, column: 0};
  codeTablePosition = {row: 1, column: 1};

  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);

    const data = this.storeData[0];
    const rowIndex = data.indexOf('row ');
    const rowIndexEnd = data.indexOf(',', rowIndex);
    this.destination.row = parseInt(data.substring(rowIndex + 4, rowIndexEnd));

    const columnIndex = this.storeData[0].indexOf('column ');
    this.destination.column = parseInt(data.substring(columnIndex + 7, data.length - 1));
    //this.codeTable.set(0, [this.firstCode]);
  }

  static getNextCode(value, factor, divisor) {
    return (value * factor) % divisor;
  }

  getNextCode(value) {
    const nextCode = (value * this.factor) % this.divisor;
    return nextCode;
  }

  calculateCode() {
    while (this.codeTablePosition.row !== this.destination.row || this.codeTablePosition.column !== this.destination.column) {
      this.finishedCode = this.getNextCode(this.finishedCode);
      if (this.codeTablePosition.row - 1 === 0) {
        this.codeTablePosition.row = this.codeTable.length + 1;
        this.codeTablePosition.column = 1;
        this.codeTable.push(this.finishedCode);
      } else {
        this.codeTablePosition.row -= 1;
        this.codeTablePosition.column += 1;
      }
    }
  }

  calcPartOne() {
    this.codeTable.push(this.firstCode);
    this.calculateCode();
    return this.finishedCode;
  }

  calcPartTwo() {
    let result = 0;
    this.storeData.forEach((item) => {
    });
    return result;
  }
}

export default Day25;

