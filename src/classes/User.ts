interface UserConstructorType {
  username: number;
  password: string;
}

export default class User {
  username!: number;
  password!: string;

  constructor(data: UserConstructorType) {
    this.username = data.username;
    this.password = data.password;
  }
}
