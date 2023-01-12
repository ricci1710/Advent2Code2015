import Day from '../base/Day';

class Day15 extends Day {
  ingredientInfos = new Map();
  ingredientProperties = [];
  combinations;

  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
    this.init();
  }

  init() {
    this.storeData.forEach((line) => {
      const ingredients = line.split(' ');
      const name = ingredients[0].replace(':', '');
      if (name.length) {
        const capacity = parseInt(ingredients[2]);
        const durability = parseInt(ingredients[4]);
        const flavor = parseInt(ingredients[6]);
        const texture = parseInt(ingredients[8]);
        this.ingredientInfos.set(name, { capacity, durability, flavor, texture });
      }
    });

    const names = [...this.ingredientInfos.keys()];
    this.ingredientProperties = Object.keys(this.ingredientInfos.get(names[0]));
    this.combinations = Day15.allCombinations(names);
  }

  static allCombinations(value) {
    const combinations = [];
    const combinationsLength = Math.pow(2, value.length);

    let temp = "";
    for (let i = 0; i < combinationsLength; i += 1) {
      temp = "";
      for (let j = 0; j < value.length; j += 1) {
        if ((i & Math.pow(2, j)))
          temp += temp.length === 0 ? value[j] : ',' + value[j];
      }
      if (temp !== "") {
        combinations.push(temp);
      }
    }

    return combinations;
  }

  static arrayRotate(arr, reverse) {
    if (reverse) arr.unshift(arr.pop());
    else arr.push(arr.shift());
    return arr;
  }

  bakeCookie(teaspoons, names) {
    let results = [];
    for (let ipIdx = 0; ipIdx < this.ingredientProperties.length; ipIdx += 1) {
      let result = 0;
      const property = this.ingredientProperties[ipIdx];
      for (let idx = 0; idx < names.length; idx += 1) {
        const name = names[idx];
        const teaspoon = teaspoons[idx];
        const ingredientInfos = this.ingredientInfos.get(name);
        const ingredientValue = ingredientInfos[property];
        result += teaspoon * ingredientValue;
      }
      result = (result < 0) ? 0 : result;
      results.push(result);
      if (result === 0)
        break;
    }

    const cookieValue = results.reduce((accumulator, currentValue) => accumulator * currentValue);
    return cookieValue;
  }

  calcPartOne() {
    let totalScore = 0;
    this.combinations.forEach((combination) => {
      const names = combination.split(',');

      let start = 100 - names.length + 1;

      do {
        let rotateTeaspoons = []
        let teaspoons = [start];
        if (names.length > 1) {
          for (let idx = 1; idx < names.length; idx += 1) {
            if (idx === 1)
              rotateTeaspoons.push(100 - start - names.length + 2);
            else
              rotateTeaspoons.push(1);
          }

          for (let rotateIdx = 0; rotateIdx < names.length - 1; rotateIdx += 1) {
            const allTeaspoons = teaspoons.concat(rotateTeaspoons);
            totalScore = Math.max(totalScore, this.bakeCookie(allTeaspoons, names));
            rotateTeaspoons = Day15.arrayRotate(rotateTeaspoons);
          }
        }
        else {
          totalScore = Math.max(totalScore, this.bakeCookie([start], names));
        }
        start -= 1;
      } while (start > 0)
    });

    return totalScore;
  }

  calcPartTwo() {
    let result = 0;

    return result;
  }
}

export default Day15;

