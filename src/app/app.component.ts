import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { default as data } from './shared/firebase';
import { UserService } from './users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp(data.data);
  }
}
