import { useAxios } from "../../../plugins";

import { IUserRespository } from "../../usecase/users/IUserRespository";

export default class UserRespository implements IUserRespository {

  private static instance: UserRespository;

  async getUserData():Promise<IUser[]>{
    return (await useAxios.axiosInstance.get("/users"))?.data.data
  };
  

  public static getInstance(): UserRespository {
    if (!UserRespository.instance) {
      UserRespository.instance = new UserRespository();
    }
    return UserRespository.instance;
  }

}
