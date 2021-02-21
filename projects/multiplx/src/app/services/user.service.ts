import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    api: any = environment.api;

    constructor(private http: HttpClient) { }

    getAllUsers(termo: string = '', status: any): Observable<any> {
        let data: any = {}

        if (termo) {
            data.termo = termo
        }

        if (status != null) {
            data.status = status
        }

        return this.http.get<any>(`${this.api.mpx}users`, { params: data }).pipe(map((response) => response));
    }

    save(data): Observable<any> {
        return this.http.post<any>(`${this.api.mpx}users`, data).pipe(map((response) => response));
    }

    update(user_id, data): Observable<any> {

        return this.http.put<any>(`${this.api.mpx}users/${user_id}`, data).pipe(map((response) => response));
    }
}
