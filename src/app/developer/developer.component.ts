import { Component, Input, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {
  
  user : Developer = new Developer('Mickey', 'Mouse', 94, 'ultra manly', 'hohohoho!', []);

  skill1 : Skill = new Skill('Cartoons', '()', 'disney.com');

  skill2 : Skill = new Skill('Cinema', '[]', 'disney.cinema.com');

  skill3 : Skill = new Skill('Magic', '{}', 'apprenti-sorcier.com');

  skillList : Skill[] = [];

  constructor() { }

  ngOnInit(): void {
    this.skillList.push(this.skill1);
    this.skillList.push(this.skill2);
    this.skillList.push(this.skill3);
  }


}