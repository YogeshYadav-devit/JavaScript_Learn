import { Component, OnInit } from '@angular/core';
import { Intern } from 'src/app/Intern';

@Component({
  selector: 'app-intern-list',
  templateUrl: './intern-list.component.html',
  styleUrls: ['./intern-list.component.css']
})
export class InternListComponent implements OnInit {
  inter:Intern[]=[];
   interns:Intern={
     sNo:"1",
     InterName:".net"
     
   }

   constructor() { }
 

  ngOnInit(): void {
  
  }

}
