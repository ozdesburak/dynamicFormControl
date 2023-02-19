import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlBase } from '../components/controls/control-base';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private http: HttpClient) {}

  async getMeta(): Promise<ControlBase[]> {
    return lastValueFrom(
      this.http
        .get('http://localhost:8080/meta.json')
        .pipe(
          map((meta: any) => meta.sort((a: any, b: any) => a.order - b.order))
        )
    );
  }

  toFormGroup(controls: ControlBase[], data: any) {
    const group: any = {};

    controls.forEach((control) => {
      //minLength
      group[control.key] = control.minLength
        ? new FormControl(
            data[control.key] || '',
            Validators.minLength(control.minLength)
          )
        : new FormControl(data[control.key] || '');

      //maxLength
      group[control.key] = control.maxLength
        ? new FormControl(
            data[control.key] || '',
            Validators.maxLength(control.maxLength)
          )
        : new FormControl(data[control.key] || '');

      //pattern
      group[control.key] = control.pattern
        ? new FormControl(
            data[control.key] || '',
            Validators.pattern(control.pattern)
          )
        : new FormControl(data[control.key] || '');

      //required
      group[control.key] = control.required
        ? new FormControl(data[control.key] || '', Validators.required)
        : new FormControl(data[control.key] || '');
    });

    return new FormGroup(group);
  }
}
