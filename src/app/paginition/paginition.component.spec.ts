import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginitionComponent } from './paginition.component';

describe('PaginitionComponent', () => {
  let component: PaginitionComponent;
  let fixture: ComponentFixture<PaginitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginitionComponent]
    });
    fixture = TestBed.createComponent(PaginitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
