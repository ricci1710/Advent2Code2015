import Day25 from './Day25';

describe('Test Class Day25', () => {
  const demoDay = new Day25('25', true);
  const lifeDay = new Day25('25', false);

  test('constructor day25', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test('nextCode day25', () => {
    const result = demoDay.getNextCode(demoDay.firstCode);
    expect(result).toEqual(31916031);
  });
  test('calcPartOne with demo data day25', () => {
    const result = demoDay.calcPartOne();
    expect(result).toEqual(24659492);
  });
  test.skip('calcPartOne with life data day25', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(-1);
  });
  test.skip('calcPartTwo with demo data day25', () => {
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(-1);
  });
  test.skip('calcPartTwo with life data day25', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day 25!
    expect(result).toEqual(-1);
  });
});
