// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp, ID } from "../pb/types";
import { User } from "../rpx/model";

export const protobufPackage = "rpx";

export interface Membership {
  createdAt: Timestamp | undefined;
  id: ID | undefined;
  userId: ID | undefined;
  accountId: ID | undefined;
  credId: ID | undefined;
  permissions: MembershipPermissions | undefined;
  billingEmailSid: string;
}

export interface MembershipUserTuple {
  mem: Membership | undefined;
  user: User | undefined;
}

export interface MembershipPermissions {
  developer: MembershipPermissions_Developer;
  team: MembershipPermissions_Team;
  billing: MembershipPermissions_Billing;
  isAdmin: boolean;
}

export enum MembershipPermissions_Developer {
  DeveloperUndefined = 0,
  DeveloperReadOnly = 1,
  DeveloperReadWrite = 2,
}

export enum MembershipPermissions_Team {
  TeamUndefined = 0,
  TeamReadOnly = 1,
  TeamInvite = 2,
  TeamManage = 3,
}

export enum MembershipPermissions_Billing {
  BillingUndefined = 0,
  BillingNone = 1,
  BillingReadWrite = 2,
}

const baseMembership: object = { billingEmailSid: "" };

export const Membership = {
  encode(
    message: Membership,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(42).fork()).ldelim();
    }
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(50).fork()).ldelim();
    }
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(58).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(66).fork()).ldelim();
    }
    if (message.credId !== undefined) {
      ID.encode(message.credId, writer.uint32(74).fork()).ldelim();
    }
    if (message.permissions !== undefined) {
      MembershipPermissions.encode(
        message.permissions,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.billingEmailSid !== "") {
      writer.uint32(90).string(message.billingEmailSid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Membership {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMembership } as Membership;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 7:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        case 8:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        case 9:
          message.credId = ID.decode(reader, reader.uint32());
          break;
        case 10:
          message.permissions = MembershipPermissions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.billingEmailSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Membership>): Membership {
    const message = { ...baseMembership } as Membership;
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    if (object.credId !== undefined && object.credId !== null) {
      message.credId = ID.fromPartial(object.credId);
    } else {
      message.credId = undefined;
    }
    if (object.permissions !== undefined && object.permissions !== null) {
      message.permissions = MembershipPermissions.fromPartial(
        object.permissions
      );
    } else {
      message.permissions = undefined;
    }
    if (
      object.billingEmailSid !== undefined &&
      object.billingEmailSid !== null
    ) {
      message.billingEmailSid = object.billingEmailSid;
    } else {
      message.billingEmailSid = "";
    }
    return message;
  },
};

const baseMembershipUserTuple: object = {};

export const MembershipUserTuple = {
  encode(
    message: MembershipUserTuple,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mem !== undefined) {
      Membership.encode(message.mem, writer.uint32(10).fork()).ldelim();
    }
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MembershipUserTuple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMembershipUserTuple } as MembershipUserTuple;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mem = Membership.decode(reader, reader.uint32());
          break;
        case 2:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<MembershipUserTuple>): MembershipUserTuple {
    const message = { ...baseMembershipUserTuple } as MembershipUserTuple;
    if (object.mem !== undefined && object.mem !== null) {
      message.mem = Membership.fromPartial(object.mem);
    } else {
      message.mem = undefined;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },
};

const baseMembershipPermissions: object = {
  developer: 0,
  team: 0,
  billing: 0,
  isAdmin: false,
};

export const MembershipPermissions = {
  encode(
    message: MembershipPermissions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.developer !== 0) {
      writer.uint32(8).int32(message.developer);
    }
    if (message.team !== 0) {
      writer.uint32(16).int32(message.team);
    }
    if (message.billing !== 0) {
      writer.uint32(24).int32(message.billing);
    }
    if (message.isAdmin === true) {
      writer.uint32(32).bool(message.isAdmin);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MembershipPermissions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMembershipPermissions } as MembershipPermissions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.developer = reader.int32() as any;
          break;
        case 2:
          message.team = reader.int32() as any;
          break;
        case 3:
          message.billing = reader.int32() as any;
          break;
        case 4:
          message.isAdmin = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MembershipPermissions>
  ): MembershipPermissions {
    const message = { ...baseMembershipPermissions } as MembershipPermissions;
    if (object.developer !== undefined && object.developer !== null) {
      message.developer = object.developer;
    } else {
      message.developer = 0;
    }
    if (object.team !== undefined && object.team !== null) {
      message.team = object.team;
    } else {
      message.team = 0;
    }
    if (object.billing !== undefined && object.billing !== null) {
      message.billing = object.billing;
    } else {
      message.billing = 0;
    }
    if (object.isAdmin !== undefined && object.isAdmin !== null) {
      message.isAdmin = object.isAdmin;
    } else {
      message.isAdmin = false;
    }
    return message;
  },
};

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
