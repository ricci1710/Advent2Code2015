import Day16 from './Day16';

describe('Test Class Day16', () => {
  const demoDay = new Day16('16', true);
  const lifeDay = new Day16('16', false);

  test('constructor day16', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test('calcPartOne with demo data day16', () => {
    const result = demoDay.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartOne with life data day16', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with demo data day16', () => {
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with life data day16', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day 16!
    expect(result).toEqual(-1);
  });
});
