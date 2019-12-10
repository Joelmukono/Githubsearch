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
  repoData = []
  newData:any = []

  constructor(private http:HttpClient) {
    this.user = new User("","","","","","",0);
    this.repo = new Repos("","","");
   }

   userRequest(username){
     interface ApiResponse{
       name:string;
       login:string;
       avatar_url:string;
       html_url:string;
       public_repos:number;
       followers:string;
       following:string;
     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiUrl+username+environment.apiToken).toPromise().then(response=>{
         this.user.name = response.name; 
         this.user.login = response.login;
         this.user.avatar_url = response.avatar_url;
         this.user.html_url = response.html_url;
         this.user.followers = response.followers;
         this.user.following = response.following;
         this.user.public_repos = response.public_repos;

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
   


   reposRequest(username){
     interface ApiResponse{
       name:string;
       description:string;
       html_url:string;
       
     }

     const promise = new Promise((resolve, reject)=>{
       this.http.get<ApiResponse>(environment.apiUrl+username+environment.reposUrl).toPromise().then(response=>{
         for(let i = 0; i<= this.user.public_repos;i++){
          this.repo.name = response[i].name;
          this.repo.description = response[i].description;
          this.repo.html_url = response[i].html_url;
          this.newData = new Repos(this.repo.name, this.repo.description, this.repo.html_url);
          this.repoData.push(this.newData);


         }resolve();

        },
        error => {
          this.repo.name = 'sdfg';
          reject(error);
        })


       
     });
     return promise;

   }
 
   
}
