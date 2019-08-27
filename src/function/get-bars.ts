import Axios from 'axios';
import * as iconv from 'iconv-lite';

import { Bar, Endpoints } from '../types';

export async function getBars(code: number, year?: number): Promise<Bar[]> {
  const params = new URLSearchParams();
  params.append('code', `${code}`);
  params.append('year', `${year ? year : new Date().getFullYear()}`);
  const res = await Axios.post(Endpoints.GetBars, params, { responseType: 'arraybuffer' });
  const data = iconv.decode(res.data, 'Shift_JIS') as string;
  const dataArr = data
    .replace(/"/g, '')
    .split('\n')
    .slice(2);

  return dataArr.map((o: string) => {
    const arr = o.split(',');

    return {
      time: arr[0],
      open: +arr[1],
      high: +arr[2],
      low: +arr[3],
      close: +arr[4],
      volume: +arr[5],
    };
  });
}
