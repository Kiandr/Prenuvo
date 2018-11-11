import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CheckinService } from '../../services/checkin.service';
import { CheckinModel } from '../../models/checkin-model';
import { Condition } from 'selenium-webdriver';
import { EnumCore } from '../../enums/enum-core';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

public viewModel: CheckinModel;
public formController: FormControl;

constructor(private checkInService: CheckinService) {
  this.formController =  new FormControl('');
  this.viewModel = new CheckinModel();

  }
  ngOnInit() {
  console.log('CheckIn was initialized');
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    console.log('CheckIn was destroyed');
  }
  public checkInnBtnClick() {
    alert('Thank you' + this.viewModel.firstName);
  }

}
