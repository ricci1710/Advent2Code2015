import Day01 from "./Day01";
import {MOCK_DEMO_DATA_DAY_01} from "./DemoData01";
import {MOCK_LIFE_DATA_DAY_01} from "./LifeData01";

describe('Test Class DayXX', () => {
  test('constructor', () => {
    const day01 = new Day01();
    expect(day01).toBeDefined();
  });
  test('calcPartOne with demo data', () => {
    const storeData = MOCK_DEMO_DATA_DAY_01.split('');
    const day01 = new Day01(storeData);
    const result = day01.calcPartOne();
    expect(result).toEqual(3);
  });
  test('calcPartOne with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_01.split('');
    const day01 = new Day01(storeData);
    const result = day01.calcPartOne();
    expect(result).toEqual(138);
  });
  test('calcPartTwo with demo data', () => {
    const storeData = '()())'.split('');
    const day01 = new Day01(storeData);
    const result = day01.calcPartTwo();
    expect(result).toEqual(5);
  });
  test('calcPartTwo with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_01.split('');
    const day01 = new Day01(storeData);
    const result = day01.calcPartTwo();
    // You have completed Day 1!
    expect(result).toEqual(1771);
  });
});
