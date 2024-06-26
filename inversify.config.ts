import "reflect-metadata";
import { Container } from "inversify";
import { IUserService } from "./services/IUserService";
import { UserService } from "./services/UserService";

const container = new Container();
container.bind<IUserService>("IUserService").to(UserService);

export { container };
