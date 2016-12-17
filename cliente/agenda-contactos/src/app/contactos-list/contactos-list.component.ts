import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ContactosService } from "../services/contactos.service";
import { Contacto } from "../models/contacto.model";

@Component({
  selector: 'app-contactos-list',
  templateUrl: './contactos-list.component.html',
  styleUrls: ['./contactos-list.component.css'],
  providers: [ContactosService]
})
export class ContactosListComponent implements OnInit {
	public contactos: Contacto[];
	public status: string;
	public errorMessage;
	

  constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _contactosService: ContactosService) { }

   	ngOnInit() {
 		this.getContactos();
	}

	getContactos(){
		this._contactosService.getContactos()
									.subscribe(
										result => {
											this.contactos = result
											//console.log(result);
										},
										error => {
											this.errorMessage = <any>error;
											
											if(this.errorMessage !== null){
												console.log(this.errorMessage);
											}
										}
									);
	}

}
