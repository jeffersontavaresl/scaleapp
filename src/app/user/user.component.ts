import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'user-root',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit{
  public users!: User[];
  
  constructor(private userService : UserService) { }

  public paginaAtual = 1;

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe( data => {
        this.users = data;
      });
  }

}
