import {md5} from "../utils/md5";

class Day04 {
  constructor(storeData) {
    this.storeData = storeData;
  }

  checkForFiveNullNumbers(hexValues, digits = 5) {
    let result = true;

    for (let idx = 0; idx < digits; idx += 1) {
      const digit = parseInt(hexValues[idx], 10);
      result = result &&( digit === 0);

      if (result === false)
      break;
    }
    return result;
  }

  calcPartOne(digits = 5) {
    let result = 0;
    let found = false;

    do {
      result += 1;
      const hexValues = md5(this.storeData + result.toString()).split('');
      found = this.checkForFiveNullNumbers(hexValues, digits);
    } while (found === false);

    return result;
  }

  calcPartTwo(digits = 6) {
    return this.calcPartOne(digits);
  }
}

export default Day04;

