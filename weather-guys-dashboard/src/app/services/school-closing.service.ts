import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { schoolClosings } from '../Models/schoolClosings';

@Injectable({
  providedIn: 'root',
})
export class SchoolClosingService {
  private apiUrl = 'http://localhost:5000/api/schoolClosings';

  constructor(private http: HttpClient) {}

  getSchoolClosings(): Observable<schoolClosings[]> {
    return this.http.get<schoolClosings[]>(this.apiUrl);
  }

  getSchoolClosing(id: number): Observable<schoolClosings> {
    return this.http.get<schoolClosings>(`${this.apiUrl}/${id}`);
  }

  createSchoolClosing(schoolClosing: schoolClosings): Observable<schoolClosings> {
    return this.http.post<schoolClosings>(this.apiUrl, schoolClosing);
  }

  updateSchoolClosing(id: number, schoolClosing: schoolClosings): Observable<schoolClosings> {
    return this.http.put<schoolClosings>(`${this.apiUrl}/${id}`, schoolClosing);
  }

  deleteSchoolClosing(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
