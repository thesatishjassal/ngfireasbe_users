import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private roter: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit(signup: NgForm) {
    let user = signup.value;
    const { email, password } = user;
    this.auth
      .singnUp(email, password)
      .then((res) => {
        this.roter.navigateByUrl('/');
        this.toastr.success('SingUp SucceFully!');
      })
      .catch((err) => {
        console.log(err.message);
        this.toastr.error('SingUp Failed!');
      });
    console.log(signup.value);
  }
}
