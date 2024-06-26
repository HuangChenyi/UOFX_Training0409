import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Helper } from '@uofx/core';
import { HomeComponent } from './develop-lab/home/home.component';
import { IconModule } from './icon.module';
import { LayoutComponent } from './develop-lab/layout/layout.component';
import { NavMenuComponent } from './develop-lab/nav-menu/nav-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplateFieldWriteComponent } from './web/template-field/write/template-field.write.component';
import { UofxTranslateLoader } from './translate-loader';

// #region i18n services
export function I18nHttpLoaderFactory(http: HttpClient) {
  return new UofxTranslateLoader(http);
}

const I18NSERVICE_MODULES = [
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: I18nHttpLoaderFactory,
      deps: [HttpClient],
    },
    defaultLanguage: 'zh-TW',
    useDefaultLang: true,
  }),
];

//#endregion

const PRIMENG_MODULES = [];

/*修改*/
/*新增RouterModule.forRoot的path，並在裡面import module的路徑和載入的mocule className*/
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavMenuComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: TemplateFieldWriteComponent, pathMatch: 'full' },
      {
        path: 'template-field',
        loadChildren: () => import('./web/template-field/template-field.module').then((m) => m.TemplateFieldModule)
      },
      {
        path: 'demo-field',
        loadChildren: () => import('./web/demo-field/demo-field.module').then((m) => m.DemoFieldModule)
      }
      ,{path: 'dev1-field',
        loadChildren: () => import('./web/dev1-field/dev1-field.module').then((m) => m.Dev1FieldModule)
      }
        //勿刪除存放module的路徑
    ]),
    ...I18NSERVICE_MODULES,
    ...PRIMENG_MODULES,
    IconModule.forRoot(),
  ],
  providers: [{ provide: 'BASE_HREF', useFactory: Helper.getBaseHref }],
  bootstrap: [AppComponent]
})
export class AppModule {}
