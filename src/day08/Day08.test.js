import Day08 from "./Day08";

import * as fs from 'fs';

describe('Test Class Day08', () => {
  test('constructor', () => {
    const day = new Day08();
    expect(day).toBeDefined();
  });
  test('aaa\"aaa', () => {
    const storeData = fs.readFileSync('./src/day08/DemoData08.bin', 'ascii').split('\r\n');
    const data = storeData[2];
    const utf8Length = Day08.getUtf8Length(data);
    expect(utf8Length).toEqual(10);
    const asciiLength = Day08.getAsciiLength(data);
    expect(asciiLength).toEqual(7);
  });
  test('\x27', () => {
    const storeData = fs.readFileSync('./src/day08/DemoData08.bin', 'ascii').split('\r\n');
    const data = storeData[3];
    const utf8Length = Day08.getUtf8Length(data);
    expect(utf8Length).toEqual(6);
    const asciiLength = Day08.getAsciiLength(data);
    expect(asciiLength).toEqual(1);
  });
  test('aaa\"aa\x27a', () => {
    const storeData = fs.readFileSync('./src/day08/DemoData08.bin', 'ascii').split('\r\n');
    const data = storeData[4];
    const utf8Length = Day08.getUtf8Length(data);
    expect(utf8Length).toEqual(14);
    const asciiLength = Day08.getAsciiLength(data);
    expect(asciiLength).toEqual(8);
  });
  test('byc\x9dyxuafof\\\xa6uf\\axfozomj\\olh\x6a', () => {
    const storeData = fs.readFileSync('./src/day08/DemoData08.bin', 'ascii').split('\r\n');
    const data = storeData[7];
    const utf8Length = Day08.getUtf8Length(data);
    expect(utf8Length).toEqual(43);
    const asciiLength = Day08.getAsciiLength(data);
    expect(asciiLength).toEqual(29);
  });
  test('"vvdnb\\x\\uhnxfw\"dpubfkxfmeuhnxisd"', () => {
    const storeData = fs.readFileSync('./src/day08/DemoData08.bin', 'ascii').split('\r\n');
    const data = storeData[9];
    const utf8Length = Day08.getUtf8Length(data);
    expect(utf8Length).toEqual(37);
    const asciiLength = Day08.getAsciiLength(data);
    expect(asciiLength).toEqual(32);
  });
  test('"ogvazaqy\"j\x73"', () => {
    const storeData = fs.readFileSync('./src/day08/DemoData08.bin', 'ascii').split('\r\n');
    const data = storeData[10];
    const utf8Length = Day08.getUtf8Length(data);
    expect(utf8Length).toEqual(17);
    const asciiLength = Day08.getAsciiLength(data);
    expect(asciiLength).toEqual(11);
  });
  test('"\\\xb1qso\"s"', () => {
    const storeData = fs.readFileSync('./src/day08/DemoData08.bin', 'ascii').split('\r\n');
    const data = storeData[11];
    const utf8Length = Day08.getUtf8Length(data);
    expect(utf8Length).toEqual(14);
    const asciiLength = Day08.getAsciiLength(data);
    expect(asciiLength).toEqual(7);
  });
  test('calcPartOne with demo data', () => {
    const storeData = fs.readFileSync('./src/day08/DemoData08.bin', 'ascii').split('\r\n').slice(0, 4);
    const day = new Day08(storeData);
    const result = day.calcPartOne();
    expect(result).toEqual(12);
  });
  test('calcPartOne with life data', () => {
    const storeData = fs.readFileSync('./src/day08/LifeData08.bin', 'ascii').split('\r\n');
    const day = new Day08(storeData);
    const result = day.calcPartOne();
    expect(result).toEqual(0);
  });
  // test('calcPartTwo with demo data', () => {
  //   const storeData = MOCK_DEMO_DATA_DAY_XX.split('\n');
  //   const day = new Day08(storeData);
  //   const result = day.calcPartTwo();
  //   expect(result).toEqual(-1);
  // });
  // test('calcPartTwo with life data', () => {
  //   const storeData = MOCK_LIFE_DATA_DAY_XX.split('\n');
  //   const day = new Day08(storeData);
  //   const result = day.calcPartTwo();
  //   // You have completed Day XX!
  //   expect(result).toEqual(-1);
  // });
});
