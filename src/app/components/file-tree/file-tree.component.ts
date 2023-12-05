import { Component, OnInit } from '@angular/core';
import { FileTreeService } from './file-tree.service';
import { Observable, of } from 'rxjs'
import { AsyncPipe, NgFor } from '@angular/common';
import { FileComponent } from '../file/file.component';

@Component({
  selector: 'app-file-tree',
  standalone: true,
  imports: [AsyncPipe, FileComponent],
  templateUrl: './file-tree.component.html',
  styleUrl: './file-tree.component.css'
})
export class FileTreeComponent {
  files$ = this.service.getAllFiles();

  constructor(private service: FileTreeService) {
  }

  // ngOnInit(): void {
  //   this.service.getAllFiles().subscribe(res => {
  //     console.log(res)
  //   })
  // }

}
