// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import {
  Membership,
  MembershipUserTuple,
  MembershipPermissions,
} from "../rpx/model_membership";
import { Empty, ID } from "../pb/types";
import { BrowserHeaders } from "browser-headers";
import { Cred, User } from "../rpx/model";
import { Account } from "../rpx/model_account";

export const protobufPackage = "rpx";

export interface MembershipsGetLatestByAccountReq {
  accountId: ID | undefined;
}

export interface MembershipsGetLatestByAccountResp {
  tuples: MembershipUserTuple[];
}

export interface MembershipsCreateReq {
  userId: ID | undefined;
  accountId: ID | undefined;
  permissions: MembershipPermissions | undefined;
}

export interface MembershipsDeleteReq {
  memId: ID | undefined;
  accountId: ID | undefined;
}

export interface MembershipsRotateAuthtokenReq {
  memId: ID | undefined;
  accountId: ID | undefined;
}

export interface MembershipsRotateAuthtokenResp {
  mem: Membership | undefined;
  oldCred: Cred | undefined;
  newCred: Cred | undefined;
}

export interface MembershipsSetDefaultByUserReq {
  userId: ID | undefined;
  memId: ID | undefined;
}

export interface MembershipsGetDefaultByUserReq {
  userId: ID | undefined;
}

export interface MembershipsGetByUserAndAccountReq {
  userId: ID | undefined;
  accountId: ID | undefined;
}

export interface MembershipsGetByUserAndAccountResp {
  mem: Membership | undefined;
  user: User | undefined;
  account: Account | undefined;
}

export interface MembershipsSetPermissionsReq {
  id: ID | undefined;
  accountId: ID | undefined;
  permissions: MembershipPermissions | undefined;
}

export interface MembershipsSwapAdminReq {
  /** ID of the membership of the new account administrator */
  id: ID | undefined;
  /** Account ID on which to swap administrators */
  accountId: ID | undefined;
}

export interface MembershipsGetAdminsByAccountReq {
  accountId: ID | undefined;
}

export interface MembershipsGetAdminsByAccountResp {
  mems: Membership[];
}

const baseMembershipsGetLatestByAccountReq: object = {};

export const MembershipsGetLatestByAccountReq = {
  encode(
    message: MembershipsGetLatestByAccountReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MembershipsGetLatestByAccountReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMembershipsGetLatestByAccountReq,
    } as MembershipsGetLatestByAccountReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MembershipsGetLatestByAccountReq>
  ): MembershipsGetLatestByAccountReq {
    const message = {
      ...baseMembershipsGetLatestByAccountReq,
    } as MembershipsGetLatestByAccountReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    return message;
  },
};

const baseMembershipsGetLatestByAccountResp: object = {};

