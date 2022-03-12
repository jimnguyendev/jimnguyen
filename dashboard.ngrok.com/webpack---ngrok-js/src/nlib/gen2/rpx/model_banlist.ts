// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../pb/types";
import { MachineID } from "../rpx/model";

export const protobufPackage = "rpx";

/**
 * Follows the banlist table columns. Intended for various
 * cross service requests for things like joins in aggregators.
 */
export interface BanlistEntry {
  id: number;
  createdAt: Timestamp | undefined;
  /** Null => "" */
  hostname: string;
  /** Null => "" */
  addr: string;
  /** Null => 0 */
  accountId: number;
  ref: string;
  machineId: MachineID | undefined;
}

export interface UserBanlistEntry {
  userId: number;
  reason: string;
  createdAt: Timestamp | undefined;
}

export interface HostnameBanlistEntry {
  hostname: string;
  reason: string;
  createdAt: Timestamp | undefined;
}

export interface IPBanlistEntry {
  ipNet: string;
  reason: string;
  createdAt: Timestamp | undefined;
}

export interface AccountBanlistEntry {
  accountId: number;
  reason: string;
  createdAt: Timestamp | undefined;
}

export interface MachineBanlistEntry {
  machineId: MachineID | undefined;
  reason: string;
  createdAt: Timestamp | undefined;
}

const baseBanlistEntry: object = {
  id: 0,
  hostname: "",
  addr: "",
  accountId: 0,
  ref: "",
};

export const BanlistEntry = {
  encode(
    message: BanlistEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(18).fork()).ldelim();
    }
    if (message.hostname !== "") {
      writer.uint32(26).string(message.hostname);
    }
    if (message.addr !== "") {
      writer.uint32(34).string(message.addr);
    }
    if (message.accountId !== 0) {
      writer.uint32(40).int64(message.accountId);
    }
    if (message.ref !== "") {
      writer.uint32(50).string(message.ref);
    }
    if (message.machineId !== undefined) {
      MachineID.encode(message.machineId, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BanlistEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBanlistEntry } as BanlistEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.hostname = reader.string();
          break;
        case 4:
          message.addr = reader.string();
          break;
        case 5:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.ref = reader.string();
          break;
        case 7:
          message.machineId = MachineID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<BanlistEntry>): BanlistEntry {
    const message = { ...baseBanlistEntry } as BanlistEntry;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.hostname !== undefined && object.hostname !== null) {
      message.hostname = object.hostname;
    } else {
      message.hostname = "";
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
    if (object.ref !== undefined && object.ref !== null) {
      message.ref = object.ref;
    } else {
      message.ref = "";
    }
    if (object.machineId !== undefined && object.machineId !== null) {
      message.machineId = MachineID.fromPartial(object.machineId);
    } else {
      message.machineId = undefined;
    }
    return message;
  },
};

const baseUserBanlistEntry: object = { userId: 0, reason: "" };

export const UserBanlistEntry = {
  encode(
    message: UserBanlistEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int64(message.userId);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserBanlistEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserBanlistEntry } as UserBanlistEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.reason = reader.string();
          break;
        case 3:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<UserBanlistEntry>): UserBanlistEntry {
    const message = { ...baseUserBanlistEntry } as UserBanlistEntry;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    } else {
      message.userId = 0;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    } else {
      message.reason = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    return message;
  },
};

const baseHostnameBanlistEntry: object = { hostname: "", reason: "" };

export const HostnameBanlistEntry = {
  encode(
    message: HostnameBanlistEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hostname !== "") {
      writer.uint32(10).string(message.hostname);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): HostnameBanlistEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHostnameBanlistEntry } as HostnameBanlistEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostname = reader.string();
          break;
        case 2:
          message.reason = reader.string();
          break;
        case 3:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<HostnameBanlistEntry>): HostnameBanlistEntry {
    const message = { ...baseHostnameBanlistEntry } as HostnameBanlistEntry;
    if (object.hostname !== undefined && object.hostname !== null) {
      message.hostname = object.hostname;
    } else {
      message.hostname = "";
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    } else {
      message.reason = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    return message;
  },
};

const baseIPBanlistEntry: object = { ipNet: "", reason: "" };

export const IPBanlistEntry = {
  encode(
    message: IPBanlistEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ipNet !== "") {
      writer.uint32(10).string(message.ipNet);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IPBanlistEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIPBanlistEntry } as IPBanlistEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ipNet = reader.string();
          break;
        case 2:
          message.reason = reader.string();
          break;
        case 3:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<IPBanlistEntry>): IPBanlistEntry {
    const message = { ...baseIPBanlistEntry } as IPBanlistEntry;
    if (object.ipNet !== undefined && object.ipNet !== null) {
      message.ipNet = object.ipNet;
    } else {
      message.ipNet = "";
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    } else {
      message.reason = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    return message;
  },
};

const baseAccountBanlistEntry: object = { accountId: 0, reason: "" };

export const AccountBanlistEntry = {
  encode(
    message: AccountBanlistEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).int64(message.accountId);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountBanlistEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountBanlistEntry } as AccountBanlistEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.reason = reader.string();
          break;
        case 3:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AccountBanlistEntry>): AccountBanlistEntry {
    const message = { ...baseAccountBanlistEntry } as AccountBanlistEntry;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    } else {
      message.reason = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    return message;
  },
};

const baseMachineBanlistEntry: object = { reason: "" };

export const MachineBanlistEntry = {
  encode(
    message: MachineBanlistEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.machineId !== undefined) {
      MachineID.encode(message.machineId, writer.uint32(10).fork()).ldelim();
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MachineBanlistEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMachineBanlistEntry } as MachineBanlistEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.machineId = MachineID.decode(reader, reader.uint32());
          break;
        case 2:
          message.reason = reader.string();
          break;
        case 3:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<MachineBanlistEntry>): MachineBanlistEntry {
    const message = { ...baseMachineBanlistEntry } as MachineBanlistEntry;
    if (object.machineId !== undefined && object.machineId !== null) {
      message.machineId = MachineID.fromPartial(object.machineId);
    } else {
      message.machineId = undefined;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    } else {
      message.reason = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
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
