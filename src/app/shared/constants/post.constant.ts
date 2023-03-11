import { ExpandedPostDto, PostDto } from '../dto/post.dto';
import { DEFAULT_USER } from './user.constant';

export const DEFAULT_POST: PostDto = {
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum debitis eius et eaque beatae qui delectus ullam esse, quis distinctio fugit quod. Doloremque consequatur commodi id, corporis iure cum?',
  id: 1,
  title: 'Lorem ipsum dolor sit amet',
  userId: 1,
};

export const DEFAULT_EXPANDED_POST: ExpandedPostDto = {
  ...DEFAULT_POST,
  user: DEFAULT_USER,
};
