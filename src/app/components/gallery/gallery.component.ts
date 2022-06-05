import { Component, OnInit } from "@angular/core"
import { MetaDataService } from "src/app/service/meta-data.service"
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"
import { FusionDetailComponent } from "../fusion-detail/fusion-detail.component"
import { AuthenticateService } from "src/app/service/authenticate.service"

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
  ownerAddress:string = ""
  constructor(private metaDataService: MetaDataService, private authenticateService: AuthenticateService, private modalService: NgbModal) {}

  async ngOnInit(): Promise<void> {
    this.metaData = this.metaDataService.getMetaData()
    try {
      this.ownerAddress = this.authenticateService.getAccount()
      this.metaDataOwner = await this.metaDataService.getMetaDataByOwnerAddress(this.ownerAddress)
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
