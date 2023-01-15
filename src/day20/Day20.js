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
    for (let x = 0; x < 660000; x += 1)
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
    let result = 0;
    this.storeData.forEach((item) => {
    });
    return result;
  }
}

export default Day20;

