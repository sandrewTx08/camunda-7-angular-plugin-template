import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProcessDefinition } from "./process-definition";

@Injectable({ providedIn: "root" })
export class ProcessDefinitionRepository {
  constructor(private httpClient: HttpClient) {}

  findManyProcessDefinition(params) {
    return this.httpClient.get<ProcessDefinition[]>(
      "/camunda/api/engine/engine/default/process-definition",
      {
        params,
      }
    );
  }
}
