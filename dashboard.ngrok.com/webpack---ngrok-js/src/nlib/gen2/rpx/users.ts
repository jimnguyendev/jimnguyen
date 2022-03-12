// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { User } from "../rpx/model";
import { BrowserHeaders } from "browser-headers";
import { IdentitiesCreateReq } from "../rpx/identities";
import { OptString, ID } from "../pb/types";
import { Account } from "../rpx/model_account";

export const protobufPackage = "rpx";

export interface UsersCreateReq {
  /** name of the user to create */
  name: string;
  /** email of the user to create */
  email: string;
  /** the login identity to use for authenticating (password, oauth) */
  identReq: IdentitiesCreateReq | undefined;
  /**
   * optional: token of an invitation to accept to join an account.
   * if present and the invitation is invalid the entire operation will
   * fail.
   */
  invitationToken: OptString | undefined;
  /**
   * do not create an account for this user, even if they were not added
   * to any accounts. for development tooling only.
   */
  noCreateAccount: boolean;
  /** mark this user as already having their email address verified */
  verifiedEmail: boolean;
}

export interface UsersCreateResp {
  /** the created user object */
  user: User | undefined;
  /**
   * the created account object. this may be nil only if the caller specifies
   * the no_create_account parameter
   */
  account: Account | undefined;
  /**
   * accounts this user was added to either by SSO autoprovisioning or
   * accepting an invitation
   */
  accountsJoined: Account[];
}

export interface UsersAuthReq {
  email: string;
  password: string;
}

export interface UsersSetNameReq {
  userId: ID | undefined;
  name: string;
}

export interface UsersSetEmailReq {
  userId: ID | undefined;
  email: string;
}

export interface UsersGetByAccountReq {
  accountId: ID | undefined;
}

export interface UsersGetByAccountResp {
  users: User[];
}

export interface UsersGetByEmailReq {
  email: string;
}

export interface UsersSearchReq {
  query: string;
}

export interface UsersSearchResp {
  users: User[];
}

export interface UsersGetByIDReq {
  id: ID | undefined;
}

export interface UsersGetByLegacyIDReq {
  id: number;
}

export interface UsersDeleteReq {
  id: ID | undefined;
}

const baseUsersCreateReq: object = {
  name: "",
  email: "",
  noCreateAccount: false,
  verifiedEmail: false,
};

export const UsersCreateReq = {
  encode(
    message: UsersCreateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.identReq !== undefined) {
      IdentitiesCreateReq.encode(
        message.identReq,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.invitationToken !== undefined) {
      OptString.encode(
        message.invitationToken,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.noCreateAccount === true) {
      writer.uint32(40).bool(message.noCreateAccount);
    }
    if (message.verifiedEmail === true) {
      writer.uint32(48).bool(message.verifiedEmail);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsersCreateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUsersCreateReq } as UsersCreateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.identReq = IdentitiesCreateReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.invitationToken = OptString.decode(reader, reader.uint32());
          break;
        case 5:
          message.noCreateAccount = reader.bool();
          break;
        case 6:
          message.verifiedEmail = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<UsersCreateReq>): UsersCreateReq {
    const message = { ...baseUsersCreateReq } as UsersCreateReq;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.identReq !== undefined && object.identReq !== null) {
      message.identReq = IdentitiesCreateReq.fromPartial(object.identReq);
    } else {
      message.identReq = undefined;
    }
    if (
      object.invitationToken !== undefined &&
      object.invitationToken !== null
    ) {
      message.invitationToken = OptString.fromPartial(object.invitationToken);
    } else {
      message.invitationToken = undefined;
    }
    if (
      object.noCreateAccount !== undefined &&
      object.noCreateAccount !== null
    ) {
      message.noCreateAccount = object.noCreateAccount;
    } else {
      message.noCreateAccount = false;
    }
    if (object.verifiedEmail !== undefined && object.verifiedEmail !== null) {
      message.verifiedEmail = object.verifiedEmail;
    } else {
      message.verifiedEmail = false;
    }
    return message;
  },
};

const baseUsersCreateResp: object = {};

