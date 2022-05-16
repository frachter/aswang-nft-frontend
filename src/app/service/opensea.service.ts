import { Injectable } from "@angular/core"
import axios from "axios"

const AXIOS_CONFIG:any = {
  headers: { "X-API-KEY": "" }
}

@Injectable({
  providedIn: "root"
})
export class OpenseaService {
  constructor() {}

  async getOwnerAssets(ownerAddress: string): Promise<string[]> {
    //TODO owner > 50 assets (cursor)
    const ownerAssets = await axios.get(`https://api.opensea.io/api/v1/assets?collection=aswang&limit=50&owner=${ownerAddress}`, AXIOS_CONFIG)
    //@ts-ignore
    const tokenIds = ownerAssets.data.assets.map((asset) => {
      return asset.token_id
    })
    return tokenIds
  }
}
