import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  
  login(correo, password){
    console.log(correo, password);
    let data = {
      correo,
      password
    }
    this.loginService.signIn(data).subscribe((resp: any) =>{
      console.log(resp);
      let token = resp.token;
      if(resp.code == 200 && resp.token){
        localStorage.setItem("token", token);
      }else{
        console.log("ERROR");
      }
    });
  }
}
