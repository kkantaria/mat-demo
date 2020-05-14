import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithTagComponent } from './header-with-tag.component';

describe('HeaderWithTagComponent', () => {
  let component: HeaderWithTagComponent;
  let fixture: ComponentFixture<HeaderWithTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderWithTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWithTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
