import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public archivos: any = [];
  public previsualizacion:string;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  capturarFile(event): any {   
    let archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen:any) =>{
        this.previsualizacion = imagen.base;
    });
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })

}
