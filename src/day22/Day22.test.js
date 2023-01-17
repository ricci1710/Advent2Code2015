import Day22 from './Day22';

describe('Test Class Day22', () => {
  const demoDay = new Day22('22', true);
  const lifeDay = new Day22('22', false);

  test('constructor day22', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test('calcPartOne with demo data day22: Example 1', () => {
    const result = demoDay.calcPartOne({ hitPoints: 10, mana: 250 });
    expect(result).toEqual(-1);
  });
  test('calcPartOne with demo data day22: Example 2', () => {
    demoDay.boss = { hitPoints: 14, damage: 8 };
    const result = demoDay.calcPartOne({ hitPoints: 10, mana: 250 });
    expect(result).toEqual(-1);
  });
  test('calcPartOne with life data day22', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with demo data day22', () => {
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with life data day22', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day 22!
    expect(result).toEqual(-1);
  });
});
