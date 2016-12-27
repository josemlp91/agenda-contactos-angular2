export class Contacto{
	
	public id:number;
	public nombre:string;
	public primer_apellido:string;
	public segundo_apellido:string;
	public fecha_nacimiento:string;
	public telefono_fijo:string;
	public telefono_movil:string;
	public email:string;
	public direccion:string;
	public puesto:string;
	public genero:string;

	constructor();
	constructor(
	 	id?:number,
	 	nombre?:string,
	 	primer_apellido?:string,
	 	segundo_apellido?:string,
	 	fecha_nacimiento?:string,
	 	telefono_fijo?:string,
	 	telefono_movil?:string,
	 	email?:string,
	 	direccion?:string,
	 	puesto?:string,
	 	genero?:string,	 	
	 	) {
        this.id= id || 0;
		this.nombre=nombre  || "";
		this.primer_apellido=primer_apellido || "";
		this.segundo_apellido=segundo_apellido || "";
		this.fecha_nacimiento=fecha_nacimiento || "1990-10-10";
		this.telefono_fijo=telefono_fijo || "";
		this.telefono_movil=telefono_movil || "";
		this.email=email || "";
		this.direccion=direccion || "";
		this.puesto=puesto || "";
		this.genero=genero || "";
        }
}