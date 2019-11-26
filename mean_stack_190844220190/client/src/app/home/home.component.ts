import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teams: any;
  constructor(private service: DataService) { }

  ngOnInit() {
   const observableResult = this.service.select();
   observableResult.subscribe((result) => {
   console.log(result);
   this.teams = result;
  });
  }
}
