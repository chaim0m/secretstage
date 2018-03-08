import { Component, OnInit, Input } from '@angular/core';
import { ShowsService } from '../shows.service';
import Show  from '../models/show';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';


@Component({
 selector: 'app-show-img',
 templateUrl: './show-img.component.html',
 styleUrls: ['./show-img.component.css']
})
export class ShowImgComponent implements OnInit {

 @Input() show: Show[];

 constructor() { }

 ngOnInit() {
     
 }

}