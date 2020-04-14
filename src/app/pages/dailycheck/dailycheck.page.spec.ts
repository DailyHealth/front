import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailycheckPage } from './dailycheck.page';

describe('DailycheckPage', () => {
  let component: DailycheckPage;
  let fixture: ComponentFixture<DailycheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailycheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailycheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
