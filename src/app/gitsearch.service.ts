import { Injectable } from '@angular/core';
import  {User} from './profile';
import {Repos} from './repos';
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {


  user:User;
  repo:Repos;

  constructor(private http:HttpClient) {
    this.user = new User("","","","");
   }

   userRequest(username){
     interface ApiResponse{
       name:string;
       login:string;
       avatar_url:string;
       html_url:string;
     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiUrl+username+environment.apiToken).toPromise().then(response=>{
         this.user.name = response.name;
         this.user.login = response.login;
         this.user.avatar_url = response.avatar_url;
         this.user.html_url = response.html_url;

         resolve()

       },error=>{
         this.user.name = ""
         this.user.login =""
         this.user.avatar_url=""
         this.user.html_url = ""

         reject(error)



       })
     })
     return promise


   }


   reposRequest(){
     interface ApiResponse{
       
     }

   }

   
}
