import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private foodAuthLogin = 'https://foodbukka.herokuapp.com/api/v1/auth';
  private ProfileURL = 'http://localhost:3000/user';
  private restaurantAPI =
    'https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.4426&lng=79.9865&page_type=DESKTOP_WEB_LISTING';

  private menuAPI =
    'https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/v4/full?lat=14.4426&lng=79.9865&menuId=';
  getUserProfileData() {
    return this.http.get(this.foodAuthLogin + '/register');
  }

  getMenu() {
    return this.http.get(this.restaurantAPI);
  }

  getDataFromRestaurant(id: string | Observable<Params>) {
    return this.http.get(this.menuAPI + id);
  }
  postUserData(data: FormData) {
    return this.http.post(this.foodAuthLogin + '/register', data);
  }
}
