import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Day } from '../models/day';

@Component({
  selector: 'app-dayform',
  templateUrl: './dayform.component.html',
  styleUrls: ['./dayform.component.scss'],
  imports: [ReactiveFormsModule],
})
export class DayformComponent  implements OnInit {

  today: Partial<Day> = {};
  profileForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      startTime: [''],
      endTime: [''],
      count: FormControl<number|null>
    })
  }

  onSubmit(): void{
    if(this.profileForm.valid){
      this.today.startTime = String(this.profileForm.get('startTime')?.value ?? '');
      this.today.endTime = String(this.profileForm.get('endTime')?.value ?? '');
      this.today.count = Number(this.profileForm.get('count')?.value ?? '');
    }
  }

  ngOnInit() {}

}
