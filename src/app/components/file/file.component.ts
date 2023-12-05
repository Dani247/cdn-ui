import { Component, Input } from '@angular/core';
import { FileDetails } from '../file-tree/models';
import { DatetimePipe } from '../../pipes/datetime.pipe';

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [DatetimePipe],
  templateUrl: './file.component.html',
  styleUrl: './file.component.css'
})
export class FileComponent {
  @Input({ required: true }) data!: FileDetails;

  downloadFile(data: FileDetails) {
    const baseUrl = 'http://primerocomer.com.mx:8003';
    const url = `${baseUrl}/download/${data.id}${data.extension}`;
    const fileName = data.originalname;

    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        const blobUrl = window.URL.createObjectURL(blob);
        link.href = blobUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch(err => {
        alert("error downloading file");
        console.error('Error in downloading file:', err);
      });
  }
}
