export interface PostDto {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostInputDto = Omit<PostDto, 'id'>;
