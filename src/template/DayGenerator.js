import {copyFile, mkdir, readFile, writeFile} from 'node:fs/promises';
import fs from "fs";

class DayGenerator {
  dayNumber;
  templateFileNames = [];

  constructor(dayNumber) {
    this.dayNumber = dayNumber;

    this.templateFileNames.push('DayXX.js');
    this.templateFileNames.push('DayXX.test.js');
    this.templateFileNames.push('DayXX_DE.md');
    this.templateFileNames.push('DayXX_EN.md');
    this.templateFileNames.push('DemoDataXX.bin');
    this.templateFileNames.push('LifeDataXX.bin');
  }

  async generate() {
    let success = true;
    const sourcePath = './src/template/DayXX.js';

    let destinationPath;
    let fileName;

    if (this.dayNumber < 10) {
      fileName = `Day0${this.dayNumber}.js`;
      destinationPath = `./src/day0${this.dayNumber}/`;
    }
    else {
      fileName = `Day${this.dayNumber}.js`;
      destinationPath = `./src/day${this.dayNumber}/`;
    }

    try {
      if (!fs.existsSync(destinationPath))
        await mkdir(destinationPath, { recursive: false });

      if (!fs.existsSync(destinationPath + fileName))
        await copyFile(sourcePath, destinationPath + fileName);

      let contents = await readFile(destinationPath + fileName, { encoding: 'utf8' });
      contents = contents.replaceAll('XX', this.dayNumber.toString());
      const data = new Uint8Array(Buffer.from(contents));
      await writeFile(destinationPath + fileName, data);
      console.log(contents);
    }
    catch (err) {
      console.error(err);
      success = false;
    }

    return success;
  }
}

export default DayGenerator;
