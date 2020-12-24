import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finAuto';
  // pdfSrc: string = '/pdf-test.pdf';
  // upload(event) {
  //   this.file = event.target.files[0];
  // }
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  page = 1;
  totalPages: number;
  isLoaded = false;

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

  onFileSelected() {
    const img: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };
  
      reader.readAsArrayBuffer(img.files[0]);
    }
  }
}
