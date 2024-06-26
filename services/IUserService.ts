import { UserRequest } from "../models/UserRequest";
import { UserResponse } from "../models/UserResponse";

export interface IUserService {
  getUser(request: UserRequest): Promise<UserResponse>;
}
