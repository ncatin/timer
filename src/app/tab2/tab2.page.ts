import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Day } from '../models/day';
import { StorageService } from '../storage.service';
import { IonButton } from "@ionic/angular";
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, KeyValuePipe]
})
export class Tab2Page {

  router = inject(Router);

  newDay() {
    let newDay :Day = {id: this.index};
    newDay.date = new Date();
    this.storage.set(String(this.index), newDay);
    this.days.set(this.index, newDay);
    this.index++;
  }

  selectDay(id: number){
    this.currentDay = this.storage.get(String(id)) as unknown as Day;
    this.router.navigate(['/tabs/tab1', id]);
  }


  index: number = 0;
  days = new Map<number, Day>;
  currentDay: Partial<Day> = {};
  constructor(private storage: StorageService) {}

  ngOnInit(){
    
    while(this.storage.get(this.index.toString()) != undefined){
      this.days.set(this.index, this.storage.get(this.index.toString()) as unknown as Day)
      this.index++;
      console.log(this.index);
    }
  }
}
