import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDailogComponent } from './post-dailog.component';

describe('PostDailogComponent', () => {
  let component: PostDailogComponent;
  let fixture: ComponentFixture<PostDailogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostDailogComponent]
    });
    fixture = TestBed.createComponent(PostDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
