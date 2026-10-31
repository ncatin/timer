import { Component, OnInit, input } from '@angular/core';
import { Aisle } from '../models/aisle';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../storage.service';
import { IonDatetimeButton, IonDatetime, IonModal } from "@ionic/angular";

@Component({
  selector: 'app-aisle',
  templateUrl: './aisle.component.html',
  styleUrls: ['./aisle.component.scss'],
  imports: [IonModal, IonDatetime, IonDatetimeButton, ReactiveFormsModule],
})
export class AisleComponent  implements OnInit {


  aisle = input.required<Aisle>();
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private storage: StorageService) {
    this.profileForm = this.fb.group({
      startTime: [''],
      endTime: [''],
      count: FormControl<number|null>,
      aisleNumber: FormControl<number|null>
    })
  }

  onSubmit(){

  }

  ngOnInit() {}

}
