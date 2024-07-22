import { Component, OnInit } from "@angular/core";
import { UserRepository } from "../api/user/user.repository";

@Component({
  selector: "custom-user-table",
  templateUrl: "./user-table.component.html",
  styleUrls: ["./user-table.component.scss"],
})
export class UserTableComponent implements OnInit {
  user$ = this.userRepository.findManyUser({});

  constructor(private userRepository: UserRepository) {}

  ngOnInit(): void {}
}
