import { Component, OnInit } from '@angular/core';
import { AppComponentService } from './app.component.service.service';

import { Passenger } from './passenger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  passengers: Passenger[] = [];
  passenger: Passenger;

  constructor(private passengerService: AppComponentService) {}

  ngOnInit() {
    this.passengerService.getPassenger(1).subscribe(
      (data: Passenger) => (this.passenger = data),
      (err) => console.log(err)
    );
  }
}
