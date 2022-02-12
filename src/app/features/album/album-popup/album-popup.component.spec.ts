import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPopupComponent } from './album-popup.component';

describe('AlbumPopupComponent', () => {
  let component: AlbumPopupComponent;
  let fixture: ComponentFixture<AlbumPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
