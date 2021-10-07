import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddUser } from 'src/app/actions/user.action';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  constructor( private store: Store) {
  }



  addUser(name: string , email: string) {
    this.store.dispatch(new AddUser({ name: name, email: email, points: 0}));
  }

  ngOnInit() {
  }

}
