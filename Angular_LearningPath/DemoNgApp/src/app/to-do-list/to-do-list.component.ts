import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDoList:any[]=[];

  constructor() { }
  AddToDo(item:string){ 
    console.log(item)
    this.toDoList.push({id:this.toDoList.length,name:item});
    console.log(this.toDoList);
  }
  removetoDolist(id:number){
    this.toDoList=this.toDoList.filter(item =>item.id!==id);

  }

  ngOnInit(): void {
  }

}
