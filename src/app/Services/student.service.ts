import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private httpClient:HttpClient) { }

  // Get data
  GetStudentData():Observable<any> {
    return this.httpClient.get('https://jsonblob.com/api/jsonblob/1208026950785687552');
  }
}
