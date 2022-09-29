import { Component, Input, OnInit } from '@angular/core';
import { Skill } from "../models/skill.model";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})

export class SkillComponent implements OnInit {
 
  // user : Developer = new Developer('Mickey', 'Mouse', 94, 'ultra manly', 'hohohoho!', [
    // new Skill('Cartoons', '()', 'disney.com'),
    // new Skill('Cinema', '[]', 'disney.cinema.com'),
    // new Skill('Magic', '{}', 'apprenti-sorcier.com')
  // ]);
  
  @Input()
  skillList : Skill[] | undefined;


  constructor() { }

  ngOnInit(): void {
  };

};
