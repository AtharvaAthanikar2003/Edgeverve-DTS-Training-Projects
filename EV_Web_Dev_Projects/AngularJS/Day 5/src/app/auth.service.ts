import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL : string = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }
 
  getAllUsers(){
    return this.http.get(this.baseURL);
  }
 
  getUserById(id: any){
    return this.http.get(this.baseURL + "/" + id);
  }
  deleteUserBydId(id: any){
    return this.http.delete(this.baseURL + '/' + id);
  }
 
  createUser(obj: any){
    return this.http.post(this.baseURL + "/", obj);
  }
   updateUser(id: any, obj: any) {
    return this.http.put(`${this.baseURL}/${id}`, obj);
  }
}
