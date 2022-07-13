import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelRequestPageRoutingModule } from './travel-request-routing.module';

import { TravelRequestPage } from './travel-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelRequestPageRoutingModule
  ],
  declarations: [TravelRequestPage]
})
export class TravelRequestPageModule {}
