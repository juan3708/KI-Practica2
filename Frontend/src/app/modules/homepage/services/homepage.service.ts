import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  url:string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/api'
  }

  getTextos(){
    return this.http.get(this.url+'/texto/listar');
  }
  getSolutions_Services(){
    return this.http.get(this.url+'/soluciones_servicios/listar');
  }
}
