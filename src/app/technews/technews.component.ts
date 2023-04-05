import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from "../NSservice/NewserviceService";
@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private api: NewserviceService, private router: Router) { }
  loader = true;
  technology: any = [];
  tecerr:boolean= true;
  ngOnInit(): void {
    this.loader = true;
    this.api.technology().subscribe((result) => {
      this.technology = result.articles;
    },error=>{if(error.status == 404){this.tecerr=false;} })
    if(this.technology){
      setInterval(() => {
          this.loader = false;
          }, 2000);
    }
  }
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
