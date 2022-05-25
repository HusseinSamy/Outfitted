import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDataUploadComponent } from './photo-data-upload.component';

describe('PhotoDataUploadComponent', () => {
  let component: PhotoDataUploadComponent;
  let fixture: ComponentFixture<PhotoDataUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoDataUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDataUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
