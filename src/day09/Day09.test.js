import Day09 from "./Day09";

describe('Test Class Day09', () => {
  const demoDay = new Day09(9, true);
  const lifeDay = new Day09(9, false);

  test('constructor', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test('permutation', () => {
    const result = Day09.permutation(['London', 'Dublin', 'Belfast']);
    expect(result.length).toEqual(6);
  });
  test('calcPartOne with demo data', () => {
    const result = demoDay.calcPartOne();
    expect(demoDay.possibleRoutes.length).toEqual(6);
    expect(result).toEqual(605);
  });
  test('calcPartOne with life data', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with demo data', () => {
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with life data', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day XX!
    expect(result).toEqual(-1);
  });
});
