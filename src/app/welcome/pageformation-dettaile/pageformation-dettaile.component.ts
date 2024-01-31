import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pageformation-dettaile',
  templateUrl: './pageformation-dettaile.component.html',
  styleUrls: ['./pageformation-dettaile.component.css']
})
export class PageformationDettaileComponent {
  formationId: string | null = null;
  formationDetails: any = {};
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.formationId = params.get('id');
      if (this.formationId) {
        this.fetchFormationDetails();
      }
    });
  }

  fetchFormationDetails() {
    // Make an HTTP request to fetch details using this.formationId
    // Example:
    this.http.get(`http://localhost:8080/getFormationById/${this.formationId}`)
      .subscribe((data: any) => {
        this.formationDetails = data;
      });
  }
}
