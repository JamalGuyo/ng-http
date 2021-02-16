import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Passenger } from './passenger';
@Injectable({
  providedIn: 'root',
})
export class AppComponentService {
  apiURL: string = 'http://localhost:3000/passegers';
  constructor(private http: HttpClient) {}

  // get all passengers
  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(this.apiURL, {
      headers: new HttpHeaders({
        accept: 'application/json',
      }),
    });
  }

  // get a single passenger
  getPassenger(passengerID: number): Observable<Passenger> {
    return this.http
      .get<Passenger>(`${this.apiURL}/${passengerID}`, {
        headers: new HttpHeaders({
          accept: 'application/json',
          Authorization: 'my-token',
        }),
      })
      .pipe(catchError((err) => this.handleHttpError(err)));
  }

  // create new passenger
  createPassenger(newPassenger: Passenger): Observable<Passenger> {
    return this.http.post<Passenger>(this.apiURL, newPassenger, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    });
  }

  // update passenger
  updatePassenger(updatedPassenger: Passenger): Observable<void> {
    return this.http.put<void>(
      `${this.apiURL}/${updatedPassenger.id}`,
      updatedPassenger,
      {
        headers: new HttpHeaders({
          'content-type': 'application/json',
        }),
      }
    );
  }

  // delete passenger
  deletePassenger(passenger: Passenger): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${passenger.id}`);
  }

  // handle http errors
  handleHttpError(err: HttpErrorResponse) {
    return throwError(err.message);
  }
}
