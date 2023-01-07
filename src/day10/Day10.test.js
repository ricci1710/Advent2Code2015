import Day10 from "./Day10";

describe('Test Class Day10', () => {
  const demoDay = new Day10(10, true, 5);
  let lifeDay = new Day10(10, false, 40);

  test('constructor', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test('calcPartOne with demo data', () => {
    const result = demoDay.calcPartOne();
    expect(result).toEqual('312211');
  });
  test('calcPartOne with life data', () => {
    const result = lifeDay.calcPartOne();
    expect(result.length).toEqual(360154);
  });
  test('calcPartTwo with life data', () => {
    let lifeDay = new Day10(10, false, 50);
    const result = lifeDay.calcPartTwo();
    // You have completed Day XX!
    expect(result.length).toEqual(5103798);
  });
});
