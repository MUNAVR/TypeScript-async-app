import "reflect-metadata";
import { container } from "./inversify.config";
import { IUserService } from "services/IUserService";
import { UserRequest } from "models/UserRequest";

async function main() {
  const userService = container.get<IUserService>("IUserService");

  const userRequest: UserRequest = { userId: 1 };

  try {
    const user = await userService.getUser(userRequest);
    console.log("User fetched successfully:", user);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
  }
}

main();

