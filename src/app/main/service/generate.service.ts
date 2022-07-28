import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class generateService {
    constructor(private readonly http: HttpClient){}

    generate():Observable<any>{
        return this.http.get<any>("https://api.adviceslip.com/advice");
    }
}