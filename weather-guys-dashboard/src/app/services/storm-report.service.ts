import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stormReports } from '../Models/stormReports'

@Injectable({
  providedIn: 'root',
})
export class StormReportService {
  private apiUrl = 'http://localhost:5000/api/stormReports';

  constructor(private http: HttpClient) {}

  getStormReports(): Observable<stormReports[]> {
    return this.http.get<stormReports[]>(this.apiUrl);
  }

  getStormReport(id: number): Observable<stormReports> {
    return this.http.get<stormReports>(`${this.apiUrl}/${id}`);
  }

  createStormReport(stormReport: stormReports): Observable<stormReports> {
    return this.http.post<stormReports>(this.apiUrl, stormReport);
  }

  updateStormReport(id: number, stormReport: stormReports): Observable<stormReports> {
    return this.http.put<stormReports>(`${this.apiUrl}/${id}`, stormReport);
  }

  deleteStormReport(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
