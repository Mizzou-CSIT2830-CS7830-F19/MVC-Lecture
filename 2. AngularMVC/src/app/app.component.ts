import { Component } from '@angular/core';

import planets from "../assets/planetData.json"; 

import { Planets } from "src/planets";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMVC';

  data: Array<Planets> = planets; 

  totalPlanets: number = 8; 

  views = ["Select One", "list", "table", "system", "all"]; 

  selection;
  formPlanetName;  

  constructor(){
    console.log(this.data); 
    this.selection = "Select One"; 
  }

  ngOnInit(){
    this.data = (localStorage.getItem('planets') !== null) ? 
                  JSON.parse(localStorage.getItem('planets')) :
                  planets
  }

  getTotalPlanets(){
    return this.data.length; 
  }
  addMyPlanet(){
    this.data.push({
      name: this.formPlanetName, 
      color: "gray", 
      radius: 1186, 
      satellites: 5
    });
    console.log(this.data); 

    localStorage.setItem('planets', JSON.stringify(this.data)); 
  }
  selected(){
    console.log(this.selection);
  }
}