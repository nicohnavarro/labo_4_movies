import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollectionsService } from 'src/app/services/collections.service';
import { ICountry } from '../../country/ICountry';
import { IActor } from '../IActor';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.scss']
})
export class CreateActorComponent implements OnInit {

  formActor: FormGroup;
  name: FormControl;
  surname: FormControl;
  gender: FormControl;
  dateOfBirth: FormControl;
  nacionality: ICountry;
  nacionality_name: string = 'Select country';
  photo: string;
  @Output() createdActor: EventEmitter<IActor> = new EventEmitter<IActor>();
  constructor(private router: Router, private collectionSvc:CollectionsService) {
    this.name = new FormControl('', [Validators.required]);
    this.surname = new FormControl('', [Validators.required]);
    this.gender = new FormControl('', [Validators.required]);
    this.dateOfBirth = new FormControl('', [Validators.required]);
    this.formActor = new FormGroup({});
    this.formActor.addControl('Name', this.name);
    this.formActor.addControl('Surname', this.surname);
    this.formActor.addControl('Gender', this.gender);
    this.formActor.addControl('DateOfBirth', this.dateOfBirth);
  }

  ngOnInit() {

  }
  getCountrySelected($event: ICountry) {
    console.log($event);
    this.nacionality = $event;
    this.nacionality_name = this.nacionality.name;
  }

  backActors() {
    this.router.navigate(['main/actors']);
  }

  onReset() {
    this.formActor.reset();
    this.nacionality = null;
    this.nacionality_name = 'Select Country';
  }
  onSubmit() {
    let actor: IActor = {
      id: '', name: this.name.value,
      surname: this.surname.value,
      gender: this.gender.value,
      nacionality: this.nacionality,
      dateOfBirth:this.dateOfBirth.value,
      photo: '',
    }
    this.collectionSvc.CreateOne(actor,'Actors').then(()=>{
      console.log('Se agrego');
    }).catch(err=>{console.log(err)});
  }

}
