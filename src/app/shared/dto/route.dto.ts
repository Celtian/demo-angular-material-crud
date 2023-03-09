interface APP<T> {
  POSTS: T;
  NOT_FOUND: T;
}

export interface RouteDefinitionDto<T> {
  APP: APP<T>;
}
