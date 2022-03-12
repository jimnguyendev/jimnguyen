// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ID, Timestamp, CIDR } from "../pb/types";

export const protobufPackage = "rpx";

export interface GlobalFirewallRule {
  /** ID of the rule */
  id: ID | undefined;
  /** Timestamp of override creation */
  createdAt: Timestamp | undefined;
  /** ID of the user who created this override */
  creatorId: ID | undefined;
  /** The IP range this rule applyes to */
  cidr: CIDR | undefined;
  /** A human description of who this override was created for */
  description: string;
  /**
   * Number of connections per minute to be permitted for any IP
   * address in the override's CIDR range. As a special value,
   * 0 here would mean a completely blocked range (think ip/nf tables)
   */
  connectionRateLimitPerMin: number;
}

export interface GlobalFirewallRuleList {
  rules: GlobalFirewallRule[];
}

const baseGlobalFirewallRule: object = {
  description: "",
  connectionRateLimitPerMin: 0,
};

export const GlobalFirewallRule = {
  encode(
    message: GlobalFirewallRule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(18).fork()).ldelim();
    }
    if (message.creatorId !== undefined) {
      ID.encode(message.creatorId, writer.uint32(26).fork()).ldelim();
    }
    if (message.cidr !== undefined) {
      CIDR.encode(message.cidr, writer.uint32(34).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.connectionRateLimitPerMin !== 0) {
      writer.uint32(56).int64(message.connectionRateLimitPerMin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GlobalFirewallRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGlobalFirewallRule } as GlobalFirewallRule;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.creatorId = ID.decode(reader, reader.uint32());
          break;
        case 4:
          message.cidr = CIDR.decode(reader, reader.uint32());
          break;
        case 5:
          message.description = reader.string();
          break;
        case 7:
          message.connectionRateLimitPerMin = longToNumber(
            reader.int64() as Long
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<GlobalFirewallRule>): GlobalFirewallRule {
    const message = { ...baseGlobalFirewallRule } as GlobalFirewallRule;
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
    if (object.creatorId !== undefined && object.creatorId !== null) {
      message.creatorId = ID.fromPartial(object.creatorId);
    } else {
      message.creatorId = undefined;
    }
    if (object.cidr !== undefined && object.cidr !== null) {
      message.cidr = CIDR.fromPartial(object.cidr);
    } else {
      message.cidr = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (
      object.connectionRateLimitPerMin !== undefined &&
      object.connectionRateLimitPerMin !== null
    ) {
      message.connectionRateLimitPerMin = object.connectionRateLimitPerMin;
    } else {
      message.connectionRateLimitPerMin = 0;
    }
    return message;
  },
};

const baseGlobalFirewallRuleList: object = {};

export const GlobalFirewallRuleList = {
  encode(
    message: GlobalFirewallRuleList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rules) {
      GlobalFirewallRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GlobalFirewallRuleList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGlobalFirewallRuleList } as GlobalFirewallRuleList;
    message.rules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rules.push(
            GlobalFirewallRule.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<GlobalFirewallRuleList>
  ): GlobalFirewallRuleList {
    const message = { ...baseGlobalFirewallRuleList } as GlobalFirewallRuleList;
    message.rules = [];
    if (object.rules !== undefined && object.rules !== null) {
      for (const e of object.rules) {
        message.rules.push(GlobalFirewallRule.fromPartial(e));
      }
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
