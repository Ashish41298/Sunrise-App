import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from 'src/app/NSservice/NewserviceService';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  constructor(private api:NewserviceService, private router: Router) { }
  budgets:any=[];
  Budgeterr:boolean = true;
  ngOnInit(): void {
    this.Budget();
  }
  Budget(){
    this.api.budget().subscribe((result)=>{
      this.budgets = result.channel.item;
       },error=>{if(error.status == 404){this.Budgeterr=false;} });
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
