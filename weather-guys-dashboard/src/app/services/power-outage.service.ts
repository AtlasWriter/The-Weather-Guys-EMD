import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { powerOutages } from '../Models/powerOutages';

@Injectable({
  providedIn: 'root',
})
export class PowerOutageService {
  private apiUrl = 'http://localhost:5000/api/powerOutages';

  constructor(private http: HttpClient) {}

  getPowerOutages(): Observable<powerOutages[]> {
    return this.http.get<powerOutages[]>(this.apiUrl);
  }

  getPowerOutage(id: number): Observable<powerOutages> {
    return this.http.get<powerOutages>(`${this.apiUrl}/${id}`);
  }

  createPowerOutage(powerOutage: powerOutages): Observable<powerOutages> {
    return this.http.post<powerOutages>(this.apiUrl, powerOutage);
  }

  updatePowerOutage(id: number, powerOutage: powerOutages): Observable<powerOutages> {
    return this.http.put<powerOutages>(`${this.apiUrl}/${id}`, powerOutage);
  }

  deletePowerOutage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
