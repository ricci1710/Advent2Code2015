import Day from '../base/Day';
import Array2d from "../utils/Array2d";

class Day26 extends Day {
  numberField = null;

  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
  }

  init() {
    const {row, column} = JSON.parse(this.storeData.join(''));
    this.numberField = new Array2d({x: column.length, y: row.length}, '.');
  }

  calcPartOne() {
    let result = 0;
    this.init();


    return result;
  }

  calcPartTwo() {
    return 0;
  }
}

export default Day26;

