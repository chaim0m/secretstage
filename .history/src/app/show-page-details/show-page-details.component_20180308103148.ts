import { Component, OnInit, Input } from '@angular/core';
import { ShowsService } from '../shows.service';
import Show  from '../models/show';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-show-page-details',
  templateUrl: './show-page-details.component.html',
  styleUrls: ['./show-page-details.component.css']
})
export class ShowPageDetailsComponent implements OnInit {

  @Input() show: Show;
  id: String;

  constructor(private showService: ShowsService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.id = this.route.snapshot.params.id
    // this.showService.getShowById(this.id).subscribe(
    //   shows => {
    //     this.show = shows,
    //       console.log(this.show)
    //   },
    //   error => {
    //     console.log(error)
    //   }
    // )
  }

}
