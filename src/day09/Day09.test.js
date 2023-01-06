import Day09 from "./Day09";

describe('Test Class Day09', () => {
  const demoDay = new Day09(-1, true);
  const lifeDay = new Day09(-1, false);

  test('constructor', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test('calcPartOne with demo data', () => {
    const result = demoDay.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartOne with life data', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with demo data', () => {
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with life data', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day XX!
    expect(result).toEqual(-1);
  });
});
