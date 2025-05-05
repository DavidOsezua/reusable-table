import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-users',
  imports: [CommonModule, TableComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  // private httpClient = inject(HttpClient);

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => {
        this.users = res;
      });
  }

  editUsers(item: any): void {
    debugger;
  }

  deleteUsers(item: any): void {
    debugger;
  }
}
