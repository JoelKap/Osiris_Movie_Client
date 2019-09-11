import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class MovieGateway {
    private readonly endPoint = 'http://localhost:61930/Api/';

    constructor(private httpClient: HttpClient) {
    }

    async getMovie(name: string): Promise<any> {
        try {
            const headers: HttpHeaders = this.setUpHttpHeaderAndAssignToken();
            const params = new HttpParams({ fromString: 'name=' + name });
            const data = await this.httpClient.request('GET', this.endPoint + 'Movie/GetMovie/',
            { responseType: 'json', params, headers})
                .pipe(first()).toPromise();
            if (data) {
                return data;
            }
        } catch (error) {
            return error;
        }
    }

    async getSeries(name: string, season: string, episode: string): Promise<any> {
        try {
            const headers: HttpHeaders = this.setUpHttpHeaderAndAssignToken();
            const params = new HttpParams({ fromString: 'name=' + name + '&Season=' + season + '&Episode=' + episode });
            const data = await this.httpClient.request('GET', this.endPoint + 'Movie/GetSeriesByMultipleParameters/',
            { responseType: 'json', params, headers })
                .pipe(first()).toPromise();
            if (data) {
                return data;
            }
        } catch (error) {
            return error;
        }
    }

    private setUpHttpHeaderAndAssignToken(): HttpHeaders {
        const token = localStorage.getItem('token');
        return new HttpHeaders().set('Authorization', 'Bearer ' + token);
    }
}
