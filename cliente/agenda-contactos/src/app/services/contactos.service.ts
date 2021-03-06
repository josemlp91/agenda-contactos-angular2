import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Contacto} from "../models/contacto.model";

@Injectable()
export class ContactosService {

	private contactos_api_url = "/api/contactos/";

	constructor(private _http: Http){}

	getContactos(){
		let uri = this.contactos_api_url + "list/";

		let headers = new Headers();
    	headers.append('Content-Type', 'application/json');
    	let authToken = localStorage.getItem('auth_token');
    	headers.append('Authorization', `Token ${authToken}`);

		return this._http.get(uri, { headers }).map(res => res.json());
	}

	getContacto(id: string){
		let uri = this.contactos_api_url + "get/" + id + "/";

		let headers = new Headers();
    	headers.append('Content-Type', 'application/json');
    	let authToken = localStorage.getItem('auth_token');
    	headers.append('Authorization', `Token ${authToken}`);

		return this._http.get(uri, { headers }).map(res => res.json());
	}

	addContacto(contacto: Contacto) {
		let uri = this.contactos_api_url + "add/";
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let authToken = localStorage.getItem('auth_token');
    	headers.append('Authorization', `Token ${authToken}`);


		let body = JSON.stringify(contacto);
    	let options = new RequestOptions({ headers: headers });

		return this._http.post(uri, body, options).map(res => res.json());
	}

	editContacto(id: string, contacto: Contacto) {
		let uri = this.contactos_api_url + "edit/" + id + "/";
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let body = JSON.stringify(contacto);
    	let options = new RequestOptions({ headers: headers });

		return this._http.put(uri, body, options).map(res => res.json());
	}

	deleteContacto(id: string){
		return null; // TODO
	}

}

