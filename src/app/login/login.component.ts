import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // email: string = '';
  // password: string = '';
  // otp: string = '';
  // isOtpSent: boolean = false;

  // constructor(private router: Router) {}

  //     sendOtp() {
  //       console.log(`Sending OTP to: ${this.email}`);
  //       this.isOtpSent = true;
  //     }
    
  //     verifyOtp() {
  //       const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  //       // Simulate OTP verification
  //       if (this.otp === '123456') {
  //         localStorage.setItem('userLoggedIn', 'true');
  //         if (storedUser.role === 'doctor') {
  //           this.router.navigate(['/doctordashboard']);
  //         } else {
  //           this.router.navigate(['/patientdashboard']);
  //         }
  //       } else {
  //         alert('Invalid OTP');
  //       }
  //     }

  // onSubmit() {
  //   const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

  //   if (storedUser.email === this.email && storedUser.password === this.password) {
  //     // Redirect based on role
  //     if (storedUser.role === 'doctor') {
  //       this.router.navigate(['/doctor-dashboard']);
  //     } else {
  //       this.router.navigate(['/patient-dashboard']);
  //     }
  //   } else {
  //     alert('Invalid credentials');
  //   }
  // }


  name: string = '';
  email: string = '';
  password: string = '';
  role: string = ''; 
  otp: string = '';
  isOtpSent: boolean = false;
  otpVerified: boolean = false;

  // Simulate the stored signup data (in real applications, this should come from a database)
  private storedEmail: string = 'a';
  private storedPassword: string = '1';
  private storedOtp: string = '123456'; // For simulation purposes

  constructor( private router: Router) {}

  // Function to simulate OTP sending (normally, you would call an API to send OTP)
  sendOtp(): void {
    if (this.email === this.storedEmail) {
      this.isOtpSent = true;
      console.log('OTP sent to your email!');
    } else {
      alert('Email does not match our records.');
    }
  }

  // Function to simulate OTP verification
  verifyOtp(): void {
    if (this.otp === this.storedOtp) {
      this.otpVerified = true;
      console.log('OTP verified successfully!');

    } else {
      alert('Invalid OTP. Please try again.');
    }
  }

  // Handle form submission
  // onSubmit(): void {
  //   if (this.email === this.storedEmail && this.password === this.storedPassword && this.otpVerified) {
  //     // Redirect to the appropriate dashboard based on the role (this could be dynamic in real scenarios)
  //     this.router.navigate(['/patientdashboard']); // For example, navigate to the patient dashboard
  //   } else {
  //     alert('Invalid credentials or OTP. Please try again.');
  //   }
  // }

  onSubmit() {
    localStorage.setItem('user', JSON.stringify({
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role
    }));

    if (this.role === 'doctor') {
      this.router.navigate(['/doctordashboard']);
    } else {
      this.router.navigate(['/landing']);
    }
  }
}



