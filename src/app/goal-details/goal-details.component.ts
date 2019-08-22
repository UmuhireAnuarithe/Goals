// import { Component, OnInit } from '@angular/core';
// import { Component, OnInit, Input } from '@angular/core';
// import { Goal } from '../goal';
// // import { GoalDetails } from '../goal-details/goal-details';

// @Component({
//   selector: 'app-goal-details',
//   templateUrl: './goal-details.component.html',
//   styleUrls: ['./goal-details.component.css']
// })
// export class GoalDetailsComponent implements OnInit {
//   @Input() goal: Goal;
//   constructor() { }

//   ngOnInit() {
//   }

// }



import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Goal } from '../goal';
@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})

export class GoalDetailsComponent implements OnInit {

  @Input() goal: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }


  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}





// import { Component, OnInit, Input } from '@angular/core';
// import { Goal } from '../goal';

// @Component({
//   selector: 'app-goal-detail',
//   templateUrl: './goal-detail.component.html',
//   styleUrls: ['./goal-detail.component.css']
// })
// export class goal-detailComponent implements OnInit {

//   @Input() goal: Goal;
//   constructor() { }

//   ngOnInit() {
//   }

// }
