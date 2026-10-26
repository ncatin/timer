import { Component, OnInit, output } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Day } from '../models/day';
import { DatetimeChangeEventDetail, IonDatetime, IonDatetimeButton, IonModal } from "@ionic/angular";
import { IonDatetimeCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-dayform',
  templateUrl: './dayform.component.html',
  styleUrls: ['./dayform.component.scss'],
  imports: [IonModal, IonDatetime, IonDatetimeButton, ReactiveFormsModule],
})
export class DayformComponent  implements OnInit {
  
  today: Partial<Day> = {};
  profileForm: FormGroup;
  closed = output<void>();
  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      startTime: [''],
      endTime: [''],
      count: FormControl<number|null>
    })
  }

  onDateSelected($event: IonDatetimeCustomEvent<DatetimeChangeEventDetail>) {
    this.today.date = new Date(String($event.detail.value));
  }

  onStartTimeSelected($event: IonDatetimeCustomEvent<DatetimeChangeEventDetail>) {
    this.today.startDate = new Date(String($event.detail.value));
  }


  onSubmit(): void{
    if(this.profileForm.valid){
      this.today.startTimeString = String(this.profileForm.get('startTime')?.value ?? '');
      this.today.endTimeString = String(this.profileForm.get('endTime')?.value ?? '');
      this.today.count = Number(this.profileForm.get('count')?.value ?? '');
    }
  }

  ngOnInit() {}

}
