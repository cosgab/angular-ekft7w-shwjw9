import { Component, OnInit, ViewChild } from '@angular/core';
import { orderDetails } from './data';
import { EditService, ToolbarService, PageService, GridComponent } from '@syncfusion/ej2-angular-grids';
import { DataManager, Query, Predicate, ODataV4Adaptor, ReturnOption } from '@syncfusion/ej2-data';
import { Browser, getComponent, isNullOrUndefined  } from '@syncfusion/ej2-base';
import { DropDownButtonModule, BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
import { QueryBuilderComponent } from '@syncfusion/ej2-angular-querybuilder';
import { Popup } from '@syncfusion/ej2-popups';

import { RuleModel } from '@syncfusion/ej2-querybuilder';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [ToolbarService, EditService, PageService]
})
export class AppComponent {
    public data: Object[];
    public editSettings: Object;
    public toolbar: any;
    public orderidrules: Object;
    public customeridrules: Object;
    public freightrules: Object;
    public pageSettings: Object;
    public editparams: Object;
    @ViewChild('template')
    public toolbarTemplate: any;
    @ViewChild('template2')
    public DropDownButtonTemplate: any;
    public ngOnInit(): void {
        this.data = orderDetails;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete','Search' ,  {template: this.DropDownButtonTemplate}];
        this.orderidrules = { required: true, number: true };
        this.customeridrules = { required: true };
        this.freightrules =  { required: true };
        this.editparams = { params: { popupHeight: '300px' }};
        this.pageSettings = { pageCount: 5};
    }
    @ViewChild('querybuilder') qryBldrObj: QueryBuilderComponent;
    @ViewChild('grid') grid: GridComponent;
    isPopup:boolean = true;

    createdControl(): void {
      if (Browser.isDevice) {
        this.qryBldrObj.summaryView = true;
      }
    }

     importRules: RuleModel = {
        'condition': 'and',
        'rules': [{
                'label': 'Order ID',
                'field': 'OrderID',
                'type': 'number',
                'operator': 'equal',
                'value': 10250
            },
            {
                'label': 'Customer Name',
                'field': 'CustomerName',
                'type': 'string',
                'operator': 'equal',
                'value': "Antonio Moreno"
            }]
        };

    onClose($event: BeforeOpenCloseMenuEventArgs) {
      $event.cancel = this.isPopup;
    }
    
    btnClick() {
      let popupElem: HTMLElement = document.getElementsByClassName("e-dropdown-popup e-customquerybuilder")[0] as HTMLElement;
      let popupObj: Popup = getComponent(popupElem, 'popup') as Popup;
      popupObj.hide()
    }

    okbtnClick() {
      const predicate: Predicate = this.qryBldrObj.getPredicate(this.qryBldrObj.rule);
      const fltrDataSource: Object[] = [];
      let dataManagerQuery: Query;
      if (isNullOrUndefined(predicate)) {
        dataManagerQuery = new Query().select(['OrderID', 'CustomerName', 'Freight', 'OrderDate', 'ShipCountry']);
      } else {
        dataManagerQuery = new Query().select(['OrderID', 'CustomerName', 'Freight', 'OrderDate', 'ShipCountry'])
          .where(predicate);
      }
      new DataManager(orderDetails)
        .executeQuery(dataManagerQuery)
        .then((e: ReturnOption) => {
          (<Object[]>e.result).forEach((data: Object) => {
            fltrDataSource.push(data);
           });
        });
        this.grid.dataSource = fltrDataSource;
        this.grid.refresh();         
        let popupElem: HTMLElement = document.getElementsByClassName("e-dropdown-popup e-customquerybuilder")[0] as HTMLElement;
        let popupObj: Popup = getComponent(popupElem, 'popup') as Popup;
        popupObj.hide();
    }
}
