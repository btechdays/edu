import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  url = environment.apiUrl;
  changeText: any = false;
  SERVER_URL: string;
  imageToShow: any;
  constructor(private httpClient: HttpClient,
    private companyService: CompanyService,
    private sanitizer: DomSanitizer,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getImageFromService();
  }

  doFileInput(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.companyService.uploadDocument(file).subscribe((response) => {
        console.log(response);
        this.getImageFromService();
      })
      // this.productForm.get('profile').setValue(file);

      // let headers = new HttpHeaders();
      // headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
      // headers = headers.append('Authorization', localStorage.getItem('Bearer '+localStorage.getItem('token')));

      // console.log(headers);
      // this.SERVER_URL = this.url + "/company/uploadDocument?fileName=PROFILE";
      // const formData = new FormData();
      // formData.append('multipartFile', file);
      // // formData.append('Authorization', 'Bearer '+localStorage.getItem('token'));

      // this.httpClient.post<any>(this.SERVER_URL, formData,{headers}).subscribe(
      //   (response) => {
      //     console.log(response);
      //     // this.dialogRef.close();
      //     // this.onEditProduct.emit();
      //     // this.responseMessage = response.message;
      //     // this.snachbarService.openSnackBar(this.responseMessage, "success");
      //   },
      //   (error) => {
      //     console.log(error);
      //   //   if (error.error?.message) {
      //   //     this.responseMessage = error.error?.message;
      //   //   }
      //   //   else
      //   //     this.responseMessage = GlobalConstants.genericError;
      //   //   this.snachbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
      //   },
      // );
    }
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
      if (this.imageToShow == 'data:') {
        this.imageToShow = undefined
      }
      else {
        this.imageToShow = this.sanitizer.bypassSecurityTrustUrl(this.imageToShow);
      }
    }, false);

    if (image) {
      console.log(image);
      reader.readAsDataURL(image);
    }
  }

  getImageFromService() {
    // console.log(this.dialogData);
    //  this.isImageLoading = true;
    // var data = {
    //   filePath:this.dialogData.data.filePath
    // }
    this.companyService.getImage().subscribe(data => {
      //  console.log(data);
      this.createImageFromBlob(data);
      //  this.isImageLoading = false;
    }, error => {
      //  this.isImageLoading = false;
      console.log(error);
    });
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
