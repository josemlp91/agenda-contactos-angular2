import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contactos-detail',
  templateUrl: './contactos-detail.component.html',
  styleUrls: ['./contactos-detail.component.css']
})
export class ContactosDetailComponent implements OnInit {

  constructor(
		private _route: ActivatedRoute,
		private _router: Router) { }

  ngOnInit() {
  }

}
