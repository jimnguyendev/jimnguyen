// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { PaymentStatus } from "../rpx/model";
import { Account } from "../rpx/model_account";
import { Empty, ID } from "../pb/types";
import { BrowserHeaders } from "browser-headers";
import { Flag_Type, Limit_Type } from "../rpx/model_plans";

export const protobufPackage = "rpx";

export interface AccountsCreateReq {
  /** Name of the account to create. */
  name: string;
  /** Initial administrator of the created account. */
  userId: ID | undefined;
}

export interface AccountsGetByUserReq {
  userId: ID | undefined;
}

export interface AccountsGetByUserResp {
  accounts: Account[];
}

export interface AccountsGetByAdminReq {
  userId: ID | undefined;
}

export interface AccountsGetByAdminResp {
  accounts: Account[];
}

export interface AccountsSetPlanReq {
  accountId: number;
  planId: string;
}

export interface AccountsSearchReq {
  query: string;
}

export interface AccountsSearchResp {
  accounts: Account[];
}

export interface AccountsGetByPlanReq {
  planId: string;
}

export interface AccountsGetByPlanResp {
  accounts: Account[];
}

export interface AccountsGetByCustomerSIDReq {
  customerSid: string;
}

export interface AccountsGetByStripeIDReq {
  stripeId: string;
}

export interface AccountsSetGoogleAppsDomainReq {
  accountId: number;
  domain: string;
}

export interface AccountsSetMinAPIVersionReq {
  accountId: number;
  minApiVersion: number;
}

export interface AccountsDeleteReq {
  id: number;
}

export interface AccountsSetNameReq {
  accountId: number;
  name: string;
}

export interface AccountsGetByIDReq {
  accountId: number;
}

export interface AccountsGetByKSUIDReq {
  accountKsuid: ID | undefined;
}

export interface AccountsSuspendReq {
  accountId: number;
}

export interface AccountsUnsuspendReq {
  accountId: number;
}

export interface AccountsSetPaymentStatusReq {
  accountId: number;
  paymentStatus: PaymentStatus;
}

export interface AccountsGetByIDsReq {
  accountIds: number[];
}

export interface AccountsGetByIDsResp {
  accounts: Account[];
}

export interface AccountsBanReq {
  accountId: number;
}

export interface AccountsUnbanReq {
  accountId: number;
}

export interface AccountsGetRestrictionsReq {
  accountIds: ID[];
  flags: Flag_Type[];
  allFlags: boolean;
  limits: Limit_Type[];
  allLimits: boolean;
  legacyAccountIds: number[];
}

export interface AccountsGetRestrictionsResp {
  accounts: AccountsGetRestrictionsResp_Account[];
  flags: Flag_Type[];
  limits: Limit_Type[];
}

export interface AccountsGetRestrictionsResp_Account {
  accountId: ID | undefined;
  flags: boolean[];
  limits: number[];
  legacyAccountId: number;
}

const baseAccountsCreateReq: object = { name: "" };

export const AccountsCreateReq = {
  encode(
    message: AccountsCreateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountsCreateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsCreateReq } as AccountsCreateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
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

  fromPartial(object: DeepPartial<AccountsCreateReq>): AccountsCreateReq {
    const message = { ...baseAccountsCreateReq } as AccountsCreateReq;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    return message;
  },
};

const baseAccountsGetByUserReq: object = {};

export const AccountsGetByUserReq = {
  encode(
    message: AccountsGetByUserReq,
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
  ): AccountsGetByUserReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsGetByUserReq } as AccountsGetByUserReq;
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

  fromPartial(object: DeepPartial<AccountsGetByUserReq>): AccountsGetByUserReq {
    const message = { ...baseAccountsGetByUserReq } as AccountsGetByUserReq;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    return message;
  },
};

const baseAccountsGetByUserResp: object = {};

export const AccountsGetByUserResp = {
  encode(
    message: AccountsGetByUserResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountsGetByUserResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsGetByUserResp } as AccountsGetByUserResp;
    message.accounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<AccountsGetByUserResp>
  ): AccountsGetByUserResp {
    const message = { ...baseAccountsGetByUserResp } as AccountsGetByUserResp;
    message.accounts = [];
    if (object.accounts !== undefined && object.accounts !== null) {
      for (const e of object.accounts) {
        message.accounts.push(Account.fromPartial(e));
      }
    }
    return message;
  },
};

const baseAccountsGetByAdminReq: object = {};

export const AccountsGetByAdminReq = {
  encode(
    message: AccountsGetByAdminReq,
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
  ): AccountsGetByAdminReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsGetByAdminReq } as AccountsGetByAdminReq;
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
    object: DeepPartial<AccountsGetByAdminReq>
  ): AccountsGetByAdminReq {
    const message = { ...baseAccountsGetByAdminReq } as AccountsGetByAdminReq;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    return message;
  },
};

