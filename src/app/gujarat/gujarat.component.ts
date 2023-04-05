
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from '../NSservice/NewserviceService';

@Component({
  selector: 'app-gujarat',
  templateUrl: './gujarat.component.html',
  styleUrls: ['./gujarat.component.css']
})
export class GujaratComponent implements OnInit {
  loader=false;
  constructor(private api:NewserviceService,private router: Router) { }
  gujarat:any=[];
  gujerr:boolean = true;
  ngOnInit(): void {
    this.loader=true;
    this.divguj();
    if(this.gujarat){
      setInterval(() => {
        this.loader = false;
      }, 2000);
    }
  }
  divguj(){
    this.api.gujnews().subscribe((result)=>{
      this.gujarat = result.channel.item;},error=>{if(error.status == 404){this.gujerr=false;} });
  }


tabsnav1(){
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
