import { Routes } from '@angular/router';
import { UploadComponent } from './components/upload/upload.component';
import { FileTreeComponent } from './components/file-tree/file-tree.component';

export const routes: Routes = [
    {
        path: '',
        component: FileTreeComponent
    },
    {
        path: "upload",
        component: UploadComponent
    }
];
