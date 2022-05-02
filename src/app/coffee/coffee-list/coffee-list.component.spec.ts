import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';
import faker from '@faker-js/faker';
import { CoffeeListComponent } from './coffee-list.component';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let debug: DebugElement;
  let table: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeListComponent ],
      imports: [HttpClientModule],
      providers: [CoffeeService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;

    component.coffees = [
      new Coffee(
        faker.datatype.number(10),
        faker.name.firstName(),
        component._BLEND,
        faker.address.cityName(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.image.imageUrl()
      ),
      new Coffee(
        faker.datatype.number(10),
        faker.name.firstName(),
        component._BLEND,
        faker.address.cityName(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.image.imageUrl()
      ),
      new Coffee(
        faker.datatype.number(10),
        faker.name.firstName(),
        component._ORIGIN,
        faker.address.cityName(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.image.imageUrl()
      ),
    ];

    fixture.detectChanges();

    debug = fixture.debugElement;
    table = fixture.nativeElement.querySelector('table');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an table with 4 rows element ', () => {
    expect(table.getElementsByTagName('tr').length).toEqual(component.coffees.length + 1);
  });
});
