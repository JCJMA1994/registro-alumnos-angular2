export class Alumno {
	constructor(
		public id:number,
		public numero_control:string,
		public semestre:string,
		public grupo:string,
		public categoria:string,
		public nombres:string,
		public apellido_paterno:string,
		public apellido_materno:string,
		public correo_electronico:string,
		public telefono:string,
		public sexo:string
	){}
}