import Day from "../base/Day";

class Day10 extends Day {
  repeatCounter = 0;

  constructor(dayNumber, loadDemoData, repeatCounter) {
    super(dayNumber, loadDemoData);
    this.repeatCounter = repeatCounter;
  }

  calcPartOne() {
    let result = 0;
    let lookAndSaySequences = this.storeData.toString();
    for (let repeatIdx = 0; repeatIdx < this.repeatCounter; repeatIdx += 1) {
      const lookAndSaySequencesArray = lookAndSaySequences.split('');
      let sayCounter = 0;
      let lastNumber = parseInt(lookAndSaySequencesArray[0], 10);

      lookAndSaySequences = '';
      for (let idx = 0; idx < lookAndSaySequencesArray.length; idx += 1) {
        const num = parseInt(lookAndSaySequencesArray[idx], 10);
        if (num === lastNumber)
          sayCounter += 1;
        else {
          lookAndSaySequences += `${sayCounter}${lastNumber}`;
          sayCounter = 1;
          lastNumber = num;
        }
      }
      lookAndSaySequences += `${sayCounter}${lastNumber}`;
    }

    return lookAndSaySequences;
  }

  calcPartTwo() {
    return this.calcPartOne();
  }
}

export default Day10;

