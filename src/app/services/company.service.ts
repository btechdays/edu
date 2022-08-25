import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  // uploadDocument(data:any){
  //   return this.httpClient.post(this.url+
  //     "/company/uploadDocument/",data,{
  //       headers: new HttpHeaders().set('Content-Type',"application/json")
  //     })
  // }

  uploadDocument(files: any): Observable<any> {
    console.log(files);
    let headers = new HttpHeaders({
      'Authorization': `Bearer ` + localStorage.getItem('token')
    });

    let tempUrl = this.url + '/company/uploadDocument?fileName=PROFILE';
    const formData = new FormData();
    formData.append('multipartFile', files);
    return this.httpClient.post(tempUrl, formData, { headers });
  }

  getImage(): Observable<Blob> {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ` + localStorage.getItem('token')
    });

    return this.httpClient.get(this.url + '/company/getImage?fileName=PROFILE', { responseType: "blob",headers });
  }
}
