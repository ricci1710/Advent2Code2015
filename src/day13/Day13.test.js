import Day13 from './Day13';

describe('Test Class Day13', () => {
  const demoDay = new Day13('13', true);
  const lifeDay = new Day13('13', false);

  test('constructor day13', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test('calcPartOne with demo data day13', () => {
    const result = demoDay.calcPartOne();
    expect(result).toEqual(330);
  });
  test('calcPartOne with life data day13', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with demo data day13', () => {
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with life data day13', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day 13!
    expect(result).toEqual(-1);
  });
});
