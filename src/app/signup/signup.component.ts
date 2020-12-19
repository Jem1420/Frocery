import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private route: Router, private _ds: DataService) { }

  ngOnInit(): void {
  }

  submitRegistration(e){
    e.preventDefault();
    let fname_fld = e.target[0].value;
    let mname_fld = e.target[1].value;
    let lname_fld = e.target[2].value;
    let email_fld = e.target[3].value;
    let password_fld = e.target[4].value;
    this._ds.postData('adduser', {fname_fld, mname_fld,lname_fld,email_fld, password_fld}).subscribe((res:any)=>{
      // NOTE:  res returns last inserted id
      console.log(res);
      this.route.navigate(['signin']);
    });
    // param1:param1, param2:param2 "value pairing"
  }

  signup(){

      // this.route.navigate(['shop']);
  }

}
