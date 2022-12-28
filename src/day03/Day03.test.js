import Day03 from "./Day03";
import {MOCK_DEMO_DATA_DAY_03} from "./DemoData03";
import {MOCK_LIFE_DATA_DAY_03} from "./LifeData03";

describe('Test Class Day03', () => {
  test('constructor', () => {
    const day03 = new Day03();
    expect(day03).toBeDefined();
  });
  test('calcPartOne with demo data', () => {
    const storeData = MOCK_DEMO_DATA_DAY_03.split('\n');
    const day03 = new Day03(storeData);
    const result = day03.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartOne with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_03.split('\n');
    const day03 = new Day03(storeData);
    const result = day03.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with demo data', () => {
    const storeData = MOCK_DEMO_DATA_DAY_03.split('\n');
    const day03 = new Day03(storeData);
    const result = day03.calcPartTwo();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_03.split('\n');
    const day03 = new Day03(storeData);
    const result = day03.calcPartTwo();
    // You have completed Day XX!
    expect(result).toEqual(-1);
  });
});
