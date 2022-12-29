import DayXX from "./DayXX";
import {MOCK_DEMO_DATA_DAY_XX} from "./DemoDataXX";
import {MOCK_LIFE_DATA_DAY_XX} from "./LifeDataXX";

describe('Test Class Day05', () => {
  test('constructor', () => {
    const day = new DayXX();
    expect(day).toBeDefined();
  });
  test('calcPartOne with demo data', () => {
    const storeData = MOCK_DEMO_DATA_DAY_XX.split('\n');
    const day = new DayXX(storeData);
    const result = day.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartOne with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_XX.split('\n');
    const day = new DayXX(storeData);
    const result = day.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with demo data', () => {
    const storeData = MOCK_DEMO_DATA_DAY_XX.split('\n');
    const day = new DayXX(storeData);
    const result = day.calcPartTwo();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_XX.split('\n');
    const day = new DayXX(storeData);
    const result = day.calcPartTwo();
    // You have completed Day XX!
    expect(result).toEqual(-1);
  });
});
