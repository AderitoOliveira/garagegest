import { Component, OnInit } from '@angular/core';
import { GlobalCommunicationService } from './globalcommunicationservice';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  title = 'client';
  name : string;


  constructor(private globalCommunictionService: GlobalCommunicationService) {
   
  }

  ngOnInit(): void {
    this.globalCommunictionService.currentMessage.subscribe(message => this.name = message)
  }

/* 
  updateValue(val: string) {
    this.name = val;
  } */

}
