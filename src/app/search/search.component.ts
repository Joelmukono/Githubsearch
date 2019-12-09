import { Component, OnInit } from '@angular/core';
import {GitsearchService} from '../gitsearch.service';
import  {User} from '../profile'; 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user:User;
  username:string ="Joelmukono";

  constructor(private service:GitsearchService) { }

  findProfiles(){
    this.service.userRequest(this.username);
    this.user = this.service.user;
    
  }

  ngOnInit() {
  }

}
