import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  loading = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      name: new FormControl('', [
        Validators.pattern("[a-zA-Z]{3,16}"),
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }


  onSubmit(): void {
    if (this.signupForm.invalid) return;

    this.spinner.show();
    this.loading = true;
    this.auth.signup(this.signupForm.value.email, this.signupForm.value.name, this.signupForm.value.password).subscribe((data: boolean) => {
      if (data) {
        this.toastr.success('Registration successful', 'Success');
        this.router.navigate(['/']);
        this.spinner.hide();
      }
    }, error => {
      this.toastr.error(error.error, 'Error');
      this.loading = false;
      this.spinner.hide();
    });
  }

}
