import Day from '../base/Day';

class Day13 extends Day {
  personToHappiness = new Map();

  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
    this.createPersonToHappiness();
  }

  static permutation(inputArr) {
    let result = [];

    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i += 1) {
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

  static allCombinations(value) {
    const combinations = [];
    let temp = "";
    const combinationsLength = Math.pow(2, value.length);

    for (let i = 0; i < combinationsLength; i += 1) {
      temp = "";
      for (let j = 0; j < value.length; j += 1) {
        if ((i & Math.pow(2, j))) {
          temp += ',' + value[j]
        }
      }
      if (temp !== "") {
        combinations.push(temp);
      }
    }

    console.log(combinations.join("\n"));
  }

  createPersonToHappiness() {
    this.storeData.forEach((line) => {
      const lineParts = line.split(' ');
      const firstName = lineParts[0];
      const secondName = lineParts[lineParts.length - 1];
      const happiness = lineParts[2] === 'gain' ? parseInt(lineParts[3], 10) : (-1 * parseInt(lineParts[3], 10));

      let happinessMap = this.personToHappiness.get(firstName);
      if (!happinessMap)
        happinessMap = new Map();
      happinessMap.set(secondName, happiness);
      this.personToHappiness.set(firstName, happinessMap);
    });
  }

  getSeatingArrangement() {
    const persons = Array.from(this.personToHappiness.keys());
    const permutation = Day13.permutation(persons);
    return permutation.map((item) => {
      item.splice(-1);
      return item;
    });
  }

  calcPartOne() {
    let result = 0;

    const persons = Array.from(this.personToHappiness.keys());
    const seatingArrangement = Day13.permutation(persons);

    seatingArrangement.forEach((sittingPlan) => {
      console.log(sittingPlan);
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

export default Day13;

