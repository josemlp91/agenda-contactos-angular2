import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Contacto} from "../models/contacto.model";

@Injectable()
export class ContactosService {

	private contactos_api_url = "http://localhost:8080/contactos/";

	constructor(private _http: Http){}

	getContactos(){
		let uri = this.contactos_api_url + "list";  
		return this._http.get(uri).map(res => res.json());
	}

	getContacto(id: string){
		let uri = this.contactos_api_url + "get/" + id;
		return this._http.get(uri).map(res => res.json());
	}

	addContacto(contacto: Contacto) {
		return null; // TODO
	}

	editContacto(id: string, contacto: Contacto) {
		return null; // TODO
	}

	deleteContacto(id: string){
		return null; // TODO
	}

}
