import { HttpClient } from "@angular/common/http";
import { VariableInstance } from "./VariableInstance";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class VariableInstanceRepository {
  constructor(private httpClient: HttpClient) {}

  findManyVariableInstance(params) {
    return this.httpClient.get<VariableInstance[]>(
      "/camunda/api/engine/engine/default/history/variable-instance",
      {
        params,
      }
    );
  }
}
