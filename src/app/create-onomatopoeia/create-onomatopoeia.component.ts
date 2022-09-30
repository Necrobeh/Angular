import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopoeia',
  templateUrl: './create-onomatopoeia.component.html',
  styleUrls: ['./create-onomatopoeia.component.scss']
})
export class CreateOnomatopoeiaComponent implements OnInit {

  newOnomatopoeia : string = '';

  @Output()
  sendOnomatopiaToParent : EventEmitter<string> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  };

  createOnomatopia() : void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopoeia);
  };
}
