import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HomeComponent } from './component/home/home.component';
import { PdfUploadComponent } from './component/pdf-upload/pdf-upload.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { UploadComponent } from './component/upload/upload.component';
import { ProgressComponent } from './component/progress/progress.component';
import { EditDataComponent } from './component/edit-data/edit-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PdfUploadComponent,
    LoginComponent,
    HeaderComponent,
    UploadComponent,
    ProgressComponent,
    EditDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
     MatSliderModule,
     PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
