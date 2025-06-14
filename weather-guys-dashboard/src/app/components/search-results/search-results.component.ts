import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  query: string = '';
  results: any[] = [];
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['query'];
      if (this.query) {
        this.search();
      }
    });
  }

  search() {
    this.loading = true;
    this.http.get<any[]>(`http://localhost:5000/api/searchResults?query=${this.query}`)
      .subscribe(
        (response) => {
          this.results = response;
          this.loading = false;
        },
        (error) => {
          console.error('Search error:', error);
          this.loading = false;
        }
      );
  }
}
