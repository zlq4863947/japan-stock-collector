import { getBars } from './get-bars';

describe('getBars function', () => {
  it('should request http', async () => {
    const res = await getBars(1305);
    expect(res).toBeDefined();
    console.log(res);
  });
});
