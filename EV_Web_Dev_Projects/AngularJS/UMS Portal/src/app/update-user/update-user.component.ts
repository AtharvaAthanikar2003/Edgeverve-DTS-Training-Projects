import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: any = { id: null, name: '', email: '' };  // Store user details
  originalUser: any = {};  // To store the original data before any changes

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch user ID from the route
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.user = this.userService.getUserById(id);  // Get user by ID
    this.originalUser = { ...this.user };  // Store the original user data to compare later
  }

  // Method to update the user data
  updateUser(): void {
    if (this.user.id) {
      this.userService.updateUser(this.user.id, {
        name: this.user.name, email: this.user.email,
      });
      this.router.navigate(['/user', this.user.id]);  // Navigate to the updated user's details page
    }
  }

  // Method to revert changes (if necessary)
  cancelUpdate(): void {
    this.user = { ...this.originalUser };  // Reset the form to the original data
  }
}
