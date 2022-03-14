import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  
  private headers = new HttpHeaders(
    {  'Content-Type':  'application/json' }
  );
  
  url:string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/api'
   }
   
//funciones que nos retornan la ruta de api + el servicio que necesitamos
   getJobs(){
     return this.http.get(this.url+'/aviso/listar');
   }

   createPostulant(data){
    const option = {headers:this.headers};
    return this.http.post(this.url+'/postulante/crear', data, option);
   }
}
