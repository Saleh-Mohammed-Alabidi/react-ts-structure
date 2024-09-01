import React from "react";
import { IUser } from "../../types/User";

interface Props {
  users: IUser[];
}

export const HtmlPage: React.FC<Props> = ({ users = [] }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.first_name} {user.last_name}
        </li>
      ))}
    </ul>
  );
};