const baseAccountsGetByAdminResp: object = {};

export const AccountsGetByAdminResp = {
  encode(
    message: AccountsGetByAdminResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountsGetByAdminResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsGetByAdminResp } as AccountsGetByAdminResp;
    message.accounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<AccountsGetByAdminResp>
  ): AccountsGetByAdminResp {
    const message = { ...baseAccountsGetByAdminResp } as AccountsGetByAdminResp;
    message.accounts = [];
    if (object.accounts !== undefined && object.accounts !== null) {
      for (const e of object.accounts) {
        message.accounts.push(Account.fromPartial(e));
      }
    }
    return message;
  },
};

const baseAccountsSetPlanReq: object = { accountId: 0, planId: "" };

export const AccountsSetPlanReq = {
  encode(
    message: AccountsSetPlanReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).int64(message.accountId);
    }
    if (message.planId !== "") {
      writer.uint32(18).string(message.planId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountsSetPlanReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsSetPlanReq } as AccountsSetPlanReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.planId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AccountsSetPlanReq>): AccountsSetPlanReq {
    const message = { ...baseAccountsSetPlanReq } as AccountsSetPlanReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.planId !== undefined && object.planId !== null) {
      message.planId = object.planId;
    } else {
      message.planId = "";
    }
    return message;
  },
};

const baseAccountsSearchReq: object = { query: "" };

export const AccountsSearchReq = {
  encode(
    message: AccountsSearchReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.query !== "") {
      writer.uint32(10).string(message.query);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountsSearchReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsSearchReq } as AccountsSearchReq;
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

  fromPartial(object: DeepPartial<AccountsSearchReq>): AccountsSearchReq {
    const message = { ...baseAccountsSearchReq } as AccountsSearchReq;
    if (object.query !== undefined && object.query !== null) {
      message.query = object.query;
    } else {
      message.query = "";
    }
    return message;
  },
};

const baseAccountsSearchResp: object = {};

export const AccountsSearchResp = {
  encode(
    message: AccountsSearchResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountsSearchResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsSearchResp } as AccountsSearchResp;
    message.accounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AccountsSearchResp>): AccountsSearchResp {
    const message = { ...baseAccountsSearchResp } as AccountsSearchResp;
    message.accounts = [];
    if (object.accounts !== undefined && object.accounts !== null) {
      for (const e of object.accounts) {
        message.accounts.push(Account.fromPartial(e));
      }
    }
    return message;
  },
};

const baseAccountsGetByPlanReq: object = { planId: "" };

export const AccountsGetByPlanReq = {
  encode(
    message: AccountsGetByPlanReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.planId !== "") {
      writer.uint32(10).string(message.planId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountsGetByPlanReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsGetByPlanReq } as AccountsGetByPlanReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.planId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AccountsGetByPlanReq>): AccountsGetByPlanReq {
    const message = { ...baseAccountsGetByPlanReq } as AccountsGetByPlanReq;
    if (object.planId !== undefined && object.planId !== null) {
      message.planId = object.planId;
    } else {
      message.planId = "";
    }
    return message;
  },
};

const baseAccountsGetByPlanResp: object = {};

export const AccountsGetByPlanResp = {
  encode(
    message: AccountsGetByPlanResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountsGetByPlanResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsGetByPlanResp } as AccountsGetByPlanResp;
    message.accounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<AccountsGetByPlanResp>
  ): AccountsGetByPlanResp {
    const message = { ...baseAccountsGetByPlanResp } as AccountsGetByPlanResp;
    message.accounts = [];
    if (object.accounts !== undefined && object.accounts !== null) {
      for (const e of object.accounts) {
        message.accounts.push(Account.fromPartial(e));
      }
    }
    return message;
  },
};

const baseAccountsGetByCustomerSIDReq: object = { customerSid: "" };

export const AccountsGetByCustomerSIDReq = {
  encode(
    message: AccountsGetByCustomerSIDReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.customerSid !== "") {
      writer.uint32(10).string(message.customerSid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountsGetByCustomerSIDReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAccountsGetByCustomerSIDReq,
    } as AccountsGetByCustomerSIDReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerSid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<AccountsGetByCustomerSIDReq>
  ): AccountsGetByCustomerSIDReq {
    const message = {
      ...baseAccountsGetByCustomerSIDReq,
    } as AccountsGetByCustomerSIDReq;
    if (object.customerSid !== undefined && object.customerSid !== null) {
      message.customerSid = object.customerSid;
    } else {
      message.customerSid = "";
    }
    return message;
  },
};

const baseAccountsGetByStripeIDReq: object = { stripeId: "" };

