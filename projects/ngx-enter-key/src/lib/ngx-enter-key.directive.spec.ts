import { NgxEnterKeyDirective } from './ngx-enter-key.directive';
import { Component, DebugElement } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: '<input (ngxEnterKey)="onEnterKey($event)">'
})
class TestComponent {

  onEnterKey(event: KeyboardEvent) {
  }

}

describe('NgxEnterKeyDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let debugElement: DebugElement;
  let directive: NgxEnterKeyDirective;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, NgxEnterKeyDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(NgxEnterKeyDirective));
    directive = debugElement.injector.get<NgxEnterKeyDirective>(NgxEnterKeyDirective);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should not trigger when composing', () => {
    let triggered = false;
    directive.enterKey.subscribe(() => {
      triggered = true;
    });
    debugElement.triggerEventHandler('keydown.enter', { isComposing: true });

    expect(triggered).toBe(false);
  });

  it('should trigger when composed', () => {
    let triggered = false;
    directive.enterKey.subscribe(() => {
      triggered = true;
    });
    debugElement.triggerEventHandler('keydown.enter', { isComposing: false });

    expect(triggered).toBe(true);
  });

});
