import { Component, Input, OnInit } from "@angular/core"
import { MetaDataService } from "src/app/service/meta-data.service"
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-fusion-detail",
  templateUrl: "./fusion-detail.component.html",
  styleUrls: ["./fusion-detail.component.scss"]
})
export class FusionDetailComponent implements OnInit {
  @Input() public item: MetaData = {
    name: "",
    characterName: "",
    type: "",
    typeCharId: 0,
    description: "",
    fusion: [],
    tokenId: 0,
    openSeaId: 0,
    image_url: ""
  }
  parents: MetaData[] = []

  constructor(private metaDataService: MetaDataService, public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.parents = this.metaDataService.getMetaDataFusionParents(this.item)
  }

  updateItem(itemNew: MetaData): void {
    this.item = itemNew
    this.parents = this.metaDataService.getMetaDataFusionParents(this.item)
  }
}
