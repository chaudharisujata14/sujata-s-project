import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  select() {
    return this.http.get('http://localhost:3434/team');
  }

  delete(venue) {
    return this.http.delete('http://localhost:3434/team/' + venue);
  }

  insert(team) {
    return this.http.post('http://localhost:3434/team', team);
  }
}
