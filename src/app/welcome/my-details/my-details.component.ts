import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  Name = "Saptarshi"
  Age = 27
  Sex = "Male"
  dob = "03.08.1992"
  constructor() { }

  ngOnInit() {
  }

}