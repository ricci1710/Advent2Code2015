import Day from "../base/Day";
import Array2d from "../utils/Array2d";

class Day09 extends Day {
  cityDirections = new Map();
  possibleRoutes;

  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
  }

  static permutation(inputArr) {
    let result = [];

    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
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

  factorial(value) {
    let result = 1;
    for (let i = 1; i <= value; i += 1)
      result = result * i;
    return result;
  }

  arrayRotate(arr, reverse) {
    if (reverse) arr.unshift(arr.pop());
    else arr.push(arr.shift());
    return arr;
  }

  createCityDirections() {
    this.storeData.forEach((item) => {
      const lineInfo = item.split(' ');
      const city1 = lineInfo[0];
      const city2 = lineInfo[2];
      const distance = lineInfo[4];

      this.insertCity(city1, {city: city2, distance});
      this.insertCity(city2, {city: city1, distance});
    });
  }

  getCombinations(valuesArray) {
    var combi = [];
    var temp = [];
    var slent = Math.pow(2, valuesArray.length);

    for (var i = 0; i < slent; i++) {
      temp = [];
      for (var j = 0; j < valuesArray.length; j++) {
        if ((i & Math.pow(2, j))) {
          temp.push(valuesArray[j]);
        }
      }
      if (temp.length > 0) {
        combi.push(temp);
      }
    }

    combi.sort((a, b) => a.length - b.length);
    console.log(combi.join("\n"));
    return combi;
  }

  getXXX() {
    const result = [];
    result.length = 6; //n=2

    function combine(input, len, start) {
      if (len === 0) {
        console.log(result.join(" ")); //process here the result
        return;
      }
      for (let i = start; i <= input.length - len; i++) {
        result[result.length - len] = input[i];
        combine(input, len - 1, i + 1);
      }
    }

    const array = ["London", "Belfast", "Dublin"];
    combine(array, result.length, 0);
  }

  createPossibleRoutes() {
    this.getXXX();

    const possibleRoutes = new Map();
    for (const [key, value] of this.cityDirections) {
      const factorial = this.factorial(value.size);
      const array2d = new Array2d({x: value.size, y: factorial}, '');

      const cityKey = value.keys();
      let row = 0;
      let rot = [...cityKey];
      const x = this.getCombinations(rot);
      console.log(x);
      // var array = ["apple", "banana", "lemon", "mango"];

      var result = rot.flatMap(
        (v, i) => rot.slice(i + 1).map(w => v + ' ' + w)
      );

      console.log(result);


      const expectVal = rot[0];
      do {
        array2d.fillRowLine(row, [...rot]);
        row += 1;
        rot = this.arrayRotate(rot);
      } while (expectVal !== rot[0]);
      console.log(array2d);
    }
  }

  insertCity(key, value) {
    const {city, distance} = value;
    let cities = this.cityDirections.get(key);
    if (cities)
      cities.set(city, distance);
    else {
      cities = new Map();
      cities.set(city, distance);
      this.cityDirections.set(key, cities);
    }
  }

  calcShortestDistance() {
    const yLength = this.possibleRoutes.length;
    const xLength = this.possibleRoutes[0].length;

    let result = 0;
    for (let idy = 0; idy < yLength; idy += 1) {
      for (let idx = 0; idx < xLength; idx += 1) {
        console.log(this.possibleRoutes[idy][idx]);
      }
    }
    return result;
  }

  calcPartOne() {
    this.createCityDirections();
    const cities = [...this.cityDirections.keys()];
    this.possibleRoutes = Day09.permutation(cities);
    return this.calcShortestDistance();
  }

  calcPartTwo() {
    let result = 0;
    this.storeData.forEach((item) => {
    });
    return result;
  }
}

export default Day09;

