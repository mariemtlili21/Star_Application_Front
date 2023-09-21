import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleUserServiceService {

  private baseUrl = 'http://localhost:8083/signup'; // Url backend de register
  


  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, userData);
  }

  loginUser(loginData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signin`, loginData); // Utilisation du nouvel endpoint d'authentification
  }
}
