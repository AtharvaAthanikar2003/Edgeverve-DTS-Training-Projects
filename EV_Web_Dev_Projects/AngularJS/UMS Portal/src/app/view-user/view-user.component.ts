import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  users: any[] = [];  // Store the list of users
  user: any;          // Store the selected user's details
  selectedUserId: number | null = null;
  updatedName: string = '';
  updatedEmail: string = '';

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Fetch the list of users
    this.userService.getUsers().subscribe((users: any[]) => this.users = users);

    // Get the user ID from the route if available
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.selectedUserId = id;
    if (this.selectedUserId) {
      this.user = this.userService.getUserById(this.selectedUserId);  // Fetch the selected user's details
      this.updatedName = this.user.name;
      this.updatedEmail = this.user.email;
    }
  }

  // Set the selected user when clicking on a user in the list
  selectUser(id: number): void {
    this.selectedUserId = id;
    this.user = this.userService.getUserById(id);  // Update the displayed user details
    this.updatedName = this.user.name;
    this.updatedEmail = this.user.email;
  }

  // Update user details
  updateUser(): void {
    if (this.user) {
      this.userService.updateUser(this.user.id, {
        name: this.updatedName,
        email: this.updatedEmail
      });
    }
  }

  // Delete the selected user
  deleteUser(id: number): void {
    this.userService.deleteUser(id);  // Call delete method from UserService
    this.users = this.users.filter(user => user.id !== id);  // Remove from local list
    this.user = null;  // Reset the user details view
    this.selectedUserId = null;
  }
}
