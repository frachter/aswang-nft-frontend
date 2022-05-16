import { Component, OnInit } from "@angular/core"
import { AuthenticateService } from "src/app/service/authenticate.service"

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  connection: string = "Connect"

  constructor(private authenticateService: AuthenticateService) {}

  ngOnInit(): void {
  }

  async connectWeb3() {
    this.connection = await this.authenticateService.connectWeb3()
    console.log(this.connection);
    this.connection =`${this.connection.slice(0,4)}...${this.connection.slice(this.connection.length-3,this.connection.length)}`
    console.log(this.connection);
  }
}
