import { Component, OnInit } from '@angular/core';
import { faAirFreshener } from '@fortawesome/free-solid-svg-icons';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  public faAirFreshener = faAirFreshener;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    confirmpassword: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  async confirmHere() {
    const data = this.fbFormGroup.value;
    console.log(data);
  }

}
