import { injectable } from "inversify";
import axios from "axios";
import { IUserService } from "services/IUserService";
import { UserRequest } from "models/UserRequest";
import { UserResponse } from "models/UserResponse";

@injectable()
export class UserService implements IUserService {
  async getUser(request: UserRequest): Promise<UserResponse> {
    try {
      const response = await axios.get<UserResponse>(`https://jsonplaceholder.typicode.com/users/${request.userId}`);
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch user: ${error.message}`);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  }
}
