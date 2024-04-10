import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { BpmFwPrintComponent, UofxFormTools } from '@uofx/web-components/form';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { DemoFieldExProps } from '../props/demo-field.props.component';
import { FormGroup } from '@angular/forms';
/*
此為外掛欄位wtite mode的樣板，修改/置換的項事如下
修改import 擴充屬性(ExProps)的interface
修改selector和templateUrl路徑
修改classname
修改 @Input() exProps 的interface
*/
import { ReactiveFormsModule } from '@angular/forms';

/*修改*/
/*↑↑↑↑修改import 各模式的Component↑↑↑↑*/

/*修改*/
/*置換selector和templateUrl*/
@Component({
  selector: 'uofx-demo-field-print-component',
  templateUrl: './demo-field.print.component.html',
})

/*修改*/
/*置換className*/
export class DemoFieldPrintComponent
  extends BpmFwPrintComponent
  implements OnInit
{

  /*修改*/
  /*置換className*/
  @Input() exProps: DemoFieldExProps;

  form: FormGroup;
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
    this.form = this.fb.group({
      message: [this.value?.message || '', Validators.required], // Add required validation
    });


  }

}
