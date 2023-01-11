import Day14 from './Day14';

describe('Test Class Day14', () => {
  const demoDay = new Day14('14', true);
  const lifeDay = new Day14('14', false);

  test.skip('constructor day14', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test.skip('calcPartOne with demo data day14', () => {
    const result = demoDay.calcPartOne(1000);
    expect(result).toEqual(1120);
  });
  test.skip('calcPartOne with life data day14', () => {
    const result = lifeDay.calcPartOne(2503);
    expect(result).toEqual(2655);
  });
  test.skip('calcPartTwo with demo data day14', () => {
    const result = demoDay.calcPartTwo(1000);
    expect(result).toEqual(689);
  });
  test('calcPartTwo with life data day14', () => {
    const result = lifeDay.calcPartTwo(2503);
    // You have completed Day 14!
    expect(result).toEqual(1059);
  });
});
