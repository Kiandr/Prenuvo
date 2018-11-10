import { GridModel } from './../../models/grid-model';
import { GridService } from './../../services/grid.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [GridService]
})
export class GridComponent implements OnInit {

  // Grid View Model
 private model: GridModel;

  // Resolving DI at core module domain
  constructor( private gridService: GridService ) {
    this.model = new GridModel();
  }

  // on init life cycle
  ngOnInit() {
    console.log('Grid component was initialized');
    this.model.flexBorderSize = 0;
    this.model.flexImageSize = 20;
    this.model.galleryName = '';
    this.model.metadataUri = '';
    this.model.maxRowsPerPage = 10;
  }
  // Setup the components with grid model
  public init( gridModel: GridModel) {
  }

  // Display component in the grid module
  public display() {
  }
  onViewerVisibilityChanged(isVisible: boolean): void {
    console.log(`viewer visible: ${isVisible}`);
}
}
