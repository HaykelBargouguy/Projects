import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-useritem',
  templateUrl: './useritem.component.html',
  styleUrls: ['./useritem.component.css']
})
export class UseritemComponent {
  @Input() user: any;
  @Input() currentUser: any;
  ngOnInit() {
    console.log(this.currentUser, "from item");
  }

}
