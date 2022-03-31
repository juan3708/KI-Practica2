import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private headers = new HttpHeaders(
    {  'Content-Type':  'application/json' }
  );
  
  url:string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3000/api'
  }
  
  signIn(data,){
    let token = localStorage.getItem("token");
    let authorization = "Bearer "+ token;
    let requireHeaders = new HttpHeaders(
      {  'Content-Type':  'application/json', 
         'Authorization': authorization
      }
    );
    return this.http.post(this.url+'/usuario/login', data, {headers: requireHeaders});
   }
}
