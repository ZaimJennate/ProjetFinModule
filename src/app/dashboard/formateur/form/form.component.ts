import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formateur: any = {};

  constructor(private http: HttpClient) {}

  addFormateur() {
    this.http.post('http://localhost:8080/ajouterForma', this.formateur)
      .subscribe(response => console.log(response));
  }
}
