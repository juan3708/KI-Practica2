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
   
//funciones que nos retornan la ruta de api + el servicio que necesitamos
   getNoticias(){
     return this.http.get(this.url+'/noticia/listar');
   }
   getCategorias(){
     return this.http.get(this.url+'/categoria/listar');
   }
}
