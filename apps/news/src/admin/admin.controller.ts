import { Controller, UseGuards } from '@nestjs/common';
import { Role, Roles } from './decorators/roles.decorator';
import {
  CreateNewsRequest,
  CreateNewsResponse,
  GetUsersRequest,
  GetUsersResponse,
} from '@test-task-5/grpc/generated/admin/admin';
import { RolesAuthGuard } from './guards/roles.guard';
import AdminService from './admin.service';
import { GrpcMethod } from '@nestjs/microservices';
@Controller()
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Roles(Role.Admin)
  @UseGuards(RolesAuthGuard)
  @GrpcMethod('AdminService', 'CreateNews')
  async createNews(
    data: CreateNewsRequest,
    metadata: any,
  ): Promise<CreateNewsResponse> {
    const id = metadata.get('id')[0];
    const news = await this.adminService.createNews(data.text, id);

    return news;
  }

  @Roles(Role.Admin)
  @UseGuards(RolesAuthGuard)
  @GrpcMethod('AdminService', 'GetUsers')
  async getUsersRequest(data: GetUsersRequest): Promise<GetUsersResponse> {
    const users = await this.adminService.getUsers(data.count, data.offset);
    return {
      users: users,
    };
  }
}
