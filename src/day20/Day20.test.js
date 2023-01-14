import Day20 from './Day20';

describe('Test Class Day20', () => {
  const lifeDay = new Day20('20', false);

  test('constructor day20', () => {
    expect(lifeDay).toBeDefined();
  });
  test('calcPartOne with life data day20', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with life data day20', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day 20!
    expect(result).toEqual(-1);
  });
});
