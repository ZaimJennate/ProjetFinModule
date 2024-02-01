import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pageformateur-detaille',
  templateUrl: './pageformateur-detaille.component.html',
  styleUrls: ['./pageformateur-detaille.component.css']
})
export class PageformateurDetailleComponent {
  formateurId: string | null = null;
  formateurDetails: any = {};
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.formateurId = params.get('id');
      if (this.formateurId) {
        this.fetchFormateurDetails();
      }
    });
  }

  fetchFormateurDetails() {
    // Make an HTTP request to fetch details using this.formateurId
    // Example:
    this.http.get(`http://localhost:8080/getFormateurById/${this.formateurId}`)
      .subscribe((data: any) => {
        this.formateurDetails = data;
      });
  }
}
