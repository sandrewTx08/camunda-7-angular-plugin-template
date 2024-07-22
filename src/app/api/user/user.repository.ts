import { Injectable } from "@angular/core";
import { UserDefault } from "./UserDefault";
import { HttpClient } from "@angular/common/http";
import { User } from "./User";

@Injectable({ providedIn: "root" })
export class UserRepository {
  constructor(private httpClient: HttpClient) {}

  findDefaultUser() {
    return this.httpClient.get<UserDefault>(
      "/camunda/api/admin/auth/user/default"
    );
  }

  findOneUser(id: string) {
    return this.httpClient.get<User>(
      `/camunda/api/engine/engine/default/user/${id}`
    );
  }

  findManyUser(params) {
    return this.httpClient.get<User[]>(
      "/camunda/api/engine/engine/default/user",
      { params }
    );
  }
}
