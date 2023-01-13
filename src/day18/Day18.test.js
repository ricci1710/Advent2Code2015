import Day18 from './Day18';

describe('Test Class Day18', () => {
  const demoDay = new Day18('18', true);
  const lifeDay = new Day18('18', false);

  test('constructor day18', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test('calcPartOne with demo data day18', () => {
    const result = demoDay.calcPartOne(4);
    expect(result).toEqual(4);
  });
  test('calcPartOne with life data day18', () => {
    const result = lifeDay.calcPartOne(100);
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with demo data day18', () => {
    const result = demoDay.calcPartTwo(4);
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with life data day18', () => {
    const result = lifeDay.calcPartTwo(100);
    // You have completed Day 18!
    expect(result).toEqual(-1);
  });
});
