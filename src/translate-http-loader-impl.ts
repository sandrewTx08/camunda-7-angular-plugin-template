import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

@Injectable({ providedIn: "root" })
export class TranslateHttpLoaderImpl extends TranslateHttpLoader {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      "/camunda/app/tasklist/scripts/camunda-7-angular-plugin-template/demo/assets/locales/",
      ".json"
    );
  }
}
