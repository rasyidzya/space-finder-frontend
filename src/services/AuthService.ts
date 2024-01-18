import { User } from "../model/Model";

export class AuthService {
  public async login(
    userName: string,
    password: string
  ): Promise<User | undefined> {
    if (userName === "admin" && password === "admin") {
      return { userName: userName, email: "some@email.com" };
    } else {
      return undefined;
    }
  }
}
