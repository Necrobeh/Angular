import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  myFirstOrder : Order = new Order('', 0, new Date())

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.myFirstOrder);
  }
}
