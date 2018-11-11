import { CheckinComponent } from './../components/checkin/checkin.component';
import { GridComponent } from './../components/grid/grid.component';
import { GridService } from './../services/grid.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Angular2ImageGalleryModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [
    GridService, // Dependency Injection Registration Domain
    CheckinComponent
  ],
  bootstrap: []
})
export class CoreModule { }
