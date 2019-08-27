import Axios from 'axios';

import { Endpoints, SymbolInfo } from '../types';

export async function getStockList(): Promise<SymbolInfo[]> {
  const res = await Axios.post(Endpoints.GetStockList);
  const dataArr = res.data.split('\n').slice(1);

  return dataArr.map((o: string) => {
    const arr = o.split(',');

    return {
      code: +arr[0],
      name: arr[1],
      marketName: arr[2],
      industry: arr[3],
      unit: +arr[4],
      isNikkei225: arr[5] === '1',
    };
  });
}
