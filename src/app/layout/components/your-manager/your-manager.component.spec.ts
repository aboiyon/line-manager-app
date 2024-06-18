import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourManagerComponent } from './your-manager.component';

describe('YourManagerComponent', () => {
  let component: YourManagerComponent;
  let fixture: ComponentFixture<YourManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YourManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
