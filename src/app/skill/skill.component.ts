import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from "../models/skill.model";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})

export class SkillComponent implements OnInit {

    // test : number = 50;

    @Input()
    skill : Skill = new Skill('', '', '');

    // @Output()
    // getTestOut : EventEmitter<number> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
      // this.sendTestToParent();
    };

    // sendTestToParent() : void {
    //   this.getTestOut.emit(this.test)
    // }
};
