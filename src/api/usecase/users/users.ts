import { IUser } from "../../../types/User";
import UserRespository from "../../repository/user/users";
import { IUserRespository } from "./IUserRespository";

export default class UsersUseCase  {

  private static instance:UsersUseCase;
   
  private _IUserRespository:IUserRespository;

  constructor(_IUserRespository:IUserRespository) {
    this._IUserRespository = _IUserRespository;
  }

  async getUserData(): Promise<IUser[]> {
    return await this._IUserRespository.getUserData();
  }

  
  public static getInstance(): UsersUseCase {
   if (!UsersUseCase.instance) {
      UsersUseCase.instance = new UsersUseCase(UserRespository.getInstance());
   }
   return UsersUseCase.instance;
 }

}
