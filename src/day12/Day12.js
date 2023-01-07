import Day from "../base/Day";

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
    let result = 0;
    const data = JSON.parse(this.storeData);
    const test = (value, result) => {
      value.forEach((item) => {
        if (Array.isArray(item)) {
          test(item);
        } else if (typeof item === 'object') {
          const values = Object.values(item);
          const valueString = values.toString();
          if (valueString.indexOf('red') === -1) {
            for (let idx = 0; idx < values.length; idx += 1) {
              let objectValue = values[idx].toString();
              const num = parseInt(objectValue, 10);
              if (!isNaN(num))
                result += num;
            }
          }
        }
        console.log(item);
      });
      return result;
    }

    test(data);
    return result;
  }
}

export default Day12;

