import Day15 from './Day15';

describe('Test Class Day15', () => {
  const demoDay = new Day15('15', true);
  const lifeDay = new Day15('15', false);

  test('constructor day15', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test('calcPartOne with demo data day15', () => {
    const result = demoDay.calcPartOne();
    expect(result).toEqual(62842880);
  });
  test.skip('calcPartOne with life data day15', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(-1);
  });
  test.skip('calcPartTwo with demo data day15', () => {
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(-1);
  });
  test.skip('calcPartTwo with life data day15', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day 15!
    expect(result).toEqual(-1);
  });
});
