import Day21 from './Day21';

describe('Test Class Day21', () => {
  const demoDay = new Day21('21', true);
  const lifeDay = new Day21('21', false);

  test('constructor day21', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test('calcPartOne with life data day21', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(91);
  });
  test('calcPartTwo with life data day21', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day 21!
    expect(result).toEqual(158);
  });
});
