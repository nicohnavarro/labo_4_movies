import { Component, OnInit, Input } from '@angular/core';
import { IActor } from '../IActor';

@Component({
  selector: 'app-list-actors',
  templateUrl: './list-actors.component.html',
  styleUrls: ['./list-actors.component.scss']
})
export class ListActorsComponent implements OnInit {
  @Input() listActors: IActor[];
  constructor() { }

  ngOnInit(): void {

  }

  showActor(actor){
    alert("show")
  }

  deleteActor(actor)
  {
    alert("delete")
  }

}
