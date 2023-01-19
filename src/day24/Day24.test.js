import Day24 from './Day24';

describe('Test Class Day24', () => {
  const demoDay = new Day24('24', true);
  const lifeDay = new Day24('24', false);

  test('constructor day24', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test('calcPartOne with demo data day24', () => {
    const result = demoDay.calcPartOne();
    expect(result).toEqual(99);
  });
  test('calcPartOne with life data day24', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with demo data day24', () => {
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with life data day24', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day 24!
    expect(result).toEqual(-1);
  });
});
