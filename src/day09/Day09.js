import Day from "../base/Day";

class Day09 extends Day {
  cityDirections = new Map();
  possibleRoutes;
  shortestDistance;
  longestDistance;

  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
  }

  static permutation(inputArr) {
    let result = [];

    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      }
      else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
        }
      }
    }
    permute(inputArr)

    return result;
  }

  static factorial(value) {
    let result = 1;
    for (let i = 1; i <= value; i += 1)
      result = result * i;
    return result;
  }

  createCityDirections() {
    this.storeData.forEach((item) => {
      const lineInfo = item.split(' ');
      const city1 = lineInfo[0];
      const city2 = lineInfo[2];
      const distance = lineInfo[4];

      this.insertCity(city1, { city: city2, distance });
      this.insertCity(city2, { city: city1, distance });
    });
  }

  insertCity(key, value) {
    const { city, distance } = value;
    let cities = this.cityDirections.get(key);
    if (cities)
      cities.set(city, distance);
    else {
      cities = new Map();
      cities.set(city, distance);
      this.cityDirections.set(key, cities);
    }
  }

  calcDistances() {
    const yLength = this.possibleRoutes.length;
    const xLength = this.possibleRoutes[0].length;

    this.longestDistance = 0;
    this.shortestDistance = 100000000;
    for (let idy = 0; idy < yLength; idy += 1) {
      let distance = 0;
      for (let idx = 0; idx < xLength - 1; idx += 1) {
        const cityFrom = this.possibleRoutes[idy][idx];
        const cityTo = this.possibleRoutes[idy][idx + 1];

        const distanceMqp = this.cityDirections.get(cityFrom);
        distance += parseInt(distanceMqp.get(cityTo), 10);
      }

      this.shortestDistance = Math.min(this.shortestDistance, distance);
      this.longestDistance = Math.max(this.longestDistance, distance);
    }
  }

  calcPartOne() {
    this.createCityDirections();
    const cities = [...this.cityDirections.keys()];
    this.possibleRoutes = Day09.permutation(cities);
    this.calcDistances();
    return this.shortestDistance;
  }

  calcPartTwo() {
    this.calcPartOne();
    return this.longestDistance;
  }
}

export default Day09;

