import { RouteDefinitionDto } from '../dto/route.dto';

export const ROUTES: RouteDefinitionDto<string> = {
  APP: {
    POSTS: 'posts',
    NOT_FOUND: 'not-found',
  },
};
