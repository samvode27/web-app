import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, FormsModule, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  searchQuery: string = '';
  specialties: string[] = ['Cardiology', 'Dermatology', 'Neurology', 'Pediatrics', 'Orthopedics'];

  onSearch() {
    console.log('Searching for:', this.searchQuery);
  }

  onSelectSpecialty(specialty: string) {
    console.log('Selected specialty:', specialty);
  }

  doctors = [
    { name: 'Dr. John Doe', specialty: 'Cardiology' },
    { name: 'Dr. Jane Smith', specialty: 'Dermatology'},
    { name: 'Dr. Emily Davis', specialty: 'Neurology'},
  ];
}