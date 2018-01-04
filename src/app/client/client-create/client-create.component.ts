import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ClientService } from '../client.service';
import { IClient } from '../IClient';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {

  constructor(public fb: FormBuilder, private clientService: ClientService) { }

  public clientCreateForm = this.fb.group({
    clientName: ['', Validators.required],
    mobileno: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
    latitude: ['', Validators.required],
    longitude: ['', Validators.required],
    clntLogo: ['', Validators.required],
    branding: ['', Validators.required]
  });

  createClient(): void {
    const clientDetails: IClient = {
      clientName: this.clientCreateForm.value['clientName'],
      mobileno: this.clientCreateForm.value['mobileno'],
      email: this.clientCreateForm.value['email'],
      address: this.clientCreateForm.value['address'],
      latitude: this.clientCreateForm.value['latitude'],
      longitude: this.clientCreateForm.value['longitude'],
      clntLogo: this.clientCreateForm.value['clntLogo'],
      branding: this.clientCreateForm.value['branding']
    };
    this.clientService.createClient(clientDetails)
    .subscribe(clientId => {
      console.log(clientId);
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
