import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User } from '../models/user';
import { AddUser, DecrementUserPoint, IncrementUserPoint, RemoveUser } from '../actions/user.action';
import { Injectable } from '@angular/core';
import { state } from '@angular/animations';

export class UserStateModel {
  users!: User[];


}

@State<UserStateModel>({
  name: 'users',
  defaults: {
    users: [],


  },
})
@Injectable()
export class UserState {
  @Selector()

  static getUsers(state: UserStateModel) {
    return state.users;
  }

  @Action(AddUser)
  add(
    { getState, patchState }: StateContext<UserStateModel>,
    { payload }: AddUser
  ) {
    const state = getState();
    patchState({
      users: [...state.users, payload],
    });
  }

  @Action(RemoveUser)
  remove(
    {getState, setState }: StateContext<UserStateModel>,
    { payload }: RemoveUser
  ) {
    setState({
      users: getState().users.filter((a) => a.name != payload)
    })
  }

 @Action(IncrementUserPoint)
 Increment(
  {getState, setState }: StateContext<UserStateModel>,
  { payload }: IncrementUserPoint
) {
  setState({
    users: getState().users.map((a) => a.email != payload? a : {...a, points: a.points+ 1})
  })
}

@Action(DecrementUserPoint)
Decrement(
  {getState, setState }: StateContext<UserStateModel>,
  { payload }: DecrementUserPoint
) {
  setState({
    users: getState().users.map((a) => a.email != payload? a : {...a, points: a.points - 1})
  })
}

}
