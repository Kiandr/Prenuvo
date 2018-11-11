import { CoreModule } from './core/modules/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GridComponent} from './core/components/grid/grid.component';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ViewContainerComponent} from './core/components/view-container/view-container.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CheckinComponent } from './core/components/checkin/checkin.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
@NgModule({
  declarations: [
    GridComponent,
    ViewContainerComponent,
    CheckinComponent

  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    Angular2ImageGalleryModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
bootstrap: [ViewContainerComponent]
})
export class AppModule { }
