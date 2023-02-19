import {
  Component, Input, OnInit
}
  from '@angular/core';
import {
  FormGroup
}
  from '@angular/forms';
import {
  ControlBase
}
  from '../controls/control-base';

@Component({ selector: 'app-dynamic-field', templateUrl: './dynamic-field.component.html', styleUrls: ['./dynamic-field.component.css'], }) export class DynamicFieldComponent implements OnInit {
 
//#region [component variables]
  @Input() control!: ControlBase;
  @Input() form!: FormGroup;
  @Input() role!: string;
  @Input() submitted: boolean = false;
//#endregion [component variables]

  constructor() { }

  ngOnInit(): void { }




  /**
   * Form Is Valid
   * 
   * @readonly
   * 
   * @memberOf DynamicFieldComponent
   */
  get isValid() {
    const touched = this.form.controls[this.control.key].touched;
    const dirty = this.form.controls[this.control.key].dirty;
    const valid = this.form.controls[this.control.key].valid;
    return (this.submitted) || (valid) || (touched) || (dirty)
  }

  /**
   * Reset The Form
   * 
   * 
   * @memberOf DynamicFieldComponent
   */
  resetForm() {
    Object.keys(this.form.controls).forEach((key) => {
      const control = this.form.controls[key];
      control.markAsPristine();
      control.markAsUntouched();
      control.updateValueAndValidity();
    });
  }



}
