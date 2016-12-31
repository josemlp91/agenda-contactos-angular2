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
	public errorMessage;
	public editing;
	public editing_id;
	public titulo;


  constructor(
  		private _contactoService: ContactosService,
		private _route: ActivatedRoute,
		private _router: Router) { }


  ngOnInit() {
  	this.titulo = "Crear Contacto";
  	this.contacto = new Contacto();
  	this.errores_contacto = new ErroresContacto();
  	this.editing = false;
  	this.getContacto();
  }


  getContacto(){
		this._route.params.forEach((params: Params) => {

			let id = params["id"];
			if (id) {
				this.titulo = "Editar Contacto";
				this.editing_id = id;
				this._contactoService.getContacto(id)
				.subscribe(
					result => {
						this.contacto = result
						this.editing = true;
					},
					error => {
						this.errorMessage = <any>error;
				});
			}
		});

	}


  createContacto(){
		 this._contactoService.addContacto(this.contacto).subscribe(
				response => {
					let response_contacto = <any>response;
					if (response_contacto.id!=null){
						toast("Nuevo contacto creado!");
						this._router.navigate(["/"]);
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
			
	}


	editContacto(){
		 this._contactoService.editContacto(this.editing_id, this.contacto).subscribe(
				response => {
					let response_contacto = <any>response;
					if (response_contacto.id!=null){
						toast("Contato editado!");
						this._router.navigate(["/"]);
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
			
	}
	
}
