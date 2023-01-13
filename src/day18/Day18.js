import Day from '../base/Day';
import Array2d from "../utils/Array2d";

class Day18 extends Day {
  playground;

  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
    this.init();
  }

  init() {
    this.playground = new Array2d(this.storeData.length, '.');
    for (let idx = 0; idx < this.storeData.length; idx += 1) {
      const row = this.storeData[idx];
      this.playground.fillRowLine(idx, row.split(''));
    }
  }

  calcPartOne(steps) {
    let result = 0;
    const size = this.playground.size;
    do {
      const temp = new Array2d(size, '.');
      for (let y = 0; y < size.y; y += 1) {
        for (let x = 0; x < size.x; x += 1) {
          const curValue = this.playground.get(x, y);
          const neighbors = this.playground.getAllNeighbors(x, y, '.').filter(item => item === '#');
          // Eine eingeschaltete Leuchte bleibt eingeschaltet, wenn 2 oder 3 Nachbarn eingeschaltet sind, und schaltet
          // sich ansonsten aus.
          if (curValue === '#' && (neighbors.length === 2 || neighbors.length === 3))
            temp.set(x, y, '#');
          else if (curValue === '.' && neighbors.length === 3) {
            // Ein ausgeschaltetes Licht schaltet sich ein, wenn genau 3 Nachbarn eingeschaltet sind, und bleibt ansonsten
            // ausgeschaltet.
            temp.set(x, y, '#');
          }
        }
      }
      this.playground = temp;
      steps -= 1;
    } while (steps > 0)

    for (let y = 0; y < this.playground.size.y; y += 1) {
      const row = this.playground.getRowLine(y);
      result += row.reduce((accumulator, currentValue) => {
        return (currentValue === '#') ? accumulator + 1 : accumulator;
      }, 0);
    }
    return result;
  }

  calcPartTwo(steps) {
    let result = 0;
    this.storeData.forEach((item) => {
    });
    return result;
  }
}

export default Day18;

