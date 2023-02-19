import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MetaService } from 'src/app/services/meta.service';
import { ControlBase } from '../controls/control-base';
import { DynamicFieldComponent } from '../dynamic-field/dynamic-field.component';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnChanges {
  
//#region [component variables]
  @Input() meta: ControlBase[] = [];
  @Input() data: any = {};
  @Input() submitButtonText: string = 'Save'

  @ViewChild(DynamicFieldComponent, { static: false })
  dynamicFieldComponent!: DynamicFieldComponent;
  form!: FormGroup;
  payLoad = '';
  role: string='';
  submitted: boolean = false;
//#endregion [component variables]

  constructor(private metaService: MetaService) { }

  ngOnChanges() {
    this.form = this.metaService.toFormGroup(this.meta, this.data);
  }

  roleChane(e:any) {
    this.role = e.target.value;
  }


  resetForm() {
    this.submitted = false;
    this.dynamicFieldComponent.resetForm();
  }


  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.submitted = true;
  }
}
