import { Component, OnInit } from '@angular/core';



import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {




  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    password: ['', Validators.required],
    passwordagain: ['', Validators.required],
  });




  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void { }

  async registerHere() {
    const data = this.fbFormGroup.value;

    const url = "http://localhost:3000/adduser";

    await this.http.post(url, data).toPromise();

    this.router.navigate(['login'])

  }
}