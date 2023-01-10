import DayGenerator from "./DayGenerator";

describe('Generate a Day', () => {
  test('generate', async () => {
    const dayGenerator = new DayGenerator('22');
    const success = await dayGenerator.generate();
    expect(success).toBeTruthy();
  });
});
