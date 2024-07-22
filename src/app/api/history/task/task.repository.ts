import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Task } from "./task";

@Injectable({ providedIn: "root" })
export class TaskRepository {
  constructor(private httpClient: HttpClient) {}

  findManyTask(params) {
    return this.httpClient.get<Task[]>(
      "/camunda/api/engine/engine/default/history/task",
      { params }
    );
  }
}
