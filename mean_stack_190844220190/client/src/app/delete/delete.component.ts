import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private service: DataService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((result) => {
      const venue = result.get('venue');
      const observableresult = this.service.delete(venue);
      observableresult.subscribe((data) => {
        this.router.navigate(['/home']);
      });
    });
  }

}
