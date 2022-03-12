// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp, ID } from "../pb/types";

export const protobufPackage = "rpx";

export interface TCPAddr {
  sid: string;
  addr: string;
  accountId: number;
  regionId: string;
  assignedAt: Timestamp | undefined;
  createdAt: Timestamp | undefined;
  description: string;
  metadata: string;
  endpointConfigurationId: ID | undefined;
  id: ID | undefined;
}

const baseTCPAddr: object = {
  sid: "",
  addr: "",
  accountId: 0,
  regionId: "",
  description: "",
  metadata: "",
};

export const TCPAddr = {
  encode(
    message: TCPAddr,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sid !== "") {
      writer.uint32(18).string(message.sid);
    }
    if (message.addr !== "") {
      writer.uint32(26).string(message.addr);
    }
    if (message.accountId !== 0) {
      writer.uint32(32).int64(message.accountId);
    }
    if (message.regionId !== "") {
      writer.uint32(42).string(message.regionId);
    }
    if (message.assignedAt !== undefined) {
      Timestamp.encode(message.assignedAt, writer.uint32(50).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(58).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(66).string(message.description);
    }
    if (message.metadata !== "") {
      writer.uint32(74).string(message.metadata);
    }
    if (message.endpointConfigurationId !== undefined) {
      ID.encode(
        message.endpointConfigurationId,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TCPAddr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTCPAddr } as TCPAddr;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.sid = reader.string();
          break;
        case 3:
          message.addr = reader.string();
          break;
        case 4:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.regionId = reader.string();
          break;
        case 6:
          message.assignedAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.description = reader.string();
          break;
        case 9:
          message.metadata = reader.string();
          break;
        case 12:
          message.endpointConfigurationId = ID.decode(reader, reader.uint32());
          break;
        case 13:
          message.id = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<TCPAddr>): TCPAddr {
    const message = { ...baseTCPAddr } as TCPAddr;
    if (object.sid !== undefined && object.sid !== null) {
      message.sid = object.sid;
    } else {
      message.sid = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    } else {
      message.addr = "";
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.regionId !== undefined && object.regionId !== null) {
      message.regionId = object.regionId;
    } else {
      message.regionId = "";
    }
    if (object.assignedAt !== undefined && object.assignedAt !== null) {
      message.assignedAt = Timestamp.fromPartial(object.assignedAt);
    } else {
      message.assignedAt = undefined;
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
    if (
      object.endpointConfigurationId !== undefined &&
      object.endpointConfigurationId !== null
    ) {
      message.endpointConfigurationId = ID.fromPartial(
        object.endpointConfigurationId
      );
    } else {
      message.endpointConfigurationId = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
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
