import Day from "../base/Day";

class Day23 extends Day {
  constructor(dayNumber, loadDemoData) {
    super(dayNumber, loadDemoData);
  }

  calcPartOne(a = 0) {
    let b = 0;
    let index = 0;

    do {
      const commandLine = this.storeData[index].split(' ');
      const cmd = commandLine[0];
      let registerOrValue = commandLine[1];
      
      if (cmd === 'inc') {
        if (registerOrValue === 'a')
          a += 1;
        else
          b += 1;
        index += 1;
      } else if (cmd === 'hlf') {
        if (registerOrValue === 'a')
          a *= 0.5;
        else
          b *= 0.5;
        index += 1;
      } else if (cmd === 'tpl') {
        if (registerOrValue === 'a')
          a *= 3;
        else
          b *= 3
        index += 1;
      } else if (cmd === 'jmp')
        index += parseInt(registerOrValue, 10);
      else {
        registerOrValue = registerOrValue.replace(',', '');
        const jumpDistance = parseInt(commandLine[2], 10);
        if (cmd === 'jie') {
          if (registerOrValue === 'a' && (a % 2 === 0))
            index += jumpDistance;
          else if (registerOrValue === 'b' && (b % 2 === 0))
            index += jumpDistance;
          else
            index += 1;
        } else if (cmd === 'jio')
          if (registerOrValue === 'a' && a === 1)
            index += jumpDistance;
          else if (registerOrValue === 'b' && b === 1)
            index += jumpDistance;
          else
            index += 1;
      }

    } while (this.storeData[index] !== undefined);

    return {a, b};
  }

  calcPartTwo(a = 1) {
    return this.calcPartOne(a);
  }
}

export default Day23;

