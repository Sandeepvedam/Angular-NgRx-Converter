import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Converter } from './models/converter';
import * as ConverterActions from './actions/converter.actions';
import { AppState } from './app.state';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  inputNumber = '';
  outputString = '';

  converterResult:Converter;

  keys = [];
  chars = [];

  constructor(private store: Store<AppState>, private appService: AppService) { 
    this.keys = this.appService.getKeys();
    this.chars = this.appService.getChars();
    store.select('converter').subscribe((resp: Converter) => {
      this.converterResult = resp;
    })
  }

  ngOnInit() {
  }

  onKeyPress() {
    return false;
  }

  onKeyInput(key) {
    if(key === '←' && this.inputNumber) {
      this.inputNumber = this.inputNumber.substring(0, this.inputNumber.length - 1);
    } else if(key !== '←') {
      this.inputNumber += key;
    }
    this.store.dispatch(new ConverterActions.InputNumber({inputNumber: this.inputNumber, outputString: ''}) )
    this.generateOutputString();
  }

  generateOutputString() {
    const nums = this.inputNumber.split('#');
    this.outputString = '';
    if(nums && nums.length > 1) {
      for(let i in nums) {
        if(nums[i]) {
          const val = Number(nums[i])%26;
          this.outputString += this.chars[val];
        }
      }
    }
    this.store.dispatch(new ConverterActions.OutputString({inputNumber: this.inputNumber, outputString: this.outputString}) )
  }

}
