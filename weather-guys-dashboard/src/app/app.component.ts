import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template:""


})
export class AppComponent {
  title = 'weather-guys-dashboard';
  query: string = '';

  constructor(private router: Router) {}

  onSearch() {
    if (this.query.trim()) {
      this.router.navigate(['/search-results'], { queryParams: { query: this.query } });
    }
  }
}


