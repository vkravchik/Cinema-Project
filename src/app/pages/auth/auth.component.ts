import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.initForm();
  }

  ngOnInit() {
  }

  submit(): void {
    this.authService.login(this.form.value).subscribe((res: any) => {
      if (res.success) {
        this.authService.setToken(res.token);
        this.authService.isAuth.next(this.authService.checkAuth());
        this.router.navigateByUrl('');
      }
    });
  }

  initForm(): void {
    this.form = this.fb.group({
      username: ['vkravchik@gmail.com', [Validators.required, Validators.email]],
      password: ['qwe123qwe', [Validators.required, Validators.minLength(6)]]
    });
  }
}
