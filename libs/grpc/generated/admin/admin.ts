/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "admin";

export interface SimpleUser {
  id: number;
  login: string;
  role: string;
}

export interface CreateNewsRequest {
  text: string;
}

export interface CreateNewsResponse {
  id: number;
  text: string;
}

export interface GetUsersRequest {
  count: number;
  offset: number;
}

export interface GetUsersResponse {
  users: SimpleUser[];
}

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

function createBaseCreateNewsRequest(): CreateNewsRequest {
  return { text: "" };
}

export const CreateNewsRequest = {
  encode(message: CreateNewsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateNewsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateNewsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateNewsRequest {
    return { text: isSet(object.text) ? String(object.text) : "" };
  },

  toJSON(message: CreateNewsRequest): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  create(base?: DeepPartial<CreateNewsRequest>): CreateNewsRequest {
    return CreateNewsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateNewsRequest>): CreateNewsRequest {
    const message = createBaseCreateNewsRequest();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseCreateNewsResponse(): CreateNewsResponse {
  return { id: 0, text: "" };
}

export const CreateNewsResponse = {
  encode(message: CreateNewsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateNewsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateNewsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateNewsResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0, text: isSet(object.text) ? String(object.text) : "" };
  },

  toJSON(message: CreateNewsResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  create(base?: DeepPartial<CreateNewsResponse>): CreateNewsResponse {
    return CreateNewsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateNewsResponse>): CreateNewsResponse {
    const message = createBaseCreateNewsResponse();
    message.id = object.id ?? 0;
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseGetUsersRequest(): GetUsersRequest {
  return { count: 0, offset: 0 };
}

export const GetUsersRequest = {
  encode(message: GetUsersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.count !== 0) {
      writer.uint32(8).uint64(message.count);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
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
          message.count = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.offset = longToNumber(reader.uint64() as Long);
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

export type AdminServiceDefinition = typeof AdminServiceDefinition;
export const AdminServiceDefinition = {
  name: "AdminService",
  fullName: "admin.AdminService",
  methods: {
    createNews: {
      name: "CreateNews",
      requestType: CreateNewsRequest,
      requestStream: false,
      responseType: CreateNewsResponse,
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

export interface AdminServiceImplementation<CallContextExt = {}> {
  createNews(
    request: CreateNewsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CreateNewsResponse>>;
  getUsers(request: GetUsersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUsersResponse>>;
}

export interface AdminServiceClient<CallOptionsExt = {}> {
  createNews(
    request: DeepPartial<CreateNewsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CreateNewsResponse>;
  getUsers(request: DeepPartial<GetUsersRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUsersResponse>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
