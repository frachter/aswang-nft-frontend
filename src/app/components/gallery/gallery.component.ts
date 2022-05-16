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
  metaDataOwner: MetaData[] = []
  isErrorOpensea: boolean = false
  alreadyFused: MetaData[] = []
  page: number = 1
  pageSize: number = 20
  constructor(private metaDataService: MetaDataService, private modalService: NgbModal) {}

  async ngOnInit(): Promise<void> {
    this.metaData = this.metaDataService.getMetaData()
    try {
      this.metaDataOwner = await this.metaDataService.getMetaDataByOwnerAddress("0x8899d0deDBb6ddd065E0Fc1e7b3aaed9bC5D0EbD")
      this.isErrorOpensea = false
    } catch (error) {
      console.error("couldn't fetch Owners Assets from OpenSea", error)
      this.metaDataOwner = []
      this.isErrorOpensea = true
    }
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
