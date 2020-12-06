import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IActor } from 'src/app/components/actor/IActor';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  listCollection:IActor[];
  constructor(private router:Router,private route:ActivatedRoute,private collectionSvc:CollectionsService) { }

  ngOnInit(): void {
    this.collectionSvc.GetAll('Actors').subscribe((data)=>{
      this.listCollection = data;
    });
  }

  goToCreateActor(){
    this.router.navigate(['main/createActor'])
  } 
}
