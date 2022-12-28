class Day01 {
  constructor(storeData) {
    this.storeData = storeData;
  }

  calcPartOne() {
    let result = 0;
    this.storeData.forEach((item) => {
      result += item === '(' ? 1 : -1;
    });
    return result;
  }

  calcPartTwo() {
    let result = 0;
    for (let count = 0; count < this.storeData.length; count += 1) {
      const item = this.storeData[count];
      result += item === '(' ? 1 : -1;
      if (result !== -1)
        continue;
      result = count + 1;
      break;
    }
    return result;
  }
}

export default Day01;
//module.exports = Day01;
