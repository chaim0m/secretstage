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

  constructor(showservice: ShowsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this.showService.getShowById(this.id).subscribe(
      shows => {
        this.show = shows,
          console.log(this.show)
      },
      error => {
        console.log(error)
      }
    )

  }

}
