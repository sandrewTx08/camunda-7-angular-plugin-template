import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProcessInstance } from "./process-instance";

@Injectable({ providedIn: "root" })
export class ProcessInstanceRepository {
  constructor(private httpClient: HttpClient) {}

  findManyProcessInstance(params) {
    return this.httpClient.get<ProcessInstance[]>(
      "/camunda/api/engine/engine/default/history/process-instance",
      {
        params,
      }
    );
  }

  countProcessInstance(params) {
    return this.httpClient.get<{ count: number }>(
      "/camunda/api/engine/engine/default/history/process-instance/count",
      {
        params,
      }
    );
  }
}
