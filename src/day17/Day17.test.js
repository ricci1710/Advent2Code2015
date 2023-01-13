import Day17 from './Day17';

describe('Test Class Day17', () => {
  const demoDay = new Day17('17', true);
  const lifeDay = new Day17('17', false);

  test('constructor day17', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test.skip('calcPartOne with demo data day17', () => {
    const result = demoDay.calcPartOne(25);
    expect(result).toEqual(4);
  });
  test.skip('calcPartOne with life data day17', () => {
    const result = lifeDay.calcPartOne(150);
    expect(result).toEqual(654);
  });
  test.skip('calcPartTwo with demo data day17', () => {
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(3);
  });
  test.skip('calcPartTwo with life data day17', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day 17!
    expect(result).toEqual(-1);
  });
});
