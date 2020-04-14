import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedecinPage } from './medecin.page';

describe('MedecinPage', () => {
  let component: MedecinPage;
  let fixture: ComponentFixture<MedecinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedecinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