export const AccountsGetByStripeIDReq = {
  encode(
    message: AccountsGetByStripeIDReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stripeId !== "") {
      writer.uint32(10).string(message.stripeId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountsGetByStripeIDReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAccountsGetByStripeIDReq,
    } as AccountsGetByStripeIDReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stripeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<AccountsGetByStripeIDReq>
  ): AccountsGetByStripeIDReq {
    const message = {
      ...baseAccountsGetByStripeIDReq,
    } as AccountsGetByStripeIDReq;
    if (object.stripeId !== undefined && object.stripeId !== null) {
      message.stripeId = object.stripeId;
    } else {
      message.stripeId = "";
    }
    return message;
  },
};

const baseAccountsSetGoogleAppsDomainReq: object = { accountId: 0, domain: "" };

export const AccountsSetGoogleAppsDomainReq = {
  encode(
    message: AccountsSetGoogleAppsDomainReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).int64(message.accountId);
    }
    if (message.domain !== "") {
      writer.uint32(18).string(message.domain);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountsSetGoogleAppsDomainReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAccountsSetGoogleAppsDomainReq,
    } as AccountsSetGoogleAppsDomainReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.domain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<AccountsSetGoogleAppsDomainReq>
  ): AccountsSetGoogleAppsDomainReq {
    const message = {
      ...baseAccountsSetGoogleAppsDomainReq,
    } as AccountsSetGoogleAppsDomainReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    } else {
      message.domain = "";
    }
    return message;
  },
};

const baseAccountsSetMinAPIVersionReq: object = {
  accountId: 0,
  minApiVersion: 0,
};

export const AccountsSetMinAPIVersionReq = {
  encode(
    message: AccountsSetMinAPIVersionReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).int64(message.accountId);
    }
    if (message.minApiVersion !== 0) {
      writer.uint32(16).int64(message.minApiVersion);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountsSetMinAPIVersionReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAccountsSetMinAPIVersionReq,
    } as AccountsSetMinAPIVersionReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.minApiVersion = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<AccountsSetMinAPIVersionReq>
  ): AccountsSetMinAPIVersionReq {
    const message = {
      ...baseAccountsSetMinAPIVersionReq,
    } as AccountsSetMinAPIVersionReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.minApiVersion !== undefined && object.minApiVersion !== null) {
      message.minApiVersion = object.minApiVersion;
    } else {
      message.minApiVersion = 0;
    }
    return message;
  },
};

const baseAccountsDeleteReq: object = { id: 0 };

export const AccountsDeleteReq = {
  encode(
    message: AccountsDeleteReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountsDeleteReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsDeleteReq } as AccountsDeleteReq;
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

  fromPartial(object: DeepPartial<AccountsDeleteReq>): AccountsDeleteReq {
    const message = { ...baseAccountsDeleteReq } as AccountsDeleteReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseAccountsSetNameReq: object = { accountId: 0, name: "" };

export const AccountsSetNameReq = {
  encode(
    message: AccountsSetNameReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).int64(message.accountId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountsSetNameReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsSetNameReq } as AccountsSetNameReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = longToNumber(reader.int64() as Long);
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

  fromPartial(object: DeepPartial<AccountsSetNameReq>): AccountsSetNameReq {
    const message = { ...baseAccountsSetNameReq } as AccountsSetNameReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseAccountsGetByIDReq: object = { accountId: 0 };

export const AccountsGetByIDReq = {
  encode(
    message: AccountsGetByIDReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).int64(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountsGetByIDReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsGetByIDReq } as AccountsGetByIDReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AccountsGetByIDReq>): AccountsGetByIDReq {
    const message = { ...baseAccountsGetByIDReq } as AccountsGetByIDReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    return message;
  },
};

const baseAccountsGetByKSUIDReq: object = {};

export const AccountsGetByKSUIDReq = {
  encode(
    message: AccountsGetByKSUIDReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountKsuid !== undefined) {
      ID.encode(message.accountKsuid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountsGetByKSUIDReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsGetByKSUIDReq } as AccountsGetByKSUIDReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountKsuid = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<AccountsGetByKSUIDReq>
  ): AccountsGetByKSUIDReq {
    const message = { ...baseAccountsGetByKSUIDReq } as AccountsGetByKSUIDReq;
    if (object.accountKsuid !== undefined && object.accountKsuid !== null) {
      message.accountKsuid = ID.fromPartial(object.accountKsuid);
    } else {
      message.accountKsuid = undefined;
    }
    return message;
  },
};

const baseAccountsSuspendReq: object = { accountId: 0 };

export const AccountsSuspendReq = {
  encode(
    message: AccountsSuspendReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).int64(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountsSuspendReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsSuspendReq } as AccountsSuspendReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AccountsSuspendReq>): AccountsSuspendReq {
    const message = { ...baseAccountsSuspendReq } as AccountsSuspendReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    return message;
  },
};

const baseAccountsUnsuspendReq: object = { accountId: 0 };

export const AccountsUnsuspendReq = {
  encode(
    message: AccountsUnsuspendReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).int64(message.accountId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountsUnsuspendReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsUnsuspendReq } as AccountsUnsuspendReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AccountsUnsuspendReq>): AccountsUnsuspendReq {
    const message = { ...baseAccountsUnsuspendReq } as AccountsUnsuspendReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    return message;
  },
};

const baseAccountsSetPaymentStatusReq: object = {
  accountId: 0,
  paymentStatus: 0,
};

export const AccountsSetPaymentStatusReq = {
  encode(
    message: AccountsSetPaymentStatusReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).int64(message.accountId);
    }
    if (message.paymentStatus !== 0) {
      writer.uint32(16).int32(message.paymentStatus);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountsSetPaymentStatusReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAccountsSetPaymentStatusReq,
    } as AccountsSetPaymentStatusReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.paymentStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<AccountsSetPaymentStatusReq>
  ): AccountsSetPaymentStatusReq {
    const message = {
      ...baseAccountsSetPaymentStatusReq,
    } as AccountsSetPaymentStatusReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.paymentStatus !== undefined && object.paymentStatus !== null) {
      message.paymentStatus = object.paymentStatus;
    } else {
      message.paymentStatus = 0;
    }
    return message;
  },
};

