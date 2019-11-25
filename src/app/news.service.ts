import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient,
  ) { }

  getNews(): Observable<any[]> {
    return this.http.get<any[]>('https://1din-230.apitoolz.com/api/news?rows=10');
  }

  getNewsDetail(id: string): Observable<any> {
    return this.http.get<any>('https://1din-230.apitoolz.com/api/news/'+id);
  }
}
