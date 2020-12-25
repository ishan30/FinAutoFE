import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditDataComponent } from './component/edit-data/edit-data.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PdfUploadComponent } from './component/pdf-upload/pdf-upload.component';
import { UploadComponent } from './component/upload/upload.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: PdfUploadComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'edit', component: EditDataComponent },


  // EditDataComponent

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
