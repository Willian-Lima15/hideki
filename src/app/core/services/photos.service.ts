import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private apiUrl = "http://localhost:3000/photos";

constructor(
  private _http: HttpClient
) { }

getPhotos(){

}

}
