import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-affiche-formation',
  templateUrl: './affiche-formation.component.html',
  styleUrls: ['./affiche-formation.component.css']
})
export class AfficheFormationComponent implements OnInit {
    formations: any[] = [];
  
    constructor(private authService: AuthService) {}
  
    ngOnInit(): void {
      this.authService.getUserCart().subscribe(
        (data: any[]) => {
          console.log('Received data:', data);
          this.formations = data;
        },
        error => {
          console.error('Error fetching user cart:', error);
        }
      );
    }
    
    
}
