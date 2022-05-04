import { Component, OnInit } from "@angular/core"
import { MetaDataService } from "src/app/service/meta-data.service"
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"
import { FusionDetailComponent } from "../fusion-detail/fusion-detail.component"

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent implements OnInit {
  metaData: MetaData[] = []
  alreadyFused: MetaData[] = []
  page: number = 1
  pageSize: number = 20
  constructor(private metaDataService: MetaDataService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.metaData = this.metaDataService.getMetaData()
  }

  filterAll(): void {
    this.metaData = this.metaDataService.getMetaData()
  }
  filterAswang(): void {
    this.metaData = this.metaDataService.getMetaDataAswang()
  }
  filterYokai(): void {
    this.metaData = this.metaDataService.getMetaDataYokai()
  }
  filterMaligno(): void {
    this.metaData = this.metaDataService.getMetaDataMaligno()
  }
  filterEngkanto(): void {
    this.metaData = this.metaDataService.getMetaDataEngkanto()
  }

  openFusionModal(item: MetaData) {
    const modalRef = this.modalService.open(FusionDetailComponent, { centered: true, size: "xl" })
    modalRef.componentInstance.item = item
  }
}
