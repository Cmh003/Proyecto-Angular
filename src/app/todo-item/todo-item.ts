import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'     
})
export class TodoItemComponent {
  @Input() todo: any;
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();

  onDelete() { this.delete.emit(this.todo.id); }
  onToggle() { this.toggle.emit(this.todo.id); }
}