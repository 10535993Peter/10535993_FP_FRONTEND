// import { Injectable } from '@angular/core';
// import { ApiService } from '../api-service/api.service';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';


// @Injectable({
//   providedIn: 'root'
// })

// export class UploadsService {

//   private api: ApiService;

//   constructor(api: ApiService) {
//     this.api = api;
//    }

//   addFiles(images: File) {
//     var arr = []
//     var formData = new FormData();
//     arr.push(images);

//     arr[0].forEach((item, i) => {
//       formData.append('avatar', arr[0][i]);
//     })

//     return this.http.post('http://localhost:4000/api/create-user', formData, {
//       reportProgress: true,
//       observe: 'events'
//     }).pipe(
//       catchError(this.errorMgmt)
//     )
//   }

//   errorMgmt(error: HttpErrorResponse) {
//     let errorMessage = '';
//     if (error.error instanceof ErrorEvent) {
//       // Get client-side error
//       errorMessage = error.error.message;
//     } else {
//       // Get server-side error
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     console.log(errorMessage);
//     return throwError(errorMessage);
//   }

// }