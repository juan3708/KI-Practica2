import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
  url:string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3000/api'
  }

  getUsuarios(){
    return this.http.get(this.url+'/usuario/listar');
  }
}