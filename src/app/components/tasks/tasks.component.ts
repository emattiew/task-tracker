import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';
import { TaskItemComponent } from "../task-item/task-item.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = TASKS; // Ensure tasks is correctly populated from mock-tasks
  constructor() {
    console.log(this.tasks); // Log the tasks array to see if it's populated
  }
}
