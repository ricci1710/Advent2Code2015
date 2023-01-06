import DayXX from "./DayXX";

describe('Test Class DayXX', () => {
  const demoDay = new DayXX(-1, true);
  const lifeDay = new DayXX(-1, false);

  test('constructor', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test('calcPartOne with demo data XX', () => {
    const result = demoDay.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartOne with life data XX', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with demo data XX', () => {
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with life data XX', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day XX!
    expect(result).toEqual(-1);
  });
});
