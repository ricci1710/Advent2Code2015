import {copyFile, mkdir, readFile, writeFile} from 'node:fs/promises';
import fs from "fs";

class DayGenerator {
  dayNumber;
  templateFileNames = [];

  constructor(dayNumber) {
    this.dayNumber = dayNumber.length === 1 ? '0' + dayNumber : dayNumber;

    this.templateFileNames.push('DayXX.js');
    this.templateFileNames.push('DayXX.test.js');
    this.templateFileNames.push('DayXX_DE.md');
    this.templateFileNames.push('DayXX_EN.md');
    this.templateFileNames.push('DemoDataXX.bin');
    this.templateFileNames.push('LifeDataXX.bin');
  }

  async createDirectory(destinationPath) {
    if (fs.existsSync(destinationPath))
      return;
    await mkdir(destinationPath, { recursive: false });
  }

  getDestFileName(fileName) {
    return fileName.replace('XX', this.dayNumber);
  }

  async copyFile(fileName, srcPath, destPath) {
    const destFileName = this.getDestFileName(fileName);
    const srcNameAndPath = srcPath + fileName;
    const destNameAndPath = destPath + destFileName;

    if (fs.existsSync(destNameAndPath))
      return;

    await copyFile(srcNameAndPath, destNameAndPath);
  }

  get nameAndPaths() {
    const srcPath = './src/template/';
    const destPath = `./src/day${this.dayNumber}/`;

    return { srcPath, destPath };
  }

  async removeXX(fileName, destPath) {
    const destFileName = this.getDestFileName(fileName);
    let contents = await readFile(destPath + destFileName, { encoding: 'utf8' });
    contents = contents.replaceAll('XX', this.dayNumber.toString());
    const data = new Uint8Array(Buffer.from(contents));
    await writeFile(destPath + destFileName, data);
  }

  async generate() {
    let success = false;
    const { srcPath, destPath } = this.nameAndPaths;

    try {
      await this.createDirectory(destPath);

      this.templateFileNames.forEach(fileName => {
        this.copyFile(fileName, srcPath, destPath);
      });

      await this.removeXX(this.templateFileNames[0], destPath);
      await this.removeXX(this.templateFileNames[1], destPath);
      success = true;
    }
    catch (err) {
      console.error(err);
    }

    return success;
  }
}

export default DayGenerator;
