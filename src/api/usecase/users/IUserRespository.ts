import { IUser } from "../../../types/User";


export interface IUserRespository {
  getUserData: () => Promise<IUser[]>;
}

