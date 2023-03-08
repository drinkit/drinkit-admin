import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from 'src/app/_services/account.service';
import {first} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  loading = false;

  constructor(
      private accountService: AccountService,
      private formBuilder: FormBuilder,
      private router: Router,
  ) {

  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.login(this.f['username'].value, this.f['password'].value)
        .pipe(first())
        .subscribe({
          next: () => {
            // get return url from query parameters or default to home page
            // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            this.router.navigateByUrl("/");
          },
          error: error => {
            console.log(error)
            // this.alertService.error(error);
            this.loading = false;
          }
        });
  }

}
