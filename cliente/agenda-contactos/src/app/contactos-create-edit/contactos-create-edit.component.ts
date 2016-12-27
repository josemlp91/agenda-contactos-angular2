import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ContactosService } from "../services/contactos.service";
import { Contacto } from "../models/contacto.model";
import { ErroresContacto } from "../models/errores-contacto.model";
import { toast } from "angular2-materialize";
import { MaterializeDirective } from "angular2-materialize";

@Component({
  selector: 'app-contactos-create-edit',
  templateUrl: './contactos-create-edit.component.html',
  styleUrls: ['./contactos-create-edit.component.css'],
  providers: [ContactosService]
})

export class ContactosCreateEditComponent implements OnInit {
	public contacto: Contacto;
	public errores_contacto: ErroresContacto;

  constructor(
  		private _contactoService: ContactosService,
		private _route: ActivatedRoute,
		private _router: Router) { }

  ngOnInit() {
  	this.contacto = new Contacto();
  	this.errores_contacto = new ErroresContacto();
  	console.log(this.errores_contacto.nombre);
  }

  onSubmit(){
		 this._contactoService.addContacto(this.contacto).subscribe(
				response => {
					let response_contacto = <any>response;
					if (response_contacto.id!=null){
						toast("Nuevo contacto creado!");
					}
				},
				error => {
					let errorjson = <any>error._body;
					this.errores_contacto = (JSON.parse(errorjson));
					if(this.errores_contacto !== null){
						toast("Existen errores!");
					}
				}
			);
			//this._router.navigate(["/"]);
	}
}
