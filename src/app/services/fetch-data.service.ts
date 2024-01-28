import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  private readonly http = inject(HttpClient);

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
