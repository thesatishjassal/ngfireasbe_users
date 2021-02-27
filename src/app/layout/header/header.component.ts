import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  email: string | null | undefined;
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    auth.getUser().subscribe((user) => {
      this.email = user?.email;
    });
  }

  ngOnInit(): void {}

  async handleSingOut() {
    try {
      const res = await this.auth.singOut();
      this.router.navigateByUrl('/signin');
      this.toastr.info('Login Again to continue');
      this.email = null;
    } catch (err) {
      this.toastr.error('Something is wrong!');
    }
  }
}
