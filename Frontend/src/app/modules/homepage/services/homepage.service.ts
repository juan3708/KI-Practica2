import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//servicios de modulo about (nosotros)
@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  
  //variable url que hace referencia a la ruta principal de la api
  url:string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/api'
  }
//funciones que nos retornan la ruta de api + el servicio que necesitamos
  getTextos(){
    return this.http.get(this.url+'/texto/listar');
  }
  getSolutions_Services(){
    return this.http.get(this.url+'/soluciones_servicios/listar');
  }
}
