import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Articles } from './home/article.model';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  API_KEY: string = '9e0376f782f34427966af271a7cbfaa4'
  url: string = 'http://newsapi.org/v2/everything?qInTitle=';
  params: string = '&inflation&from=2020-06-01&sortBy=relevancy&apiKey='
  constructor(private http: HttpClient) { }

  getNewsServiceByCountry(country: string) {
    return this.http.get(this.url + country + this.params + this.API_KEY);
  }
}
