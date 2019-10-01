import  { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-request/profile.service.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
//   user:any=[];
  
//   repo:any=[];
//   username:string=''
  
//   hideForms: boolean=true;
//   hideForm(){
//     this.hideForms=!this.hideForms
//   }

//  showDetails: boolean=false;
//     showDetail(){
//       this.showDetails=!this.showDetails
//     }



//   getRepo(){
//     let promise=new Promise((resolve,reject)=>{
//       this.profService.getRepo(this.username).toPromise().then(response=>{
//         this.repo=response
        
//         resolve()
//       },
//       error=>{
//         reject(error)
//       }
//       )
//     })
//    return promise
//   }

//   getUser(){
//     let promise=new Promise((resolve,reject)=>{
//       this.profService.getUser(this.username).toPromise().then(response=>{
//         this.user=response
        
//         resolve()
//       },
//       error=>{
//         reject(error)
//       }
//       )
//     })
//    return promise
//   }


//   constructor(private httpClient:HttpClient,private profService:ProfileService) { 
    
//   }

  ngOnInit() {
   
  }

}