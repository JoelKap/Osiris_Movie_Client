import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class MovieGateway {

    constructor(private httpClient: HttpClient) {
    }

    async getMovie(name: string): Promise<any> {
        try {
            const params = new HttpParams({ fromString: 'name=' + name });
            const token = localStorage.getItem('token');
            const headers: HttpHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + token);
            const data = await this.httpClient.request('GET', 'http://localhost:61930/Api/Movie/GetMovie/',
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
            const params = new HttpParams({ fromString: 'name=' + name + '&Season=' + season + '&Episode=' + episode });
            const token = localStorage.getItem('token');
            const headers: HttpHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + token);
            const data = await this.httpClient.request('GET', 'http://localhost:61930/Api/Movie/GetSeriesByMultipleParameters/',
            { responseType: 'json', params, headers })
                .pipe(first()).toPromise();
            if (data) {
                return data;
            }
        } catch (error) {
            return error;
        }
    }
}
