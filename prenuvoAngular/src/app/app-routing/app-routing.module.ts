import { CheckinComponent } from './../core/components/checkin/checkin.component';
import { GridComponent } from './../core/components/grid/grid.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([
          { path: 'grid', component: GridComponent},
          { path: 'checkin', component: CheckinComponent}

        ])],
  exports: [RouterModule]

})
export class AppRoutingModule {
  static BrowserAnimationsModule: any;
}
