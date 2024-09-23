import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stormUpdate } from '../Models/stormUpdate';

@Injectable({
  providedIn: 'root',
})
export class StormUpdateService {
  private apiUrl = 'http://localhost:5000/api/stormUpdates';

  constructor(private http: HttpClient) {}

  getStormUpdates(): Observable<stormUpdate[]> {
    return this.http.get<stormUpdate[]>(this.apiUrl);
  }

  getStormUpdate(id: number): Observable<stormUpdate> {
    return this.http.get<stormUpdate>(`${this.apiUrl}/${id}`);
  }

  createStormUpdate(stormUpdate: stormUpdate): Observable<stormUpdate> {
    return this.http.post<stormUpdate>(this.apiUrl, stormUpdate);
  }

  updateStormUpdate(id: number, stormUpdate: stormUpdate): Observable<stormUpdate> {
    return this.http.put<stormUpdate>(`${this.apiUrl}/${id}`, stormUpdate);
  }

  deleteStormUpdate(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
