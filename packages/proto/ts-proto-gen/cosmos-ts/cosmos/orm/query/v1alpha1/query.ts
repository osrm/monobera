/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

import { Any } from "../../../../google/protobuf/any";
import { Duration } from "../../../../google/protobuf/duration";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import {
  PageRequest,
  PageResponse,
} from "../../../base/query/v1beta1/pagination";

export const protobufPackage = "cosmos.orm.query.v1alpha1";

/** GetRequest is the Query/Get request type. */
export interface GetRequest {
  /** message_name is the fully-qualified message name of the ORM table being queried. */
  messageName: string;
  /**
   * index is the index fields expression used in orm definitions. If it
   * is empty, the table's primary key is assumed. If it is non-empty, it must
   * refer to an unique index.
   */
  index: string;
  /**
   * values are the values of the fields corresponding to the requested index.
   * There must be as many values provided as there are fields in the index and
   * these values must correspond to the index field types.
   */
  values: IndexValue[];
}

/** GetResponse is the Query/Get response type. */
export interface GetResponse {
  /**
   * result is the result of the get query. If no value is found, the gRPC
   * status code NOT_FOUND will be returned.
   */
  result?: Any | undefined;
}

/** ListRequest is the Query/List request type. */
export interface ListRequest {
  /** message_name is the fully-qualified message name of the ORM table being queried. */
  messageName: string;
  /**
   * index is the index fields expression used in orm definitions. If it
   * is empty, the table's primary key is assumed.
   */
  index: string;
  /** prefix defines a prefix query. */
  prefix?: ListRequest_Prefix | undefined;
  /** range defines a range query. */
  range?: ListRequest_Range | undefined;
  /** pagination is the pagination request. */
  pagination?: PageRequest | undefined;
}

/** Prefix specifies the arguments to a prefix query. */
export interface ListRequest_Prefix {
  /**
   * values specifies the index values for the prefix query.
   * It is valid to special a partial prefix with fewer values than
   * the number of fields in the index.
   */
  values: IndexValue[];
}

/** Range specifies the arguments to a range query. */
export interface ListRequest_Range {
  /**
   * start specifies the starting index values for the range query.
   * It is valid to provide fewer values than the number of fields in the
   * index.
   */
  start: IndexValue[];
  /**
   * end specifies the inclusive ending index values for the range query.
   * It is valid to provide fewer values than the number of fields in the
   * index.
   */
  end: IndexValue[];
}

/** ListResponse is the Query/List response type. */
export interface ListResponse {
  /** results are the results of the query. */
  results: Any[];
  /** pagination is the pagination response. */
  pagination?: PageResponse | undefined;
}

/** IndexValue represents the value of a field in an ORM index expression. */
export interface IndexValue {
  /**
   * uint specifies a value for an uint32, fixed32, uint64, or fixed64
   * index field.
   */
  uint?: Long | undefined;
  /**
   * int64 specifies a value for an int32, sfixed32, int64, or sfixed64
   * index field.
   */
  int?: Long | undefined;
  /** str specifies a value for a string index field. */
  str?: string | undefined;
  /** bytes specifies a value for a bytes index field. */
  bytes?: Uint8Array | undefined;
  /** enum specifies a value for an enum index field. */
  enum?: string | undefined;
  /** bool specifies a value for a bool index field. */
  bool?: boolean | undefined;
  /** timestamp specifies a value for a timestamp index field. */
  timestamp?: Date | undefined;
  /** duration specifies a value for a duration index field. */
  duration?: Duration | undefined;
}

function createBaseGetRequest(): GetRequest {
  return { messageName: "", index: "", values: [] };
}

