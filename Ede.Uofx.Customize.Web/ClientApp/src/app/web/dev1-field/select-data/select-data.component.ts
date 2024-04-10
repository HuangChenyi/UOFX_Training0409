import { Component, OnInit } from "@angular/core";
import { UofxDialog, UofxDialogController } from "@uofx/web-components/dialog";

import { CustomerInfo } from "../write/dev1-field.write.component";
import { DemoService } from "@service/demoService";
import { FormDirtyConfirm } from "@uofx/core";

@Component({
  selector: 'app-select-data',
  templateUrl: './select-data.component.html',
  styleUrls: ['./select-data.component.css']
})
export class SelectDataComponent extends UofxDialog
implements OnInit {

  gridData:Array<CustomerInfo>=[];

  constructor(private dialogCtrl: UofxDialogController,
    private ds:DemoService
  ) {
    super();
  }

  selectItem(item:CustomerInfo)
  {
    this.close(item);

  }

  ngOnInit(): void {

    this.ds.serverUrl=this.params.url;
      this.ds.getCustomerInfo().subscribe((data)=>{
        this.gridData=data;
      }
      );

  }

  Close()
  {
    this.close();
  }
}


