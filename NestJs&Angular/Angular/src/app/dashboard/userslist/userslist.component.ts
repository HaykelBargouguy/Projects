import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent {
  @Input() users: any[] | undefined;
  @Input() currentUser: any;

  ngOnInit() {
    console.log(this.currentUser, "from list");
  }

}
