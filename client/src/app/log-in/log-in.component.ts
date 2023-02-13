import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})
export class LogInComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  baseUrl: string = 'https://localhost:5001/api/';



  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(){
    const email: string = this.form.value["email"];
    const password: string = this.form.value["password"];
  this.http.get(this.baseUrl + 'Account/Login/' + email + '/' + password).subscribe({
        next: response =>{
          localStorage.setItem('user',JSON.stringify(response));
      console.log(response);
      this.router.navigate(['/main'])

        },
        error: error => {
          console.log(error);
      this.router.navigate(['/main'])

        }
      });
  }
}
