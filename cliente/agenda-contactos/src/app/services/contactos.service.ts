import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Contacto} from "../models/contacto.model";

@Injectable()
export class ContactosService {

	constructor(private _http: Http){}

	getContactos(){
		return this._http.get("http://localhost:8080/contactos/list").map(res => res.json());
	}

	getContacto(id: string){
		return this._http.get("http://localhost:8080/contactos/get/" + id).map(res => res.json());
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
