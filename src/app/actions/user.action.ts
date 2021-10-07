import { User } from "../models/user";

export class AddUser {
  static readonly type = '[User] Add User'

  constructor(public payload: User) {}
}

export class RemoveUser {
  static readonly type = '[User] Remove User'

  constructor(public payload: string) {}
}

export class IncrementUserPoint {
  static readonly type = '[User] Increment User Point'

  constructor(public payload: string) {}
}
export class DecrementUserPoint {
  static readonly type = '[User] Decrement User Point'

  constructor(public payload: string) {}
}
