import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule for two-way binding

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],  // Add FormsModule for ngModel
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoText: string = 'EstatiaX';  // Dynamically bind logo text
  searchQuery: string = '';  // Two-way binding for search input
  isLoggedIn: boolean = false;  // Toggle between logged in and logged out state
  postButtonText: string = 'Post Property';  // Dynamic button text

  // Simulate login/logout toggle (for demonstration purposes)
  toggleLoginState() {
    this.isLoggedIn = !this.isLoggedIn;
    this.postButtonText = this.isLoggedIn ? 'Post Property' : 'Log In to Post';
  }

  postProperty() {
    if (this.isLoggedIn) {
      // Handle property posting action
      console.log('Redirecting to property post page...');
    } else {
      console.log('Please log in to post a property.');
    }
  }
}
