import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private http : HttpClient) { }

  apiCall(){
    return this.http.post('http://localhost:8080/HealthAppPro/v1/getTaskOfTheDay','{}');
  }
}
