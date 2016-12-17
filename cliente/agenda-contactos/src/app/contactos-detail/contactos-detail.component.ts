import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ContactosService } from "../services/contactos.service";
import { Contacto } from "../models/contacto.model";

@Component({
  selector: 'app-contactos-detail',
  templateUrl: './contactos-detail.component.html',
  styleUrls: ['./contactos-detail.component.css'],
  providers: [ContactosService]
})
export class ContactosDetailComponent implements OnInit {

	public contacto : Contacto[];
	public errorMessage;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _contactosService: ContactosService) { }

	ngOnInit() {
		 this.getContacto();
		 console.log(this.contacto);
	}

  getContacto(){
		this._route.params.forEach((params: Params) => {

			let id = params["id"];
			
			this._contactosService.getContacto(id)
			.subscribe(
				result => {
					this.contacto = result
					console.log(result);
				},
				error => {
					this.errorMessage = <any>error;
			});
		});
	}

}
