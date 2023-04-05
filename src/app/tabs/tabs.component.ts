import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from "../NSservice/NewserviceService";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(private api: NewserviceService, private router: Router) { }
  Mulin: any = [];
  Surendranagarn:any = [];
  Ahemdabadn:any =[];
  Drangdhran:any =[];
  Halvadn:any =[];
  Morbin:any =[];
  Rajkotn:any =[];
  Vadodaran:any =[];
  merr:boolean=true;
  serr:boolean=true;
  aherror:boolean=true;
  dherr:boolean=true;
  haerr:boolean=true;
  moerr:boolean=true;
  rerr:boolean=true;
  verr:boolean=true;
  allerror:boolean=true;
  ngOnInit(): void {
    this.divsun();
    this.divMuli();
    this.divAhemd();
    this.divDrang();
    this.divHalvad();
    this.divMorbi();
    this.divRajkot();
    this.divVadodara();
  }
 
  divsun(){
    this.api.surendranagarlive().subscribe((result)=>{
      this.Surendranagarn = result.channel.item;
       },error=>{if(error.status == 404){this.serr=false;} });
  }

  divMuli(){
    this.api.Mulilive().subscribe((result)=>{
      this.Mulin = result.channel.item;
       },error=>{if(error.status == 404){this.merr=false;} });
  }

  divAhemd(){
    this.api.Ahemdabadlive().subscribe((result)=>{
      this.Ahemdabadn = result.channel.item;
       },error=>{if(error.status == 404){this.aherror=false;} });
  }
   
  divDrang(){
    this.api.Drangdhralive().subscribe((result)=>{
      this.Drangdhran = result.channel.item;
       },error=>{if(error.status == 404){this.dherr=false;} });
  }

  divHalvad(){
    this.api.Halvadlive().subscribe((result)=>{
      this.Halvadn = result.channel.item;
       },error=>{if(error.status == 404){this.haerr=false;} });
  }

  divMorbi(){
    this.api.Morbilive().subscribe((result)=>{
      this.Morbin = result.channel.item;
       },error=>{if(error.status == 404){this.moerr=false;} });
  }

  divRajkot(){
    this.api.Rajkotlive().subscribe((result)=>{
      this.Rajkotn = result.channel.item;
       },error=>{if(error.status == 404){this.rerr=false;} });
  }

  divVadodara(){
    this.api.Vadodaralive().subscribe((result)=>{
      this.Vadodaran = result.channel.item;
       },error=>{if(error.status == 404){this.verr=false;} });
  }

  id = 'Surendranagar';
 tabschange(tbid:any){
  this.id = tbid
   console.log(this.id);
   
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

hnblack:boolean = false;
hieghtb(){
  this.hnblack =! this.hnblack
}
 goback(){
    this.router.navigate(['/home']);
  }


}
