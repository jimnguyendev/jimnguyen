// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ID, Timestamp } from "../pb/types";
import { MembershipPermissions } from "../rpx/model_membership";

export const protobufPackage = "rpx";

export interface Invitation {
  token: string;
  redeemerId: ID | undefined;
  inviterId: ID | undefined;
  accountId: ID | undefined;
  createdAt: Timestamp | undefined;
  expiresAt: Timestamp | undefined;
  redeemedAt: Timestamp | undefined;
  valid: boolean;
  invalidReason: string;
  email: string;
  id: ID | undefined;
  membershipPermissions: MembershipPermissions | undefined;
}

const baseInvitation: object = {
  token: "",
  valid: false,
  invalidReason: "",
  email: "",
};

export const Invitation = {
  encode(
    message: Invitation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    if (message.redeemerId !== undefined) {
      ID.encode(message.redeemerId, writer.uint32(106).fork()).ldelim();
    }
    if (message.inviterId !== undefined) {
      ID.encode(message.inviterId, writer.uint32(114).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(122).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(50).fork()).ldelim();
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(message.expiresAt, writer.uint32(58).fork()).ldelim();
    }
    if (message.redeemedAt !== undefined) {
      Timestamp.encode(message.redeemedAt, writer.uint32(66).fork()).ldelim();
    }
    if (message.valid === true) {
      writer.uint32(72).bool(message.valid);
    }
    if (message.invalidReason !== "") {
      writer.uint32(82).string(message.invalidReason);
    }
    if (message.email !== "") {
      writer.uint32(90).string(message.email);
    }
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(98).fork()).ldelim();
    }
    if (message.membershipPermissions !== undefined) {
      MembershipPermissions.encode(
        message.membershipPermissions,
        writer.uint32(130).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Invitation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInvitation } as Invitation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.token = reader.string();
          break;
        case 13:
          message.redeemerId = ID.decode(reader, reader.uint32());
          break;
        case 14:
          message.inviterId = ID.decode(reader, reader.uint32());
          break;
        case 15:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        case 6:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.expiresAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.redeemedAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.valid = reader.bool();
          break;
        case 10:
          message.invalidReason = reader.string();
          break;
        case 11:
          message.email = reader.string();
          break;
        case 12:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 16:
          message.membershipPermissions = MembershipPermissions.decode(
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

  fromPartial(object: DeepPartial<Invitation>): Invitation {
    const message = { ...baseInvitation } as Invitation;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.redeemerId !== undefined && object.redeemerId !== null) {
      message.redeemerId = ID.fromPartial(object.redeemerId);
    } else {
      message.redeemerId = undefined;
    }
    if (object.inviterId !== undefined && object.inviterId !== null) {
      message.inviterId = ID.fromPartial(object.inviterId);
    } else {
      message.inviterId = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
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
    if (object.redeemedAt !== undefined && object.redeemedAt !== null) {
      message.redeemedAt = Timestamp.fromPartial(object.redeemedAt);
    } else {
      message.redeemedAt = undefined;
    }
    if (object.valid !== undefined && object.valid !== null) {
      message.valid = object.valid;
    } else {
      message.valid = false;
    }
    if (object.invalidReason !== undefined && object.invalidReason !== null) {
      message.invalidReason = object.invalidReason;
    } else {
      message.invalidReason = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (
      object.membershipPermissions !== undefined &&
      object.membershipPermissions !== null
    ) {
      message.membershipPermissions = MembershipPermissions.fromPartial(
        object.membershipPermissions
      );
    } else {
      message.membershipPermissions = undefined;
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
