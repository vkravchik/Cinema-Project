import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isAuth: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isAuth.subscribe(res => {
      this.isAuth = res;
    });
  }

  logout(): void {
    this.authService.logout();
  }

}
