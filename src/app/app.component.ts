import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from './model/group';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'talousApp';
  currentGroup: Group;

    constructor( private authenticationService: AuthenticationService) {
      this.authenticationService.currentGroup.subscribe(x => this.currentGroup = x);
    }

    logout() {
      this.authenticationService.logout();
  }
}
