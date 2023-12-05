import { HttpClient, HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

const baseUrl = 'http://primerocomer.com.mx:8003'

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<number> {
    const formData = new FormData();
    formData.append('myFile', file);

    const req = new HttpRequest('POST', `${baseUrl}/upload`, formData, {
      reportProgress: true
    });

    return this.http.request(req).pipe(
      map(event => this.getEventMessage(event, file))
    );
  }

  private getEventMessage(event: HttpEvent<unknown>, file: File) {
    switch (event.type) {
      case HttpEventType.UploadProgress:
        // @ts-expect-error
        return Math.round(100 * event.loaded / event.total);
      case HttpEventType.Response:
        return 100; // File is completely uploaded
      default:
        return 0;
    }
  }
}
