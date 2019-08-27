import { Action } from '@ngrx/store'
import { Converter } from './../models/converter'
import * as ConverterActions from './../actions/converter.actions'
const initialState = {
    inputNumber: null,
    outputString: null
}

export function reducer(state: Converter = initialState, action: ConverterActions.Actions) {
    switch(action.type) {
        case ConverterActions.INPUT_NUMBER:
            return {...state, inputNumber: action.payload.inputNumber};
        case ConverterActions.OUTPUT_STRING:
            return {...state, outputString: action.payload.outputString};
        default:
            return state;
    }
}