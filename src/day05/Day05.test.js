import Day05 from "./Day05";
import {MOCK_DEMO_DATA_DAY_05} from "./DemoData05";
import {MOCK_LIFE_DATA_DAY_05} from "./LifeData05";

describe('Test Class Day05', () => {
  test('constructor', () => {
    const day = new Day05();
    expect(day).toBeDefined();
  });
  test('calcPartOne with demo data', () => {
    const storeData = MOCK_DEMO_DATA_DAY_05.split('\n');
    const day = new Day05(storeData);
    const result = day.calcPartOne();
    expect(result).toEqual(3);
  });
  test('calcPartOne with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_05.split('\n');
    const day = new Day05(storeData);
    const result = day.calcPartOne();
    expect(result).toEqual(236);
  });
  test('calcPartTwo with demo data', () => {
    const storeData = MOCK_DEMO_DATA_DAY_05.split('\n');
    const day = new Day05(storeData);
    const result = day.calcPartTwo();
    expect(result).toEqual(1);
  });
  test('calcPartTwo with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_05.split('\n');
    const day = new Day05(storeData);
    const result = day.calcPartTwo();
    // You have completed Day 05!
    expect(result).toEqual(51);
  });
});