export const UsersCreateResp = {
  encode(
    message: UsersCreateResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.account !== undefined) {
      Account.encode(message.account, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.accountsJoined) {
      Account.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsersCreateResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUsersCreateResp } as UsersCreateResp;
    message.accountsJoined = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 2:
          message.account = Account.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountsJoined.push(Account.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<UsersCreateResp>): UsersCreateResp {
    const message = { ...baseUsersCreateResp } as UsersCreateResp;
    message.accountsJoined = [];
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
    if (object.accountsJoined !== undefined && object.accountsJoined !== null) {
      for (const e of object.accountsJoined) {
        message.accountsJoined.push(Account.fromPartial(e));
      }
    }
    return message;
  },
};

const baseUsersAuthReq: object = { email: "", password: "" };

export const UsersAuthReq = {
  encode(
    message: UsersAuthReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsersAuthReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUsersAuthReq } as UsersAuthReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<UsersAuthReq>): UsersAuthReq {
    const message = { ...baseUsersAuthReq } as UsersAuthReq;
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    } else {
      message.password = "";
    }
    return message;
  },
};

const baseUsersSetNameReq: object = { name: "" };

export const UsersSetNameReq = {
  encode(
    message: UsersSetNameReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsersSetNameReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUsersSetNameReq } as UsersSetNameReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<UsersSetNameReq>): UsersSetNameReq {
    const message = { ...baseUsersSetNameReq } as UsersSetNameReq;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseUsersSetEmailReq: object = { email: "" };

export const UsersSetEmailReq = {
  encode(
    message: UsersSetEmailReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(10).fork()).ldelim();
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsersSetEmailReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUsersSetEmailReq } as UsersSetEmailReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.email = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<UsersSetEmailReq>): UsersSetEmailReq {
    const message = { ...baseUsersSetEmailReq } as UsersSetEmailReq;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    return message;
  },
};

const baseUsersGetByAccountReq: object = {};

export const UsersGetByAccountReq = {
  encode(
    message: UsersGetByAccountReq,
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
  ): UsersGetByAccountReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUsersGetByAccountReq } as UsersGetByAccountReq;
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

  fromPartial(object: DeepPartial<UsersGetByAccountReq>): UsersGetByAccountReq {
    const message = { ...baseUsersGetByAccountReq } as UsersGetByAccountReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    return message;
  },
};

const baseUsersGetByAccountResp: object = {};

export const UsersGetByAccountResp = {
  encode(
    message: UsersGetByAccountResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UsersGetByAccountResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUsersGetByAccountResp } as UsersGetByAccountResp;
    message.users = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users.push(User.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<UsersGetByAccountResp>
  ): UsersGetByAccountResp {
    const message = { ...baseUsersGetByAccountResp } as UsersGetByAccountResp;
    message.users = [];
    if (object.users !== undefined && object.users !== null) {
      for (const e of object.users) {
        message.users.push(User.fromPartial(e));
      }
    }
    return message;
  },
};

const baseUsersGetByEmailReq: object = { email: "" };

export const UsersGetByEmailReq = {
  encode(
    message: UsersGetByEmailReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsersGetByEmailReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUsersGetByEmailReq } as UsersGetByEmailReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<UsersGetByEmailReq>): UsersGetByEmailReq {
    const message = { ...baseUsersGetByEmailReq } as UsersGetByEmailReq;
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    return message;
  },
};

const baseUsersSearchReq: object = { query: "" };

export const UsersSearchReq = {
  encode(
    message: UsersSearchReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.query !== "") {
      writer.uint32(10).string(message.query);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsersSearchReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUsersSearchReq } as UsersSearchReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.query = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<UsersSearchReq>): UsersSearchReq {
    const message = { ...baseUsersSearchReq } as UsersSearchReq;
    if (object.query !== undefined && object.query !== null) {
      message.query = object.query;
    } else {
      message.query = "";
    }
    return message;
  },
};

const baseUsersSearchResp: object = {};

export const UsersSearchResp = {
  encode(
    message: UsersSearchResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsersSearchResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUsersSearchResp } as UsersSearchResp;
    message.users = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users.push(User.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<UsersSearchResp>): UsersSearchResp {
    const message = { ...baseUsersSearchResp } as UsersSearchResp;
    message.users = [];
    if (object.users !== undefined && object.users !== null) {
      for (const e of object.users) {
        message.users.push(User.fromPartial(e));
      }
    }
    return message;
  },
};

const baseUsersGetByIDReq: object = {};

