import { Injectable } from '@angular/core';

import { LoginGateway } from '../gateway/login-gateway';
import { LoginViewModel } from '../model/login-viewmodel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private loginGateway: LoginGateway) { }

  login(login: LoginViewModel): Promise<any> {
    return this.loginGateway.login(login);
  }
}
