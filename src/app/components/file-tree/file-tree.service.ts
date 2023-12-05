import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileDetails } from './models';

const baseUrl = 'http://primerocomer.com.mx:8003'

@Injectable({
  providedIn: 'root'
})
export class FileTreeService {
  constructor(private http: HttpClient) { }
  
  getAllFiles() {
    return this.http.get<FileDetails[]>(`${baseUrl}/files`)
  }
}
