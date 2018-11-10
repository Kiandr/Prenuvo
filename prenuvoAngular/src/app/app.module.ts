import { CoreModule } from './core/modules/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GridComponent} from './core/components/grid/grid.component';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    Angular2ImageGalleryModule,
    Angular2ImageGalleryModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [GridComponent]
})
export class AppModule { }
