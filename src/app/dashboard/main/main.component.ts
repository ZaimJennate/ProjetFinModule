import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  numberOfFormateurs: number = 0;
  numberOfFormations: number = 0;
  numberOfEntreprise: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getNumberOfFormateurs();
    this.getNumberOfFormations();
    this.getNumberOfEntreprise();
  }

  getNumberOfFormateurs() {
    this.http.get<number>('http://localhost:8080/compterFormateurs')
      .subscribe(
        (count: number) => {
          this.numberOfFormateurs = count;
        },
        (error) => {
          console.error('Error fetching number of formateurs:', error);
        }
      );
  }

  getNumberOfFormations() {
    this.http.get<number>('http://localhost:8080/compterFormations')
      .subscribe(
        (count: number) => {
          this.numberOfFormations = count;
        },
        (error) => {
          console.error('Error fetching number of formations:', error);
        }
      );
  }

  getNumberOfEntreprise() {
    this.http.get<number>('http://localhost:8080/compterEntreprise')
      .subscribe(
        (count: number) => {
          this.numberOfEntreprise = count;
        },
        (error) => {
          console.error('Error fetching number of entreprise:', error);
        }
      );
  }
}

 