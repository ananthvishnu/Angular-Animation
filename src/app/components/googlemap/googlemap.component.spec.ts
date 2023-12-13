import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglemapComponent } from './googlemap.component';

describe('GooglemapComponent', () => {
  let component: GooglemapComponent;
  let fixture: ComponentFixture<GooglemapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GooglemapComponent]
    });
    fixture = TestBed.createComponent(GooglemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
