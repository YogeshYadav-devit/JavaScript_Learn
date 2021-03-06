import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Intern } from 'src/app/models/Intern';
import { InternsService } from 'src/app/services/interns.service';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent implements OnInit {
    internid !: string;
    progressdetails !: Intern;
    matchinternId: boolean = false;
    index = 0;
    length=0;
    constructor(private InternsService: InternsService, private _route: ActivatedRoute, private router: Router) {
    }
  

  ngOnInit(): void {
    this.getInternId();
    this.showDetails();
  }
  getInternId():any {
    this._route.params.subscribe(params => this.internid = params.id);
    console.log(this.internid);
  }
  showDetails():any {
    this.InternsService.getInternsById(this.internid).subscribe(data => {
      if (this.internid = data._id) {
        this.progressdetails = data;
        this.matchinternId = true;
        this.length= data.progress.length;
        this.progressdetails.progress?.sort((a, b) => {
          let fa = a.date,
            fb = b.date;
          if (fa >fb) {
            return -1;
          }
          if (fa < fb) {
            return 1;
          }
          return 0;
        });
      }
      else {
        console.log("No Exit intern Id");
      }
    });
  }

}