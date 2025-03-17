import { Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { UploadPageComponent } from './upload-page/upload-page.component';

export const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'upload', component: UploadPageComponent },
];
