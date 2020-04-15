import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZoomCallPage } from './zoom-call.page';

describe('ZoomCallPage', () => {
  let component: ZoomCallPage;
  let fixture: ComponentFixture<ZoomCallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomCallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZoomCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
