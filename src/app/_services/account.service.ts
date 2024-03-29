import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from "../_models/user";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class AccountService {
    public user: Observable<User | null>;
    private userSubject: BehaviorSubject<User | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
        return this.http.get<User>(environment.apiUrl + `/users/me`, {
            headers: {
                'Authorization': 'Basic ' + btoa(username + ":" + password)
            }
        })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                user.password = password
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }

    authHeaders() {
        const user = this.userValue!;
        return {
            headers: {
                'Authorization': 'Basic ' + btoa(user.username + ":" + user.password)
            }
        }
    }
}
