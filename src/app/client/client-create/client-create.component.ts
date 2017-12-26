import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {

  constructor(public fb: FormBuilder) { }

  public clientCreateForm = this.fb.group({
    clientName: ['', Validators.required],
    mobileno: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
    latitude: ['', Validators.required],
    longitude: ['', Validators.required],
    branding: ['', Validators.required]
  });

  createClient(): void {
    console.log(this.clientCreateForm.value);
  }

  ngOnInit() {
  }

}
