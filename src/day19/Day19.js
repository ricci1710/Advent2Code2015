import Day from '../base/Day';

class Day19 extends Day {
  moleculeSequences = new Set();
  moleculesTable = [];
  sequence;

  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
    this.init();
  }

  init() {
    let foundSeparator = false;
    this.storeData.forEach((item) => {
      if (item === '')
        foundSeparator = true;
      else if (foundSeparator && item.length)
        this.sequence = item;
      else
        this.moleculesTable.push(item);
    });
  }

  calcPartOne() {
    let result = 0;
    // suche zeichenkette erstze diese => 1. Kombination. von Ausgangszustand suche wieder die zeichenkette ab der
    // letzten position => 2. Kombination => Kombinationen im Set abspeichern da keine Mehrfachtreffer erlaubt sind.
    for (let idx = 0; idx < this.moleculesTable.length; idx += 1) {
      const molecules = this.moleculesTable[idx].split('=>');
      console.log(molecules);
      const searchValue = molecules[0];
      const replacer = molecules[1];
      const moleculeSequence = this.sequence.replace(searchValue, replacer);
      this.moleculeSequences.add(moleculeSequence);
    }
    return result;
  }

  calcPartTwo() {
    let result = 0;
    this.storeData.forEach((item) => {
    });
    return result;
  }
}

export default Day19;

