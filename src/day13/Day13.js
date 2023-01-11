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
      }
      else {
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
          temp += value[j]
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
      const secondName = lineParts[lineParts.length - 1].replace('.', '');
      const happiness = lineParts[2] === 'gain' ? parseInt(lineParts[3], 10) : (-1 * parseInt(lineParts[3], 10));

      let happinessMap = this.personToHappiness.get(firstName);
      if (!happinessMap)
        happinessMap = new Map();
      happinessMap.set(secondName, happiness);
      this.personToHappiness.set(firstName, happinessMap);
    });
  }

  calcPartOne() {
    const persons = Array.from(this.personToHappiness.keys());
    const seatingArrangement = Day13.permutation(persons);
    let maxHappiness = 0;
    seatingArrangement.forEach((sittingPlan) => {
      let happiness = 0;
      for (let idx = 0; idx < sittingPlan.length; idx += 1) {
        const centerPerson = sittingPlan[idx];
        const leftPerson = idx === 0 ? sittingPlan[sittingPlan.length - 1] : sittingPlan[idx - 1];
        const rightPerson = idx === sittingPlan.length - 1 ? sittingPlan[0] : sittingPlan[idx + 1];
        const happinessMap = this.personToHappiness.get(centerPerson);
        happiness += happinessMap.get(leftPerson) + happinessMap.get(rightPerson);
      }
      maxHappiness = Math.max(happiness, maxHappiness);
    });
    return maxHappiness;
  }

  calcPartTwo() {
    for (const happinessMap of this.personToHappiness.values())
      happinessMap.set('Owner', 0);

    const ownerHappiness = new Map();
    const persons = Array.from(this.personToHappiness.keys());
    persons.forEach((person) => ownerHappiness.set(person, 0));
    this.personToHappiness.set('Owner', ownerHappiness);

    return this.calcPartOne();
  }
}

export default Day13;

