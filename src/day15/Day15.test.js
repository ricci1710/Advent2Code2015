import Day15 from './Day15';
import {combine} from "../utils/Uti";

describe('Test Class Day15', () => {
  const demoDay = new Day15('15', true);
  const lifeDay = new Day15('15', false);

  test('constructor day15', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test.skip('combine day15', () => {
    const h = combine([0, 0, 0, 0], 100, (arr) => {
      return true;
    });
    expect(h).toEqual(104060400);
  });
  test('calcPartOne with demo data day15', () => {
    const result = demoDay.calcPartOne();
    expect(result).toEqual(62842880);
  });
  test('calcPartOne with life data day15', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(222870);
  });
  test('calcPartTwo with demo data day15', () => {
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(57600000);
  });
  test('calcPartTwo with life data day15', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day 15!
    expect(result).toEqual(117936);
  });
});
