import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AlumnoService } from "../services/alumno.service";
import { Alumno } from "../model/alumno";

@Component({
	selector: "alumnos-list",
	templateUrl: "app/view/alumnos-list.html",
	providers: [AlumnoService]
})

export class AlumnosListComponent implements OnInit {
	public titulo: string = "Listado";
	public alumnos: Alumno[];
	public status: string;
	public errorMessage;
	public confirmado;
	public loading;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _alumnoService: AlumnoService
	){}

	ngOnInit() {
		this.loading = 'show';
		this.getAlumnos();
		console.log("alumnos-list component cargado");
	}

	getAlumnos() {
		this._alumnoService.getAlumnos()
		.subscribe(
			result => {
				this.alumnos = result.data;
				this.status = result.status;

				/*if (!this.status) {
					alert("Error en el servidor");
				}*/

				this.loading = 'hide';
			},
			error => {
				this.errorMessage = <any>error;

				if (this.errorMessage !== null) {
					console.log(this.errorMessage);
					alert("Error en la petición");
				}
			});
	}

	onBorrarConfirm(id) {
		this.confirmado = id;
	}

	onCancelarConfirm(id) {
		this.confirmado = null;
	}

	onBorrarAlumno(id) {
		this._alumnoService.deleteAlumno(id)
		.subscribe(
			result => {
				this.status = result.status;

				if (!this.status) {
					alert("Error en el servidor");
				}
				this.getAlumnos();
			},
			error => {
				this.errorMessage = <any>error;

				if(this.errorMessage !== null){
					console.log(this.errorMessage);
					alert("Error en la petición");
				}
			});
	}
}