export const GetRequest = {
  encode(
    message: GetRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.messageName !== "") {
      writer.uint32(10).string(message.messageName);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    for (const v of message.values) {
      IndexValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messageName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.index = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.values.push(IndexValue.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRequest {
    return {
      messageName: isSet(object.messageName) ? String(object.messageName) : "",
      index: isSet(object.index) ? String(object.index) : "",
      values: Array.isArray(object?.values)
        ? object.values.map((e: any) => IndexValue.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetRequest): unknown {
    const obj: any = {};
    if (message.messageName !== "") {
      obj.messageName = message.messageName;
    }
    if (message.index !== "") {
      obj.index = message.index;
    }
    if (message.values?.length) {
      obj.values = message.values.map((e) => IndexValue.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRequest>, I>>(base?: I): GetRequest {
    return GetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetRequest>, I>>(
    object: I,
  ): GetRequest {
    const message = createBaseGetRequest();
    message.messageName = object.messageName ?? "";
    message.index = object.index ?? "";
    message.values = object.values?.map((e) => IndexValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetResponse(): GetResponse {
  return { result: undefined };
}

export const GetResponse = {
  encode(
    message: GetResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== undefined) {
      Any.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetResponse {
    return {
      result: isSet(object.result) ? Any.fromJSON(object.result) : undefined,
    };
  },

  toJSON(message: GetResponse): unknown {
    const obj: any = {};
    if (message.result !== undefined) {
      obj.result = Any.toJSON(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResponse>, I>>(base?: I): GetResponse {
    return GetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResponse>, I>>(
    object: I,
  ): GetResponse {
    const message = createBaseGetResponse();
    message.result =
      object.result !== undefined && object.result !== null
        ? Any.fromPartial(object.result)
        : undefined;
    return message;
  },
};

function createBaseListRequest(): ListRequest {
  return {
    messageName: "",
    index: "",
    prefix: undefined,
    range: undefined,
    pagination: undefined,
  };
}

export const ListRequest = {
  encode(
    message: ListRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.messageName !== "") {
      writer.uint32(10).string(message.messageName);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.prefix !== undefined) {
      ListRequest_Prefix.encode(
        message.prefix,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.range !== undefined) {
      ListRequest_Range.encode(
        message.range,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messageName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.index = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.prefix = ListRequest_Prefix.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.range = ListRequest_Range.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListRequest {
    return {
      messageName: isSet(object.messageName) ? String(object.messageName) : "",
      index: isSet(object.index) ? String(object.index) : "",
      prefix: isSet(object.prefix)
        ? ListRequest_Prefix.fromJSON(object.prefix)
        : undefined,
      range: isSet(object.range)
        ? ListRequest_Range.fromJSON(object.range)
        : undefined,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: ListRequest): unknown {
    const obj: any = {};
    if (message.messageName !== "") {
      obj.messageName = message.messageName;
    }
    if (message.index !== "") {
      obj.index = message.index;
    }
    if (message.prefix !== undefined) {
      obj.prefix = ListRequest_Prefix.toJSON(message.prefix);
    }
    if (message.range !== undefined) {
      obj.range = ListRequest_Range.toJSON(message.range);
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRequest>, I>>(base?: I): ListRequest {
    return ListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRequest>, I>>(
    object: I,
  ): ListRequest {
    const message = createBaseListRequest();
    message.messageName = object.messageName ?? "";
    message.index = object.index ?? "";
    message.prefix =
      object.prefix !== undefined && object.prefix !== null
        ? ListRequest_Prefix.fromPartial(object.prefix)
        : undefined;
    message.range =
      object.range !== undefined && object.range !== null
        ? ListRequest_Range.fromPartial(object.range)
        : undefined;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseListRequest_Prefix(): ListRequest_Prefix {
  return { values: [] };
}

export const ListRequest_Prefix = {
  encode(
    message: ListRequest_Prefix,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.values) {
      IndexValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest_Prefix {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest_Prefix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.values.push(IndexValue.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListRequest_Prefix {
    return {
      values: Array.isArray(object?.values)
        ? object.values.map((e: any) => IndexValue.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListRequest_Prefix): unknown {
    const obj: any = {};
    if (message.values?.length) {
      obj.values = message.values.map((e) => IndexValue.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRequest_Prefix>, I>>(
    base?: I,
  ): ListRequest_Prefix {
    return ListRequest_Prefix.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRequest_Prefix>, I>>(
    object: I,
  ): ListRequest_Prefix {
    const message = createBaseListRequest_Prefix();
    message.values = object.values?.map((e) => IndexValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListRequest_Range(): ListRequest_Range {
  return { start: [], end: [] };
}

export const ListRequest_Range = {
  encode(
    message: ListRequest_Range,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.start) {
      IndexValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.end) {
      IndexValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest_Range {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest_Range();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.start.push(IndexValue.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.end.push(IndexValue.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListRequest_Range {
    return {
      start: Array.isArray(object?.start)
        ? object.start.map((e: any) => IndexValue.fromJSON(e))
        : [],
      end: Array.isArray(object?.end)
        ? object.end.map((e: any) => IndexValue.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListRequest_Range): unknown {
    const obj: any = {};
    if (message.start?.length) {
      obj.start = message.start.map((e) => IndexValue.toJSON(e));
    }
    if (message.end?.length) {
      obj.end = message.end.map((e) => IndexValue.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRequest_Range>, I>>(
    base?: I,
  ): ListRequest_Range {
    return ListRequest_Range.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRequest_Range>, I>>(
    object: I,
  ): ListRequest_Range {
    const message = createBaseListRequest_Range();
    message.start = object.start?.map((e) => IndexValue.fromPartial(e)) || [];
    message.end = object.end?.map((e) => IndexValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListResponse(): ListResponse {
  return { results: [], pagination: undefined };
}

export const ListResponse = {
  encode(
    message: ListResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.results) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results.push(Any.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListResponse {
    return {
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => Any.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: ListResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => Any.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListResponse>, I>>(
    base?: I,
  ): ListResponse {
    return ListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListResponse>, I>>(
    object: I,
  ): ListResponse {
    const message = createBaseListResponse();
    message.results = object.results?.map((e) => Any.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseIndexValue(): IndexValue {
  return {
    uint: undefined,
    int: undefined,
    str: undefined,
    bytes: undefined,
    enum: undefined,
    bool: undefined,
    timestamp: undefined,
    duration: undefined,
  };
}

export const IndexValue = {
  encode(
    message: IndexValue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uint !== undefined) {
      writer.uint32(8).uint64(message.uint);
    }
    if (message.int !== undefined) {
      writer.uint32(16).int64(message.int);
    }
    if (message.str !== undefined) {
      writer.uint32(26).string(message.str);
    }
    if (message.bytes !== undefined) {
      writer.uint32(34).bytes(message.bytes);
    }
    if (message.enum !== undefined) {
      writer.uint32(42).string(message.enum);
    }
    if (message.bool !== undefined) {
      writer.uint32(48).bool(message.bool);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexValue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.uint = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.int = reader.int64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.str = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bytes = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.enum = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.bool = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.duration = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IndexValue {
    return {
      uint: isSet(object.uint) ? Long.fromValue(object.uint) : undefined,
      int: isSet(object.int) ? Long.fromValue(object.int) : undefined,
      str: isSet(object.str) ? String(object.str) : undefined,
      bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : undefined,
      enum: isSet(object.enum) ? String(object.enum) : undefined,
      bool: isSet(object.bool) ? Boolean(object.bool) : undefined,
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
      duration: isSet(object.duration)
        ? Duration.fromJSON(object.duration)
        : undefined,
    };
  },

  toJSON(message: IndexValue): unknown {
    const obj: any = {};
    if (message.uint !== undefined) {
      obj.uint = (message.uint || Long.UZERO).toString();
    }
    if (message.int !== undefined) {
      obj.int = (message.int || Long.ZERO).toString();
    }
    if (message.str !== undefined) {
      obj.str = message.str;
    }
    if (message.bytes !== undefined) {
      obj.bytes = base64FromBytes(message.bytes);
    }
    if (message.enum !== undefined) {
      obj.enum = message.enum;
    }
    if (message.bool !== undefined) {
      obj.bool = message.bool;
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    if (message.duration !== undefined) {
      obj.duration = Duration.toJSON(message.duration);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IndexValue>, I>>(base?: I): IndexValue {
    return IndexValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IndexValue>, I>>(
    object: I,
  ): IndexValue {
    const message = createBaseIndexValue();
    message.uint =
      object.uint !== undefined && object.uint !== null
        ? Long.fromValue(object.uint)
        : undefined;
    message.int =
      object.int !== undefined && object.int !== null
        ? Long.fromValue(object.int)
        : undefined;
    message.str = object.str ?? undefined;
    message.bytes = object.bytes ?? undefined;
    message.enum = object.enum ?? undefined;
    message.bool = object.bool ?? undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Duration.fromPartial(object.duration)
        : undefined;
    return message;
  },
};

/** Query is a generic gRPC service for querying ORM data. */
export interface Query {
  /** Get queries an ORM table against an unique index. */
  Get(request: GetRequest): Promise<GetResponse>;
  /** List queries an ORM table against an index. */
  List(request: ListRequest): Promise<ListResponse>;
}

export const QueryServiceName = "cosmos.orm.query.v1alpha1.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Get = this.Get.bind(this);
    this.List = this.List.bind(this);
  }
  Get(request: GetRequest): Promise<GetResponse> {
    const data = GetRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Get", data);
    return promise.then((data) => GetResponse.decode(_m0.Reader.create(data)));
  }

  List(request: ListRequest): Promise<ListResponse> {
    const data = ListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "List", data);
    return promise.then((data) => ListResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
