import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: DataService,
              private router: Router) { }

ngOnInit() {
}

insert(myform) {
const observableResult = this.service.insert(myform.form.value);
observableResult.subscribe((result) => {
console.log(result);
});
}
goToHome() {
this.router.navigate(['/home']);
}

}
