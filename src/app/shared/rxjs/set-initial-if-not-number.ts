import { MonoTypeOperatorFunction, tap } from 'rxjs';
import { DataSource } from '../classes/data-source';

export const setInitialIfNotNumber = <T>(dataSource: DataSource<T>): MonoTypeOperatorFunction<number | null> => {
  return (input$) => {
    return input$.pipe(
      tap((id) => {
        if (typeof id !== 'number') {
          dataSource.setData();
        }
      }),
    );
  };
};
