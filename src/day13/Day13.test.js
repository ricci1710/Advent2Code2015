import Day13 from './Day13';

describe('Test Class Day13', () => {
  const demoDay = new Day13('13', true);
  const lifeDay = new Day13('13', false);

  test.skip('constructor day13', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test.skip('calcPartOne with demo data day13', () => {
    const result = demoDay.calcPartOne();
    expect(result).toEqual(330);
  });
  test.skip('calcPartOne with life data day13', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(733);
  });
  test('calcPartTwo with life data day13', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day 13!
    expect(result).toEqual(725);
  });
});
