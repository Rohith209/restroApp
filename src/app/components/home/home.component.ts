import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private checkAuth: AuthService) {}
  RestaurantData: any;
  RESTAURANTS_IMG_URL =
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/';
  restaurantsCount: any;
  AvgRatingCount: any;

  ngOnInit(): void {
    this.checkAuth.getMenu().subscribe((res) => {
      this.RestaurantData = res;
      this.RestaurantData = this.RestaurantData.data.cards[2].data.data.cards;
      this.restaurantsCount = this.RestaurantData.length;
    });
  }
}
