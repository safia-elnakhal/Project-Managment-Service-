import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { SharedModule } from 'src/app/Modules/shared/shared.module';


@NgModule({
  declarations: [
    ManagerComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule
    
  ]
})
export class ManagerModule { }
