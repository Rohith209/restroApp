import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent {
  RESTAURANTS_IMG_URL =
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/';
  constructor(private apiService: AuthService, private route: ActivatedRoute) {}
  IndividualRestaurantData: any;
  menuData: any;
  temp: any;
  restaurant: RestaurantComponent | undefined;

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.getParamById(params['id']));
  }

  getParamById(id: string) {
    this.apiService.getDataFromRestaurant(id).subscribe((data) => {
      this.IndividualRestaurantData = data;
      this.temp = Object.keys(this.IndividualRestaurantData.data.menu.items);
      console.log(this.temp);
    });
  }
}
