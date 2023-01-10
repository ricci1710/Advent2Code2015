import Day from '../base/Day';

class Day12 extends Day {
  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
  }

  static findAllNumbers(value) {
    let m;
    const regex = /(-[0-9]+)|([0-9]+)/gm;
    let sum = 0;

    while ((m = regex.exec(value)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      } else {
        sum += parseInt(m[0], 10);
      }
    }

    return sum;
  }

  calcPartOne() {
    return Day12.findAllNumbers(this.storeData.toString());
  }

  calcPartTwo() {
    const data = JSON.parse(this.storeData);
    const recursiveArray = (array) => {
      const removeIndices = [];
      for (let idx = 0; idx < array.length; idx += 1) {
        let value = array[idx];
        if (Array.isArray(value))
          recursiveArray(value);
        else if (value === 'red')
          removeIndices.push(idx);
        else if (typeof value === 'object')
          if (recursiveObject(value)) {
            removeIndices.push(idx);
          }
      }
      removeIndices.reduceRight((_, elem) => array.splice(elem, 1), null);
    };

    const recursiveObject = (objValue) => {
      for (const [key, value] of Object.entries(objValue)) {
        if (value === 'red') {
          return true;
        } else if (Array.isArray(value))
          recursiveArray(value);
        else if (typeof value === 'object')
          if (recursiveObject(value)) {
            delete objValue[key];
          }
      }
      return false;
    };

    const test = (value) => {
      if (Array.isArray(value))
        recursiveArray(value);
      else
        recursiveObject(value);
    };


    test(data);
    this.storeData = JSON.stringify(data);
    return this.calcPartOne();
  }
}

export default Day12;

