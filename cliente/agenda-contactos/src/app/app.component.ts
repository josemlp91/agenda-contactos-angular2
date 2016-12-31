import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {toast} from "angular2-materialize";
import {MaterializeDirective} from "angular2-materialize";
import { UserService } from './services/user.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Agenda Contactos';

  constructor(
  	private _route: ActivatedRoute,
	private _router: Router,
	private userService: UserService) { }


  ngOnInit(): void {
    //toast("...and Materialize works as well!")
  }

  logout() {
    this.userService.logout();
    this._router.navigate(["login"]);
  }
}
