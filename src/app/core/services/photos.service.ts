import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {PhotosModel} from '../../shared/model/photos/photo.model'

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

constructor(
  private _http: HttpClient
) { }

getPhotos(){
  return this._http.get<PhotosModel[]>(`${environment.apiUrl}/photos`);
}

}
