import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pagination } from '../dto/pagination.dto';
import { PostDto } from '../dto/post.dto';

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
    order: 'asc' | 'desc' = 'asc'
  ): Observable<Pagination<PostDto>> {
    return this.http
      .get<PostDto[]>(`${this.apiUrl}/posts?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`, {
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

  public detail(id: string): Observable<PostDto> {
    return this.http.get<PostDto>(`${this.apiUrl}/posts/${id}`);
  }
}
