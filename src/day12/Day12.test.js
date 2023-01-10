import Day12 from './Day12';

describe('Test Class Day12', () => {
  const demoDay = new Day12(12, true);
  const lifeDay = new Day12(12, false);

  test.skip('constructor', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test.skip('calcPartOne with demo data', () => {
    const result = demoDay.calcPartOne();
    expect(result).toEqual(543);
  });
  test.skip('calcPartOne with life data', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(191164);
  });
  test('calcPartTwo with demo data 1', () => {
    demoDay.storeData = '[[1,"red",1], "red"]';
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(2);
    expect(demoDay.storeData).toEqual('[[1,1]]');
  });
  test('calcPartTwo with demo data 2', () => {
    demoDay.storeData = '[[1,"red",1, {"a":"red","f":50}], "red"]';
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(2);
    expect(demoDay.storeData).toEqual('[[1,1]]');
  });
  test('calcPartTwo with demo data 3', () => {
    demoDay.storeData = '[[1,{"a":1,"b":"violet","c":{"d": "violett","e": {"f":"red","g":50}, "h":1},"g":2}]]';
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(5);
    expect(demoDay.storeData).toEqual('[[1,{"a":1,"b":"violet","c":{"d":"violett","h":1},"g":2}]]');
  });
  test('calcPartTwo with demo data 4', () => {
    demoDay.storeData = '[[1,{"a":1,"b":"violet","c":{"d":["violett",{"e":"red","f":50},1]},"g":2}]]';
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(5);
    expect(demoDay.storeData).toEqual('[[1,{"a":1,"b":"violet","c":{"d":["violett",1]},"g":2}]]');
  });
  test('calcPartTwo with life data final', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day12!
    expect(result).toEqual(87842);
  });
});
