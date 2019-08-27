import { Action } from '@ngrx/store'
import { Converter } from './../models/converter'

export const INPUT_NUMBER       = '[CONVERTER] Input'
export const OUTPUT_STRING    = '[CONVERTER] Output'

export class InputNumber implements Action {
    readonly type = INPUT_NUMBER
    constructor(public payload: Converter) {}
}

export class OutputString implements Action {
    readonly type = OUTPUT_STRING
    constructor(public payload: Converter) {}
}

export type Actions = InputNumber | OutputString