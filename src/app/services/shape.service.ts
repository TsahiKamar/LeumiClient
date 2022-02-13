import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShapeService {
 
   headers = new HttpHeaders({
       'Access-Control-Allow-Origin': '*' 
        });
   options = { headers: this.headers };

//63281
constructor(private http: HttpClient) {
}

public getShapes(type?:string):Observable<any> {
return this.http.get<any>(`http://localhost:4973/Shapes/Get?type=${type}`,this.options) 
.pipe(
  map((res: any) => res )
  )
}

public getLastShape():Observable<any> {
  return this.http.get<any>('http://localhost:4973/Shapes/GetLastShape',this.options) 
  .pipe(
    map((res: any) => res )
    )
  }

  public createShape(request:any):Observable<any> {
  return this.http.post<any>('http://localhost:4973/Shapes/Shapes/CreateShape',request,this.options) 
  .pipe(
    map((res: any) => res )
    )
  }
  
 

}
