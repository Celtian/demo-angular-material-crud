import { ParamMap } from '@angular/router';
import { OperatorFunction, map } from 'rxjs';

export const getParamId = (): OperatorFunction<ParamMap, number | null> => {
  return (input$) => {
    return input$.pipe(
      map((params) => {
        const id = params.get('id');
        return id ? +id : null;
      }),
    );
  };
};
