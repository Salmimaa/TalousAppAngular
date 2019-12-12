import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../model/group';
import { API_ENDPOINT } from '../app.token';
import { HttpHeaders } from '@angular/common/http'; 
import { ok } from 'assert';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  

export class GroupService {

  group: Observable<any>;

  constructor(private http: HttpClient, @Inject(API_ENDPOINT) private apiEndpoint) { }

  register(group: Group) {
    let data = JSON.stringify(group);
    return this.group = this.http.post(`${this.apiEndpoint}/addgroup`, data)
    
}
}