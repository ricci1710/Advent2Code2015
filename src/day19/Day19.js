import Day from '../base/Day';

String.prototype.replaceAt = function (index, pattern, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + pattern.length);
}

class Day19 extends Day {
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
    const moleculeSequences = new Set();
    let replacePosition;
    // suche zeichenkette erstze diese => 1. Kombination. von Ausgangszustand suche wieder die zeichenkette ab der
    // letzten position => 2. Kombination => Kombinationen im Set abspeichern da keine Mehrfachtreffer erlaubt sind.
    for (let idx = 0; idx < this.moleculesTable.length; idx += 1) {
      const molecules = this.moleculesTable[idx].split('=>');
      const pattern = molecules[0].trim();
      const replacer = molecules[1].trim();

      replacePosition = this.sequence.indexOf(pattern);
      while (replacePosition !== -1) {
        const moleculeSequence = this.sequence.replaceAt(replacePosition, pattern, replacer);
        moleculeSequences.add(moleculeSequence);
        replacePosition = this.sequence.indexOf(pattern, replacePosition + 1);
      }
    }
    return moleculeSequences.size;
  }

  calcPartTwo() {
    let result = 0;
    this.storeData.forEach((item) => {
    });
    return result;
  }
}

export default Day19;

