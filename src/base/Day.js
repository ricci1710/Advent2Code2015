import fs from 'fs';

class Day {
  storeData;

  constructor(dayNumber, loadDemoData) {
    if (loadDemoData) {
      if (dayNumber < 10)
        this.storeData = fs.readFileSync(`./src/day0${dayNumber}/DemoData0${dayNumber}.bin`, 'ascii').replaceAll('\r', '').split('\n');
      else
        this.storeData = fs.readFileSync(`./src/day${dayNumber}/DemoData${dayNumber}.bin`, 'ascii').replaceAll('\r', '').split('\n');
    } else {
      if (dayNumber < 10)
        this.storeData = fs.readFileSync(`./src/day0${dayNumber}/LifeData0${dayNumber}.bin`, 'ascii').replaceAll('\r', '').split('\n');
      else
        this.storeData = fs.readFileSync(`./src/day${dayNumber}/LifeData${dayNumber}.bin`, 'ascii').replaceAll('\r', '').split('\n');
    }
  }

  calcPartOne() {
    return -1;
  }

  calcPartTwo() {
    return -1;
  }
}

export default Day;

