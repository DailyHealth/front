import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedecinListPage } from './medecin-list.page';

describe('MedecinListPage', () => {
  let component: MedecinListPage;
  let fixture: ComponentFixture<MedecinListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecinListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedecinListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
