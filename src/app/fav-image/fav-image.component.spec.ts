import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavImageComponent } from './fav-image.component';

describe('FavImageComponent', () => {
  let component: FavImageComponent;
  let fixture: ComponentFixture<FavImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
