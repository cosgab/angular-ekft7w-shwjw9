import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxSelectionService, DropDownListModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';

import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { ButtonModule, CheckBoxModule, RadioButtonModule , CheckBoxAllModule} from '@syncfusion/ej2-angular-buttons';

import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { GridAllModule, GridModule } from '@syncfusion/ej2-angular-grids';
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';

import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownButtonModule, BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

@NgModule({ declarations: [ AppComponent ], imports: [ CommonModule, HttpModule, ToolbarModule, GridAllModule, BrowserModule,       NumericTextBoxAllModule, DialogModule, DatePickerAllModule, DropDownListAllModule, SliderModule, ReactiveFormsModule, FormsModule, CheckBoxAllModule, ButtonModule,DropDownButtonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule, CommonModule, QueryBuilderModule,       SliderModule, MultiSelectModule, DropDownListModule, RadioButtonModule, CheckBoxModule,       GridModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
