import { Component, Input, forwardRef, HostBinding, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ]  
})
export class SwitchComponent implements ControlValueAccessor  {

  @HostBinding('attr.id')
  externalId: string = '';

  @Input()
  set id(value: string) {
    this._ID = value;
    this.externalId = '';
  }

  get id() {
    return this._ID;
  }

  private _ID = '';

  @Input('value') _value = false;
  onChange: any = () => {};
  onTouched: any = () => {};

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  constructor() {}

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  writeValue(value: boolean) {
    if (value) {
      this.value = value;
    }
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  switch() {
    this.value = !this.value;
  }
}
