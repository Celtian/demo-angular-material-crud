import { lastValueFrom, of, toArray } from 'rxjs';
import { filterNumber } from './filter-number';

describe('filterNumber', () => {
  it('keeps numeric values and filters out null values', async () => {
    const values = await lastValueFrom(of(1, null, 2).pipe(filterNumber(), toArray()));

    expect(values).toEqual([1, 2]);
  });
});
