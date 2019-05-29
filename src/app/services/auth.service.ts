import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {}

  isAuthenticated() {
    return JSON.parse(
      window.localStorage.getItem("isAuthenticated") || "false"
    );
  }

  doLogin(data): Observable<any> {
    return new Observable(resolve => {
      if (data.username == "test@test.com" && data.password == "test@12345") {
        let response = {
          status: 200,
          data: "Successfully Login"
        };
         window.localStorage.setItem("isAuthenticated","true");
        resolve.next(response);
      } else {
        let response = {
          status: 504,
          data: ""
        };
        resolve.error(response);
      }
    });
  }

}
