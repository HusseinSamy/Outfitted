import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../_models/User.model'
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.sass']
})
export class CreateAccountComponent implements OnInit {

  genders: string[] = ['male', 'female'];
  form: FormGroup = new FormGroup({});
  baseUrl: string = 'https://localhost:5001/api/';

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'first_name': new FormControl(null, Validators.required),
      'last_name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      'age': new FormControl(null, [Validators.required,Validators.min(1),Validators.max(100)]),
      'gender': new FormControl('male',[Validators.required])
    });
    console.log(this.form)
  }

  onSubmit(){
    if(this.form.value['gender'] === 'male') this.form.value['gender'] = 'M';
    else this.form.value['gender'] = 'F';

    let data: any = JSON.stringify(this.form.value);
    const headers= new HttpHeaders()
    .set('content-type', 'application/json; charset=utf-8');

  this.http.post(this.baseUrl + 'Account/SignUp', data,{headers: headers}).subscribe({
        next: response =>{
          localStorage.setItem('user',JSON.stringify(response));
          console.log(response)
        }
      });
  }


    // map((response) =>
    //   {
    //     const user = response;
    //     if(user) {
    //       localStorage.setItem('user',JSON.stringify(user));
    //     }

    //   })

}
