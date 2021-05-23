import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private http: HttpService,
    private authService: AuthService
  ) { }

  getCompanyById(id) {
    return this.http.get(`/company/${id}`)
  }

  getCompanies() {
    return this.http.get('/company/')
  }

  getAllDeals() {
    return this.http.get('/deal');
  }

  getPosts() {
    return this.http.get('/posting');
  }

  getExpiredPosts() {
    return this.http.get('/posting');
  }

  createPost(body) {
    return this.http.post('/posting', body);
  }

  updateCompany(body) {
    return this.http.post(`/company/${this.authService.getUserId()}`, body);
  }
}
