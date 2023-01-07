import Day12 from './Day12';

describe('Test Class Day12', () => {
  const demoDay = new Day12(12, true);
  const lifeDay = new Day12(12, false);

  test('constructor', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test('calcPartOne with demo data', () => {
    const result = demoDay.calcPartOne();
    expect(result).toEqual(33);
  });
  test('calcPartOne with life data', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(191164);
  });
  test('calcPartTwo with demo data', () => {
    const result = demoDay.calcPartTwo();
    // You have completed Day XX!
    expect(result).toEqual(16);
  });
  test('calcPartTwo with life data', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day XX!
    expect(result).toEqual(-1);
  });
});
