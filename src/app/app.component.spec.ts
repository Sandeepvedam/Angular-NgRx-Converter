import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/converter.reducer';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({converter: reducer})
      ],
      declarations: [
        AppComponent
      ],
      providers: [AppService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should return false on keybaord inputs', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const val = app.onKeyPress();
    expect(val).toEqual(false);
  }));
  it('should return output string on input number', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.onKeyInput('0#1#2#26#27#52');
    expect(app.outputString).toEqual('ABCABA');
    expect(app.converterResult.outputString).toEqual(app.outputString);
  }));
});
