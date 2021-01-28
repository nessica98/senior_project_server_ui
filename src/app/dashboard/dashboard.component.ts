import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';  
import Axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import { JwtHelperService } from "@auth0/angular-jwt";

import { AuthService } from '../services/auth.service';  
import { LogbookService } from '../services/logbook.service';
  
@Component({  
  selector: 'app-dashboard',  
  templateUrl: './dashboard.component.html',  
  styleUrls: ['./dashboard.component.css']  
})  
export class DashboardComponent implements OnInit {  
  
  id: string;  
  dataArr_recv;
  val_IDbox:uuidv4 = uuidv4()
  LogbookListShow = []
  date_update:Date;
  isLenLogbookZero:boolean = this.LogbookListShow.length > 0
  constructor(private router: Router, private authService: AuthService,private logService:LogbookService) { }  
  
  fetchOnclick() {
    this.logService.logbookAll().then((val)=>{
      this.dataArr_recv = val
    })
  }
  ngOnInit() {  
    this.logService.logbookAll().then((val)=>{
      this.dataArr_recv = val
    })
    
    

    // form_el.addEventListener('submit', (e)=>{
    //   e.preventDefault()
    //   console.log('submit')
    //   var fisherykind = fisherykindInput.value
    //   var amount = amountInput.value
    //   var unit = unitInput.value
    //   if(fisherykind === ''  || amount === '' ){
    //     alert('กรุณากรอกค่าให้ครบทั้ง 2 ช่อง')
    //   }else{
    //   var post_data = {FisheryKind:fisherykind,FisheryKindAmount:amount,Unit:unit}
    //   console.log(post_data)
    //   this.LogbookListShow.push(post_data)
    //   console.log(this.LogbookListShow)
    //   fisherykindInput.value = ''
    //   amountInput.value = ''
    //   this.isLenLogbookZero= this.LogbookListShow.length > 0
    //   // Axios.post('http://localhost:5000/logbook/add', post_data).then((val)=>{
    //   //   console.log(val)
    //   //   if(val.data.affectedRows === 1){
    //   //     alert('complete add')
    //   //     window.location.reload()
    //   //   }
    //   // }).catch((reason)=>{
    //   //   alert('error')
    //   //   console.log(reason)
    //   // })
    //   }
    // })
  }  
  
  
  
}  