import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Day } from '../models/day';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, IonIcon],
})
export class Tab1Page {
  

  today?: Day;
  constructor() {}

  newDay() {
    throw new Error('Method not implemented.');
  }
}
