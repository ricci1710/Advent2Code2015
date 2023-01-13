import Day from '../base/Day';
import {combine} from "../utils/Uti";

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
        const capacity = parseInt(ingredients[2], 10);
        const durability = parseInt(ingredients[4], 10);
        const flavor = parseInt(ingredients[6], 10);
        const texture = parseInt(ingredients[8], 10);
        const calories = parseInt(ingredients[10], 10);
        this.ingredientInfos.set(name, { capacity, durability, flavor, texture, calories });
      }
    });

    const names = [...this.ingredientInfos.keys()];
    this.ingredientProperties = Object.keys(this.ingredientInfos.get(names[0]));

    this.combinations = combine(new Array(names.length).fill(0), 100, (arr) => {
      return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) === 100;
    });
  }

  bakeCookie(teaspoons, names) {
    let results = [];
    let calorie = 0;
    for (let ipIdx = 0; ipIdx < this.ingredientProperties.length; ipIdx += 1) {
      let result = 0;
      const property = this.ingredientProperties[ipIdx];
      for (let idx = 0; idx < names.length; idx += 1) {
        const name = names[idx];
        const teaspoon = teaspoons[idx];
        const ingredientInfos = this.ingredientInfos.get(name);
        const ingredientValue = ingredientInfos[property];
        if (property === 'calories')
          calorie += teaspoon * ingredientValue;
        else
          result += teaspoon * ingredientValue;
      }
      if (property !== 'calories') {
        result = (result < 0) ? 0 : result;
        results.push(result);
        if (result === 0)
          break;
      }
    }

    const cookieValue = results.reduce((accumulator, currentValue) => accumulator * currentValue);
    return { cookieValue, calorie };
  }

  calcPartOne() {
    let totalScore = 0;
    const names = [...this.ingredientInfos.keys()];
    this.combinations.forEach((combination) => {
      const { cookieValue } = this.bakeCookie(combination, names);
      totalScore = Math.max(totalScore, cookieValue);
    });

    return totalScore;
  }

  calcPartTwo() {
    let totalScore = 0;
    const names = [...this.ingredientInfos.keys()];
    this.combinations.forEach((combination) => {
      const { cookieValue, calorie } = this.bakeCookie(combination, names);
      if (calorie === 500)
        totalScore = Math.max(totalScore, cookieValue);
    });

    return totalScore;
  }
}

export default Day15;

