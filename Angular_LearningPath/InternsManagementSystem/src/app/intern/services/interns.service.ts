import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Intern } from '../models/Intern';

@Injectable({
  providedIn: 'root'
})
export class InternsService {

  private url = 'https://crudcrud.com/api/7fd670e0280945ddadb7b822d0fe8020/intern'


  constructor(private http: HttpClient) { }

  getInterns(): Observable<any> {
    return this.http.get(this.url)
  }


  getintermbyId(): Observable<any> {
    let params = new HttpParams().set('id', '1');
    return this.http.get(this.url, { params: params });
  }


  post(InternPost: Intern) {
    console.log("In service " + InternPost);
    let data = this.http.post(this.url, InternPost).subscribe((res) => { console.log(res) });
  }
  update(id:string, data:Intern): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }


  delete(id: any) {
  
    let _id = id
    console.log(_id);
    return this.http.delete(this.url + '/' + _id);

  }


}
