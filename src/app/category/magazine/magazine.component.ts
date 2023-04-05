import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from 'src/app/NSservice/NewserviceService';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {

  constructor(private api:NewserviceService, private router: Router) { }
  magazine:any=[];
  mgerr:boolean=true;
  ngOnInit(): void {
    this.Magazine();
  }
  Magazine(){
    this.api.magazinen().subscribe((result)=>{
      this.magazine = result.channel.item;
       },error=>{if(error.status == 404){this.mgerr=false;} });
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
