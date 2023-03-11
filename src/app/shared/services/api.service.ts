import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pagination } from '../dto/pagination.dto';
import { ExpandedPostDto, PostDto, PostInputDto } from '../dto/post.dto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  public list(
    page = 1,
    limit = 5,
    sort: keyof PostDto = 'id',
    order: 'asc' | 'desc' = 'asc',
    query = ''
  ): Observable<Pagination<PostDto>> {
    const params = [`_limit=${limit}`, `_sort=${sort}`, `_order=${order}`];

    if (page > 0) {
      params.push(`_page=${page}`);
    }

    if (query) {
      params.push(`title_like=${query}`);
      // params.push(`body_like=${query}`);
      // params.push(`_q=${query}`);
    }

    return this.http
      .get<PostDto[]>(`${this.apiUrl}/posts?${params.join('&')}`, {
        observe: 'response',
      })
      .pipe(
        map((res) => {
          return {
            totalCount: Number(res.headers.get('x-total-count')) || 0,
            items: res.body || [],
          };
        })
      );
  }

  public detail(id: number): Observable<PostDto> {
    return this.http.get<PostDto>(`${this.apiUrl}/posts/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/posts/${id}`);
  }

  public patch(id: number, body: Partial<PostDto>): Observable<PostDto> {
    return this.http.patch<PostDto>(`${this.apiUrl}/posts/${id}`, body);
  }

  public create(post: PostInputDto): Observable<PostDto> {
    return this.http.post<PostDto>(`${this.apiUrl}/posts`, post);
  }

  public detailExpanded(id: number): Observable<ExpandedPostDto> {
    return this.http.get<ExpandedPostDto>(`${this.apiUrl}/posts/${id}?_expand=user`);
  }
}
