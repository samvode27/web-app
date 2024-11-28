import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule,  RouterLink, RouterOutlet],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  role: string = ''; 
  otp: string = '';
  isOtpSent: boolean = false;

  constructor(private router: Router) {}

  sendOtp() {
    console.log(`Sending OTP to: ${this.email}`);
    this.isOtpSent = true;
  }

  verifyOtp() {
    if (this.otp === '123456') {
      // Register the user here
      alert('OTP Verified! You can now sign up.');
      this.router.navigate(['/login']);
    } else {
      alert('Invalid OTP');
    }
  }

  onSubmit() {
    localStorage.setItem('user', JSON.stringify({
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role
    }));

    if (this.role === 'doctor') {
      this.router.navigate(['/doctor-dashboard']);
    } else {
      this.router.navigate(['/patient-dashboard']);
    }
  }
}
