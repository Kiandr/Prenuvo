import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.css']
})
export class ViewContainerComponent implements OnInit {

  public gridButtonClick() {
    this.router.navigate(['/grid']);
  }
  public checkInButtonClick() {
    this.router.navigate(['/checkin']);
  }
  constructor(private route: ActivatedRoute, private router:Router) {

  }

  ngOnInit() {
  }

}
