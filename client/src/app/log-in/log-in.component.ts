import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})
export class LogInComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  baseUrl: string = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(){
    //BROKEN CODE
  //   let data: any = JSON.stringify(this.form.value);
  //   const headers= new HttpHeaders()
  //   .set('Email', this.form.value['email'])
  //   .set('Password', this.form.value['password']);

  // this.http.get(this.baseUrl + 'Account/Login/${this.form.value["email"]}/${this.form.value["password"]}').subscribe({
  //       next: response =>{
  //         localStorage.setItem('user',JSON.stringify(response));
  //         console.log(response)
  //       }
  //     });
  }
}
