import { Component, OnInit } from '@angular/core';
import { TodosService } from "../../services/todos.service";
import { Todo } from "../../models/Todo";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todoId: string;
  todo: Todo;
  isReadOnly = true;
  editForm: FormGroup;

  constructor(
    public todoService: TodosService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public toastr: ToastrService,
    public spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();

    this.todoId = this.activatedRoute.snapshot.params['id'];
    this.todoService.getTodo(this.todoId).subscribe((data: Todo) => {
      this.todo = data;

      this.editForm = new FormGroup({
        userId: new FormControl({value: `${this.todo.userId}`, disabled: false}, Validators.required),
        id: new FormControl({value: `${this.todo.id}`, disabled: true}),
        title: new FormControl({value: `${this.todo.title}`, disabled: false}, Validators.required),
        completed: new FormControl({value: `${this.todo.completed}`, disabled: false}, Validators.required)
      });
    }, error => {
      this.toastr.error(error.message, 'Error');
    }, () => {
      this.spinner.hide();
    });
  }

  onEdit(): void {
    this.isReadOnly = false;
    const updtTodo = {
      userId: this.editForm.controls.userId.value,
      id: this.editForm.controls.id.value,
      title: this.editForm.controls.title.value,
      completed: this.editForm.controls.completed.value
    };
    this.todoService.updateTodo(updtTodo).subscribe(() => {
      this.router.navigate(['/']);
      this.toastr.success('Todo successfully edit', 'Message');
    }, error => {
      this.toastr.error(error.message, 'Error');
    });
  }

}
