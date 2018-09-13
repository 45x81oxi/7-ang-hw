import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private auth: AuthService,
    public toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.auth.isAuth){
      this.auth.loginAuthEvent.subscribe((res: string)=> {
        this.router.navigate(['/']);
      });
    }
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(8), Validators.required])
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) return;
    this.auth.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((res: boolean) => {
      if (res) {
        this.router.navigate(['/']);
      }
    },({error,status}) => {
      this.toastr.error(error,status);
     });
  }
}
