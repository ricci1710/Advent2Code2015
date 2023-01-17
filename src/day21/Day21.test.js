import Day21 from './Day21';

describe('Test Class Day21', () => {
  const demoDay = new Day21('21', true);
  const lifeDay = new Day21('21', false);

  test('constructor day21', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test.skip('calcPartOne with demo data day21', () => {
    const result = demoDay.calcPartOne({life: 8, damage: 5, armor: 5});
    expect(result).toEqual(2);
  });
  test('calcPartOne with life data day21', () => {
    const result = lifeDay.calcPartOne({life: 100});
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with demo data day21', () => {
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with life data day21', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day 21!
    expect(result).toEqual(-1);
  });
});
