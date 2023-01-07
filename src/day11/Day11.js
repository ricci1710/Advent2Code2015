import Day from '../base/Day';

String.prototype.replaceAt = function (index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

class Day11 extends Day {
  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
  }

  /**
   * Passwörter dürfen nicht die Buchstaben i, o oder l enthalten.
   * @param value
   * @returns {boolean}
   */
  static lettersAllowed(value) {
    let m;
    let count = 0;
    let regex = /[iol]/gm;

    while ((m = regex.exec(value)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex)
        regex.lastIndex++;
      count += 1;
    }
    return count === 0;
  }

  /**
   * Kennwörter müssen mindestens zwei verschiedene, sich nicht überschneidende Buchstabenpaare enthalten,
   * wie aa, bb oder zz.
   * @param value
   * @returns {boolean}
   */
  static existDoubleLetter(value) {
    let m;
    let count = 0;
    let regex = /(.)\1/gm;

    while ((m = regex.exec(value)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex)
        regex.lastIndex++;
      count += 1;
    }
    return count > 1;
  }

  /**
   * Passwörter müssen eine aufsteigende Reihe von mindestens drei Buchstaben enthalten, wie z. B. abc, bcd.
   * @param value
   */
  static existThreeFollowLetters(value) {
    let found = false;
    for (let idx = 0; idx < value.length - 2; idx += 1) {
      const charCode1 = value.charAt(idx).charCodeAt(0);
      const charCode2 = value.charAt(idx + 1).charCodeAt(0);
      const charCode3 = value.charAt(idx + 2).charCodeAt(0);
      if (charCode1 + 1 !== charCode2 || charCode2 !== charCode3 - 1)
        continue;

      found = true;
      break;
    }
    return found;
  }

  /**
   * Das Inkrementieren ist wie das Zählen mit Zahlen: xx, xy, xz, ya, yb und so weiter. Erhöhen Sie den Buchstaben ganz
   * rechts um einen Schritt; wenn es ein z war, wird es zu einem a, und wiederholen Sie den Vorgang mit dem nächsten
   * Buchstaben links, bis er nicht mehr weitergeht.
   * @param value
   * @returns {string}
   */
  static generatePassword(value) {
    const next = (nextValue, position) => {
      let charCode = nextValue.charAt(position).charCodeAt(0);
      charCode += 1;
      if (charCode > 122) {
        charCode = 'a'.charCodeAt(0);
        const newPosition = position === 0 ? nextValue.length - 1 : position - 1;
        const newValue = nextValue.replaceAt(position, String.fromCharCode(charCode));
        nextValue = next(newValue, newPosition);
      } else
        nextValue = nextValue.replaceAt(position, String.fromCharCode(charCode));
      return nextValue;
    }
    return next(value, value.length - 1);
  }

  static nextPassword(value) {
    do {
      value = Day11.generatePassword(value);
    } while (!Day11.lettersAllowed(value) || !Day11.existDoubleLetter(value) || !Day11.existThreeFollowLetters(value));
    return value;
  }

  calcPartOne() {
    return Day11.nextPassword(this.storeData);
  }

  calcPartTwo() {
    const value = this.calcPartOne();
    return Day11.nextPassword(value);
  }
}

export default Day11;

