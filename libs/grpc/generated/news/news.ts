/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "news";

export interface News {
  id: number;
  text: string;
  authorId: number;
  likes: number;
  view: number;
}

export interface CreateNewsRequest {
  text: string;
}

export interface CreateNewsResponse {
  news: News | undefined;
}

export interface GetNewsRequest {
  id: number;
}

export interface GetNewsResponse {
  news: News | undefined;
}

export interface UpdateNewsRequest {
  id: number;
  text: string;
  authorId: number;
  likes: number;
  view: number;
}

export interface UpdateNewsResponse {
  news: News | undefined;
}

export interface DeleteNewsRequest {
  id: number;
}

export interface DeleteNewsResponse {
  id: number;
}

function createBaseNews(): News {
  return { id: 0, text: "", authorId: 0, likes: 0, view: 0 };
}

export const News = {
  encode(message: News, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.authorId !== 0) {
      writer.uint32(24).uint32(message.authorId);
    }
    if (message.likes !== 0) {
      writer.uint32(32).uint32(message.likes);
    }
    if (message.view !== 0) {
      writer.uint32(40).uint32(message.view);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): News {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNews();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.text = reader.string();
          break;
        case 3:
          message.authorId = reader.uint32();
          break;
        case 4:
          message.likes = reader.uint32();
          break;
        case 5:
          message.view = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): News {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      text: isSet(object.text) ? String(object.text) : "",
      authorId: isSet(object.authorId) ? Number(object.authorId) : 0,
      likes: isSet(object.likes) ? Number(object.likes) : 0,
      view: isSet(object.view) ? Number(object.view) : 0,
    };
  },

  toJSON(message: News): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.text !== undefined && (obj.text = message.text);
    message.authorId !== undefined && (obj.authorId = Math.round(message.authorId));
    message.likes !== undefined && (obj.likes = Math.round(message.likes));
    message.view !== undefined && (obj.view = Math.round(message.view));
    return obj;
  },

  create(base?: DeepPartial<News>): News {
    return News.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<News>): News {
    const message = createBaseNews();
    message.id = object.id ?? 0;
    message.text = object.text ?? "";
    message.authorId = object.authorId ?? 0;
    message.likes = object.likes ?? 0;
    message.view = object.view ?? 0;
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
  return { news: undefined };
}