export const UsersGetByIDReq = {
  encode(
    message: UsersGetByIDReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsersGetByIDReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUsersGetByIDReq } as UsersGetByIDReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<UsersGetByIDReq>): UsersGetByIDReq {
    const message = { ...baseUsersGetByIDReq } as UsersGetByIDReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

const baseUsersGetByLegacyIDReq: object = { id: 0 };

export const UsersGetByLegacyIDReq = {
  encode(
    message: UsersGetByLegacyIDReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UsersGetByLegacyIDReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUsersGetByLegacyIDReq } as UsersGetByLegacyIDReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<UsersGetByLegacyIDReq>
  ): UsersGetByLegacyIDReq {
    const message = { ...baseUsersGetByLegacyIDReq } as UsersGetByLegacyIDReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseUsersDeleteReq: object = {};

export const UsersDeleteReq = {
  encode(
    message: UsersDeleteReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsersDeleteReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUsersDeleteReq } as UsersDeleteReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<UsersDeleteReq>): UsersDeleteReq {
    const message = { ...baseUsersDeleteReq } as UsersDeleteReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

/**
 * -------------------
 * Users
 * -------------------
 */
export interface Users {
  /**
   * Auth checks an email/password tuple for proper authentication. If the
   * combination is valid, it returns the User object that the email/password
   * belongs with. Otherwise it returns a user-facing error.
   */
  Auth(
    request: DeepPartial<UsersAuthReq>,
    metadata?: grpc.Metadata
  ): Promise<User>;
  /**
   * Creates a new user object in the system.
   *
   * By default, this will also create an Account object as well which the user
   * will be th sole administrator of. This account creation does not happen in
   * two cases:
   * 1. If the user accepts an invitation to join an existing account
   * 2. It the user used SSO and was added to an account via SSO auto-provisioning
   *
   * We don't create a separate account in the above two cases because we used
   * to and it created too much confusion with users who didn't understand the
   * difference between their "personal" account and the account(s) that they were
   * joined to.
   *
   * Development tooling may specify the no_account parameter to request that
   * an account is not created for the user under any circumstance. This can
   * helpful for local testing.
   */
  Create(
    request: DeepPartial<UsersCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<UsersCreateResp>;
  /** SetName updates the user's name. */
  SetName(
    request: DeepPartial<UsersSetNameReq>,
    metadata?: grpc.Metadata
  ): Promise<User>;
  /** SetEmail updates the user's email address. */
  SetEmail(
    request: DeepPartial<UsersSetEmailReq>,
    metadata?: grpc.Metadata
  ): Promise<User>;
  /** GetByAccount returns all users who are members of a given account. */
  GetByAccount(
    request: DeepPartial<UsersGetByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<UsersGetByAccountResp>;
  /**
   * GetByEmail returns the user object with the given email or not found if no
   * user exists with that email. The email is queried with a case-insensitive
   * match.
   */
  GetByEmail(
    request: DeepPartial<UsersGetByEmailReq>,
    metadata?: grpc.Metadata
  ): Promise<User>;
  /**
   * Given a query string, search for any users who might match it. The
   * behavior of the search function is subject to change over time. At the time of writing,
   * it tries the following:
   * - if the query string can be coerced to an integer, find a user with the
   *   given integer id
   * - if the query string is a KSUID, find a user with the given ID
   * - otherwise, look for any partial string matches of the query string in
   *   the user's name or email
   */
  Search(
    request: DeepPartial<UsersSearchReq>,
    metadata?: grpc.Metadata
  ): Promise<UsersSearchResp>;
  /** Returns the user with a given ID. */
  GetByID(
    request: DeepPartial<UsersGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<User>;
  /**
   * Returns the user with a given legacy int64 based ID. This
   * rpc is DEPRECATED. Do not use it.
   */
  GetByLegacyID(
    request: DeepPartial<UsersGetByLegacyIDReq>,
    metadata?: grpc.Metadata
  ): Promise<User>;
  /**
   * Deletes the given user and all accounts that they are the
   * sole administrator of.
   */
  Delete(
    request: DeepPartial<UsersDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<User>;
}

export class UsersClientImpl implements Users {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Auth = this.Auth.bind(this);
    this.Create = this.Create.bind(this);
    this.SetName = this.SetName.bind(this);
    this.SetEmail = this.SetEmail.bind(this);
    this.GetByAccount = this.GetByAccount.bind(this);
    this.GetByEmail = this.GetByEmail.bind(this);
    this.Search = this.Search.bind(this);
    this.GetByID = this.GetByID.bind(this);
    this.GetByLegacyID = this.GetByLegacyID.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  Auth(
    request: DeepPartial<UsersAuthReq>,
    metadata?: grpc.Metadata
  ): Promise<User> {
    return this.rpc.unary(
      UsersAuthDesc,
      UsersAuthReq.fromPartial(request),
      metadata
    );
  }

  Create(
    request: DeepPartial<UsersCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<UsersCreateResp> {
    return this.rpc.unary(
      UsersCreateDesc,
      UsersCreateReq.fromPartial(request),
      metadata
    );
  }

  SetName(
    request: DeepPartial<UsersSetNameReq>,
    metadata?: grpc.Metadata
  ): Promise<User> {
    return this.rpc.unary(
      UsersSetNameDesc,
      UsersSetNameReq.fromPartial(request),
      metadata
    );
  }

  SetEmail(
    request: DeepPartial<UsersSetEmailReq>,
    metadata?: grpc.Metadata
  ): Promise<User> {
    return this.rpc.unary(
      UsersSetEmailDesc,
      UsersSetEmailReq.fromPartial(request),
      metadata
    );
  }

  GetByAccount(
    request: DeepPartial<UsersGetByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<UsersGetByAccountResp> {
    return this.rpc.unary(
      UsersGetByAccountDesc,
      UsersGetByAccountReq.fromPartial(request),
      metadata
    );
  }

  GetByEmail(
    request: DeepPartial<UsersGetByEmailReq>,
    metadata?: grpc.Metadata
  ): Promise<User> {
    return this.rpc.unary(
      UsersGetByEmailDesc,
      UsersGetByEmailReq.fromPartial(request),
      metadata
    );
  }

  Search(
    request: DeepPartial<UsersSearchReq>,
    metadata?: grpc.Metadata
  ): Promise<UsersSearchResp> {
    return this.rpc.unary(
      UsersSearchDesc,
      UsersSearchReq.fromPartial(request),
      metadata
    );
  }

  GetByID(
    request: DeepPartial<UsersGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<User> {
    return this.rpc.unary(
      UsersGetByIDDesc,
      UsersGetByIDReq.fromPartial(request),
      metadata
    );
  }

  GetByLegacyID(
    request: DeepPartial<UsersGetByLegacyIDReq>,
    metadata?: grpc.Metadata
  ): Promise<User> {
    return this.rpc.unary(
      UsersGetByLegacyIDDesc,
      UsersGetByLegacyIDReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<UsersDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<User> {
    return this.rpc.unary(
      UsersDeleteDesc,
      UsersDeleteReq.fromPartial(request),
      metadata
    );
  }
}

export const UsersDesc = {
  serviceName: "rpx.Users",
};

export const UsersAuthDesc: UnaryMethodDefinitionish = {
  methodName: "Auth",
  service: UsersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return UsersAuthReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...User.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const UsersCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: UsersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return UsersCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...UsersCreateResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const UsersSetNameDesc: UnaryMethodDefinitionish = {
  methodName: "SetName",
  service: UsersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return UsersSetNameReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...User.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const UsersSetEmailDesc: UnaryMethodDefinitionish = {
  methodName: "SetEmail",
  service: UsersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return UsersSetEmailReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...User.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const UsersGetByAccountDesc: UnaryMethodDefinitionish = {
  methodName: "GetByAccount",
  service: UsersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return UsersGetByAccountReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...UsersGetByAccountResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const UsersGetByEmailDesc: UnaryMethodDefinitionish = {
  methodName: "GetByEmail",
  service: UsersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return UsersGetByEmailReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...User.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const UsersSearchDesc: UnaryMethodDefinitionish = {
  methodName: "Search",
  service: UsersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return UsersSearchReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...UsersSearchResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const UsersGetByIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetByID",
  service: UsersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return UsersGetByIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...User.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const UsersGetByLegacyIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetByLegacyID",
  service: UsersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return UsersGetByLegacyIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...User.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const UsersDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: UsersDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return UsersDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...User.decode(data),
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
