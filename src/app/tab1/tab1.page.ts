import { Component, viewChild, ViewContainerRef, inputBinding, outputBinding, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton} from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { DayformComponent } from '../dayform/dayform.component';
import { Day } from '../models/day';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, DayformComponent],
})
export class Tab1Page {
  
  router = inject(Router);
  @Input() id: number = -1;
  currentDay : Day = { id: -1};
  selectDay: boolean = false;
  private container = viewChild.required('container', {read: ViewContainerRef});
  
  constructor(private storage: StorageService) {}

  ngOnInit(){
    if(this.id == -1){
      this.selectDay = false;
    }else{
      this.selectDay = true;
      this.currentDay = this.storage.get(String(this.id)) as unknown as Day;
    }
  }

  SelectDay() {
    this.router.navigate(['/tabs/tab2']);
  }


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
