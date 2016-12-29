import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public username;
  public password;

  constructor(
  	private _route: ActivatedRoute,
	private _router: Router,
	private userService: UserService) { }


  ngOnInit() {
  	this.username = "";
  	this.password = "";
  }

  onSubmit() {
    this.userService.login(this.username, this.password).subscribe((result) => {
    	console.log(result);

		if (result) {
			console.log("LOGIN!!"); // TEST
		}
    });
  }


}
