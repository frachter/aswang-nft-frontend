import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MetaDataService } from 'src/app/service/meta-data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FusionDetailComponent } from '../fusion-detail/fusion-detail.component';

@Component({
  selector: 'app-fusions',
  templateUrl: './fusions.component.html',
  styleUrls: ['./fusions.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FusionsComponent implements OnInit {


  metaData:MetaData[] = []
  alreadyFused:MetaData[] = []
  constructor(private metaDataService: MetaDataService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.metaData = this.metaDataService.getMetaDataOnlyFusion()
    this.alreadyFused = this.metaDataService.getAlreadyFused()
  }

  
  openFusionModal(item: MetaData) {
    const modalRef = this.modalService.open(FusionDetailComponent, { centered: true,  size: 'xl' });
    modalRef.componentInstance.item = item;
  }

}
