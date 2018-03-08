import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Show from '../models/show';
import { ShowsService } from '../shows.service';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() show: Show;

  constructor(showservice: ShowsService) { }

  ngOnInit() {
    console.log('show-box:' + this.show);
  }

}
