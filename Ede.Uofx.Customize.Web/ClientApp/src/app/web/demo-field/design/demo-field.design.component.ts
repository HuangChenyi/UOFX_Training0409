/*
此為外掛欄位wtite mode的樣板，修改/置換的項事如下
修改import 擴充屬性(ExProps)的interface
修改selector和templateUrl路徑
修改classname
修改 @Input() exProps 的interface
*/

import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { BpmFwDesignComponent, BpmFwViewComponent, UofxFormTools } from '@uofx/web-components/form';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { DemoFieldExProps } from '../props/demo-field.props.component';

/*修改*/
/*↑↑↑↑修改import 各模式的Component↑↑↑↑*/

/*修改*/
/*置換selector和templateUrl*/
@Component({
  selector: 'uofx-demo-field-design-component',
  templateUrl: './demo-field.design.component.html',
})

/*修改*/
/*置換className*/
export class DemoFieldDesignComponent
  extends BpmFwDesignComponent
  implements OnInit
{

  /*修改*/
  /*置換className*/
  @Input() exProps: DemoFieldExProps;

  form: UntypedFormGroup;
  constructor(
    private cdr: ChangeDetectorRef,
    private fb: UntypedFormBuilder,
    private tools: UofxFormTools
  ) {
    super();
  }



  ngOnInit(): void {

    this.initForm();

  }

  initForm() {



  }

}
