import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseURL = "https://auth.primerocomer.com.mx"
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  validateToken(token: string) {
    return this.http.get(`${baseURL}/validate/${token}`)
  }
}
