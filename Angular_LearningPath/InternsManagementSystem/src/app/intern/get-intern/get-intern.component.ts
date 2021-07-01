import { Component, OnInit } from '@angular/core';
import { Intern } from '../models/Intern';
import { InternsService } from '../services/interns.service';
import { LocalInternService } from '../services/local-intern.service';

@Component({
  selector: 'app-get-intern',
  templateUrl: './get-intern.component.html',
  styleUrls: ['./get-intern.component.css']
})
export class GetInternComponent implements OnInit {
  
  lstInterns:Intern[]=[];

  constructor( private localInternService:LocalInternService, private InternsService :InternsService  ) 
  { 
    this.InternsService.getInterns().subscribe(
      data=>{ this.lstInterns=data;
      console.log(this.lstInterns);});
   
  }

  ngOnInit(): void {

  }
  delete(id:string){
 
    var r = confirm("Are You sure to delete this Intern");
    if (r == true) {
      this.InternsService.delete(id).subscribe(data =>{this.InternsService.getInterns().subscribe(data=>{this.lstInterns=data;});});
    } else {
      window.alert("You have not delete the intern");
     
    }
  }


}
