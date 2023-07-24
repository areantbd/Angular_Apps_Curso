import { Component } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  tasksList: Task[] = []
  taskName = ""
  
  addTask() {
    const task: Task = {
      name: this.taskName,
      state: false
    }
    if (this.taskName !== "") {
      this.tasksList.push(task)
    }

    this.taskName = ""
  }

  deleteTask(index: number): void {
    this.tasksList.splice(index, 1)
  }

  updateTask(task: Task, i: number): void {
    this.tasksList[i].state = !task.state
  }

 }
  