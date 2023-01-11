import Day14 from './Day14';

describe('Test Class Day14', () => {
  const demoDay = new Day14('14', true);
  const lifeDay = new Day14('14', false);

  test.skip('constructor day14', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test('calcPartOne with demo data day14', () => {
    const result = demoDay.calcPartOne(1000);
    expect(result).toEqual(1120);
  });
  test.skip('calcPartOne with life data day14', () => {
    const result = lifeDay.calcPartOne(2503);
    expect(result).toEqual(-1);
  });
  test.skip('calcPartTwo with demo data day14', () => {
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(-1);
  });
  test.skip('calcPartTwo with life data day14', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day 14!
    expect(result).toEqual(-1);
  });
});
