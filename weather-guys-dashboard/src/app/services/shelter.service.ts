import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shelters } from '../Models/shelters';

@Injectable({
  providedIn: 'root',
})
export class ShelterService {
  private apiUrl = 'http://localhost:5000/api/shelters';

  constructor(private http: HttpClient) {}

  getShelters(): Observable<shelters[]> {
    return this.http.get<shelters[]>(this.apiUrl);
  }

  getShelter(id: number): Observable<shelters> {
    return this.http.get<shelters>(`${this.apiUrl}/${id}`);
  }

  createShelter(shelter: shelters): Observable<shelters> {
    return this.http.post<shelters>(this.apiUrl, shelter);
  }

  updateShelter(id: number, shelter: shelters): Observable<shelters> {
    return this.http.put<shelters>(`${this.apiUrl}/${id}`, shelter);
  }

  deleteShelter(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
