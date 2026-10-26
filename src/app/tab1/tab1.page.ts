import { Component, viewChild, ViewContainerRef, inputBinding, outputBinding } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Day } from '../models/day';
import { StorageService } from '../storage.service';
import { DayformComponent } from '../dayform/dayform.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, IonIcon, DayformComponent],
})
export class Tab1Page {

  private container = viewChild.required('container', {read: ViewContainerRef});
  
  constructor() {}

  newDay() {

    this.container().clear();

    const componentRef = this.container().createComponent(DayformComponent, {
      bindings:[
        outputBinding('closed', () => this.handleClose())
      ]
    });
  }

  handleClose(){
    this.container().clear();
  }
}
