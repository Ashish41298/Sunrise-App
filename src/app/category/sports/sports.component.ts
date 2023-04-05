import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from 'src/app/NSservice/NewserviceService';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private api:NewserviceService, private router: Router) { }
  sports:any=[];
  sperr:boolean=true;
  ngOnInit(): void {
    this.Sports();
  }
  Sports(){
    this.api.sportsn().subscribe((result)=>{
      this.sports = result.channel.item;
       },error=>{if(error.status == 404){this.sperr=false;} });
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
