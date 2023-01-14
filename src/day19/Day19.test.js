import Day19 from './Day19';

describe('Test Class Day19', () => {
  const demoDay = new Day19('19', true);
  const lifeDay = new Day19('19', false);

  test.skip('constructor day19', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test.skip('calcPartOne with demo data day19 -> HOH', () => {
    const result = demoDay.calcPartOne();
    expect(result).toEqual(4);
  });
  test.skip('calcPartOne with demo data day19 -> HOHOHO', () => {
    demoDay.sequence = 'HOHOHO';
    const result = demoDay.calcPartOne();
    expect(result).toEqual(7);
  });
  test.skip('calcPartOne with life data day19', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(518);
  });
  test('calcPartTwo with demo data day19 -> HOH', () => {
    demoDay.moleculesTable = ['e => H', 'e => O', 'H => HO', 'H => OH', 'O => HH'];
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(3);
  });
  test('calcPartTwo with demo data day19 -> HOHOHO', () => {
    demoDay.sequence = 'HOHOHO';
    const result = demoDay.calcPartOne();
    expect(result).toEqual(7);
  });
  test.skip('calcPartTwo with life data day19', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day 19!
    expect(result).toEqual(-1);
  });
});
