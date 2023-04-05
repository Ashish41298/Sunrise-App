
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from "../NSservice/NewserviceService";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: NewserviceService, private router: Router) { }
  international: any = [];
  national: any = [];
  dvb: any = [];
  nrgn: any = [];
  nerror:boolean=true;
  nationalerror:boolean=true;
  dvberr:boolean=true;
  nrgnerr:boolean=true;
  ngOnInit(): void {
 
    this.api.internationaln().subscribe((result) => {
      this.international = result.channel.item;
    },error=>{if(error.status == 404){this.nerror=false;} }),

      this.api.nationaln().subscribe((result) => {
      this.national = result.channel.item;},
      error=>{if(error.status == 404){this.nationalerror=false;} }),

      this.api.dvbn().subscribe((result) => {
        this.dvb = result.channel.item;},
        error=>{if(error.status == 404){this.dvberr=false;} }),

      this.api.nrgn().subscribe((result) => {
        this.nrgn = result.channel.item;
      },error=>{if(error.status == 404){this.nrgnerr=false;} })

  }
  tabsnav2() {
    this.router.navigate(['/tabs']);
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
