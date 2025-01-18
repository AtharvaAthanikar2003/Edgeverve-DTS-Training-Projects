import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: any[]) => this.users = users);  // Fetch the list of users
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);  // Call delete method from UserService
    this.userService.getUsers().subscribe((users: any[]) => this.users = users);  // Refresh the user list
  }
}
