import { UserDto } from './user.dto';

export interface PostDto {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ExpandedPostDto extends PostDto {
  user: UserDto;
}

export type PostInputDto = Omit<PostDto, 'id'>;
