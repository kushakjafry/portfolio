import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { baseURL } from '../shared/baseUrl';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  constructor(private http: HttpClient, private builder: FormBuilder) {}
  spinnerShow = false;
  messageSent = '';
  error: string = '';
  FormData: FormGroup;
  ngOnInit(): void {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      message: new FormControl('', [Validators.required]),
    });
  }
  onSubmit(FormData) {
    console.log(FormData);
    this.spinnerShow = true;
    this.http.post(baseURL + 'messages', FormData).subscribe(
      (message) => {
        this.spinnerShow = false;
        this.messageSent = 'Message was Sent';
      },
      (err) => {
        this.spinnerShow = false;
        this.error = 'Message was Not Sent';
      }
    );
  }
}
