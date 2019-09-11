import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class AuthService {
    helper = new JwtHelperService();

    constructor() { }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');

        const decodedToken = this.helper.decodeToken(token);
        const expirationDate = this.helper.getTokenExpirationDate(token);
        const isExpired = this.helper.isTokenExpired(token);
        return !isExpired;
    }
}
