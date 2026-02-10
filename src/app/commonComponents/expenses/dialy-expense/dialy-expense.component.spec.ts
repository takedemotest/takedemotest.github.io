import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialyExpenseComponent } from './dialy-expense.component';

describe('DialyExpenseComponent', () => {
  let component: DialyExpenseComponent;
  let fixture: ComponentFixture<DialyExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialyExpenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialyExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
