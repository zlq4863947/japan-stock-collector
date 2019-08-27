import { getStockList } from './get-stock-list';

describe('getStockList function', () => {
  it('should request getStockList', async () => {
    const res = await getStockList();
    expect(res).toBeDefined();
  });
});
