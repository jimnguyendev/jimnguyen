// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ID, Timestamp } from "../pb/types";

export const protobufPackage = "rpx";

export interface Backend {
  id: ID | undefined;
  accountId: number;
  createdAt: Timestamp | undefined;
  description: string;
  metadata: string;
  static: Backend_Static | undefined;
  tunnelGroup: Backend_TunnelGroup | undefined;
  weighted: Backend_Weighted | undefined;
  failover: Backend_Failover | undefined;
  httpResponse: Backend_HTTPResponse | undefined;
}

export enum Backend_Type {
  UNKNOWN = 0,
  STATIC = 1,
  TUNNEL_GROUP = 2,
  WEIGHTED = 3,
  FAILOVER = 4,
  HTTP_RESPONSE = 5,
}

export interface Backend_Static {
  address: string;
  tlsEnabled: boolean;
}

export interface Backend_TunnelGroup {
  labels: { [key: string]: string };
}

export interface Backend_TunnelGroup_LabelsEntry {
  key: string;
  value: string;
}

export interface Backend_Weighted {
  backends: Backend_Weighted_Element[];
}

export interface Backend_Weighted_Element {
  backend: ID | undefined;
  weight: number;
}

export interface Backend_Failover {
  backends: ID[];
}

export interface Backend_HTTPResponse {
  /**
   * body contains the contents to be used as a fixed response. It is limited
   * to 2KiB.
   */
  body: Uint8Array;
  /** headers to add to the response. Same semantics as response headers. */
  headers: { [key: string]: string };
  /** status code to respond with */
  statusCode: number;
}

export interface Backend_HTTPResponse_HeadersEntry {
  key: string;
  value: string;
}

const baseBackend: object = { accountId: 0, description: "", metadata: "" };

