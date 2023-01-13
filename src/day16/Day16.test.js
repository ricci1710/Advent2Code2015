import Day16 from './Day16';

describe('Test Class Day16', () => {
  const lifeDay = new Day16('16', false);

  test('constructor day16', () => {
    expect(lifeDay).toBeDefined();
  });
  test('calcPartOne with life data day16', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(40);
  });
  test('calcPartTwo with life data day16', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day 16! 477^ 129v
    expect(result).toEqual(241);
  });
});
