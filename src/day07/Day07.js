class Day07 {
  constructor(storeData) {
    this.storeData = storeData;
  }

  static str2bin(x) {
    return parseInt(x, 2);
  }

  static number2bin(x) {
    const sign = (x < 0) ? '-' : '';
    let result = Math.abs(x).toString();
    while (result.length < 32)
      result = '0' + result;
    return sign + result;
  }

  static modulo(a, b) {
    return a - Math.floor(a / b) * b;
  }

  static toInteger(x) {
    x = Number(x);
    return x < 0 ? Math.ceil(x) : Math.floor(x);
  }

  static toUint32(x) {
    return Day07.modulo(Day07.toInteger(x), Math.pow(2, 32));
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

export default Day07;

