import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  private httpbase = 'https://api.github.com/users/';

  data: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  getData(name: string): Observable<object> {
    return this.http.get(this.httpbase + name);
  }
}
