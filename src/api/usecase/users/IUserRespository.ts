

export interface IUserRespository {
  getUserData: () => Promise<IUser[]>;
}

