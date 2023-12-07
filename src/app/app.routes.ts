import { Routes } from '@angular/router';
import { UploadComponent } from './components/upload/upload.component';
import { FileTreeComponent } from './components/file-tree/file-tree.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: FileTreeComponent,
        canActivate: [authGuard]
    },
    {
        path: "upload",
        component: UploadComponent,
        canActivate: [authGuard]
    }
];
