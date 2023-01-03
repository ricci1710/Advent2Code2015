import Array2d from "../utils/Array2d";

class Day06 {
  playground;
  storeData;
  playgroundSize;

  constructor(storeData, playgroundSize) {
    this.storeData = storeData;
    this.playgroundSize = playgroundSize;
  }

  set playgroundSize(size) {
    this.playgroundSize = size;
  }

  get playgroundSize() {
    return this.playgroundSize;
  }

  initPlayground(size, initValue) {
    this.playground = new Array2d(size, initValue);
  }

  switchOnOff(from, to, value) {
    for (let idy = from.y; idy <= to.y; idy += 1) {
      for (let idx = from.x; idx <= to.x; idx += 1) {
        this.playground.set(idx, idy, value === 'on');
      }
    }
  }

  toggle(from, to) {
    for (let idy = from.y; idy <= to.y; idy += 1) {
      for (let idx = from.x; idx <= to.x; idx += 1) {
        const value = this.playground.get(idx, idy);
        this.playground.set(idx, idy, !value);
      }
    }
  }

  get lightOn() {
    let lightOn = 0;
    const size = this.playground.size;
    for (let idy = 0; idy < size.y; idy += 1) {
      for (let idx = 0; idx < size.x; idx += 1) {
        if (this.playground.get(idx, idy))
          lightOn += 1;
      }
    }
    return lightOn;
  }

  parseLine(line) {
    const lineCommands = line.split(' through ');
    const fromCommands = lineCommands[0].split(' ');
    const cmd = fromCommands.length === 2 ? 'toggle' : fromCommands[1]; // toggle/on/off
    const fromPoints = fromCommands.length === 2 ? fromCommands[1].split(',') : fromCommands[2].split(',');
    const fromPoint = { x: parseInt(fromPoints[0], 10), y: parseInt(fromPoints[1], 10) };
    const toPoints = lineCommands[1].split(',');
    const toPoint = { x: parseInt(toPoints[0], 10), y: parseInt(toPoints[1], 10) };
    return { cmd, fromPoint, toPoint }
  }

  calcPartOne() {
    this.initPlayground(this.playgroundSize, false);
    this.storeData.forEach((item) => {
      const { cmd, fromPoint, toPoint } = this.parseLine(item);
      if (cmd === 'toggle')
        this.toggle(fromPoint, toPoint);
      else
        this.switchOnOff(fromPoint, toPoint, cmd);
    });
    return this.lightOn;
  }

  switchOn(from, to) {
    for (let idy = from.y; idy <= to.y; idy += 1) {
      for (let idx = from.x; idx <= to.x; idx += 1) {
        const value = this.playground.get(idx, idy);
        this.playground.set(idx, idy, value + 1);
      }
    }
  }

  switchOff(from, to) {
    for (let idy = from.y; idy <= to.y; idy += 1) {
      for (let idx = from.x; idx <= to.x; idx += 1) {
        let value = this.playground.get(idx, idy);
        if (value > 0)
          value -= 1;
        this.playground.set(idx, idy, value);
      }
    }
  }

  togglePT(from, to) {
    for (let idy = from.y; idy <= to.y; idy += 1) {
      for (let idx = from.x; idx <= to.x; idx += 1) {
        const value = this.playground.get(idx, idy);
        this.playground.set(idx, idy, value + 2);
      }
    }
  }

  get brightness() {
    let brightness = 0;
    const size = this.playground.size;
    for (let idy = 0; idy < size.y; idy += 1) {
      for (let idx = 0; idx < size.x; idx += 1) {
        const value = this.playground.get(idx, idy);
        if (value > 0)
          brightness += value;
      }
    }
    return brightness;
  }

  calcPartTwo() {
    this.initPlayground(this.playgroundSize, 0);
    this.storeData.forEach((item) => {
      const { cmd, fromPoint, toPoint } = this.parseLine(item);
      if (cmd === 'toggle')
        this.togglePT(fromPoint, toPoint);
      else if (cmd === 'on')
        this.switchOn(fromPoint, toPoint);
      else
        this.switchOff(fromPoint, toPoint);
    });
    return this.brightness;
  }
}

export default Day06;