export const CreateNewsResponse = {
  encode(message: CreateNewsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.news !== undefined) {
      News.encode(message.news, writer.uint32(10).fork()).ldelim();
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
          message.news = News.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateNewsResponse {
    return { news: isSet(object.news) ? News.fromJSON(object.news) : undefined };
  },

  toJSON(message: CreateNewsResponse): unknown {
    const obj: any = {};
    message.news !== undefined && (obj.news = message.news ? News.toJSON(message.news) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CreateNewsResponse>): CreateNewsResponse {
    return CreateNewsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateNewsResponse>): CreateNewsResponse {
    const message = createBaseCreateNewsResponse();
    message.news = (object.news !== undefined && object.news !== null) ? News.fromPartial(object.news) : undefined;
    return message;
  },
};

function createBaseGetNewsRequest(): GetNewsRequest {
  return { id: 0 };
}

export const GetNewsRequest = {
  encode(message: GetNewsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNewsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNewsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNewsRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: GetNewsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  create(base?: DeepPartial<GetNewsRequest>): GetNewsRequest {
    return GetNewsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetNewsRequest>): GetNewsRequest {
    const message = createBaseGetNewsRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGetNewsResponse(): GetNewsResponse {
  return { news: undefined };
}

export const GetNewsResponse = {
  encode(message: GetNewsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.news !== undefined) {
      News.encode(message.news, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNewsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNewsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.news = News.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNewsResponse {
    return { news: isSet(object.news) ? News.fromJSON(object.news) : undefined };
  },

  toJSON(message: GetNewsResponse): unknown {
    const obj: any = {};
    message.news !== undefined && (obj.news = message.news ? News.toJSON(message.news) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetNewsResponse>): GetNewsResponse {
    return GetNewsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetNewsResponse>): GetNewsResponse {
    const message = createBaseGetNewsResponse();
    message.news = (object.news !== undefined && object.news !== null) ? News.fromPartial(object.news) : undefined;
    return message;
  },
};

function createBaseUpdateNewsRequest(): UpdateNewsRequest {
  return { id: 0, text: "", authorId: 0, likes: 0, view: 0 };
}

export const UpdateNewsRequest = {
  encode(message: UpdateNewsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.authorId !== 0) {
      writer.uint32(24).uint32(message.authorId);
    }
    if (message.likes !== 0) {
      writer.uint32(32).uint32(message.likes);
    }
    if (message.view !== 0) {
      writer.uint32(40).uint32(message.view);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNewsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateNewsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.text = reader.string();
          break;
        case 3:
          message.authorId = reader.uint32();
          break;
        case 4:
          message.likes = reader.uint32();
          break;
        case 5:
          message.view = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateNewsRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      text: isSet(object.text) ? String(object.text) : "",
      authorId: isSet(object.authorId) ? Number(object.authorId) : 0,
      likes: isSet(object.likes) ? Number(object.likes) : 0,
      view: isSet(object.view) ? Number(object.view) : 0,
    };
  },

  toJSON(message: UpdateNewsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.text !== undefined && (obj.text = message.text);
    message.authorId !== undefined && (obj.authorId = Math.round(message.authorId));
    message.likes !== undefined && (obj.likes = Math.round(message.likes));
    message.view !== undefined && (obj.view = Math.round(message.view));
    return obj;
  },

  create(base?: DeepPartial<UpdateNewsRequest>): UpdateNewsRequest {
    return UpdateNewsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateNewsRequest>): UpdateNewsRequest {
    const message = createBaseUpdateNewsRequest();
    message.id = object.id ?? 0;
    message.text = object.text ?? "";
    message.authorId = object.authorId ?? 0;
    message.likes = object.likes ?? 0;
    message.view = object.view ?? 0;
    return message;
  },
};

function createBaseUpdateNewsResponse(): UpdateNewsResponse {
  return { news: undefined };
}

export const UpdateNewsResponse = {
  encode(message: UpdateNewsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.news !== undefined) {
      News.encode(message.news, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNewsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateNewsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.news = News.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateNewsResponse {
    return { news: isSet(object.news) ? News.fromJSON(object.news) : undefined };
  },

  toJSON(message: UpdateNewsResponse): unknown {
    const obj: any = {};
    message.news !== undefined && (obj.news = message.news ? News.toJSON(message.news) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UpdateNewsResponse>): UpdateNewsResponse {
    return UpdateNewsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateNewsResponse>): UpdateNewsResponse {
    const message = createBaseUpdateNewsResponse();
    message.news = (object.news !== undefined && object.news !== null) ? News.fromPartial(object.news) : undefined;
    return message;
  },
};

function createBaseDeleteNewsRequest(): DeleteNewsRequest {
  return { id: 0 };
}

export const DeleteNewsRequest = {
  encode(message: DeleteNewsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteNewsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteNewsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteNewsRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: DeleteNewsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  create(base?: DeepPartial<DeleteNewsRequest>): DeleteNewsRequest {
    return DeleteNewsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteNewsRequest>): DeleteNewsRequest {
    const message = createBaseDeleteNewsRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseDeleteNewsResponse(): DeleteNewsResponse {
  return { id: 0 };
}

export const DeleteNewsResponse = {
  encode(message: DeleteNewsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteNewsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteNewsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteNewsResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: DeleteNewsResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  create(base?: DeepPartial<DeleteNewsResponse>): DeleteNewsResponse {
    return DeleteNewsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteNewsResponse>): DeleteNewsResponse {
    const message = createBaseDeleteNewsResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

export type NewsServiceDefinition = typeof NewsServiceDefinition;
export const NewsServiceDefinition = {
  name: "NewsService",
  fullName: "news.NewsService",
  methods: {
    createNews: {
      name: "CreateNews",
      requestType: CreateNewsRequest,
      requestStream: false,
      responseType: CreateNewsResponse,
      responseStream: false,
      options: {},
    },
    getNews: {
      name: "GetNews",
      requestType: GetNewsRequest,
      requestStream: false,
      responseType: GetNewsResponse,
      responseStream: false,
      options: {},
    },
    updateNews: {
      name: "UpdateNews",
      requestType: UpdateNewsRequest,
      requestStream: false,
      responseType: UpdateNewsResponse,
      responseStream: false,
      options: {},
    },
    deleteNews: {
      name: "DeleteNews",
      requestType: DeleteNewsRequest,
      requestStream: false,
      responseType: DeleteNewsResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface NewsServiceImplementation<CallContextExt = {}> {
  createNews(
    request: CreateNewsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CreateNewsResponse>>;
  getNews(request: GetNewsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetNewsResponse>>;
  updateNews(
    request: UpdateNewsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<UpdateNewsResponse>>;
  deleteNews(
    request: DeleteNewsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<DeleteNewsResponse>>;
}

export interface NewsServiceClient<CallOptionsExt = {}> {
  createNews(
    request: DeepPartial<CreateNewsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CreateNewsResponse>;
  getNews(request: DeepPartial<GetNewsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetNewsResponse>;
  updateNews(
    request: DeepPartial<UpdateNewsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<UpdateNewsResponse>;
  deleteNews(
    request: DeepPartial<DeleteNewsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<DeleteNewsResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
