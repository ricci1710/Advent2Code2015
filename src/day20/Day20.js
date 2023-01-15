import Day from '../base/Day';

class Day20 extends Day {
  presentCount;

  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
    this.presentCount = parseInt(this.storeData[0], 10);
  }

  /**
   * lowest house number?
   * @returns {number}
   */
  calcPartOne() {
    let presents = 0;
    const moduloNumbers = [];

    // Vorinitialisierung
    for (let x = 0; x < 665200; x += 1)
      moduloNumbers.push(x);
    let houseNumber = moduloNumbers.length;

    do {
      presents = 0;
      houseNumber += 1;
      moduloNumbers.push(houseNumber);

      for (let idx = 0; idx < moduloNumbers.length; idx += 1) {
        const moduloNumber = moduloNumbers[idx];
        if (houseNumber % moduloNumber === 0)
          presents += 10 * moduloNumber;
      }
    } while (presents < this.presentCount);

    return houseNumber;
  }

  calcPartTwo() {
    let presents = 0;
    const moduloNumbers = [];
    // Vorinitialisierung
    // for (let x = 1; x <= 700000; x += 1) {
    //   moduloNumbers.push(x);
    //   for (let y = 0; y < moduloNumbers.length - 1; y += 1) {
    //     const moduloNumber = moduloNumbers[y];
    //     const addAllowed = x / (moduloNumber * 50);
    //     if (addAllowed > 1)
    //       moduloNumbers.shift();
    //   }
    // }
    for (let x = 10000; x < 500000; x += 1)
      moduloNumbers.push(x);
    // const d = []
    // for (let x = 10; x < 500; x += 1) {
    //   d.push(x);
    // }

    // moduloNumbers.reverse();

    let houseNumber = moduloNumbers[moduloNumbers.length - 1];
    do {
      presents = 0;
      houseNumber += 1;
      moduloNumbers.push(houseNumber);

      for (let idx = 0; idx < moduloNumbers.length; idx += 1) {
        const moduloNumber = moduloNumbers[idx];
        if (houseNumber % moduloNumber === 0) {
          const addAllowed = houseNumber / (moduloNumber * 50)
          if (addAllowed <= 1)
            presents += 11 * moduloNumber;
          else
            moduloNumbers.shift();
        }
      }
    } while (presents < this.presentCount);
    return houseNumber;
  }
}

export default Day20;

