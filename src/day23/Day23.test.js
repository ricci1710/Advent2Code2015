import Day23 from './Day23';
import fs from "fs";

describe('Test Class Day23', () => {
  const demoDay = new Day23(23, true);
  const lifeDay = new Day23(23, false);

  test('constructor', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test('calcPartOne with demo data ', () => {
    const result = demoDay.calcPartOne();
    expect(result.a).toEqual(2);
  });
  test('calcPartOne with life data ', () => {
    const result = lifeDay.calcPartOne();
    expect(result.b).toEqual(170);
  });
  test('calcPartTwo with life data ', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day 23!
    expect(result.b).toEqual(247);
  });

  test('calcPartTwo with life data ', () => {
    const day = new Day23(23, true);
    day.storeData = fs.readFileSync(`./src/day23/ca.bin`, 'ascii').replaceAll('\r', '').split('\n');

    const result = lifeDay.calcPartTwo();
    // You have completed Day 23!
    expect(result.b).toEqual(247);
  });
});
