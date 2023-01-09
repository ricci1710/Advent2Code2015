import Day12 from './Day12';

describe('Test Class Day12', () => {
  const demoDay = new Day12(12, true);
  const lifeDay = new Day12(12, false);

  test('constructor', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test('calcPartOne with demo data', () => {
    const result = demoDay.calcPartOne();
    expect(result).toEqual(543);
  });
  test('calcPartOne with life data', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(191164);
  });
  test('calcPartTwo with demo data', () => {
    demoDay.storeData = '[[1,{"a":1,"b":"violet","c":{"d":["violett",{"e":"red","f":50},1]},"g":2}]]';
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(5);
  });
  // test('calcPartTwo with life data', () => {
  //   const result = lifeDay.calcPartTwo();
  //   // You have completed Day XX! 105116 to high
  //   expect(result).toEqual(105110);
  // });
});
