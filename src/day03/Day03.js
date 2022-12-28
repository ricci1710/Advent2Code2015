import Coordinate from "../utils/Coordinate";

class Day03 {
  constructor(storeData) {
    this.storeData = storeData;
    this.visitedPlaces = new Map();
    this.robotSantaPosition = new Coordinate(0, 0);
    this.santaClausPosition = new Coordinate(0, 0);
    this.visitedPlaces.set(this.santaClausPosition.key, 1);
  }

  calcPartOne() {
    this.storeData.forEach((direction) => {
      this.santaClausPosition.move(direction);
      const key = this.santaClausPosition.key;
      let value = this.visitedPlaces.get(key);
      if (typeof value === 'number') {
        value += 1;
        this.visitedPlaces.set(key, value);
      } else {
        this.visitedPlaces.set(key, value);
      }
    });
    return this.visitedPlaces.size;
  }

  calcPartTwo() {
    let mod = 0;
    let key;
    this.storeData.forEach((direction) => {
      if (mod % 2) {
        this.santaClausPosition.move(direction);
        key = this.santaClausPosition.key;
      } else {
        this.robotSantaPosition.move(direction);
        key = this.robotSantaPosition.key;
      }

      let value = this.visitedPlaces.get(key);
      if (typeof value === 'number') {
        value += 1;
        this.visitedPlaces.set(key, value);
      } else {
        this.visitedPlaces.set(key, value);
      }
      mod += 1;
    });
    return this.visitedPlaces.size;
  }
}

export default Day03;

