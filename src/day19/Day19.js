import Day from '../base/Day';
import {readFileSync} from 'fs'

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
    // suche Zeichenkette, ersetze diese => 1. Kombination. von Ausgangszustand suche wieder die Zeichenkette ab der
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
    const input = readFileSync(`./src/day19/LifeData19.bin`).toString('utf8')
      .trim()
      .split('\r\n')
      .reduce((formula, line) => {
        const [element, replacement] = line.split(' => ')

        if (!formula[element]) formula[element] = []
        formula[element].push(replacement)

        return formula
      }, {});

    const formula = this.sequence;
    const rx = /([a-zA-Z][a-z]*)/g
    let match;
    let matches = []

    while ((match = rx.exec(formula)) !== null) {
      matches = [...matches, match]
    }

    const reverse = Object.keys(input).reduce((table, replacement) => {
      input[replacement].forEach(element => {
        table.set(element, replacement)
      })

      return table
    }, new Map())

    let target = formula
    let partTwo = 0

    while (target !== 'e') {
      for (const [element, replacement] of reverse.entries()) {
        if (target.includes(element)) {
          target = target.replace(element, replacement)
          partTwo = partTwo + 1
        }
      }
    }

    return partTwo;
  }
}

export default Day19;

