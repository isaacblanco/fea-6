import { Component } from '@angular/core';
import { TaskDTO } from '../task.dto';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  tasks: TaskDTO[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }

  trackById(index: number, task: TaskDTO): number {
    return task.id; // Devuelve el id de la tarea como identificador único
  }

  completeTask(taskId: number): boolean {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      this.tasks[taskIndex].complete = true;
      return true;
    } else {
      return false;
    }
  }
}
