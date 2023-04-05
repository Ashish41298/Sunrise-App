import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  send(){
    this.router.navigate(['budget']);
  }
  magazine(){
    this.router.navigate(['magazine']);
  }
  Sports(){
    this.router.navigate(['sports']);
  }
  Lifestyle(){
    this.router.navigate(['lifestyle']);
  }
  Utility(){
    this.router.navigate(['utility']);
  }
  Dharmdarshan(){
    this.router.navigate(['darmdharshan']);
  }
  covid(){
    this.router.navigate(['covid']);
  }
  ent(){
    this.router.navigate(['Entartainment']);
  }
}
