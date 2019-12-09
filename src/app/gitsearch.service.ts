import { Injectable } from '@angular/core';
import  {User} from './profile';
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {


  user:User;

  constructor(private http:HttpClient) {
    this.user = new User("","","","");
   }

   userRequest(username){
     interface ApiResponse{
       name:string;
       login:string;
       avatar_url:string;
       repos_url:string;
     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiUrl+username+environment.apiToken).toPromise().then(response=>{
         this.user.name = response.name;
         this.user.login = response.login;
         this.user.avatar_url = response.avatar_url;
         this.user.repos_url = response.repos_url;

         resolve()

       },error=>{
         this.user.name = "error"
         this.user.login ="error"
         this.user.avatar_url="error"
         this.user.repos_url = "error"

         reject(error)



       })
     })
     return promise


   }

   
}
