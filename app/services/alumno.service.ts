import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Alumno } from "../model/alumno";

@Injectable()
export class AlumnoService {
	apiUrl: string = "http://localhost:8888/api-registro-alumnos/";
	constructor(private _http: Http){}

	getAlumnos() {
		return this._http.get(this.apiUrl + "select.php")
		.map(res => res.json());
	}

	getAlumno(id: string) {
		let json = JSON.stringify({"id": id});
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.apiUrl + "selectone.php", 
			params, {headers: headers})
		.map(res => res.json());
	}

	addAlumno(alumno: Alumno) {
		let json = JSON.stringify(alumno);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.apiUrl + "insert.php", 
			params, {headers: headers})
		.map(res => res.json());
	}

	editAlumno(id: string, alumno: Alumno) {
		let json = JSON.stringify(alumno);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.apiUrl + "update.php/" + id, 
			params, {headers: headers}).map(res => res.json());
	}

	deleteAlumno(id: string) {
		let json = JSON.stringify({"id": id});
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.apiUrl + "delete.php",
			params, {headers: headers})
		.map(res => res.json());
	}
}