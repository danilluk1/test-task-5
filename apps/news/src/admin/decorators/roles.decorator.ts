import { SetMetadata } from '@nestjs/common';

//TODO: Move to shared lib, cus duplicate with auth models
enum Role {
  User = 'User',
  Admin = 'Admin',
}

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
