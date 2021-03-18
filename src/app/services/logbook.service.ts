import { Injectable } from '@angular/core';
import Axios from 'axios';
import { APIWebConfigService } from './apiweb-config.service';

@Injectable({
  providedIn: 'root'
})
export class LogbookService {

  constructor(private api:APIWebConfigService) { }
  BaseUrl = this.api.getBaseURL()

  async logbookAll() {
    const result = await Axios.get(this.BaseUrl+'/logbook/all')
    //console.log(result.data)
    //  const data = result.data.sort((a,b)=>{
    //   return a.createdAt - b.createdAt
    // })

    return result.data
  }

  async gatewayDataFetch(nodename){
    const result = await Axios.get(this.BaseUrl+'/logbook/'+nodename)
    console.log(result.data)
    // const data = result.data.sort((element)=>{
    //   return element.
    // })
    return result.data
  }

  async gatewayDataAdd(payload){
    const result = await Axios.post(this.BaseUrl+'/logbook/add', payload)
    return result.data
}
}
