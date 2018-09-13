import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, BehaviorSubject } from "rxjs/index";
import { map } from "rxjs/internal/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth_url: string = environment.auth_url;
  private _token: string;
  private loginAuth: BehaviorSubject<string> = new BehaviorSubject<string>(`${this.isAuth}`);
  public loginAuthEvent: Observable<string> = this.loginAuth.asObservable();

  constructor(
    private http: HttpClient
  ) {}

  public get isAuth(): string {
    return this._token || localStorage.getItem('token');
  }

  private set token(token: string) {
    this._token = token;
    localStorage.setItem('token', token);
  }

  public login(email: string, password: string): Observable<boolean> {
    return this.http.post(`${this.auth_url}/login`, {email, password}, {responseType: "text"}).pipe(
      map((res: string): boolean => {
        this.token = res;
        this.loginAuth.next(this._token);
        return true;
      }),
    );
  }

  public signup(email: string, name: string, password: string): Observable<boolean> {
    return this.http.post(`${this.auth_url}/signup`, {email, name, password}, {responseType: "text"}).pipe(
      map((res: string): boolean => {
        this.token = res;
        this.loginAuth.next(this._token);
        return true;
      })
    );
  }

  public logout(): void {
    this.token = '';
    localStorage.setItem('token', '');
    this.loginAuth.next('');
  }

}
