import { Injector, Type } from "@angular/core";
import { createCustomElement } from "@angular/elements";

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClient, HttpClientModule } from "@angular/common/http";
import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
} from "@ngx-translate/core";
import { NgHttpCachingModule } from "ng-http-caching";
import { TranslateHttpLoaderImpl } from "src/translate-http-loader-impl";
import { TranslateLoaderFallback } from "src/translate-loader";
import { UserTableComponent } from "./user-table/user-table.component";

@NgModule({
  declarations: [UserTableComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    TranslateModule.forRoot({
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: TranslateLoaderFallback,
        deps: [HttpClient],
      },
      loader: {
        provide: TranslateLoader,
        useClass: TranslateHttpLoaderImpl,
        deps: [HttpClient],
      },
    }),
    NgHttpCachingModule.forRoot({ lifetime: 60_000 }),
  ],
  entryComponents: [UserTableComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    this.#registerEntryComponent(UserTableComponent, "activity-table");
  }

  ngDoBootstrap() {}

  #registerEntryComponent<Component extends Type<any>>(
    component: Component,
    tagName: string
  ) {
    const ngCustomElement = createCustomElement(component, {
      injector: this.injector,
    });

    customElements.define(tagName, ngCustomElement);

    return ngCustomElement;
  }
}
