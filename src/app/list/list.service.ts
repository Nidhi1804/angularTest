import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListService {

  uri = 'http://localhost:4000/users';

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(`${this.uri}/`);
  }
}
