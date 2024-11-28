import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingPageComponent {
  searchQuery: string = '';

  doctors = [
    { name: 'Dr. John Doe', specialty: 'Cardiology', picture: '/assets/images/p2.jpg'  },
    { name: 'Dr. Jane Smith', specialty: 'Dermatology',  picture: '/assets/images/p1.jpg' },
    { name: 'Dr. Emily Davis', specialty: 'Neurology', picture: '/assets/images/img.jpg'},
  ]  
  
  get filteredDoctors() {
    return this.doctors.filter(doctors =>
      doctors.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      doctors.specialty.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }


}