import { Component } from '@angular/core';
import { UploadService } from './upload.service';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [ProgressBarComponent],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  file!: File | null;
  progress = 0;
  error = '';
  uploading = false;
  completed = false;

  constructor(private service: UploadService) { }

  onFileSelected(event: any) {
    console.log(event.target.files)
    this.file = event.target.files[0];
  }

  onSubmitClick() {
    if (!this.file) return;

    this.uploading = true;

    this.service.uploadFile(this.file).subscribe(progress => {
      if (progress === 100) {
        this.uploading = false;
        this.completed = true;
        this.file = null;
      }
      this.progress = progress;
    })
  }
}
