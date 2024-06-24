import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit{

 constructor(private taskservice: TaskService){}

 newTask:Task={description:" ",status:false};
 tasks:Task []= [];
 ngOnInit(): void {
     this.getalltasks();
 }

 createTask():void{
  this.taskservice.createtask(this.newTask).subscribe(()=>
  this.newTask={description:" ", status:false});//reset 
 }
 getalltasks(){
  this.taskservice.getalltasks().subscribe((tasks)=>{
    this.tasks=tasks
  })
 }
}
