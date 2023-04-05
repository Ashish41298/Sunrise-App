import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from 'src/app/NSservice/NewserviceService';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  constructor(private api:NewserviceService, private router: Router) { }
  covid19:any=[];
  coviderr:boolean = true;
  ngOnInit(): void {
    this.Dharmadarshan();
  }
  Dharmadarshan(){
    this.api.covidn().subscribe((result)=>{
      this.covid19 = result.channel.item;
       },error=>{if(error.status == 404){this.coviderr=false;} });
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
