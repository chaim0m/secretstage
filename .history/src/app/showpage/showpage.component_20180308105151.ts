import { Component, OnInit, Input } from '@angular/core';
import Show from '../models/show';
import { ShowsService } from '../shows.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-showpage',
  templateUrl: './showpage.component.html',
  styleUrls: ['./showpage.component.css']
})
export class ShowpageComponent implements OnInit {

  show: Show = new Show();
  id: String;

  constructor(private showsService: ShowsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this.showsService.getShowById(this.id).subscribe(
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
