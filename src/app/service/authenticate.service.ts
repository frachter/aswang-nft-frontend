import { Injectable } from "@angular/core"
import detectEthereumProvider from "@metamask/detect-provider"

@Injectable({
  providedIn: "root"
})
export class AuthenticateService {
  provider: any = {}
  chainId: string = ""
  account: string = "Connect"
  constructor() {}

  async connectWeb3():Promise<string> {
    this.provider = await detectEthereumProvider()

    if (this.provider) {
      console.log("Metamask is installed")

      this.chainId = await this.provider.request({
        method: "eth_chainId"
      })

      this.account = await this.provider.request({
        method: "eth_requestAccounts"
      })

      return this.account[0]
    } else {
      // if the provider is not detected, detectEthereumProvider resolves to null
      console.error("Please install MetaMask!")
      return "Error Connecting"
    }
  }

  getAccount(){
    return this.account[0]
  }
}
