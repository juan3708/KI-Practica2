import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//servicios de modulo about (nosotros)
@Injectable({
  providedIn: 'root'
})
export class AboutService {

  //variable url que hace referencia a la ruta principal de la api
  url:string;
  constructor(private http:HttpClient) { 
    this.url = 'http://localhost:3000/api'
  }
  getTextos(){
    return this.http.get(this.url+'/texto/listar'); //función getTextos() que nos retorna la ruta de api + el servicio que necesitamos
  }
}