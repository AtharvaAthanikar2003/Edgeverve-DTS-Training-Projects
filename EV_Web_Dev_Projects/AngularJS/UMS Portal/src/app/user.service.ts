import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private usersSubject = new BehaviorSubject<User[]>(this.users);

  createUser(user: User) {
    user.id = this.users.length + 1;
    this.users.push(user);
    this.usersSubject.next(this.users);
  }

  getUsers() {
    return of(this.users);
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  updateUser(id: number, updatedUser: { name: string; email: string }) {
    const user = this.getUserById(id);
    if (user) {
      user.name = updatedUser.name;
      user.email = updatedUser.email;
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
