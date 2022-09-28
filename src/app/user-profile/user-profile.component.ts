import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user : User = new User('Doe', 'John', 45, 'I know most things', 'https://randomuser.me/api/portraits/lego/2.jpg')

  constructor() {}

  ngOnInit(): void {
  }
}