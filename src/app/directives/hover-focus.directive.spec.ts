import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HoverFocusDirective } from './hover-focus.directive';
@Component({
  template : '<input type="text" appHoverFocus>'
})
class TestHoverFocusComponent { }
describe('HoverFocusDirective', () => {
  let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let inputElement: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestHoverFocusComponent, HoverFocusDirective ]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TestHoverFocusComponent);
    component = fixture.componentInstance;
    inputElement = fixture.debugElement.query(By.css('input'))
    fixture.detectChanges();
  });
  it('hovering over input should change the color as red', () => {
    inputElement.triggerEventHandler('mouseover',null);
    fixture.detectChanges();
    expect(inputElement.nativeElement.style.backgroundColor).toBe('red');
  });

  it('mouse out after hovering  should change the color as pink', () => {
    inputElement.triggerEventHandler('mouseout',null);
    fixture.detectChanges();
    expect(inputElement.nativeElement.style.backgroundColor).toBe('pink');
  });

  
  it('should create an instance', () => {
    const directive = new HoverFocusDirective();
    expect(directive).toBeTruthy();
  });

});
