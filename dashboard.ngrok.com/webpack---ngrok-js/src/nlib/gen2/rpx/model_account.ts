// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PaymentStatus, BillingPlan } from "../rpx/model";
import { Timestamp, ID } from "../pb/types";

export const protobufPackage = "rpx";

export interface Account {
  /** true if the account is suspended for violation of the terms of service. */
  suspended: boolean;
  /** payment status of the account, including whether the account is suspended pending non-payment */
  paymentStatus: PaymentStatus;
  /** name of the account */
  name: string;
  /** legacy integer account id; use ksuid instead */
  id: number;
  /** name/id of the current account's billing plan */
  plan: BillingPlan | undefined;
  /**
   * if this domain is not the empty string, then when a new user signs up for
   * ngrok via Google OAuth, if their email address ends with the
   */
  googleAppsDomain: string;
  /** timestamp when the account was created */
  createdAt: Timestamp | undefined;
  /** reference to the identifier of the `customer` billing table */
  customerSid: string;
  /** the unique account ID */
  ksuid: ID | undefined;
  /**
   * minimum version acceptable in the `ngrok-version` header of for requests
   * to api.ngrok.com. if `0`, the header can be omittted entirely.
   */
  minApiVersion: number;
  /**
   * minimum version of the ngrok agent this account is permitted to start, not
   * currently enforced
   */
  minAgentVersion: string;
  /**
   * if true, this account will be restricted from serving traffic until its
   * admin confirms their email address
   */
  needsAdminEmailVerified: boolean;
}

const baseAccount: object = {
  suspended: false,
  paymentStatus: 0,
  name: "",
  id: 0,
  googleAppsDomain: "",
  customerSid: "",
  minApiVersion: 0,
  minAgentVersion: "",
  needsAdminEmailVerified: false,
};

export const Account = {
  encode(
    message: Account,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.suspended === true) {
      writer.uint32(8).bool(message.suspended);
    }
    if (message.paymentStatus !== 0) {
      writer.uint32(440).int32(message.paymentStatus);
    }
    if (message.name !== "") {
      writer.uint32(74).string(message.name);
    }
    if (message.id !== 0) {
      writer.uint32(80).int64(message.id);
    }
    if (message.plan !== undefined) {
      BillingPlan.encode(message.plan, writer.uint32(106).fork()).ldelim();
    }
    if (message.googleAppsDomain !== "") {
      writer.uint32(210).string(message.googleAppsDomain);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(242).fork()).ldelim();
    }
    if (message.customerSid !== "") {
      writer.uint32(298).string(message.customerSid);
    }
    if (message.ksuid !== undefined) {
      ID.encode(message.ksuid, writer.uint32(418).fork()).ldelim();
    }
    if (message.minApiVersion !== 0) {
      writer.uint32(424).int64(message.minApiVersion);
    }
    if (message.minAgentVersion !== "") {
      writer.uint32(458).string(message.minAgentVersion);
    }
    if (message.needsAdminEmailVerified === true) {
      writer.uint32(464).bool(message.needsAdminEmailVerified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccount } as Account;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.suspended = reader.bool();
          break;
        case 55:
          message.paymentStatus = reader.int32() as any;
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.plan = BillingPlan.decode(reader, reader.uint32());
          break;
        case 26:
          message.googleAppsDomain = reader.string();
          break;
        case 30:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 37:
          message.customerSid = reader.string();
          break;
        case 52:
          message.ksuid = ID.decode(reader, reader.uint32());
          break;
        case 53:
          message.minApiVersion = longToNumber(reader.int64() as Long);
          break;
        case 57:
          message.minAgentVersion = reader.string();
          break;
        case 58:
          message.needsAdminEmailVerified = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Account>): Account {
    const message = { ...baseAccount } as Account;
    if (object.suspended !== undefined && object.suspended !== null) {
      message.suspended = object.suspended;
    } else {
      message.suspended = false;
    }
    if (object.paymentStatus !== undefined && object.paymentStatus !== null) {
      message.paymentStatus = object.paymentStatus;
    } else {
      message.paymentStatus = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = BillingPlan.fromPartial(object.plan);
    } else {
      message.plan = undefined;
    }
    if (
      object.googleAppsDomain !== undefined &&
      object.googleAppsDomain !== null
    ) {
      message.googleAppsDomain = object.googleAppsDomain;
    } else {
      message.googleAppsDomain = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    if (object.ksuid !== undefined && object.ksuid !== null) {
      message.ksuid = ID.fromPartial(object.ksuid);
    } else {
      message.ksuid = undefined;
    }
    if (object.minApiVersion !== undefined && object.minApiVersion !== null) {
      message.minApiVersion = object.minApiVersion;
    } else {
      message.minApiVersion = 0;
    }
    if (
      object.minAgentVersion !== undefined &&
      object.minAgentVersion !== null
    ) {
      message.minAgentVersion = object.minAgentVersion;
    } else {
      message.minAgentVersion = "";
    }
    if (
      object.needsAdminEmailVerified !== undefined &&
      object.needsAdminEmailVerified !== null
    ) {
      message.needsAdminEmailVerified = object.needsAdminEmailVerified;
    } else {
      message.needsAdminEmailVerified = false;
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
