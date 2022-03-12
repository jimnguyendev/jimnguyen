// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ID, Timestamp } from "../pb/types";

export const protobufPackage = "rpx";

export interface BannedAddr {
  id: ID | undefined;
  /** 0.tcp.ngrok.io */
  serverHostname: string;
  port: number;
  /** us, eu */
  regionId: string;
  /** if reserved, the reserved address ID */
  reservedAddrId: ID | undefined;
  /** originating abuse report source ID, if any */
  abuseReportId: ID | undefined;
  createdAt: Timestamp | undefined;
  expiresAt: Timestamp | undefined;
}

const baseBannedAddr: object = { serverHostname: "", port: 0, regionId: "" };

export const BannedAddr = {
  encode(
    message: BannedAddr,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.serverHostname !== "") {
      writer.uint32(18).string(message.serverHostname);
    }
    if (message.port !== 0) {
      writer.uint32(24).int64(message.port);
    }
    if (message.regionId !== "") {
      writer.uint32(34).string(message.regionId);
    }
    if (message.reservedAddrId !== undefined) {
      ID.encode(message.reservedAddrId, writer.uint32(42).fork()).ldelim();
    }
    if (message.abuseReportId !== undefined) {
      ID.encode(message.abuseReportId, writer.uint32(50).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(58).fork()).ldelim();
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(message.expiresAt, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BannedAddr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBannedAddr } as BannedAddr;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.serverHostname = reader.string();
          break;
        case 3:
          message.port = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.regionId = reader.string();
          break;
        case 5:
          message.reservedAddrId = ID.decode(reader, reader.uint32());
          break;
        case 6:
          message.abuseReportId = ID.decode(reader, reader.uint32());
          break;
        case 7:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.expiresAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<BannedAddr>): BannedAddr {
    const message = { ...baseBannedAddr } as BannedAddr;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.serverHostname !== undefined && object.serverHostname !== null) {
      message.serverHostname = object.serverHostname;
    } else {
      message.serverHostname = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = 0;
    }
    if (object.regionId !== undefined && object.regionId !== null) {
      message.regionId = object.regionId;
    } else {
      message.regionId = "";
    }
    if (object.reservedAddrId !== undefined && object.reservedAddrId !== null) {
      message.reservedAddrId = ID.fromPartial(object.reservedAddrId);
    } else {
      message.reservedAddrId = undefined;
    }
    if (object.abuseReportId !== undefined && object.abuseReportId !== null) {
      message.abuseReportId = ID.fromPartial(object.abuseReportId);
    } else {
      message.abuseReportId = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = Timestamp.fromPartial(object.expiresAt);
    } else {
      message.expiresAt = undefined;
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
