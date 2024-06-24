import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiurl="http://localhost:8080/api/tasks";
  constructor(private httpClient : HttpClient) { }

 createtask(newTask: Task):Observable<Task>{
       return this.httpClient.post<Task>(this.apiurl, newTask);
 }
 getalltasks():Observable<Task[]>{
return this.httpClient.get<Task[]>(this.apiurl);
 }

}
