class Day07 {
  storeData;
  circuitMap = new Map();
  keyValueMap = new Map();

  constructor(storeData) {
    this.storeData = storeData;
    if (this.storeData) {
      this.storeData.forEach((item) => {
        const lineParts = item.split(' -> ');
        const key = lineParts[1];
        const value = lineParts[0];

        if (isNaN(value) === false)
          this.keyValueMap.set(key, parseInt(value, 10)); // Alle Einzelwerte wegschreiben
        else {
          const values = value.split(' ');
          if (values.length === 2) {
            if (isNaN(values[1]) === false)
              this.keyValueMap.set(key, parseInt(value, 10)); // Alle Einzelwerte wegschreiben
            else
              this.circuitMap.set(key, values); // Rechenalgorithmus wegschreiben
          }
          else
            this.circuitMap.set(key, value.split(' ')); // Rechenalgorithmus wegschreiben
        }
      });
    }
  }

  static AND(value1, value2) {
    return value1 & value2;
  }

  static OR(value1, value2) {
    return value1 | value2;
  }

  static LSHIFT(value1, value2) {
    return value1 << value2;
  }

  static RSHIFT(value1, value2) {
    return value1 >>> value2;
  }

  static NOT(value) {
    return 65535 ^ value;
  }

  static str2bin(x) {
    return parseInt(x, 2);
  }

  static number2bin(x, base = 32) {
    const sign = (x < 0) ? '-' : '';
    let result = (x >>> 0).toString(2);
    while (result.length < base)
      result = '0' + result;
    return sign + result;
  }

  static modulo(a, b) {
    return a - Math.floor(a / b) * b;
  }

  static toInteger(x) {
    x = Number(x);
    return x < 0 ? Math.ceil(x) : Math.floor(x);
  }

  static toUint(x, base = 32) {
    return Day07.modulo(Day07.toInteger(x), Math.pow(2, base));
  }

  calcPartOne() {
    let lastSize = 0;
    const uint16Base = 16;
    while (this.circuitMap.size > 0 && this.circuitMap.size !== lastSize) {
      lastSize = this.circuitMap.size;
      for (let [key, value] of this.circuitMap) {
        if (value.length === 2 && value[0] === 'NOT') {
          const nameOrNumber = value[1];
          let res = this.keyValueMap.get(nameOrNumber);
          if (!isNaN(res)) {
            res = (Day07.toUint(Day07.NOT(res), uint16Base));
            this.keyValueMap.set(key, res);
            this.circuitMap.delete(key);
          }
        }
        else if (value.length === 3) {
          let value1 = this.keyValueMap.get(value[0]);
          if (value1 === undefined)
            value1 = parseInt(value[0], 10);

          let value2 = this.keyValueMap.get(value[2]);
          if (value2 === undefined)
            value2 = parseInt(value[2], 10);

          if (!isNaN(value1) && !isNaN(value2)) {
            const cmd = value[1];
            let res = 0;
            if (cmd === 'AND')
              res = Day07.AND(value1, value2);
            else if (cmd === 'OR')
              res = Day07.OR(value1, value2);
            else if (cmd === 'LSHIFT')
              res = Day07.LSHIFT(value1, value2);
            else if (cmd === 'RSHIFT')
              res = Day07.RSHIFT(value1, value2);
            else
              throw new Error('ERROR: Darf nicht vorkommen!');

            res = Day07.toUint(res, uint16Base);
            this.keyValueMap.set(key, res);
            this.circuitMap.delete(key);
          }
        }
        else if (value.length === 1) {
          let value1 = this.keyValueMap.get(value[0]);
          if (value1 === undefined)
            value1 = parseInt(value[0], 10);
          if (!isNaN(value1)) {
            this.keyValueMap.set(key, value1);
            this.circuitMap.delete(key);
          }
        }
      }
    }
    if (this.circuitMap.size !== 0)
      throw new Error('ERROR: Darf nicht vorkommen!');

    // const unsorted = [...this.keyValueMap];
    // const ordered = unsorted.sort(([key1, value1], [key2, value2]) => key1.localeCompare(key2));
    // console.info(ordered);

    return this.keyValueMap.get('a');
  }

  calcPartTwo() {
    const a = this.calcPartOne();

    this.keyValueMap.clear();
    this.storeData.forEach((item) => {
      const lineParts = item.split(' -> ');
      const key = lineParts[1];
      const value = lineParts[0];

      if (isNaN(value) === false)
        this.keyValueMap.set(key, parseInt(value, 10)); // Alle Einzelwerte wegschreiben
      else {
        const values = value.split(' ');
        if (values.length === 2) {
          if (isNaN(values[1]) === false)
            this.keyValueMap.set(key, parseInt(value, 10)); // Alle Einzelwerte wegschreiben
          else
            this.circuitMap.set(key, values); // Rechenalgorithmus wegschreiben
        }
        else
          this.circuitMap.set(key, value.split(' ')); // Rechenalgorithmus wegschreiben
      }
    });

    this.keyValueMap.set('b', a);
    return this.calcPartOne();
  }
}

export default Day07;

