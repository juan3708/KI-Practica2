import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url:string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/api'
   }

   getNoticias(){
     return this.http.get(this.url+'/noticia/listar');
   }
   getCategorias(){
     return this.http.get(this.url+'/categoria/listar');
   }
}
