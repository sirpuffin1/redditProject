import { Component,  OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DecrementUserPoint, IncrementUserPoint, RemoveUser } from 'src/app/actions/user.action';
import { User } from 'src/app/models/user';
import { UserState } from 'src/app/state/user.state';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


export class IndexComponent implements OnInit {
  @Select(UserState.getUsers)
  users$?: Observable<User[]>;

  constructor(private store: Store) {


   }
   delUser(name: string) {
     this.store.dispatch(new RemoveUser(name))
   }

   incrementUser(email: string) {
     this.store.dispatch(new IncrementUserPoint(email))
   }

   decrementUser(email: string) {
     this.store.dispatch(new DecrementUserPoint(email))
   }


  ngOnInit(): void {
  }

}

