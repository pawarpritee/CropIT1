import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  materials = [];

  constructor(
    private http: HttpService,
    private router: Router
  ) { }

  login(body) {
    return this.http.post('/login', body);
  }

  signUp(body) {
    return this.http.post('/signup', body);
  }

  getLoggedInUser() {
    return this.http.get(this.getUserType() === 'farmer' ? `/farmer/${this.getUserId()}` : `/company/${this.getUserId()}`);
  }

  getMaterial() {
    return this.http.get('/material');
  }

  getUserType() {
    return localStorage.getItem('userType');
  }

  getUserId() {
    return localStorage.getItem('userId');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
