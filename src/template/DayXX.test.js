import DayXX from './DayXX';

describe('Test Class DayXX', () => {
  const demoDay = new DayXX('XX', true);
  const lifeDay = new DayXX('XX', false);

  test('constructor dayXX', () => {
    expect(demoDay).toBeDefined();
    expect(lifeDay).toBeDefined();
  });
  test('calcPartOne with demo data dayXX', () => {
    const result = demoDay.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartOne with life data dayXX', () => {
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with demo data dayXX', () => {
    const result = demoDay.calcPartTwo();
    expect(result).toEqual(-1);
  });
  test('calcPartTwo with life data dayXX', () => {
    const result = lifeDay.calcPartTwo();
    // You have completed Day XX!
    expect(result).toEqual(-1);
  });
});
