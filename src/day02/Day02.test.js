import Day02 from "./Day02";
import { MOCK_DEMO_DATA_DAY_02} from "./DemoData02";
import { MOCK_LIFE_DATA_DAY_02} from "./LifeData02";

describe('Test Class Day02', () => {
  test('constructor', () => {
    const day01 = new Day02();
    expect(day01).toBeDefined();
  });
  test('calcPartOne with demo data', () => {
    const storeData = MOCK_DEMO_DATA_DAY_02.split('');
    const day01 = new Day02(storeData);
    const result = day01.calcPartOne();
    expect(result).toEqual(43);
  });
  test('calcPartOne with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_02.split('');
    const day01 = new Day02(storeData);
    const result = day01.calcPartOne();
    expect(result).toEqual(138);
  });
  test('calcPartTwo with demo data', () => {
    const storeData = '()())'.split('');
    const day01 = new Day02(storeData);
    const result = day01.calcPartTwo();
    expect(result).toEqual(5);
  });
  test('calcPartTwo with life data', () => {
    const storeData = MOCK_LIFE_DATA_DAY_02.split('');
    const day01 = new Day02(storeData);
    const result = day01.calcPartTwo();
    // You have completed Day 1!
    expect(result).toEqual(1771);
  });
});
