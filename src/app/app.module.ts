import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';
import { CheckboxComponent } from './components/controls/checkbox/checkbox.component';
import { DropdownComponent } from './components/controls/dropdown/dropdown.component';
import { TextInputComponent } from './components/controls/text-input/text-input.component';
import { HttpClientModule } from '@angular/common/http';
import { RadiobuttonComponent } from './components/controls/radiobutton/radiobutton.component';
import { TextAreaComponent } from './components/controls/text-area/text-area.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFieldComponent,
    CheckboxComponent,
    DropdownComponent,
    TextInputComponent,
    RadiobuttonComponent,
    TextAreaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
