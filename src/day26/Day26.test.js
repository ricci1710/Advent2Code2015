import Day26 from './Day26';

describe('Test Class Day26', () => {

  test('calcPartOne with demo data dayXX', () => {
    const demoDay = new Day26('26', true);
    const result = demoDay.calcPartOne();
    expect(result).toEqual(2173);
  });

  test('calcPartOne with life data dayXX', () => {
    const lifeDay = new Day26('26', false);
    const result = lifeDay.calcPartOne();
    expect(result).toEqual(2173);
  });
});