const baseAccountsGetByIDsReq: object = { accountIds: 0 };

export const AccountsGetByIDsReq = {
  encode(
    message: AccountsGetByIDsReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.accountIds) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountsGetByIDsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsGetByIDsReq } as AccountsGetByIDsReq;
    message.accountIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountIds.push(longToNumber(reader.int64() as Long));
            }
          } else {
            message.accountIds.push(longToNumber(reader.int64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AccountsGetByIDsReq>): AccountsGetByIDsReq {
    const message = { ...baseAccountsGetByIDsReq } as AccountsGetByIDsReq;
    message.accountIds = [];
    if (object.accountIds !== undefined && object.accountIds !== null) {
      for (const e of object.accountIds) {
        message.accountIds.push(e);
      }
    }
    return message;
  },
};

const baseAccountsGetByIDsResp: object = {};

export const AccountsGetByIDsResp = {
  encode(
    message: AccountsGetByIDsResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountsGetByIDsResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsGetByIDsResp } as AccountsGetByIDsResp;
    message.accounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AccountsGetByIDsResp>): AccountsGetByIDsResp {
    const message = { ...baseAccountsGetByIDsResp } as AccountsGetByIDsResp;
    message.accounts = [];
    if (object.accounts !== undefined && object.accounts !== null) {
      for (const e of object.accounts) {
        message.accounts.push(Account.fromPartial(e));
      }
    }
    return message;
  },
};

const baseAccountsBanReq: object = { accountId: 0 };

export const AccountsBanReq = {
  encode(
    message: AccountsBanReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).int64(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountsBanReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsBanReq } as AccountsBanReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AccountsBanReq>): AccountsBanReq {
    const message = { ...baseAccountsBanReq } as AccountsBanReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    return message;
  },
};

const baseAccountsUnbanReq: object = { accountId: 0 };

export const AccountsUnbanReq = {
  encode(
    message: AccountsUnbanReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).int64(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountsUnbanReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountsUnbanReq } as AccountsUnbanReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AccountsUnbanReq>): AccountsUnbanReq {
    const message = { ...baseAccountsUnbanReq } as AccountsUnbanReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    return message;
  },
};

const baseAccountsGetRestrictionsReq: object = {
  flags: 0,
  allFlags: false,
  limits: 0,
  allLimits: false,
  legacyAccountIds: 0,
};

