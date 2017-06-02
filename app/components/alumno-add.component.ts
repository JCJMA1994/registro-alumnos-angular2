import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlumnoService } from "../services/alumno.service";
import { Alumno } from "../model/alumno";

@Component({
	selector: "alumno-add",
	templateUrl: "app/view/alumno-add.html",
	providers: [AlumnoService]
})

export class AlumnoAddComponent implements OnInit {
	public titulo = "Crear nuevo alumno";
	public tituloBoton = "Guardar";
	public alumno: Alumno;
	public errorMessage: string;
	public status: string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _alumnoService: AlumnoService
	){}

	onSubmit() {
		this._alumnoService.addAlumno(this.alumno)
		.subscribe(
			response => {
				this.status = response.status;
				if (!this.status) {
					alert("Error en el servidor");
				}
			},
			error => {
				this.errorMessage = <any>error;
				
				if (this.errorMessage !== null) {
					console.log(this.errorMessage);
					alert("Error en la petición");
				}
			});

		this._router.navigate(["/"]);
	}

	ngOnInit() {
		this.alumno = new Alumno(0, "", "", "", "", "", "", "", "", "", "");
		console.log("alumnos-add component cargado");
	}
}