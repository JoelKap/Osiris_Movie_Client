import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { LoginViewModel } from '../model/login-viewmodel';

@Injectable({
    providedIn: 'root'
})
export class LoginGateway {
    private readonly endPoint = 'http://localhost:61930/Api/';

    constructor(private httpClient: HttpClient) {
    }

    async login(login: LoginViewModel): Promise<any> {
        try {
            const data: any = await this.httpClient.post( this.endPoint + 'Login/UserLogin/', login)
                .pipe(first()).toPromise();
            if (data.token) {
                localStorage.setItem('token', data.token);
                return data.token;
            }
        } catch (error) {
            return error;
        }
    }
}