export const AccountsGetRestrictionsReq = {
  encode(
    message: AccountsGetRestrictionsReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accountIds) {
      ID.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.flags) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.allFlags === true) {
      writer.uint32(24).bool(message.allFlags);
    }
    writer.uint32(34).fork();
    for (const v of message.limits) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.allLimits === true) {
      writer.uint32(40).bool(message.allLimits);
    }
    writer.uint32(50).fork();
    for (const v of message.legacyAccountIds) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountsGetRestrictionsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAccountsGetRestrictionsReq,
    } as AccountsGetRestrictionsReq;
    message.accountIds = [];
    message.flags = [];
    message.limits = [];
    message.legacyAccountIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountIds.push(ID.decode(reader, reader.uint32()));
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.flags.push(reader.int32() as any);
            }
          } else {
            message.flags.push(reader.int32() as any);
          }
          break;
        case 3:
          message.allFlags = reader.bool();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.limits.push(reader.int32() as any);
            }
          } else {
            message.limits.push(reader.int32() as any);
          }
          break;
        case 5:
          message.allLimits = reader.bool();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.legacyAccountIds.push(
                longToNumber(reader.int64() as Long)
              );
            }
          } else {
            message.legacyAccountIds.push(longToNumber(reader.int64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<AccountsGetRestrictionsReq>
  ): AccountsGetRestrictionsReq {
    const message = {
      ...baseAccountsGetRestrictionsReq,
    } as AccountsGetRestrictionsReq;
    message.accountIds = [];
    message.flags = [];
    message.limits = [];
    message.legacyAccountIds = [];
    if (object.accountIds !== undefined && object.accountIds !== null) {
      for (const e of object.accountIds) {
        message.accountIds.push(ID.fromPartial(e));
      }
    }
    if (object.flags !== undefined && object.flags !== null) {
      for (const e of object.flags) {
        message.flags.push(e);
      }
    }
    if (object.allFlags !== undefined && object.allFlags !== null) {
      message.allFlags = object.allFlags;
    } else {
      message.allFlags = false;
    }
    if (object.limits !== undefined && object.limits !== null) {
      for (const e of object.limits) {
        message.limits.push(e);
      }
    }
    if (object.allLimits !== undefined && object.allLimits !== null) {
      message.allLimits = object.allLimits;
    } else {
      message.allLimits = false;
    }
    if (
      object.legacyAccountIds !== undefined &&
      object.legacyAccountIds !== null
    ) {
      for (const e of object.legacyAccountIds) {
        message.legacyAccountIds.push(e);
      }
    }
    return message;
  },
};

const baseAccountsGetRestrictionsResp: object = { flags: 0, limits: 0 };

export const AccountsGetRestrictionsResp = {
  encode(
    message: AccountsGetRestrictionsResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      AccountsGetRestrictionsResp_Account.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.flags) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.limits) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountsGetRestrictionsResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAccountsGetRestrictionsResp,
    } as AccountsGetRestrictionsResp;
    message.accounts = [];
    message.flags = [];
    message.limits = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(
            AccountsGetRestrictionsResp_Account.decode(reader, reader.uint32())
          );
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.flags.push(reader.int32() as any);
            }
          } else {
            message.flags.push(reader.int32() as any);
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.limits.push(reader.int32() as any);
            }
          } else {
            message.limits.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<AccountsGetRestrictionsResp>
  ): AccountsGetRestrictionsResp {
    const message = {
      ...baseAccountsGetRestrictionsResp,
    } as AccountsGetRestrictionsResp;
    message.accounts = [];
    message.flags = [];
    message.limits = [];
    if (object.accounts !== undefined && object.accounts !== null) {
      for (const e of object.accounts) {
        message.accounts.push(
          AccountsGetRestrictionsResp_Account.fromPartial(e)
        );
      }
    }
    if (object.flags !== undefined && object.flags !== null) {
      for (const e of object.flags) {
        message.flags.push(e);
      }
    }
    if (object.limits !== undefined && object.limits !== null) {
      for (const e of object.limits) {
        message.limits.push(e);
      }
    }
    return message;
  },
};

const baseAccountsGetRestrictionsResp_Account: object = {
  flags: false,
  limits: 0,
  legacyAccountId: 0,
};

export const AccountsGetRestrictionsResp_Account = {
  encode(
    message: AccountsGetRestrictionsResp_Account,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.flags) {
      writer.bool(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.limits) {
      writer.int64(v);
    }
    writer.ldelim();
    if (message.legacyAccountId !== 0) {
      writer.uint32(32).int64(message.legacyAccountId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountsGetRestrictionsResp_Account {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAccountsGetRestrictionsResp_Account,
    } as AccountsGetRestrictionsResp_Account;
    message.flags = [];
    message.limits = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.flags.push(reader.bool());
            }
          } else {
            message.flags.push(reader.bool());
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.limits.push(longToNumber(reader.int64() as Long));
            }
          } else {
            message.limits.push(longToNumber(reader.int64() as Long));
          }
          break;
        case 4:
          message.legacyAccountId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<AccountsGetRestrictionsResp_Account>
  ): AccountsGetRestrictionsResp_Account {
    const message = {
      ...baseAccountsGetRestrictionsResp_Account,
    } as AccountsGetRestrictionsResp_Account;
    message.flags = [];
    message.limits = [];
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    if (object.flags !== undefined && object.flags !== null) {
      for (const e of object.flags) {
        message.flags.push(e);
      }
    }
    if (object.limits !== undefined && object.limits !== null) {
      for (const e of object.limits) {
        message.limits.push(e);
      }
    }
    if (
      object.legacyAccountId !== undefined &&
      object.legacyAccountId !== null
    ) {
      message.legacyAccountId = object.legacyAccountId;
    } else {
      message.legacyAccountId = 0;
    }
    return message;
  },
};

