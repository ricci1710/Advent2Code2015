import Day06 from "./Day06";
import {MOCK_DEMO_DATA_DAY_XX} from "./DemoData06";
import {MOCK_LIFE_DATA_DAY_XX} from "./LifeData06";

describe('Test Class Day05', () => {
  test('constructor', () => {
    const day = new Day06();
    expect(day).toBeDefined();
  });
  test('calcPartOne with demo data', () => {
    const storeData = MOCK_DEMO_DATA_DAY_XX.split('\n');
    const day = new Day06(storeData);
    const result = day.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartOne with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_XX.split('\n');
    const day = new Day06(storeData);
    const result = day.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with demo data', () => {
    const storeData = MOCK_DEMO_DATA_DAY_XX.split('\n');
    const day = new Day06(storeData);
    const result = day.calcPartTwo();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_XX.split('\n');
    const day = new Day06(storeData);
    const result = day.calcPartTwo();
    // You have completed Day XX!
    expect(result).toEqual(-1);
  });
});
