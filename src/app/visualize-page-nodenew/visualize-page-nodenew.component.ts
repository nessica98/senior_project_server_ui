import { Component, OnInit } from '@angular/core';
import nodeData from '../nodeData.interface';
import { NodedataService } from 'src/app/services/nodedata.service';

@Component({
  selector: 'app-visualize-page-nodenew',
  templateUrl: './visualize-page-nodenew.component.html',
  styleUrls: ['./visualize-page-nodenew.component.css']
})
export class VisualizePageNodenewComponent implements OnInit {
  loading: boolean = true;
  notfound: boolean = false;
  error: boolean = false;
  nodeDataList: nodeData[] = [] ;
  constructor(private nd: NodedataService) { }
  

  ngOnInit(): void {
    this.nd.GetNodeDataLatest().then((val)=>{
      this.nodeDataList = val.data;
      console.log(this.nodeDataList);
    })
  }

}
