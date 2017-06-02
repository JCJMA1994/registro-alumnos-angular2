import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AlumnoService } from "../services/alumno.service";
import { Alumno } from "../model/alumno";

@Component({
	selector: "alumno-edit",
	templateUrl: "app/view/alumno-add.html",
	providers: [AlumnoService]
})

export class AlumnoEditComponent implements OnInit {
	public titulo = "Modificar alumno";
	public tituloBoton = "Modificar";
	public alumno: Alumno;
	public errorMessage: string;
	public status: string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _alumnoService: AlumnoService
	){}

	ngOnInit() {
		this.alumno = new Alumno(0, "", "", "", "", "", "", "", "", "", "");
		this.getAlumno();
		console.log("alumnos-edit component cargado");
	}

	onSubmit() {
		this._route.params.forEach((params: Params) => {

			let id = params["id"];

			this._alumnoService.editAlumno(id, this.alumno).subscribe(
				response => {
					this.status = response.status;
					if (!this.status) {
						alert("Error en el servidor");
					}
				},
				error => {
					this.errorMessage = <any>error;
					
					if(this.errorMessage !== null){
						console.log(this.errorMessage);
						alert("Error en la petición");
					}
				}
			);
		});
		
		this._router.navigate(["/"]);
	}

	getAlumno() {
		this._route.params.forEach((params: Params) => {

			let id = params["id"];
			
			this._alumnoService.getAlumno(id)
			.subscribe(
				alumno => {
					this.alumno = alumno[0];
				},
				error => {
					this.errorMessage = <any>error;
					
					if (this.errorMessage !== null) {
						console.log(this.errorMessage);
						alert("Error en la petición");
					}
				});
		});
	}
}