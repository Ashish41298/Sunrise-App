import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor(private http: HttpClient) { }
  
 gujnews(): Observable<any> {
   return this.http.get('https://ashish41298.github.io/apijson/guj/gujrat.json');
 }
 // chips in data
 //budget
 budget(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/guj/budget.json');
}
magazinen(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/guj/magagine.json');
}
sportsn(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/guj/sports.json');
}
lifestylen(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/guj/lifestyle.json');
}
utilityn(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/guj/utility.json');
}
dharmd(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/guj/dharmdarshan.json');
}
covidn(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/guj/covid.json');
}
entertainmentsn(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/guj/entertainment.json');
}
internationaln(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/guj/international.json');
}
nationaln(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/guj/national.json');
}
dvbn(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/guj/dvborg.json');
}
nrgn(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/guj/nrg.json');
}

/// Deep-in
surendranagarlive(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/deepin/surendranagar.json');
}

Mulilive(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/deepin/Muli.json');
}

Ahemdabadlive(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/deepin/Ahemdabad.json');
}

Drangdhralive(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/deepin/Drangdhra.json');
}

Halvadlive(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/deepin/Halvad.json');
}

Morbilive(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/deepin/Morbi.json');
}

Rajkotlive(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/deepin/Rajkot.json');
}

Vadodaralive(): Observable<any> {
  return this.http.get('https://ashish41298.github.io/apijson/deepin/Vadodara.json');
}

  //https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=544e42bee8d04b2c8132955c288aee51
    tcnews= 'https://ashish41298.github.io/apijson/NewsApiscom/comtech.json';

 
   technology(): Observable<any> {
     return this.http.get(this.tcnews);}


     //business
   //https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=544e42bee8d04b2c8132955c288aee51
   busns='https://ashish41298.github.io/apijson/NewsApiscom/combusiness.json';
 
   business(): Observable<any> {
     return this.http.get(this.busns);
   }
   rssbusns='https://ashish41298.github.io/apijson/guj/business.json';
 
   rssbusiness(): Observable<any> {
     return this.http.get(this.rssbusns);
   }
}  

