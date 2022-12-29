import Day04 from "./Day04";
import {MOCK_DEMO_DATA_DAY_04} from "./DemoData04";
import {MOCK_LIFE_DATA_DAY_04} from "./LifeData04";

describe('Test Class Day04', () => {
  test('constructor', () => {
    const day = new Day04();
    expect(day).toBeDefined();
  });
  test('calcPartOne with demo data', () => {
    const day = new Day04(MOCK_DEMO_DATA_DAY_04);
    const result = day.calcPartOne();
    // md5('abcdef609043') = 000001dbbfa3a5c83a2d506429c7b00e
    expect(result).toEqual(609043);
  });
  test('calcPartOne with life data', () => {
    const day = new Day04(MOCK_LIFE_DATA_DAY_04);
    const result = day.calcPartOne();
    expect(result).toEqual(254575);
  });
  test('calcPartTwo with demo data', () => {
    const day = new Day04(MOCK_DEMO_DATA_DAY_04);
    const result = day.calcPartTwo();
    expect(result).toEqual(6742839);
  });
  test('calcPartTwo with life data', () => {
    const day = new Day04(MOCK_LIFE_DATA_DAY_04);
    const result = day.calcPartTwo();
    // You have completed Day 04!
    expect(result).toEqual(1038736);
  });
});
