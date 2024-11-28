import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(userData: any): Observable<any> {
    return this.http.post('/api/signup', userData); // Backend API URL
  }

  login(credentials: any): Observable<any> {
    return this.http.post('/api/login', credentials); // Backend API URL
  }
}
