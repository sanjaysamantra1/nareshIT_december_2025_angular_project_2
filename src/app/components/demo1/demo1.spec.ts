import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Demo1 } from './demo1';

describe('Demo1 Component Test Suite', () => {
  let component: Demo1;
  let fixture: ComponentFixture<Demo1>;

  beforeAll(() => { // 1
    console.log('Before All')
  })

  beforeEach(async () => { // N
    console.log('Before Each')
    await TestBed.configureTestingModule({
      imports: [Demo1]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Demo1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });
  afterEach(() => { // N
    console.log('After Each')
  })
  afterAll(() => { // 1
    console.log('After All')
  })


  it('should create', () => {
    console.log('It-1')
    expect(component).toBeTruthy();
  });

  it('should test add()', () => {
    console.log('It-2')
    expect(component.add(10, 20)).toBe(30);
    expect(component.add(10, 20)).not.toBe(10);
    expect(component.add(-10, 20)).toBe(10);
    expect(component.add(10, -20)).toBe(-10);
    expect(component.add(-10, -20)).toBe(-30);
  });

  it('should verify sumofdigits', () => {
    console.log('It-3')
    expect(component.sumOfDigits(125)).toBe(8);
  })

  it('should verify addcar', () => {
    console.log('It-4')
    expect(component.cars).toBeDefined();
    expect(component.cars.length).toBe(2)
    expect(component.cars).toContain('Tata');
    expect(component.cars).not.toContain('BMW');
    component.cars.push('Maruti')
    expect(component.cars).toBeDefined();
    expect(component.cars.length).toBe(3)
    expect(component.cars).toContain('Tata');
    expect(component.cars).toContain('Maruti');
    expect(component.cars).not.toContain('BMW');
  })

});
