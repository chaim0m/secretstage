import { Component, OnInit, Input } from '@angular/core';
import Show from '../models/show';
import { ShowsService } from '../shows.service';

@Component({
  selector: 'app-showpage',
  templateUrl: './showpage.component.html',
  styleUrls: ['./showpage.component.css']
})
export class ShowpageComponent implements OnInit {

  @Input() show: Show;

  constructor(showservice: ShowsServic) { }

  ngOnInit() {
  }

}
