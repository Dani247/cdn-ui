import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileDetails } from './models';

const baseUrl = 'https://cdn.primerocomer.com.mx'

@Injectable({
  providedIn: 'root'
})
export class FileTreeService {
  constructor(private http: HttpClient) { }
  
  getAllFiles() {
    return this.http.get<FileDetails[]>(`${baseUrl}/files`)
  }
}
