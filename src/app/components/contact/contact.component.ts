import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup | any;
  submitted: boolean = false;

  ngOnInit(): void {
    this.initialForm();
  }

  initialForm() {
    this.contactForm = this.fb.group({
      from_name: new FormControl('', [Validators.required]),
      to_name: new FormControl('Vishnurathan', [Validators.required]),
      from_email: new FormControl('', [Validators.required, Validators.email]),
      from_message: new FormControl('', [Validators.required]),
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  // Add your EmailJS public key here
  private emailjsPublicKey = 'cTGxKSJdQLK0JX3Gu';

  constructor(private fb: FormBuilder, private toaster: NgToastService) {
    // Initialize emailjs with your public key
    emailjs.init(this.emailjsPublicKey);
  }

  async send() {
    if (this.contactForm.valid) {
      try {
        let response = await emailjs.send(
          'service_l58fenq',
          'template_ph0v3d1',
          {
            to_name: this.contactForm.value.to_name,
            from_name: this.contactForm.value.from_name,
            from_email: this.contactForm.value.from_email,
            from_message: this.contactForm.value.from_message,
          }
        );

        this.toaster.warning({
          detail: 'SUCCESS',
          summary: 'Message has been sent successfully',
          duration: 5000,
          position: 'topRight',
        });
        this.contactForm.reset();
      } catch (error) {
        this.toaster.error({
          detail: 'SUCCESS',
          summary: 'Error sending email. Please try again.',
          duration: 5000,
          position: 'topRight',
        });
      }
    }else{
      this.submitted = true;
    }
  }
}
