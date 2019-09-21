import { Component, OnInit } from '@angular/core';
import {Profile} from './profile';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

profiles:Profile[]=[
  {
   name:"Anshita",
   age:22,
   domain:"JAVA",
   joining_date:"21-june-2019",
  },
  {
    name:"Arundhati",
    age:22,
    domain:"JAVA",
    joining_date:"21-june-2019",
  },
  {
  name:"Jayesh",
  age:22,
  domain:"JAVA",
  joining_date:"21-june-2019",
  },
]
  constructor() { }

  ngOnInit() {
  } 
}