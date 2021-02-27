import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SinginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private roter: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  onSubmit(signin: NgForm) {
    let user = signin.value;
    const { email, password } = user;
    this.auth
      .signIn(email, password)
      .then((res) => {
        this.roter.navigateByUrl('/');
        this.toastr.success('SingIn SucceFully!');
      })
      .catch((err) => {
        console.log(err.message);
        this.toastr.error('SingIn Failed!');
      });
    console.log(signin.value);
  }
}
