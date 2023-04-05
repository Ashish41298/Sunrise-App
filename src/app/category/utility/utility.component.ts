import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from 'src/app/NSservice/NewserviceService';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css']
})
export class UtilityComponent implements OnInit {

  constructor(private api:NewserviceService, private router: Router) { }
  utility:any=[];
  utlierr:boolean=true;
  ngOnInit(): void {
    this.Utility();
  }
  Utility(){
    this.api.utilityn().subscribe((result)=>{
      this.utility = result.channel.item;
       },error=>{if(error.status == 404){this.utlierr=false;} });
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
