import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDto } from '../dto/post.dto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  public list(): Observable<unknown> {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  public detail(id: string): Observable<PostDto> {
    return this.http.get<PostDto>(`${this.apiUrl}/posts/${id}`);
  }
}
