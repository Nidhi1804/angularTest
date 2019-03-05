import { Component, OnInit } from '@angular/core';
import { DetailService } from './detail.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [DetailService]
})
export class DetailComponent implements OnInit {
  data:object = {};
  response = [];
  constructor(private dt: DetailService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      const routeParams = this.activeRoute.snapshot.params;
      this.dt.findDetail(routeParams.time).subscribe((res:any) => {
        if(res.length > 0){
          this.data = res[0];
          this.response = res;
        }
      });
  }
  public saveData(){
    const routeParams = this.activeRoute.snapshot.params;
    this.data['time'] = routeParams.time;
    this.dt.saveDetail(this.data).subscribe((res) => {
      this.router.navigate(['/']);
    });
  }

  public updateData(){
    const routeParams = this.activeRoute.snapshot.params;
    this.data['time'] = routeParams.time;
    this.dt.updateDetail(this.data).subscribe((res) => {
      this.router.navigate(['/']);
    });
  }

}
