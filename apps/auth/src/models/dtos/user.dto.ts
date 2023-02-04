import Role from '../role.enum';

export type UserDto = {
  id: number;
  login: string;
  refreshToken: string;
  accessToken: string;
  role: Role;
};