/**
 * -------------------
 * Accounts
 * -------------------
 *
 * Accounts service has an abstraction layer over accounts storage, providing
 * additional methods and functionality which isn't stored on accounts alone.
 *
 * Use this service when working in the controlplane.
 */
export interface Accounts {
  /**
   * Create a new account with an existing user as the initial member/administrator.
   * If you want to create the user at the same time (i.e. in the case of a new signup),
   * use Users.Create() instead which will create the user and account atomically.
   */
  Create(
    request: DeepPartial<AccountsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Account>;
  GetByID(
    request: DeepPartial<AccountsGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Account>;
  GetByIDs(
    request: DeepPartial<AccountsGetByIDsReq>,
    metadata?: grpc.Metadata
  ): Promise<AccountsGetByIDsResp>;
  GetByKSUID(
    request: DeepPartial<AccountsGetByKSUIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Account>;
  GetByUser(
    request: DeepPartial<AccountsGetByUserReq>,
    metadata?: grpc.Metadata
  ): Promise<AccountsGetByUserResp>;
  GetByAdmin(
    request: DeepPartial<AccountsGetByAdminReq>,
    metadata?: grpc.Metadata
  ): Promise<AccountsGetByAdminResp>;
  GetByPlan(
    request: DeepPartial<AccountsGetByPlanReq>,
    metadata?: grpc.Metadata
  ): Promise<AccountsGetByPlanResp>;
  GetByCustomerSID(
    request: DeepPartial<AccountsGetByCustomerSIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Account>;
  SetPlan(
    request: DeepPartial<AccountsSetPlanReq>,
    metadata?: grpc.Metadata
  ): Promise<Account>;
  Search(
    request: DeepPartial<AccountsSearchReq>,
    metadata?: grpc.Metadata
  ): Promise<AccountsSearchResp>;
  Suspend(
    request: DeepPartial<AccountsSuspendReq>,
    metadata?: grpc.Metadata
  ): Promise<Account>;
  Unsuspend(
    request: DeepPartial<AccountsUnsuspendReq>,
    metadata?: grpc.Metadata
  ): Promise<Account>;
  SetName(
    request: DeepPartial<AccountsSetNameReq>,
    metadata?: grpc.Metadata
  ): Promise<Account>;
  SetGoogleAppsDomain(
    request: DeepPartial<AccountsSetGoogleAppsDomainReq>,
    metadata?: grpc.Metadata
  ): Promise<Account>;
  SetMinAPIVersion(
    request: DeepPartial<AccountsSetMinAPIVersionReq>,
    metadata?: grpc.Metadata
  ): Promise<Account>;
  Delete(
    request: DeepPartial<AccountsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  SetPaymentStatus(
    request: DeepPartial<AccountsSetPaymentStatusReq>,
    metadata?: grpc.Metadata
  ): Promise<Account>;
  GetByStripeID(
    request: DeepPartial<AccountsGetByStripeIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Account>;
  /**
   * NOTE(alan): at the time of writing this does not ban the account because
   * that functionality is still owned by the `bans` service in fw.global.
   * this exists to mark the admins of the account banned
   */
  Ban(
    request: DeepPartial<AccountsBanReq>,
    metadata?: grpc.Metadata
  ): Promise<Account>;
  /**
   * NOTE(alan): at the time of writing this does not unban the account because
   * that functionality is still owned by the `bans` service in fw.global.
   * this exists to mark the admins of the account unbanned
   */
  Unban(
    request: DeepPartial<AccountsUnbanReq>,
    metadata?: grpc.Metadata
  ): Promise<Account>;
  /**
   * Retrieves a set of flags and limits for a set of accounts
   * see lib/plans/restrictions.go for nicer interface to this
   */
  GetRestrictions(
    request: DeepPartial<AccountsGetRestrictionsReq>,
    metadata?: grpc.Metadata
  ): Promise<AccountsGetRestrictionsResp>;
}

export class AccountsClientImpl implements Accounts {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.GetByID = this.GetByID.bind(this);
    this.GetByIDs = this.GetByIDs.bind(this);
    this.GetByKSUID = this.GetByKSUID.bind(this);
    this.GetByUser = this.GetByUser.bind(this);
    this.GetByAdmin = this.GetByAdmin.bind(this);
    this.GetByPlan = this.GetByPlan.bind(this);
    this.GetByCustomerSID = this.GetByCustomerSID.bind(this);
    this.SetPlan = this.SetPlan.bind(this);
    this.Search = this.Search.bind(this);
    this.Suspend = this.Suspend.bind(this);
    this.Unsuspend = this.Unsuspend.bind(this);
    this.SetName = this.SetName.bind(this);
    this.SetGoogleAppsDomain = this.SetGoogleAppsDomain.bind(this);
    this.SetMinAPIVersion = this.SetMinAPIVersion.bind(this);
    this.Delete = this.Delete.bind(this);
    this.SetPaymentStatus = this.SetPaymentStatus.bind(this);
    this.GetByStripeID = this.GetByStripeID.bind(this);
    this.Ban = this.Ban.bind(this);
    this.Unban = this.Unban.bind(this);
    this.GetRestrictions = this.GetRestrictions.bind(this);
  }

  Create(
    request: DeepPartial<AccountsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<Account> {
    return this.rpc.unary(
      AccountsCreateDesc,
      AccountsCreateReq.fromPartial(request),
      metadata
    );
  }

  GetByID(
    request: DeepPartial<AccountsGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Account> {
    return this.rpc.unary(
      AccountsGetByIDDesc,
      AccountsGetByIDReq.fromPartial(request),
      metadata
    );
  }

  GetByIDs(
    request: DeepPartial<AccountsGetByIDsReq>,
    metadata?: grpc.Metadata
  ): Promise<AccountsGetByIDsResp> {
    return this.rpc.unary(
      AccountsGetByIDsDesc,
      AccountsGetByIDsReq.fromPartial(request),
      metadata
    );
  }

  GetByKSUID(
    request: DeepPartial<AccountsGetByKSUIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Account> {
    return this.rpc.unary(
      AccountsGetByKSUIDDesc,
      AccountsGetByKSUIDReq.fromPartial(request),
      metadata
    );
  }

  GetByUser(
    request: DeepPartial<AccountsGetByUserReq>,
    metadata?: grpc.Metadata
  ): Promise<AccountsGetByUserResp> {
    return this.rpc.unary(
      AccountsGetByUserDesc,
      AccountsGetByUserReq.fromPartial(request),
      metadata
    );
  }

  GetByAdmin(
    request: DeepPartial<AccountsGetByAdminReq>,
    metadata?: grpc.Metadata
  ): Promise<AccountsGetByAdminResp> {
    return this.rpc.unary(
      AccountsGetByAdminDesc,
      AccountsGetByAdminReq.fromPartial(request),
      metadata
    );
  }

  GetByPlan(
    request: DeepPartial<AccountsGetByPlanReq>,
    metadata?: grpc.Metadata
  ): Promise<AccountsGetByPlanResp> {
    return this.rpc.unary(
      AccountsGetByPlanDesc,
      AccountsGetByPlanReq.fromPartial(request),
      metadata
    );
  }

  GetByCustomerSID(
    request: DeepPartial<AccountsGetByCustomerSIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Account> {
    return this.rpc.unary(
      AccountsGetByCustomerSIDDesc,
      AccountsGetByCustomerSIDReq.fromPartial(request),
      metadata
    );
  }

  SetPlan(
    request: DeepPartial<AccountsSetPlanReq>,
    metadata?: grpc.Metadata
  ): Promise<Account> {
    return this.rpc.unary(
      AccountsSetPlanDesc,
      AccountsSetPlanReq.fromPartial(request),
      metadata
    );
  }

  Search(
    request: DeepPartial<AccountsSearchReq>,
    metadata?: grpc.Metadata
  ): Promise<AccountsSearchResp> {
    return this.rpc.unary(
      AccountsSearchDesc,
      AccountsSearchReq.fromPartial(request),
      metadata
    );
  }

  Suspend(
    request: DeepPartial<AccountsSuspendReq>,
    metadata?: grpc.Metadata
  ): Promise<Account> {
    return this.rpc.unary(
      AccountsSuspendDesc,
      AccountsSuspendReq.fromPartial(request),
      metadata
    );
  }

  Unsuspend(
    request: DeepPartial<AccountsUnsuspendReq>,
    metadata?: grpc.Metadata
  ): Promise<Account> {
    return this.rpc.unary(
      AccountsUnsuspendDesc,
      AccountsUnsuspendReq.fromPartial(request),
      metadata
    );
  }

  SetName(
    request: DeepPartial<AccountsSetNameReq>,
    metadata?: grpc.Metadata
  ): Promise<Account> {
    return this.rpc.unary(
      AccountsSetNameDesc,
      AccountsSetNameReq.fromPartial(request),
      metadata
    );
  }

  SetGoogleAppsDomain(
    request: DeepPartial<AccountsSetGoogleAppsDomainReq>,
    metadata?: grpc.Metadata
  ): Promise<Account> {
    return this.rpc.unary(
      AccountsSetGoogleAppsDomainDesc,
      AccountsSetGoogleAppsDomainReq.fromPartial(request),
      metadata
    );
  }

  SetMinAPIVersion(
    request: DeepPartial<AccountsSetMinAPIVersionReq>,
    metadata?: grpc.Metadata
  ): Promise<Account> {
    return this.rpc.unary(
      AccountsSetMinAPIVersionDesc,
      AccountsSetMinAPIVersionReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<AccountsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      AccountsDeleteDesc,
      AccountsDeleteReq.fromPartial(request),
      metadata
    );
  }

  SetPaymentStatus(
    request: DeepPartial<AccountsSetPaymentStatusReq>,
    metadata?: grpc.Metadata
  ): Promise<Account> {
    return this.rpc.unary(
      AccountsSetPaymentStatusDesc,
      AccountsSetPaymentStatusReq.fromPartial(request),
      metadata
    );
  }

  GetByStripeID(
    request: DeepPartial<AccountsGetByStripeIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Account> {
    return this.rpc.unary(
      AccountsGetByStripeIDDesc,
      AccountsGetByStripeIDReq.fromPartial(request),
      metadata
    );
  }

  Ban(
    request: DeepPartial<AccountsBanReq>,
    metadata?: grpc.Metadata
  ): Promise<Account> {
    return this.rpc.unary(
      AccountsBanDesc,
      AccountsBanReq.fromPartial(request),
      metadata
    );
  }

  Unban(
    request: DeepPartial<AccountsUnbanReq>,
    metadata?: grpc.Metadata
  ): Promise<Account> {
    return this.rpc.unary(
      AccountsUnbanDesc,
      AccountsUnbanReq.fromPartial(request),
      metadata
    );
  }

  GetRestrictions(
    request: DeepPartial<AccountsGetRestrictionsReq>,
    metadata?: grpc.Metadata
  ): Promise<AccountsGetRestrictionsResp> {
    return this.rpc.unary(
      AccountsGetRestrictionsDesc,
      AccountsGetRestrictionsReq.fromPartial(request),
      metadata
    );
  }
}

export const AccountsDesc = {
  serviceName: "rpx.Accounts",
};

export const AccountsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Account.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AccountsGetByIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetByID",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsGetByIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Account.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AccountsGetByIDsDesc: UnaryMethodDefinitionish = {
  methodName: "GetByIDs",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsGetByIDsReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...AccountsGetByIDsResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AccountsGetByKSUIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetByKSUID",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsGetByKSUIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Account.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AccountsGetByUserDesc: UnaryMethodDefinitionish = {
  methodName: "GetByUser",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsGetByUserReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...AccountsGetByUserResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AccountsGetByAdminDesc: UnaryMethodDefinitionish = {
  methodName: "GetByAdmin",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsGetByAdminReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...AccountsGetByAdminResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AccountsGetByPlanDesc: UnaryMethodDefinitionish = {
  methodName: "GetByPlan",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsGetByPlanReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...AccountsGetByPlanResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AccountsGetByCustomerSIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetByCustomerSID",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsGetByCustomerSIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Account.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AccountsSetPlanDesc: UnaryMethodDefinitionish = {
  methodName: "SetPlan",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsSetPlanReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Account.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AccountsSearchDesc: UnaryMethodDefinitionish = {
  methodName: "Search",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsSearchReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...AccountsSearchResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AccountsSuspendDesc: UnaryMethodDefinitionish = {
  methodName: "Suspend",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsSuspendReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Account.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AccountsUnsuspendDesc: UnaryMethodDefinitionish = {
  methodName: "Unsuspend",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsUnsuspendReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Account.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AccountsSetNameDesc: UnaryMethodDefinitionish = {
  methodName: "SetName",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsSetNameReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Account.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AccountsSetGoogleAppsDomainDesc: UnaryMethodDefinitionish = {
  methodName: "SetGoogleAppsDomain",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsSetGoogleAppsDomainReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Account.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AccountsSetMinAPIVersionDesc: UnaryMethodDefinitionish = {
  methodName: "SetMinAPIVersion",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsSetMinAPIVersionReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Account.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AccountsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsDeleteReq.encode(this).finish();
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

export const AccountsSetPaymentStatusDesc: UnaryMethodDefinitionish = {
  methodName: "SetPaymentStatus",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsSetPaymentStatusReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Account.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AccountsGetByStripeIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetByStripeID",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsGetByStripeIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Account.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AccountsBanDesc: UnaryMethodDefinitionish = {
  methodName: "Ban",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsBanReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Account.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AccountsUnbanDesc: UnaryMethodDefinitionish = {
  methodName: "Unban",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsUnbanReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Account.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AccountsGetRestrictionsDesc: UnaryMethodDefinitionish = {
  methodName: "GetRestrictions",
  service: AccountsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AccountsGetRestrictionsReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...AccountsGetRestrictionsResp.decode(data),
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
