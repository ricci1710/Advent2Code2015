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
      const speed = parseInt(reindeerInfos[3], 10);
      const duration = parseInt(reindeerInfos[6], 10);
      const pause = parseInt(reindeerInfos[13], 10);
      if (reindeerName.length > 0)
        this.reindeerMap.set(reindeerName, { speed, duration, pause });
    });
  }

  getDistance(time, speed, duration, pause) {
    const distFactor = Math.floor(time / (duration + pause));
    const restDuration = time - distFactor * (duration + pause);

    let distance = distFactor * speed * duration;
    if (duration < restDuration)
      distance += speed * duration;
    else
      distance += restDuration * speed;
    return distance;
  }

  calcPartOne(time) {
    let result = 0;
    for (const values of this.reindeerMap.values()) {
      const { speed, duration, pause } = values;
      const distance = this.getDistance(time, speed, duration, pause);
      result = Math.max(distance, result);
    }
    return result;
  }

  calcPartTwo(time) {
    let reindeerPoints = new Map();
    [...this.reindeerMap.keys()].forEach((reindeerName) => {
      reindeerPoints.set(reindeerName, 0);
    });

    const secondTable = new Map();
    for (let timerIdx = 1; timerIdx <= time; timerIdx += 1) {
      secondTable.clear();
      for (const [key, value] of this.reindeerMap.entries()) {
        const { speed, duration, pause } = value;
        const distance = this.getDistance(timerIdx, speed, duration, pause);
        secondTable.set(key, distance);
      }
      let maxDistance = 0;
      for (const distance of secondTable.values())
        maxDistance = Math.max(maxDistance, Number(distance));
      const reindeerWinner = [...secondTable.entries()].filter(item => item[1] === maxDistance).map(([dist]) => dist);

      reindeerWinner.forEach((reindeerName) => {
        const reindeerPoint = reindeerPoints.get(reindeerName);
        reindeerPoints.set(reindeerName, reindeerPoint + 1);
      });
    }

    let maxPoints = 0;
    for (const value of reindeerPoints.values())
      maxPoints = Math.max(value, maxPoints);

    return maxPoints;
  }
}

export default Day14;

