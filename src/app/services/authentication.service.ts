import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Group } from '../model/group';
import { API_ENDPOINT } from '../app.token';
import { ok } from 'assert';
import { error } from 'util';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService implements HttpInterceptor{
    intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): Observable<import("@angular/common/http").HttpEvent<any>> {
        throw new Error("Method not implemented.");
    }

    private currentGroupSubject: BehaviorSubject<Group>;
    public currentGroup: Observable<Group>;
    private group: Observable<Group>;

    constructor(private router: Router, private http: HttpClient, @Inject(API_ENDPOINT) private apiEndpoint) {
        this.currentGroupSubject = new BehaviorSubject<Group>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentGroup = this.currentGroupSubject.asObservable();
    }

    public get currentGroupValue(): Group {
        return this.currentGroupSubject.value;
    }

    login(group: Group) {
        let data = JSON.stringify(group);
        return this.group = this.http.post<any>(`${this.apiEndpoint}/login`, data)
        .pipe(map(group => {
            localStorage.setItem('currentGroup', JSON.stringify(group));
            this.currentGroupSubject.next(group);
            return group;
        }));
    }

    logout() {
        localStorage.removeItem('currentGroup');
        this.router.navigate(['/login']);
    }
}
