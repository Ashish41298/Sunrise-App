import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from 'src/app/NSservice/NewserviceService';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent implements OnInit {

  constructor(private api:NewserviceService, private router: Router) { }
  lifestyle:any=[];
  lferror:boolean = true;
  ngOnInit(): void {
    this.lifes();
  }
  lifes(){
    this.api.lifestylen().subscribe((result)=>{
      this.lifestyle = result.channel.item;
       },error=>{if(error.status == 404){this.lferror=false;} });
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
