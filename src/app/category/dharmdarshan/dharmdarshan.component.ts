import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from 'src/app/NSservice/NewserviceService';

@Component({
  selector: 'app-dharmdarshan',
  templateUrl: './dharmdarshan.component.html',
  styleUrls: ['./dharmdarshan.component.css']
})
export class DharmdarshanComponent implements OnInit {

  constructor(private api:NewserviceService, private router: Router) { }
  dharmadarshan:any=[];
  dharmaerr:boolean = true;
  ngOnInit(): void {
    this.Dharmadarshan();
  }
  Dharmadarshan(){
    this.api.dharmd().subscribe((result)=>{
      this.dharmadarshan = result.channel.item;
       },error=>{if(error.status == 404){this.dharmaerr=false;} });
  }

  tabsnav0(){
    this.router.navigate(['/category']);
  }
  tabsnav1(){
    this.router.navigate(['/home']);
  }
  scroll(el: HTMLElement) {
  el.scroll(0, 0);
  el.style.scrollBehavior = 'smooth';
  window.scroll(0, 0);
  }
  sht: boolean = false;
  shbtn() {
  this.sht = !this.sht
  }
  goback(){
    this.router.navigate(['/home']);
  }

}
