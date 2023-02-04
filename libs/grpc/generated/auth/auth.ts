/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "auth";

export interface User {
  id: number;
  login: string;
  accessToken: string;
  refreshToken: string;
  role: string;
}

export interface GetUsersRequest {
  count: number;
  offset: number;
}

export interface SimpleUser {
  id: number;
  login: string;
  role: string;
}

export interface GetUsersResponse {
  users: SimpleUser[];
}

export interface GetRoleRequest {
  accessToken: string;
}

export interface GetRoleResponse {
  role: string;
}

export interface LogoutRequest {
  refreshToken: string;
}

export interface LogoutResponse {
}

export interface ValidateRequest {
  accessToken: string;
}

export interface ValidateResponse {
  id: number;
  login: string;
}

export interface RegisterRequest {
  login: string;
  password: string;
}

export interface RegisterResponse {
  user: User | undefined;
}

export interface LoginRequest {
  login: string;
  password: string;
}

export interface LoginResponse {
  user: User | undefined;
}

export interface RefreshRequest {
  refreshToken: string;
}

export interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
}

function createBaseUser(): User {
  return { id: 0, login: "", accessToken: "", refreshToken: "", role: "" };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.login !== "") {
      writer.uint32(18).string(message.login);
    }
    if (message.accessToken !== "") {
      writer.uint32(26).string(message.accessToken);
    }
    if (message.refreshToken !== "") {
      writer.uint32(34).string(message.refreshToken);
    }
    if (message.role !== "") {
      writer.uint32(42).string(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.login = reader.string();
          break;
        case 3:
          message.accessToken = reader.string();
          break;
        case 4:
          message.refreshToken = reader.string();
          break;
        case 5:
          message.role = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      login: isSet(object.login) ? String(object.login) : "",
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "",
      role: isSet(object.role) ? String(object.role) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.login !== undefined && (obj.login = message.login);
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    message.refreshToken !== undefined && (obj.refreshToken = message.refreshToken);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  create(base?: DeepPartial<User>): User {
    return User.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<User>): User {
    const message = createBaseUser();
    message.id = object.id ?? 0;
    message.login = object.login ?? "";
    message.accessToken = object.accessToken ?? "";
    message.refreshToken = object.refreshToken ?? "";
    message.role = object.role ?? "";
    return message;
  },
};

function createBaseGetUsersRequest(): GetUsersRequest {
  return { count: 0, offset: 0 };
}

export const GetUsersRequest = {
  encode(message: GetUsersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.count !== 0) {
      writer.uint32(8).uint32(message.count);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint32(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUsersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUsersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = reader.uint32();
          break;
        case 2:
          message.offset = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUsersRequest {
    return {
      count: isSet(object.count) ? Number(object.count) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: GetUsersRequest): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    return obj;
  },

  create(base?: DeepPartial<GetUsersRequest>): GetUsersRequest {
    return GetUsersRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetUsersRequest>): GetUsersRequest {
    const message = createBaseGetUsersRequest();
    message.count = object.count ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseSimpleUser(): SimpleUser {
  return { id: 0, login: "", role: "" };
}

export const SimpleUser = {
  encode(message: SimpleUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.login !== "") {
      writer.uint32(18).string(message.login);
    }
    if (message.role !== "") {
      writer.uint32(26).string(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimpleUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimpleUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.login = reader.string();
          break;
        case 3:
          message.role = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SimpleUser {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      login: isSet(object.login) ? String(object.login) : "",
      role: isSet(object.role) ? String(object.role) : "",
    };
  },

  toJSON(message: SimpleUser): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.login !== undefined && (obj.login = message.login);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  create(base?: DeepPartial<SimpleUser>): SimpleUser {
    return SimpleUser.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SimpleUser>): SimpleUser {
    const message = createBaseSimpleUser();
    message.id = object.id ?? 0;
    message.login = object.login ?? "";
    message.role = object.role ?? "";
    return message;
  },
};

function createBaseGetUsersResponse(): GetUsersResponse {
  return { users: [] };
}

export const GetUsersResponse = {
  encode(message: GetUsersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      SimpleUser.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUsersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users.push(SimpleUser.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUsersResponse {
    return { users: Array.isArray(object?.users) ? object.users.map((e: any) => SimpleUser.fromJSON(e)) : [] };
  },

  toJSON(message: GetUsersResponse): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map((e) => e ? SimpleUser.toJSON(e) : undefined);
    } else {
      obj.users = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GetUsersResponse>): GetUsersResponse {
    return GetUsersResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetUsersResponse>): GetUsersResponse {
    const message = createBaseGetUsersResponse();
    message.users = object.users?.map((e) => SimpleUser.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetRoleRequest(): GetRoleRequest {
  return { accessToken: "" };
}

export const GetRoleRequest = {
  encode(message: GetRoleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRoleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRoleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accessToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRoleRequest {
    return { accessToken: isSet(object.accessToken) ? String(object.accessToken) : "" };
  },

  toJSON(message: GetRoleRequest): unknown {
    const obj: any = {};
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    return obj;
  },

  create(base?: DeepPartial<GetRoleRequest>): GetRoleRequest {
    return GetRoleRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetRoleRequest>): GetRoleRequest {
    const message = createBaseGetRoleRequest();
    message.accessToken = object.accessToken ?? "";
    return message;
  },
};

function createBaseGetRoleResponse(): GetRoleResponse {
  return { role: "" };
}

export const GetRoleResponse = {
  encode(message: GetRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.role = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRoleResponse {
    return { role: isSet(object.role) ? String(object.role) : "" };
  },

  toJSON(message: GetRoleResponse): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  create(base?: DeepPartial<GetRoleResponse>): GetRoleResponse {
    return GetRoleResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetRoleResponse>): GetRoleResponse {
    const message = createBaseGetRoleResponse();
    message.role = object.role ?? "";
    return message;
  },
};

function createBaseLogoutRequest(): LogoutRequest {
  return { refreshToken: "" };
}

export const LogoutRequest = {
  encode(message: LogoutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.refreshToken !== "") {
      writer.uint32(10).string(message.refreshToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogoutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogoutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refreshToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogoutRequest {
    return { refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "" };
  },

  toJSON(message: LogoutRequest): unknown {
    const obj: any = {};
    message.refreshToken !== undefined && (obj.refreshToken = message.refreshToken);
    return obj;
  },

  create(base?: DeepPartial<LogoutRequest>): LogoutRequest {
    return LogoutRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LogoutRequest>): LogoutRequest {
    const message = createBaseLogoutRequest();
    message.refreshToken = object.refreshToken ?? "";
    return message;
  },
};

function createBaseLogoutResponse(): LogoutResponse {
  return {};
}

export const LogoutResponse = {
  encode(_: LogoutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogoutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogoutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): LogoutResponse {
    return {};
  },

  toJSON(_: LogoutResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<LogoutResponse>): LogoutResponse {
    return LogoutResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<LogoutResponse>): LogoutResponse {
    const message = createBaseLogoutResponse();
    return message;
  },
};

function createBaseValidateRequest(): ValidateRequest {
  return { accessToken: "" };
}

export const ValidateRequest = {
  encode(message: ValidateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accessToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidateRequest {
    return { accessToken: isSet(object.accessToken) ? String(object.accessToken) : "" };
  },

  toJSON(message: ValidateRequest): unknown {
    const obj: any = {};
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    return obj;
  },

  create(base?: DeepPartial<ValidateRequest>): ValidateRequest {
    return ValidateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ValidateRequest>): ValidateRequest {
    const message = createBaseValidateRequest();
    message.accessToken = object.accessToken ?? "";
    return message;
  },
};

function createBaseValidateResponse(): ValidateResponse {
  return { id: 0, login: "" };
}

export const ValidateResponse = {
  encode(message: ValidateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.login !== "") {
      writer.uint32(18).string(message.login);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.login = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidateResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0, login: isSet(object.login) ? String(object.login) : "" };
  },

  toJSON(message: ValidateResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.login !== undefined && (obj.login = message.login);
    return obj;
  },

  create(base?: DeepPartial<ValidateResponse>): ValidateResponse {
    return ValidateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ValidateResponse>): ValidateResponse {
    const message = createBaseValidateResponse();
    message.id = object.id ?? 0;
    message.login = object.login ?? "";
    return message;
  },
};

function createBaseRegisterRequest(): RegisterRequest {
  return { login: "", password: "" };
}

export const RegisterRequest = {
  encode(message: RegisterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.login !== "") {
      writer.uint32(10).string(message.login);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.login = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterRequest {
    return {
      login: isSet(object.login) ? String(object.login) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: RegisterRequest): unknown {
    const obj: any = {};
    message.login !== undefined && (obj.login = message.login);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  create(base?: DeepPartial<RegisterRequest>): RegisterRequest {
    return RegisterRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RegisterRequest>): RegisterRequest {
    const message = createBaseRegisterRequest();
    message.login = object.login ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseRegisterResponse(): RegisterResponse {
  return { user: undefined };
}

export const RegisterResponse = {
  encode(message: RegisterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterResponse {
    return { user: isSet(object.user) ? User.fromJSON(object.user) : undefined };
  },

  toJSON(message: RegisterResponse): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  create(base?: DeepPartial<RegisterResponse>): RegisterResponse {
    return RegisterResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RegisterResponse>): RegisterResponse {
    const message = createBaseRegisterResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseLoginRequest(): LoginRequest {
  return { login: "", password: "" };
}

export const LoginRequest = {
  encode(message: LoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.login !== "") {
      writer.uint32(10).string(message.login);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.login = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoginRequest {
    return {
      login: isSet(object.login) ? String(object.login) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    message.login !== undefined && (obj.login = message.login);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  create(base?: DeepPartial<LoginRequest>): LoginRequest {
    return LoginRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LoginRequest>): LoginRequest {
    const message = createBaseLoginRequest();
    message.login = object.login ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseLoginResponse(): LoginResponse {
  return { user: undefined };
}

export const LoginResponse = {
  encode(message: LoginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoginResponse {
    return { user: isSet(object.user) ? User.fromJSON(object.user) : undefined };
  },

  toJSON(message: LoginResponse): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  create(base?: DeepPartial<LoginResponse>): LoginResponse {
    return LoginResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LoginResponse>): LoginResponse {
    const message = createBaseLoginResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseRefreshRequest(): RefreshRequest {
  return { refreshToken: "" };
}

export const RefreshRequest = {
  encode(message: RefreshRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.refreshToken !== "") {
      writer.uint32(10).string(message.refreshToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefreshRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefreshRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refreshToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RefreshRequest {
    return { refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "" };
  },

  toJSON(message: RefreshRequest): unknown {
    const obj: any = {};
    message.refreshToken !== undefined && (obj.refreshToken = message.refreshToken);
    return obj;
  },

  create(base?: DeepPartial<RefreshRequest>): RefreshRequest {
    return RefreshRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RefreshRequest>): RefreshRequest {
    const message = createBaseRefreshRequest();
    message.refreshToken = object.refreshToken ?? "";
    return message;
  },
};

function createBaseRefreshResponse(): RefreshResponse {
  return { accessToken: "", refreshToken: "" };
}

export const RefreshResponse = {
  encode(message: RefreshResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    if (message.refreshToken !== "") {
      writer.uint32(18).string(message.refreshToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefreshResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefreshResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accessToken = reader.string();
          break;
        case 2:
          message.refreshToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RefreshResponse {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "",
    };
  },

  toJSON(message: RefreshResponse): unknown {
    const obj: any = {};
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    message.refreshToken !== undefined && (obj.refreshToken = message.refreshToken);
    return obj;
  },

  create(base?: DeepPartial<RefreshResponse>): RefreshResponse {
    return RefreshResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RefreshResponse>): RefreshResponse {
    const message = createBaseRefreshResponse();
    message.accessToken = object.accessToken ?? "";
    message.refreshToken = object.refreshToken ?? "";
    return message;
  },
};

export type AuthServiceDefinition = typeof AuthServiceDefinition;
export const AuthServiceDefinition = {
  name: "AuthService",
  fullName: "auth.AuthService",
  methods: {
    register: {
      name: "Register",
      requestType: RegisterRequest,
      requestStream: false,
      responseType: RegisterResponse,
      responseStream: false,
      options: {},
    },
    validate: {
      name: "Validate",
      requestType: ValidateRequest,
      requestStream: false,
      responseType: ValidateResponse,
      responseStream: false,
      options: {},
    },
    login: {
      name: "Login",
      requestType: LoginRequest,
      requestStream: false,
      responseType: LoginResponse,
      responseStream: false,
      options: {},
    },
    refresh: {
      name: "Refresh",
      requestType: RefreshRequest,
      requestStream: false,
      responseType: RefreshResponse,
      responseStream: false,
      options: {},
    },
    getRole: {
      name: "GetRole",
      requestType: GetRoleRequest,
      requestStream: false,
      responseType: GetRoleResponse,
      responseStream: false,
      options: {},
    },
    logout: {
      name: "Logout",
      requestType: LogoutRequest,
      requestStream: false,
      responseType: LogoutResponse,
      responseStream: false,
      options: {},
    },
    getUsers: {
      name: "GetUsers",
      requestType: GetUsersRequest,
      requestStream: false,
      responseType: GetUsersResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface AuthServiceImplementation<CallContextExt = {}> {
  register(request: RegisterRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegisterResponse>>;
  validate(request: ValidateRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ValidateResponse>>;
  login(request: LoginRequest, context: CallContext & CallContextExt): Promise<DeepPartial<LoginResponse>>;
  refresh(request: RefreshRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RefreshResponse>>;
  getRole(request: GetRoleRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetRoleResponse>>;
  logout(request: LogoutRequest, context: CallContext & CallContextExt): Promise<DeepPartial<LogoutResponse>>;
  getUsers(request: GetUsersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUsersResponse>>;
}

export interface AuthServiceClient<CallOptionsExt = {}> {
  register(request: DeepPartial<RegisterRequest>, options?: CallOptions & CallOptionsExt): Promise<RegisterResponse>;
  validate(request: DeepPartial<ValidateRequest>, options?: CallOptions & CallOptionsExt): Promise<ValidateResponse>;
  login(request: DeepPartial<LoginRequest>, options?: CallOptions & CallOptionsExt): Promise<LoginResponse>;
  refresh(request: DeepPartial<RefreshRequest>, options?: CallOptions & CallOptionsExt): Promise<RefreshResponse>;
  getRole(request: DeepPartial<GetRoleRequest>, options?: CallOptions & CallOptionsExt): Promise<GetRoleResponse>;
  logout(request: DeepPartial<LogoutRequest>, options?: CallOptions & CallOptionsExt): Promise<LogoutResponse>;
  getUsers(request: DeepPartial<GetUsersRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUsersResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
