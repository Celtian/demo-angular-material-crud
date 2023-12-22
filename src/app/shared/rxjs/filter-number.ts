import { MonoTypeOperatorFunction, filter } from 'rxjs';

export const filterNumber = (): MonoTypeOperatorFunction<number | null> => {
  return (input$) => {
    return input$.pipe(filter((id) => typeof id === 'number'));
  };
};
