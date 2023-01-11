import Day from '../base/Day';

class Day14 extends Day {
  reindeerMap = new Map();

  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
    this.readReindeerData();
  }

  readReindeerData() {
    this.storeData.forEach((line) => {
      const reindeerInfos = line.split(' ');
      const reindeerName = reindeerInfos[0];
      const speed = reindeerInfos[3];
      const duration = reindeerInfos[6];
      const pause = reindeerInfos[13];
      if (reindeerName.length > 0)
        this.reindeerMap.set(reindeerName, { speed, duration, pause });
    });
    console.log(this.reindeerMap);
  }

  calcPartOne(time) {
    let result = 0;
    this.storeData.forEach((item) => {
    });
    return result;
  }

  calcPartTwo(time) {
    let result = 0;
    this.storeData.forEach((item) => {
    });
    return result;
  }
}

export default Day14;