export const Backend = {
  encode(
    message: Backend,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountId !== 0) {
      writer.uint32(16).int64(message.accountId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(26).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    if (message.static !== undefined) {
      Backend_Static.encode(message.static, writer.uint32(130).fork()).ldelim();
    }
    if (message.tunnelGroup !== undefined) {
      Backend_TunnelGroup.encode(
        message.tunnelGroup,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.weighted !== undefined) {
      Backend_Weighted.encode(
        message.weighted,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.failover !== undefined) {
      Backend_Failover.encode(
        message.failover,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.httpResponse !== undefined) {
      Backend_HTTPResponse.encode(
        message.httpResponse,
        writer.uint32(162).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Backend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBackend } as Backend;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.metadata = reader.string();
          break;
        case 16:
          message.static = Backend_Static.decode(reader, reader.uint32());
          break;
        case 17:
          message.tunnelGroup = Backend_TunnelGroup.decode(
            reader,
            reader.uint32()
          );
          break;
        case 18:
          message.weighted = Backend_Weighted.decode(reader, reader.uint32());
          break;
        case 19:
          message.failover = Backend_Failover.decode(reader, reader.uint32());
          break;
        case 20:
          message.httpResponse = Backend_HTTPResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Backend>): Backend {
    const message = { ...baseBackend } as Backend;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.static !== undefined && object.static !== null) {
      message.static = Backend_Static.fromPartial(object.static);
    } else {
      message.static = undefined;
    }
    if (object.tunnelGroup !== undefined && object.tunnelGroup !== null) {
      message.tunnelGroup = Backend_TunnelGroup.fromPartial(object.tunnelGroup);
    } else {
      message.tunnelGroup = undefined;
    }
    if (object.weighted !== undefined && object.weighted !== null) {
      message.weighted = Backend_Weighted.fromPartial(object.weighted);
    } else {
      message.weighted = undefined;
    }
    if (object.failover !== undefined && object.failover !== null) {
      message.failover = Backend_Failover.fromPartial(object.failover);
    } else {
      message.failover = undefined;
    }
    if (object.httpResponse !== undefined && object.httpResponse !== null) {
      message.httpResponse = Backend_HTTPResponse.fromPartial(
        object.httpResponse
      );
    } else {
      message.httpResponse = undefined;
    }
    return message;
  },
};

const baseBackend_Static: object = { address: "", tlsEnabled: false };

export const Backend_Static = {
  encode(
    message: Backend_Static,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.tlsEnabled === true) {
      writer.uint32(16).bool(message.tlsEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Backend_Static {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBackend_Static } as Backend_Static;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.tlsEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Backend_Static>): Backend_Static {
    const message = { ...baseBackend_Static } as Backend_Static;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.tlsEnabled !== undefined && object.tlsEnabled !== null) {
      message.tlsEnabled = object.tlsEnabled;
    } else {
      message.tlsEnabled = false;
    }
    return message;
  },
};

const baseBackend_TunnelGroup: object = {};

export const Backend_TunnelGroup = {
  encode(
    message: Backend_TunnelGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.labels).forEach(([key, value]) => {
      Backend_TunnelGroup_LabelsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Backend_TunnelGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBackend_TunnelGroup } as Backend_TunnelGroup;
    message.labels = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Backend_TunnelGroup_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.labels[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Backend_TunnelGroup>): Backend_TunnelGroup {
    const message = { ...baseBackend_TunnelGroup } as Backend_TunnelGroup;
    message.labels = {};
    if (object.labels !== undefined && object.labels !== null) {
      Object.entries(object.labels).forEach(([key, value]) => {
        if (value !== undefined) {
          message.labels[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseBackend_TunnelGroup_LabelsEntry: object = { key: "", value: "" };

export const Backend_TunnelGroup_LabelsEntry = {
  encode(
    message: Backend_TunnelGroup_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Backend_TunnelGroup_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBackend_TunnelGroup_LabelsEntry,
    } as Backend_TunnelGroup_LabelsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Backend_TunnelGroup_LabelsEntry>
  ): Backend_TunnelGroup_LabelsEntry {
    const message = {
      ...baseBackend_TunnelGroup_LabelsEntry,
    } as Backend_TunnelGroup_LabelsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseBackend_Weighted: object = {};

export const Backend_Weighted = {
  encode(
    message: Backend_Weighted,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.backends) {
      Backend_Weighted_Element.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Backend_Weighted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBackend_Weighted } as Backend_Weighted;
    message.backends = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backends.push(
            Backend_Weighted_Element.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Backend_Weighted>): Backend_Weighted {
    const message = { ...baseBackend_Weighted } as Backend_Weighted;
    message.backends = [];
    if (object.backends !== undefined && object.backends !== null) {
      for (const e of object.backends) {
        message.backends.push(Backend_Weighted_Element.fromPartial(e));
      }
    }
    return message;
  },
};

const baseBackend_Weighted_Element: object = { weight: 0 };

export const Backend_Weighted_Element = {
  encode(
    message: Backend_Weighted_Element,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backend !== undefined) {
      ID.encode(message.backend, writer.uint32(10).fork()).ldelim();
    }
    if (message.weight !== 0) {
      writer.uint32(16).int64(message.weight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Backend_Weighted_Element {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBackend_Weighted_Element,
    } as Backend_Weighted_Element;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backend = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.weight = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Backend_Weighted_Element>
  ): Backend_Weighted_Element {
    const message = {
      ...baseBackend_Weighted_Element,
    } as Backend_Weighted_Element;
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = ID.fromPartial(object.backend);
    } else {
      message.backend = undefined;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    } else {
      message.weight = 0;
    }
    return message;
  },
};

const baseBackend_Failover: object = {};

export const Backend_Failover = {
  encode(
    message: Backend_Failover,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.backends) {
      ID.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Backend_Failover {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBackend_Failover } as Backend_Failover;
    message.backends = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backends.push(ID.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Backend_Failover>): Backend_Failover {
    const message = { ...baseBackend_Failover } as Backend_Failover;
    message.backends = [];
    if (object.backends !== undefined && object.backends !== null) {
      for (const e of object.backends) {
        message.backends.push(ID.fromPartial(e));
      }
    }
    return message;
  },
};

const baseBackend_HTTPResponse: object = { statusCode: 0 };

export const Backend_HTTPResponse = {
  encode(
    message: Backend_HTTPResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.body.length !== 0) {
      writer.uint32(10).bytes(message.body);
    }
    Object.entries(message.headers).forEach(([key, value]) => {
      Backend_HTTPResponse_HeadersEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    if (message.statusCode !== 0) {
      writer.uint32(24).int32(message.statusCode);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Backend_HTTPResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBackend_HTTPResponse } as Backend_HTTPResponse;
    message.headers = {};
    message.body = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = reader.bytes();
          break;
        case 2:
          const entry2 = Backend_HTTPResponse_HeadersEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.headers[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.statusCode = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Backend_HTTPResponse>): Backend_HTTPResponse {
    const message = { ...baseBackend_HTTPResponse } as Backend_HTTPResponse;
    message.headers = {};
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = new Uint8Array();
    }
    if (object.headers !== undefined && object.headers !== null) {
      Object.entries(object.headers).forEach(([key, value]) => {
        if (value !== undefined) {
          message.headers[key] = String(value);
        }
      });
    }
    if (object.statusCode !== undefined && object.statusCode !== null) {
      message.statusCode = object.statusCode;
    } else {
      message.statusCode = 0;
    }
    return message;
  },
};

const baseBackend_HTTPResponse_HeadersEntry: object = { key: "", value: "" };

export const Backend_HTTPResponse_HeadersEntry = {
  encode(
    message: Backend_HTTPResponse_HeadersEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Backend_HTTPResponse_HeadersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBackend_HTTPResponse_HeadersEntry,
    } as Backend_HTTPResponse_HeadersEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Backend_HTTPResponse_HeadersEntry>
  ): Backend_HTTPResponse_HeadersEntry {
    const message = {
      ...baseBackend_HTTPResponse_HeadersEntry,
    } as Backend_HTTPResponse_HeadersEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
