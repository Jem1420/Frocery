import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private _ds: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(e){
    e.preventDefault();
    let param1 = e.target[0].value;
    let param2 = e.target[1].value;
    this._ds.postData('login', {param1, param2}).subscribe((res:any)=>{
      console.log(res);
    });
    //param1:param1, param2:param2 "value pairing"
    console.log(e);
    console.log(e.target[0].value);
    console.log(e.target[1].value);
  }

}
