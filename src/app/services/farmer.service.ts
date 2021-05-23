import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(
    private http: HttpService,
    private authService: AuthService
  ) { }

  getFarmers() {
    return this.http.get('/farmer');
  }

  updateFarmer(body) {
    return this.http.post(`/farmer/${this.authService.getUserId()}`, body);
  }

  getMachines() {
    return this.http.get('/machine');
  }

  getMyRentedMachines() {
    return this.http.get('/rented');
  }

  getOnRent(body) {
    return this.http.post('/rented', body);
  }
  
  getDeals() {
    return this.http.get('/deal');
  }
  
  acceptDeal(body) {
    return this.http.post('/deal', body)
  }
  
  pricePredictor(id) {
    return this.http.get(`/pricePredictor/${id}`);
  }
}
