import { Component, OnInit } from '@angular/core';
import {GitsearchService} from '../gitsearch.service';
import  {User} from '../profile';
import {Repos} from '../repos';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user:User;
  repo:Repos;
  username:string ="Joelmukono";
  repoDetails = [];

  constructor(private service:GitsearchService) { }

  findProfiles(){
    this.service.userRequest(this.username);
    this.service.reposRequest(this.username);
    this.repoDetails = this.service.repoData;
    this.user = this.service.user;
    
    
    //user in the right hand side is 
    //repo this.repoDetails...array 
    //this.repoDetails = this.searchgithubService.repodats
    
  }

  ngOnInit() {
  }

}
