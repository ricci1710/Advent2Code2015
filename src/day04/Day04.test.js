import Day04 from "./Day04";
import {MOCK_DEMO_DATA_DAY_04} from "./DemoData04";
import {MOCK_LIFE_DATA_DAY_04} from "./LifeData04";

describe('Test Class DayXX', () => {
  test('constructor', () => {
    const day = new Day04();
    expect(day).toBeDefined();
  });
  test('calcPartOne with demo data', () => {
    const storeData = MOCK_DEMO_DATA_DAY_04.split('\n');
    const day = new Day04(storeData);
    const result = day.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartOne with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_04.split('\n');
    const day = new Day04(storeData);
    const result = day.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with demo data', () => {
    const storeData = MOCK_DEMO_DATA_DAY_04.split('\n');
    const day = new Day04(storeData);
    const result = day.calcPartTwo();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_04.split('\n');
    const day = new Day04(storeData);
    const result = day.calcPartTwo();
    // You have completed Day 04!
    expect(result).toEqual(-1);
  });
});
