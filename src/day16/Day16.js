import Day from '../base/Day';

class Day16 extends Day {
  sueMemories = new Map();
  scanStorage = [];

  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
    this.init();
  }

  init() {
    this.sueMemories.set('children', 3);
    this.sueMemories.set('cats', 7);
    this.sueMemories.set('samoyeds', 2);
    this.sueMemories.set('pomeranians', 3);
    this.sueMemories.set('akitas', 0);
    this.sueMemories.set('vizslas', 0);
    this.sueMemories.set('goldfish', 5);
    this.sueMemories.set('trees', 3);
    this.sueMemories.set('cars', 2);
    this.sueMemories.set('perfumes', 1);
  }

  calcPartOne() {
    let result = 0;
    for (let idx = 1; idx <= this.storeData.length; idx += 1) {
      let found = 0;
      const line = this.storeData[idx - 1];
      const memories = line.split(/Sue [0-9]+:/gm)[1].split(',');
      for (let idy = 0; idy < memories.length; idy += 1) {
        const memory = memories[idy].split(':');
        const key = memory[0].trim();
        const value = parseInt(memory[1], 10);
        if (value === this.sueMemories.get(key) || (value === 0 && this.sueMemories.get(key) > 0))
          found += 1;
      }
      if (found === memories.length)
        result = idx;
    }
    return result;
  }

  calcPartTwo() {
    let result = 0;
    for (let idx = 1; idx <= this.storeData.length; idx += 1) {
      let found = 0;
      const line = this.storeData[idx - 1];
      const memories = line.split(/Sue [0-9]+:/gm)[1].split(',');
      for (let idy = 0; idy < memories.length; idy += 1) {
        const memory = memories[idy].split(':');
        const key = memory[0].trim();
        const value = parseInt(memory[1], 10);
        if ((key === 'cat' || key === 'tree') && value < this.sueMemories.get(key))
          found += 1;
        else if ((key === 'pomeranians' || key === 'goldfish') && value > this.sueMemories.get(key))
          found += 1;
        else if (value === this.sueMemories.get(key) || (value === 0 && this.sueMemories.get(key) > 0))
          found += 1;
      }
      if (found === memories.length)
        result = idx;
    }
    return result;
  }
}

export default Day16;

