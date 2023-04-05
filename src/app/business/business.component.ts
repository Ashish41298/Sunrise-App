import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from "../NSservice/NewserviceService";
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  constructor(private api: NewserviceService, private router: Router) { }
  business: any = [];
  rssbusiness: any = [];
  bserr:boolean = true;
  rsserr:boolean = true;
  loader = false;
  displayshow:boolean=false;
  ngOnInit(): void {
    // 
    this.loader = true
    this.api.business().subscribe((result) => {
      this.business = result.articles;
    },error=>{if(error.status == 404){this.bserr=false;} })
    if(this.business && this.rssbusiness){
      setInterval(() => {
        this.loader = false;
      }, 2000);
    }
    this.api.rssbusiness().subscribe((result) => {
      this.rssbusiness = result.channel.item;
    },error=>{if(error.status == 404){this.rsserr=false;} });
    // rss
    // this.divguj();
  }

  // divguj() {
  //   this.api.rssbusiness().subscribe((result) => {
  //     this.rssbusiness = result.channel.item;
  //   },error=>{if(error.status == 404){this.rsserr=false;} });
  // }

  tabsnav1() {
    this.router.navigate(['/home']);
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
