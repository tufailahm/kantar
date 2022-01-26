import { AfterContentChecked, AfterContentInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
 // inputs:['temperature']
})
export class CityComponent implements OnInit,OnChanges,AfterContentChecked,AfterContentInit {

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
  }

  @Input()
  temperature:string

  @Output()
  childEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onChange(data){
    this.childEvent.emit(data);
  }
}
