import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { wd } from '../models/weather.model';
import { TestgService } from '../NSservice/testg.service';

@Component({
  selector: 'app-cityweather',
  templateUrl: './cityweather.component.html',
  styleUrls: ['./cityweather.component.css']
})
export class CityweatherComponent implements OnInit {
  currentdate:any;
  cityname: string ='surendranagar,Gujrat';
  constructor(private testg:TestgService,private http:HttpClient, private router: Router) { 
   
  }
  public weather?:wd;
  temp = this.weather?.main.temp
  Apikey ='ea0229c08c223199ef0bb398e5efeef3'
  ngOnInit(): void {
    this.weatherdb(this.cityname);
    this.cityname = '';
  }
 onsubmit(){
  this.weatherdb(this.cityname);
  this.cityname = '';
 }
  wdsdata(cityname:string):Observable<wd>{
  return this.http.get<wd>(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${this.Apikey}`);
}
 private weatherdb(cityname:string){
  if(this.cityname!==null){
    this.wdsdata(cityname).subscribe({
      next: (res)=>{
        this.weather = res;
        console.log(res);
        
      }
    });
    this.currentdate = new Date().toJSON("dd/MM/yyyy");
  }
  }
  goback(){
    this.router.navigate(['/home']);
  }

}
