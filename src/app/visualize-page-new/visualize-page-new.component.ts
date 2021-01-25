import { Component, OnInit } from '@angular/core';
import gatewayData from 'src/app/gatewayData.interface'
import { NodedataService } from '../services/nodedata.service';

@Component({
  selector: 'app-visualize-page-new',
  templateUrl: './visualize-page-new.component.html',
  styleUrls: ['./visualize-page-new.component.css']
})
export class VisualizePageNewComponent implements OnInit {
  loading: boolean = true;
  notfound: boolean = false;
  error: boolean = false;
  gatewayDataList: gatewayData[] = [] ;
  constructor(private nd: NodedataService) { }

  ngOnInit(): void {
    this.nd.GetGatewayListData().then((result) => {
      this.gatewayDataList = result
      //console.log(this.nodeData_arr)
      // if(this.nodeData_arr) this.loading = true;
      if(this.gatewayDataList.length < 1) this.notfound = true;
      this.loading = false;
    }).catch((reason)=>{
      alert(reason);
      this.error = true;
    })
    
  }

}