export const MembershipsGetLatestByAccountResp = {
  encode(
    message: MembershipsGetLatestByAccountResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tuples) {
      MembershipUserTuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MembershipsGetLatestByAccountResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMembershipsGetLatestByAccountResp,
    } as MembershipsGetLatestByAccountResp;
    message.tuples = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tuples.push(
            MembershipUserTuple.decode(reader, reader.uint32())
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
    object: DeepPartial<MembershipsGetLatestByAccountResp>
  ): MembershipsGetLatestByAccountResp {
    const message = {
      ...baseMembershipsGetLatestByAccountResp,
    } as MembershipsGetLatestByAccountResp;
    message.tuples = [];
    if (object.tuples !== undefined && object.tuples !== null) {
      for (const e of object.tuples) {
        message.tuples.push(MembershipUserTuple.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMembershipsCreateReq: object = {};

export const MembershipsCreateReq = {
  encode(
    message: MembershipsCreateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(26).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(34).fork()).ldelim();
    }
    if (message.permissions !== undefined) {
      MembershipPermissions.encode(
        message.permissions,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MembershipsCreateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMembershipsCreateReq } as MembershipsCreateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        case 4:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        case 5:
          message.permissions = MembershipPermissions.decode(
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

  fromPartial(object: DeepPartial<MembershipsCreateReq>): MembershipsCreateReq {
    const message = { ...baseMembershipsCreateReq } as MembershipsCreateReq;
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
    if (object.permissions !== undefined && object.permissions !== null) {
      message.permissions = MembershipPermissions.fromPartial(
        object.permissions
      );
    } else {
      message.permissions = undefined;
    }
    return message;
  },
};

const baseMembershipsDeleteReq: object = {};

export const MembershipsDeleteReq = {
  encode(
    message: MembershipsDeleteReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.memId !== undefined) {
      ID.encode(message.memId, writer.uint32(18).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MembershipsDeleteReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMembershipsDeleteReq } as MembershipsDeleteReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.memId = ID.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<MembershipsDeleteReq>): MembershipsDeleteReq {
    const message = { ...baseMembershipsDeleteReq } as MembershipsDeleteReq;
    if (object.memId !== undefined && object.memId !== null) {
      message.memId = ID.fromPartial(object.memId);
    } else {
      message.memId = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    return message;
  },
};

const baseMembershipsRotateAuthtokenReq: object = {};

export const MembershipsRotateAuthtokenReq = {
  encode(
    message: MembershipsRotateAuthtokenReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.memId !== undefined) {
      ID.encode(message.memId, writer.uint32(18).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MembershipsRotateAuthtokenReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMembershipsRotateAuthtokenReq,
    } as MembershipsRotateAuthtokenReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.memId = ID.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MembershipsRotateAuthtokenReq>
  ): MembershipsRotateAuthtokenReq {
    const message = {
      ...baseMembershipsRotateAuthtokenReq,
    } as MembershipsRotateAuthtokenReq;
    if (object.memId !== undefined && object.memId !== null) {
      message.memId = ID.fromPartial(object.memId);
    } else {
      message.memId = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    return message;
  },
};

const baseMembershipsRotateAuthtokenResp: object = {};

export const MembershipsRotateAuthtokenResp = {
  encode(
    message: MembershipsRotateAuthtokenResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mem !== undefined) {
      Membership.encode(message.mem, writer.uint32(10).fork()).ldelim();
    }
    if (message.oldCred !== undefined) {
      Cred.encode(message.oldCred, writer.uint32(18).fork()).ldelim();
    }
    if (message.newCred !== undefined) {
      Cred.encode(message.newCred, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MembershipsRotateAuthtokenResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMembershipsRotateAuthtokenResp,
    } as MembershipsRotateAuthtokenResp;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mem = Membership.decode(reader, reader.uint32());
          break;
        case 2:
          message.oldCred = Cred.decode(reader, reader.uint32());
          break;
        case 3:
          message.newCred = Cred.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MembershipsRotateAuthtokenResp>
  ): MembershipsRotateAuthtokenResp {
    const message = {
      ...baseMembershipsRotateAuthtokenResp,
    } as MembershipsRotateAuthtokenResp;
    if (object.mem !== undefined && object.mem !== null) {
      message.mem = Membership.fromPartial(object.mem);
    } else {
      message.mem = undefined;
    }
    if (object.oldCred !== undefined && object.oldCred !== null) {
      message.oldCred = Cred.fromPartial(object.oldCred);
    } else {
      message.oldCred = undefined;
    }
    if (object.newCred !== undefined && object.newCred !== null) {
      message.newCred = Cred.fromPartial(object.newCred);
    } else {
      message.newCred = undefined;
    }
    return message;
  },
};

const baseMembershipsSetDefaultByUserReq: object = {};

export const MembershipsSetDefaultByUserReq = {
  encode(
    message: MembershipsSetDefaultByUserReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(26).fork()).ldelim();
    }
    if (message.memId !== undefined) {
      ID.encode(message.memId, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MembershipsSetDefaultByUserReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMembershipsSetDefaultByUserReq,
    } as MembershipsSetDefaultByUserReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        case 4:
          message.memId = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MembershipsSetDefaultByUserReq>
  ): MembershipsSetDefaultByUserReq {
    const message = {
      ...baseMembershipsSetDefaultByUserReq,
    } as MembershipsSetDefaultByUserReq;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    if (object.memId !== undefined && object.memId !== null) {
      message.memId = ID.fromPartial(object.memId);
    } else {
      message.memId = undefined;
    }
    return message;
  },
};

const baseMembershipsGetDefaultByUserReq: object = {};

export const MembershipsGetDefaultByUserReq = {
  encode(
    message: MembershipsGetDefaultByUserReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MembershipsGetDefaultByUserReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMembershipsGetDefaultByUserReq,
    } as MembershipsGetDefaultByUserReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MembershipsGetDefaultByUserReq>
  ): MembershipsGetDefaultByUserReq {
    const message = {
      ...baseMembershipsGetDefaultByUserReq,
    } as MembershipsGetDefaultByUserReq;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    return message;
  },
};

const baseMembershipsGetByUserAndAccountReq: object = {};

export const MembershipsGetByUserAndAccountReq = {
  encode(
    message: MembershipsGetByUserAndAccountReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(26).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MembershipsGetByUserAndAccountReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMembershipsGetByUserAndAccountReq,
    } as MembershipsGetByUserAndAccountReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        case 4:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MembershipsGetByUserAndAccountReq>
  ): MembershipsGetByUserAndAccountReq {
    const message = {
      ...baseMembershipsGetByUserAndAccountReq,
    } as MembershipsGetByUserAndAccountReq;
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
    return message;
  },
};

const baseMembershipsGetByUserAndAccountResp: object = {};

export const MembershipsGetByUserAndAccountResp = {
  encode(
    message: MembershipsGetByUserAndAccountResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mem !== undefined) {
      Membership.encode(message.mem, writer.uint32(10).fork()).ldelim();
    }
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(18).fork()).ldelim();
    }
    if (message.account !== undefined) {
      Account.encode(message.account, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MembershipsGetByUserAndAccountResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMembershipsGetByUserAndAccountResp,
    } as MembershipsGetByUserAndAccountResp;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mem = Membership.decode(reader, reader.uint32());
          break;
        case 2:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 3:
          message.account = Account.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MembershipsGetByUserAndAccountResp>
  ): MembershipsGetByUserAndAccountResp {
    const message = {
      ...baseMembershipsGetByUserAndAccountResp,
    } as MembershipsGetByUserAndAccountResp;
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
    if (object.account !== undefined && object.account !== null) {
      message.account = Account.fromPartial(object.account);
    } else {
      message.account = undefined;
    }
    return message;
  },
};

const baseMembershipsSetPermissionsReq: object = {};

export const MembershipsSetPermissionsReq = {
  encode(
    message: MembershipsSetPermissionsReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(18).fork()).ldelim();
    }
    if (message.permissions !== undefined) {
      MembershipPermissions.encode(
        message.permissions,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MembershipsSetPermissionsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMembershipsSetPermissionsReq,
    } as MembershipsSetPermissionsReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        case 3:
          message.permissions = MembershipPermissions.decode(
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

  fromPartial(
    object: DeepPartial<MembershipsSetPermissionsReq>
  ): MembershipsSetPermissionsReq {
    const message = {
      ...baseMembershipsSetPermissionsReq,
    } as MembershipsSetPermissionsReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    if (object.permissions !== undefined && object.permissions !== null) {
      message.permissions = MembershipPermissions.fromPartial(
        object.permissions
      );
    } else {
      message.permissions = undefined;
    }
    return message;
  },
};

const baseMembershipsSwapAdminReq: object = {};

export const MembershipsSwapAdminReq = {
  encode(
    message: MembershipsSwapAdminReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MembershipsSwapAdminReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMembershipsSwapAdminReq,
    } as MembershipsSwapAdminReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MembershipsSwapAdminReq>
  ): MembershipsSwapAdminReq {
    const message = {
      ...baseMembershipsSwapAdminReq,
    } as MembershipsSwapAdminReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    return message;
  },
};

const baseMembershipsGetAdminsByAccountReq: object = {};

export const MembershipsGetAdminsByAccountReq = {
  encode(
    message: MembershipsGetAdminsByAccountReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MembershipsGetAdminsByAccountReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMembershipsGetAdminsByAccountReq,
    } as MembershipsGetAdminsByAccountReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MembershipsGetAdminsByAccountReq>
  ): MembershipsGetAdminsByAccountReq {
    const message = {
      ...baseMembershipsGetAdminsByAccountReq,
    } as MembershipsGetAdminsByAccountReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    return message;
  },
};

const baseMembershipsGetAdminsByAccountResp: object = {};

export const MembershipsGetAdminsByAccountResp = {
  encode(
    message: MembershipsGetAdminsByAccountResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.mems) {
      Membership.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MembershipsGetAdminsByAccountResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMembershipsGetAdminsByAccountResp,
    } as MembershipsGetAdminsByAccountResp;
    message.mems = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mems.push(Membership.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<MembershipsGetAdminsByAccountResp>
  ): MembershipsGetAdminsByAccountResp {
    const message = {
      ...baseMembershipsGetAdminsByAccountResp,
    } as MembershipsGetAdminsByAccountResp;
    message.mems = [];
    if (object.mems !== undefined && object.mems !== null) {
      for (const e of object.mems) {
        message.mems.push(Membership.fromPartial(e));
      }
    }
    return message;
  },
};

/**
 * -------------------
 * Memberships
 * -------------------
 */
export interface Memberships {
  Create(
    request: DeepPartial<MembershipsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Membership>;
  Delete(
    request: DeepPartial<MembershipsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Membership>;
  SetPermissions(
    request: DeepPartial<MembershipsSetPermissionsReq>,
    metadata?: grpc.Metadata
  ): Promise<Membership>;
  RotateAuthtoken(
    request: DeepPartial<MembershipsRotateAuthtokenReq>,
    metadata?: grpc.Metadata
  ): Promise<MembershipsRotateAuthtokenResp>;
  SetDefaultByUser(
    request: DeepPartial<MembershipsSetDefaultByUserReq>,
    metadata?: grpc.Metadata
  ): Promise<Membership>;
  GetDefaultByUser(
    request: DeepPartial<MembershipsGetDefaultByUserReq>,
    metadata?: grpc.Metadata
  ): Promise<Membership>;
  GetByUserAndAccount(
    request: DeepPartial<MembershipsGetByUserAndAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<MembershipsGetByUserAndAccountResp>;
  GetLatestByAccount(
    request: DeepPartial<MembershipsGetLatestByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<MembershipsGetLatestByAccountResp>;
  GetAdminsByAccount(
    request: DeepPartial<MembershipsGetAdminsByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<MembershipsGetAdminsByAccountResp>;
  /**
   * SwapAdmin atomically moves the account administrator from the current
   * account administrator to a new account administrator. This operation is
   * only needed by accounts that do not support RBAC.
   */
  SwapAdmin(
    request: DeepPartial<MembershipsSwapAdminReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
}

export class MembershipsClientImpl implements Memberships {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Delete = this.Delete.bind(this);
    this.SetPermissions = this.SetPermissions.bind(this);
    this.RotateAuthtoken = this.RotateAuthtoken.bind(this);
    this.SetDefaultByUser = this.SetDefaultByUser.bind(this);
    this.GetDefaultByUser = this.GetDefaultByUser.bind(this);
    this.GetByUserAndAccount = this.GetByUserAndAccount.bind(this);
    this.GetLatestByAccount = this.GetLatestByAccount.bind(this);
    this.GetAdminsByAccount = this.GetAdminsByAccount.bind(this);
    this.SwapAdmin = this.SwapAdmin.bind(this);
  }

  Create(
    request: DeepPartial<MembershipsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Membership> {
    return this.rpc.unary(
      MembershipsCreateDesc,
      MembershipsCreateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<MembershipsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Membership> {
    return this.rpc.unary(
      MembershipsDeleteDesc,
      MembershipsDeleteReq.fromPartial(request),
      metadata
    );
  }

  SetPermissions(
    request: DeepPartial<MembershipsSetPermissionsReq>,
    metadata?: grpc.Metadata
  ): Promise<Membership> {
    return this.rpc.unary(
      MembershipsSetPermissionsDesc,
      MembershipsSetPermissionsReq.fromPartial(request),
      metadata
    );
  }

  RotateAuthtoken(
    request: DeepPartial<MembershipsRotateAuthtokenReq>,
    metadata?: grpc.Metadata
  ): Promise<MembershipsRotateAuthtokenResp> {
    return this.rpc.unary(
      MembershipsRotateAuthtokenDesc,
      MembershipsRotateAuthtokenReq.fromPartial(request),
      metadata
    );
  }

  SetDefaultByUser(
    request: DeepPartial<MembershipsSetDefaultByUserReq>,
    metadata?: grpc.Metadata
  ): Promise<Membership> {
    return this.rpc.unary(
      MembershipsSetDefaultByUserDesc,
      MembershipsSetDefaultByUserReq.fromPartial(request),
      metadata
    );
  }

  GetDefaultByUser(
    request: DeepPartial<MembershipsGetDefaultByUserReq>,
    metadata?: grpc.Metadata
  ): Promise<Membership> {
    return this.rpc.unary(
      MembershipsGetDefaultByUserDesc,
      MembershipsGetDefaultByUserReq.fromPartial(request),
      metadata
    );
  }

  GetByUserAndAccount(
    request: DeepPartial<MembershipsGetByUserAndAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<MembershipsGetByUserAndAccountResp> {
    return this.rpc.unary(
      MembershipsGetByUserAndAccountDesc,
      MembershipsGetByUserAndAccountReq.fromPartial(request),
      metadata
    );
  }

  GetLatestByAccount(
    request: DeepPartial<MembershipsGetLatestByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<MembershipsGetLatestByAccountResp> {
    return this.rpc.unary(
      MembershipsGetLatestByAccountDesc,
      MembershipsGetLatestByAccountReq.fromPartial(request),
      metadata
    );
  }

  GetAdminsByAccount(
    request: DeepPartial<MembershipsGetAdminsByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<MembershipsGetAdminsByAccountResp> {
    return this.rpc.unary(
      MembershipsGetAdminsByAccountDesc,
      MembershipsGetAdminsByAccountReq.fromPartial(request),
      metadata
    );
  }

  SwapAdmin(
    request: DeepPartial<MembershipsSwapAdminReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      MembershipsSwapAdminDesc,
      MembershipsSwapAdminReq.fromPartial(request),
      metadata
    );
  }
}

export const MembershipsDesc = {
  serviceName: "rpx.Memberships",
};

export const MembershipsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: MembershipsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MembershipsCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Membership.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MembershipsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: MembershipsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MembershipsDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Membership.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MembershipsSetPermissionsDesc: UnaryMethodDefinitionish = {
  methodName: "SetPermissions",
  service: MembershipsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MembershipsSetPermissionsReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Membership.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MembershipsRotateAuthtokenDesc: UnaryMethodDefinitionish = {
  methodName: "RotateAuthtoken",
  service: MembershipsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MembershipsRotateAuthtokenReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MembershipsRotateAuthtokenResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MembershipsSetDefaultByUserDesc: UnaryMethodDefinitionish = {
  methodName: "SetDefaultByUser",
  service: MembershipsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MembershipsSetDefaultByUserReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Membership.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MembershipsGetDefaultByUserDesc: UnaryMethodDefinitionish = {
  methodName: "GetDefaultByUser",
  service: MembershipsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MembershipsGetDefaultByUserReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Membership.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MembershipsGetByUserAndAccountDesc: UnaryMethodDefinitionish = {
  methodName: "GetByUserAndAccount",
  service: MembershipsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MembershipsGetByUserAndAccountReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MembershipsGetByUserAndAccountResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MembershipsGetLatestByAccountDesc: UnaryMethodDefinitionish = {
  methodName: "GetLatestByAccount",
  service: MembershipsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MembershipsGetLatestByAccountReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MembershipsGetLatestByAccountResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MembershipsGetAdminsByAccountDesc: UnaryMethodDefinitionish = {
  methodName: "GetAdminsByAccount",
  service: MembershipsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MembershipsGetAdminsByAccountReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MembershipsGetAdminsByAccountResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MembershipsSwapAdminDesc: UnaryMethodDefinitionish = {
  methodName: "SwapAdmin",
  service: MembershipsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MembershipsSwapAdminReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR
  extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
    }
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
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
