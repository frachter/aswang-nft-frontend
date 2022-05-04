import { Component, OnInit } from '@angular/core';
import { MetaDataService } from 'src/app/service/meta-data.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  metaData:MetaData[] = []
  constructor(private metaDataService: MetaDataService) {}

  ngOnInit(): void {
    this.metaData = this.metaDataService.getMetaDataRandom()
  }

}
