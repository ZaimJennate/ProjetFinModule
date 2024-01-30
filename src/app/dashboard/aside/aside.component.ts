import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  constructor(private route: Router, private authService: AuthService) { }
  logout() {
    localStorage.removeItem('currentUser');
    this.route.navigate(['/']);
  }
}
