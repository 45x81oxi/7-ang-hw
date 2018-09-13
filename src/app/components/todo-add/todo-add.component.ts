import { Component, OnInit } from '@angular/core';
import { TodosService } from "../../services/todos.service";
import { Router } from "@angular/router";
import { Todo } from "../../models/Todo";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  addForm: FormGroup;
  todos: Todo[];

  private _todo: Todo= {
    userId: 1,
    id: 201,
    title: '',
    completed: false
  };

  constructor(
    public todoService: TodosService,
    public router: Router,
    public toastr: ToastrService,
    public spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();

    this.addForm = new FormGroup({
      userId: new FormControl('', [ Validators.pattern("^[1-9][0-9]*$"), Validators.required]),
      id: new FormControl({value: `${this._todo.id}`, disabled: true}),
      title: new FormControl('',[Validators.minLength(3), Validators.required]),
      completed: new FormControl('', Validators.required)
    });

    this.todoService.getTodos().subscribe((data: Todo[]) => {
      this.todos = data;

    }, error => {
      this.toastr.error(error.message, 'Error');
    }, () => {
      this.spinner.hide();
    });
  }


  onSubmit(): void {
    if (this.addForm.invalid) return;

    this.spinner.show();

    const newTodo = {
      userId: this.addForm.controls.userId.value,
      id: this.addForm.controls.id.value,
      title: this.addForm.controls.title.value,
      completed: this.addForm.controls.completed.value
    }

    this.todoService.addTodo(newTodo).subscribe(() => {
      this.todos.unshift(newTodo);
      this.toastr.success('Todo successfully added', 'Message');
      this.router.navigate(['/']);
    }, error => {
      this.toastr.error(error.message, 'Error');
    }, () => {
      this.spinner.hide();
    });
  }

}
