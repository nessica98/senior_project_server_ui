import { Injectable } from '@angular/core';
import { APIWebConfigService } from './apiweb-config.service'
import Axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class NodedataService {
  constructor(private api:APIWebConfigService) { }
  BaseUrl = this.api.getBaseURL()

  async GetGatewayListData() {
    const result = await Axios.get(this.BaseUrl+'/gateway/all')
    return result.data
  }

  async GetNodeData() {
    console.log(this.BaseUrl+'/gps/allnode')
    const result = await Axios.get(this.BaseUrl+'/gps/allnode')
    return result.data
  }

  async GetOneNodeData(nodename){
    const result_nodedata = await Axios.get(this.BaseUrl+'/gps/node')
    const result_all = await Axios.get(this.BaseUrl+'/gps/node/'+nodename)
    let result_nodedata_filt = result_nodedata.data.filter((val,idx)=>{
      return val.nodename === nodename
    })
   
    return {result_nodedata_filt,result_all}
  }

  async GetFilterGPSval(nodeId){
    const result_nodedata = await Axios.get(this.BaseUrl+'/gps/node/'+nodeId)
    
   
    return result_nodedata.data
  }

  async GetNodeDataLatest() {
    const result = await Axios.get(this.BaseUrl+'/gps/allnode')
    return result
  }
  
  
}
