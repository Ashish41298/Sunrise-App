import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { wd } from '../models/weather.model';
@Injectable({
  providedIn: 'root'
})
export class TestgService {

constructor(private http:HttpClient,){

}
weather?:wd
Apikey ='ea0229c08c223199ef0bb398e5efeef3'
data:any;
getweatherdata(cityname:string):Observable<wd>{
  return this.http.get<wd>(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${this.Apikey}`);
}
url = 'https://authnews-41298-default-rtdb.firebaseio.com/notification.json';
comment(notification:any[]){
  return this.http.put(this.url,notification);
}
onsave(){
  return this.http.get(this.url);
}
}