import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffees: Array<Coffee> = [];
  coffeeBlend: number = 0;
  coffeeOrigin: number = 0;
  _BLEND= 'Blend';
  _ORIGIN= 'Café de Origen';

  constructor(private coffeeService : CoffeeService) {
    this.getCoffees();
  }

  ngOnInit(): void {
  }

  getCoffees(): void {
    this.coffeeService.getCoffees().subscribe(coffees  =>{
      this.coffees = coffees;
      this.calculateValueCoffeeBlend();
      this.calculateValueCoffeeOrigin();
    });
  }

  calculateValueCoffeeBlend(){
   this.coffeeBlend = this.coffees.filter(x => x.tipo == this._BLEND).length;
  }

  calculateValueCoffeeOrigin(){
    this.coffeeOrigin = this.coffees.filter(x => x.tipo == this._ORIGIN).length;
   }

}
