import { Component, OnInit,OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { CheckinService } from '../../services/checkin.service';
import { CheckinModel } from '../../models/checkin-model';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

public viewModel: CheckinModel;
  constructor(private checkInService: CheckinService) {
    this.viewModel = new CheckinModel;
  }

  ngOnInit() {
  console.log('CheckIn was initialized');
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    console.log('CheckIn was destroyed');
  }
}
