import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showpage',
  templateUrl: './showpage.component.html',
  styleUrls: ['./showpage.component.css']
})
export class ShowpageComponent implements OnInit {

  @Input() show: Show;

  constructor() { }

  ngOnInit() {
  }

}
