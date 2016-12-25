import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {toast} from "angular2-materialize";
import {MaterializeDirective} from "angular2-materialize";
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Agenda Contactos';

  ngOnInit(): void {
    //toast("...and Materialize works as well!")
  }
}
