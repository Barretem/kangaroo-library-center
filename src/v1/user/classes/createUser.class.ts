import { User } from './user.class';

export class CreateUser extends User {
  constructor({ username, email, rule }) {
    super();
    this.username = username;
    this.email = email;
    this.rule = rule;
  }
}
