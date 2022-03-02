import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  url:string;
  constructor(private http:HttpClient) { 
    this.url = 'http://localhost:3000/api'
  }
  getMisionVision(){
    return this.http.get(this.url+'/texto/listar');
  }
}