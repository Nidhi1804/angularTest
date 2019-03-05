import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DetailService {

  uri = 'http://localhost:4000/users';

  constructor(private http: HttpClient) { }

  saveDetail(obj) {
    return this.http.post(`${this.uri}/add`,obj);
  }

  findDetail(obj){
    return this.http.get(`${this.uri}/find/`+obj);
  }

  updateDetail(obj){
    return this.http.post(`${this.uri}/update/`+obj.time,obj);
  }

}
