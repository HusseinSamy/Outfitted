import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.sass']
})
export class CreateAccountComponent implements OnInit {

  genders: string[] = ['male', 'female'];
  form: FormGroup = new FormGroup({});
  constructor() { }

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
    this.form.valueChanges.subscribe(()=>{
      console.log(this.form)
    })
  }

  onSubmit(){
    console.log('Form has been submitted')
    console.log(this.form.value)
  }

}
