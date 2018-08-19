import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedProductsComponent } from './feed-products.component';

describe('FeedProductsComponent', () => {
  let component: FeedProductsComponent;
  let fixture: ComponentFixture<FeedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
