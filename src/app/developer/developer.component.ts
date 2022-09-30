import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {
  
  user : Developer = new Developer('Mickey', 'Mouse', 94, 'ultra manly', 'hohohoho!', [
    new Skill('Cartoons', '()', 'disney.com'),
    new Skill('Cinema', '[]', 'disney.cinema.com'),
    new Skill('Magic', '{}', 'apprenti-sorcier.com')
  ]);

  // testValue : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // getTestOut(event: number): number {
  //   this.testValue = event;
  //   return this.testValue;
  // }

}