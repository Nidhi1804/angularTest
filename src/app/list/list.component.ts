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
  items: any[];
  isIndex: any;
  time: any;
  constructor(private ls: ListService) { }

  ngOnInit() {
    this.items = [];
    let startTime = new Date(2019, 1, 1, 9, 0, 0, 0);
    let endTime = new Date(2019, 1, 1, 17, 0, 0, 0);
    for (let i = 0; i <= (endTime.getHours() - startTime.getHours()); i++) {
      this.items.push({ id: i, time: (startTime.getHours() + i) + ":00" })
    }
    this.ls.getList().subscribe((data: number[]) => {
      this.users = data
    });
  }
}
