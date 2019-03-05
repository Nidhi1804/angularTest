import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent implements OnInit {
  users: any;
  items: any;
  time: any;
  constructor(private ls:ListService) { }

  ngOnInit() {
    this.items = ['9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM']
    this.ls.getList().subscribe((data) => {
      this.users = data;
  });
  }

}
