import {
  BASIC_HTTP_HANDLER,
  BasicHttpHandler,
} from '@service/basic-http-handler';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  UofxFormFieldBaseModule,
  UofxFormModule,
} from '@uofx/web-components/form';
import { UofxLoadingModule, UofxTranslateModule } from '@uofx/web-components';

import { BasicHttpClient } from '@service/basic-http-client';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { DemoFieldDesignComponent } from './design/demo-field.design.component';
import { DemoFieldPrintComponent } from './print/demo-field.print.component';
import { DemoFieldPropsComponent } from './props/demo-field.props.component';
import { DemoFieldViewComponent } from './view/demo-field.view.component';
import { DemoFieldWriteComponent } from './write/demo-field.write.component';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { TranslateModule } from '@ngx-translate/core';
import { UofxButtonModule } from '@uofx/web-components/button';
import { UofxDialogModule } from '@uofx/web-components/dialog';
import { UofxIconModule } from '@uofx/web-components/icon';
import { UofxPluginApiService } from '@uofx/plugin-api';
import { UofxTextareaModule } from '@uofx/web-components/textarea';
import { UofxToastModule } from '@uofx/web-components/toast';
import { UofxUserSelectModule } from '@uofx/web-components/user-select';

/*
此為外掛欄位module的樣板，修改/置換的項事如下
修改import 各模式的Component
修改const COMPONENTS  各模式的Component
修改NgModule中的 RouterModule  各模式的Component
修改 class name 及各模式的module
*/

/*↑↑↑↑修改import 各模式的Component↑↑↑↑*/

const PRIMENG_MODULES = [
  CheckboxModule,
  CalendarModule,
  TableModule,DialogModule,InputNumberModule,
  DropdownModule,ButtonModule
];

const UOF_MODULES = [
  UofxDialogModule,
  UofxFormFieldBaseModule,
  UofxFormModule,
  UofxIconModule,
UofxLoadingModule,
  UofxToastModule,

  UofxTranslateModule,
  UofxUserSelectModule,
  UofxTextareaModule,
  UofxButtonModule
];

/*修改*/
/*置換component名稱*/

const COMPONENTS = [DemoFieldPropsComponent, DemoFieldWriteComponent,DemoFieldPrintComponent,DemoFieldViewComponent,DemoFieldDesignComponent];

const BASIC_SERVICES = [
  { provide: BASIC_HTTP_HANDLER, useClass: BasicHttpHandler },
  BasicHttpClient,
];

/*修改*/
/*置換component名稱*/
/*如果不看站台的預覽結果可不實作RouterModule.forChild*/

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'design', pathMatch: 'full' },
      { path: 'design', component: DemoFieldWriteComponent },
      { path: 'props', component: DemoFieldPropsComponent },
      { path: 'write', component: DemoFieldWriteComponent },
      { path: 'view', component: DemoFieldViewComponent },
      { path: 'print', component: DemoFieldPrintComponent },
      //有app開發後再實作這段
      {
        path: 'app',
        loadChildren: () => import('../../mobile/template-field/template-field.module').then(m => m.TemplateFieldAppModule)
      }
    ]),
    TranslateModule.forChild(),
    ...PRIMENG_MODULES,
    ...UOF_MODULES,
  ],
  providers: [BASIC_SERVICES, UofxPluginApiService],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
})

/*修改*/
/*置換component名稱、class名稱*/
export class DemoFieldModule {
  static comp = {
    props: DemoFieldPropsComponent,
    design: DemoFieldDesignComponent,
    write: DemoFieldWriteComponent,
    view: DemoFieldViewComponent,
    print: DemoFieldPrintComponent,
  };
}
