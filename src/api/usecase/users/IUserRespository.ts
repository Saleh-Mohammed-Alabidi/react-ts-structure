export interface IUserRespository {
  getUserData: () => Promise<IUser[]>;
}

export interface IUser {
  id: string;
  email: string;
  first_name: string;
  last_name:string;
  avatar: string;
}
