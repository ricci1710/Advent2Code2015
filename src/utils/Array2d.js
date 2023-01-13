class Array2d {
  constructor(size, fillValue) {
    if (typeof size === "number") // YYxYY
      this.array2d = new Array(size).fill(fillValue).map(() => new Array(size).fill(fillValue));
    else // YYxZZ
      this.array2d = new Array(size.y).fill(fillValue).map(() => new Array(size.x).fill(fillValue));
  }

  /**
   * Get the array size back.
   * @returns {{x: number, y: number}|{x: number, y: number}}
   */
  get size() {
    return this.array2d && this.array2d[0] ? {x: this.array2d[0].length, y: this.array2d.length} : {x: 0, y: 0};
  }

  get sizeToString() {
    return JSON.stringify(this.size);
  }

  /**
   * Check x,y Position in range od 2d-array.
   * @param x x position
   * @param y y position
   * @returns {boolean}
   */
  inRange(x, y) {
    if (y < 0 || y >= this.array2d.length)
      return false;

    const rowLine = this.array2d[0];
    return x < rowLine.length && x >= 0;
  }

  /**
   * Get the value of 2d-array.
   * @param x x position
   * @param y y position
   * @returns {any|undefined}
   */
  get(x, y) {
    return this.inRange(x, y) ? this.array2d[y][x] : undefined;
  }

  /**
   * Get the value of 2d-array.
   * @param x x position
   * @param y y position
   * @value Wert
   * @returns {any|undefined}
   */
  set(x, y, value) {
    if (this.inRange(x, y) === false)
      return;
    this.array2d[y][x] = value;
  }

  /**
   * Get the row array back.
   * @param x rowIdx
   * @returns {any[]|undefined}
   */
  getRowLine(x) {
    if (this.inRange(0, x) === false)
      return undefined;
    return this.array2d[x];
  }

  /**
   * Get the column array back.
   * @param column column
   * @returns {any[]|undefined}
   */
  getColumnLine(y) {
    if (this.inRange(y, 0) === false)
      return undefined;

    const columnLine = [];
    for (const rowLine of this.array2d) {
      columnLine.push(rowLine[y]);
    }
    return columnLine;
  }

  getAllNeighbors(x, y, filler) {
    const neighbors = [];
    neighbors.push(this.get(x, y - 1) || filler); // top
    neighbors.push(this.get(x + 1, y - 1) || filler);
    neighbors.push(this.get(x + 1, y) || filler); // right
    neighbors.push(this.get(x + 1, y + 1) || filler);
    neighbors.push(this.get(x, y + 1) || filler); // bottom
    neighbors.push(this.get(x - 1, y + 1) || filler);
    neighbors.push(this.get(x - 1, y) || filler); // left
    neighbors.push(this.get(x - 1, y - 1) || filler);
    return neighbors;
  }

  fillRowLine(x, rowLine) {
    if (this.inRange(0, x) === false)
      return;
    this.array2d[x] = rowLine;
  }

  fillColumnLine(column, columnLine) {
    if (this.inRange(column, 0) === false)
      return;
    for (let y = 0; y < this.array2d.length; y += 1) {
      const char = columnLine[y];
      this.set(column, y, char);
    }
  }

  static initArray(size, char) {
    return new Array(size).fill(char);
  }

  /**
   * Get the line array as string back.
   * @param line line array
   * @returns {string}
   */
  static lineToString(line) {
    let result = '';
    line.forEach(char => result += char);
    return result;
  }
}

export default Array2d;