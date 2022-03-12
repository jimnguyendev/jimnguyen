// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ID, Timestamp, CIDR } from "../pb/types";

export const protobufPackage = "rpx";

export interface IPPolicy {
  accountId: number;
  id: ID | undefined;
  createdAt: Timestamp | undefined;
  description: string;
  metadata: string;
  name: string;
  action: IPPolicy_Action;
}

export enum IPPolicy_Action {
  Undefined = 0,
  Allow = 1,
  Deny = 2,
}

export interface IPPolicyRule {
  accountId: number;
  cidr: CIDR | undefined;
  ipPolicyId: ID | undefined;
  metadata: string;
  description: string;
  id: ID | undefined;
  createdAt: Timestamp | undefined;
  action: IPPolicyRule_Action;
}

export enum IPPolicyRule_Action {
  Undefined = 0,
  Allow = 1,
  Deny = 2,
}

const baseIPPolicy: object = {
  accountId: 0,
  description: "",
  metadata: "",
  name: "",
  action: 0,
};

export const IPPolicy = {
  encode(
    message: IPPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).int64(message.accountId);
    }
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(74).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(66).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.action !== 0) {
      writer.uint32(24).int32(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IPPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIPPolicy } as IPPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 8:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.description = reader.string();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.action = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<IPPolicy>): IPPolicy {
    const message = { ...baseIPPolicy } as IPPolicy;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
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
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    } else {
      message.action = 0;
    }
    return message;
  },
};

const baseIPPolicyRule: object = {
  accountId: 0,
  metadata: "",
  description: "",
  action: 0,
};

export const IPPolicyRule = {
  encode(
    message: IPPolicyRule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).int64(message.accountId);
    }
    if (message.cidr !== undefined) {
      CIDR.encode(message.cidr, writer.uint32(18).fork()).ldelim();
    }
    if (message.ipPolicyId !== undefined) {
      ID.encode(message.ipPolicyId, writer.uint32(74).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(82).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(66).fork()).ldelim();
    }
    if (message.action !== 0) {
      writer.uint32(88).int32(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IPPolicyRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIPPolicyRule } as IPPolicyRule;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.cidr = CIDR.decode(reader, reader.uint32());
          break;
        case 9:
          message.ipPolicyId = ID.decode(reader, reader.uint32());
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 10:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 8:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 11:
          message.action = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<IPPolicyRule>): IPPolicyRule {
    const message = { ...baseIPPolicyRule } as IPPolicyRule;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.cidr !== undefined && object.cidr !== null) {
      message.cidr = CIDR.fromPartial(object.cidr);
    } else {
      message.cidr = undefined;
    }
    if (object.ipPolicyId !== undefined && object.ipPolicyId !== null) {
      message.ipPolicyId = ID.fromPartial(object.ipPolicyId);
    } else {
      message.ipPolicyId = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    } else {
      message.action = 0;
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
