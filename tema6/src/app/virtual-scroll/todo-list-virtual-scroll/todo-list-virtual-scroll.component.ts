import { Component } from '@angular/core';
import { TaskDTO } from '../../todo-list/task.dto';
import { TaskService } from '../../todo-list/task.service';

@Component({
  selector: 'app-todo-list-virtual-scroll',
  templateUrl: './todo-list-virtual-scroll.component.html',
  styleUrl: './todo-list-virtual-scroll.component.scss',
})
export class TodoListVirtualScrollComponent {
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
}
