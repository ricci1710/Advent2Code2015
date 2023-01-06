import Day from "../base/Day";

class Day08 extends Day {
  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
  }

  static findRegEx(value, regex) {
    let m;
    let count = 0;

    while ((m = regex.exec(value)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex)
        regex.lastIndex++;
      count += 1;
    }
    return count;
  }

  static backslashCounter(value) {
    return Day08.findRegEx(value, /(\\[^x])/gm);
  }

  static getUtf8Length(value) {
    return value.length;
  }

  static getAsciiLength(value) {
    const val = value.substring(1, value.length - 1);
    const xCodeCounter = Day08.xCodeCounter(value);
    const backslashCounter = Day08.backslashCounter(value);
    return val.length - backslashCounter - 3 * xCodeCounter;
  }

  static xCodeCounter(value) {
    return Day08.findRegEx(value, /(\\x[a-f\d][a-f\d])/gm);
  }

  static tickMark(value) {
    return Day08.findRegEx(value, /(")/gm);
  }

  calcPartOne() {
    let utf8Length = 0;
    let asciiLength = 0;

    this.storeData.forEach((item) => {
      utf8Length += Day08.getUtf8Length(item);
      asciiLength += Day08.getAsciiLength(item);
    });
    return utf8Length - asciiLength;
  }

  calcPartTwo() {
    let result = 0;
    this.storeData.forEach((line) => {
      result += Day08.xCodeCounter(line);
      const replItem = line.replace(/(\\x[a-f\d][a-f\d])/gm, '#');
      result += Day08.tickMark(replItem) + 2;
      result += Day08.findRegEx(replItem, /(\\)/gm);
    });
    return result;
  }
}

export default Day08;

