import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WstarComponent } from './wstar.component';

describe('WstarComponent', () => {
  let component: WstarComponent;
  let fixture: ComponentFixture<WstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WstarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
