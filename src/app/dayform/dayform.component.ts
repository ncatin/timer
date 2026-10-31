import { Component, input, OnInit, output } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Day } from '../models/day';
import { DatetimeChangeEventDetail, IonDatetime, IonDatetimeButton, IonModal } from "@ionic/angular";
import { IonDatetimeCustomEvent } from '@ionic/core';
import { Aisle } from '../models/aisle';
import { StorageService } from '../storage.service';
import { AisleComponent } from '../aisle/aisle.component';
import { IonButton } from "@ionic/angular";

@Component({
  selector: 'app-dayform',
  templateUrl: './dayform.component.html',
  styleUrls: ['./dayform.component.scss'],
  imports: [IonButton, IonModal, IonDatetime, IonDatetimeButton, ReactiveFormsModule, AisleComponent],
})
export class DayformComponent  implements OnInit {

  input = input.required<Day>();
  today = input as unknown as Day;
  profileForm: FormGroup;
  closed = output<void>();
  
  constructor(private fb: FormBuilder, private storage: StorageService) {
    this.profileForm = this.fb.group({
      startTime: [''],
      endTime: [''],
      count: FormControl<number|null>
    })
    this.today.date = new Date();
    this.today.aisles = [];
  }

  onDateSelected($event: IonDatetimeCustomEvent<DatetimeChangeEventDetail>) {
    this.today.date = new Date(String($event.detail.value));
  }


  newAisle(){
    
    let currentAisle: Aisle = {startDate: this.today.date ?? new Date()};
    if(this.today.aisles != undefined){
      console.log("aisle created", this.today.aisles.push(currentAisle));
    }
    
    if(this.today.date?.toDateString() != undefined){
      this.storage.set(this.today.date?.toDateString(), this.today);
    }
    
  }

  onSubmit(): void{
    if(this.profileForm.valid && this.today.date?.toDateString() != undefined){
      this.storage.set(this.today.date?.toDateString(), this.today);
    }
  }

  ngOnInit() {}

}
