// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from 'long';
import { grpc } from '@improbable-eng/grpc-web';
import _m0 from 'protobufjs/minimal';
import { IPPolicy_Action, IPPolicyRule_Action, IPPolicy, IPPolicyRule } from '../rpx/model_ip_policy';
import { Empty, ID, OptString, CIDR } from '../pb/types';

import { StreamItem, SyncReq } from '../rpx/stream';
import { BrowserHeaders } from 'browser-headers';

import { Paging } from '../rpx/model';

export const protobufPackage = 'rpx';

export interface IPPolicyGetByAccountReq {
accountId: number,
paging: Paging | undefined,
}

export interface IPPolicyGetByAccountResp {
policies: IPPolicy[],
next: Paging | undefined,
}

export interface IPPolicyGetByIDReq {
id: ID | undefined,
accountId: number,
}

export interface IPPolicyCreateReq {
accountId: number,
description: string,
metadata: string,
name: string,
action: IPPolicy_Action,
}

export interface IPPolicyUpdateReq {
description: OptString | undefined,
name: OptString | undefined,
metadata: OptString | undefined,
/** ID of the policy to update. */
id: ID | undefined,
}

export interface IPPolicyDeleteReq {
/** ID of the policy to delete. */
id: ID | undefined,
}

export interface IPPolicyDeleteByAccountReq {
accountId: number,
}

export interface IPPolicyRuleGetByAccountReq {
accountId: number,
paging: Paging | undefined,
}

export interface IPPolicyRuleGetByPolicyIDReq {
ipPolicyId: ID | undefined,
}

export interface IPPolicyRuleGetResp {
rules: IPPolicyRule[],
next: Paging | undefined,
}

export interface IPPolicyRuleGetByIDReq {
id: ID | undefined,
accountId: number,
}

export interface IPPolicyRulesGetEnforceableReq {
ipPolicyIds: ID[],
}

export interface IPPolicyRulesGetEnforceableResp {
rules: IPPolicyEnforceableRule[],
}

export interface IPPolicyEnforceableRule {
cidr: CIDR | undefined,
action: IPPolicyRule_Action,
}

export interface IPPolicyRuleCreateReq {
accountId: number,
ipPolicyId: ID | undefined,
cidr: string,
metadata: string,
description: string,
action: IPPolicyRule_Action,
}

export interface IPPolicyRuleUpdateReq {
cidr: OptString | undefined,
metadata: OptString | undefined,
description: OptString | undefined,
/** ID of the policy rule to update. */
id: ID | undefined,
}

export interface IPPolicyRuleDeleteReq {
/** ID of the policy rule to delete. */
id: ID | undefined,
}

const baseIPPolicyGetByAccountReq: object = { accountId: 0 };

export const IPPolicyGetByAccountReq = {
            encode(
      message: IPPolicyGetByAccountReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.paging !== undefined) {
          Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPPolicyGetByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPPolicyGetByAccountReq } as IPPolicyGetByAccountReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.paging = Paging.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPPolicyGetByAccountReq>): IPPolicyGetByAccountReq {
      const message = { ...baseIPPolicyGetByAccountReq } as IPPolicyGetByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.paging !== undefined && object.paging !== null) {
message.paging = Paging.fromPartial(object.paging);
} else {
message.paging = undefined
}
return message;
}
          };

const baseIPPolicyGetByAccountResp: object = {  };

export const IPPolicyGetByAccountResp = {
            encode(
      message: IPPolicyGetByAccountResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.policies) {
            IPPolicy.encode(v!, writer.uint32(10).fork()).ldelim();
          }
if (message.next !== undefined) {
          Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPPolicyGetByAccountResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPPolicyGetByAccountResp } as IPPolicyGetByAccountResp;
message.policies = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.policies.push(IPPolicy.decode(reader, reader.uint32()));
break;
case 2:
message.next = Paging.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPPolicyGetByAccountResp>): IPPolicyGetByAccountResp {
      const message = { ...baseIPPolicyGetByAccountResp } as IPPolicyGetByAccountResp;
message.policies = [];
if (object.policies !== undefined && object.policies !== null) {
for (const e of object.policies) {
            message.policies.push(IPPolicy.fromPartial(e));
          }
}
if (object.next !== undefined && object.next !== null) {
message.next = Paging.fromPartial(object.next);
} else {
message.next = undefined
}
return message;
}
          };

const baseIPPolicyGetByIDReq: object = { accountId: 0 };

export const IPPolicyGetByIDReq = {
            encode(
      message: IPPolicyGetByIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(26).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPPolicyGetByIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPPolicyGetByIDReq } as IPPolicyGetByIDReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 3:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPPolicyGetByIDReq>): IPPolicyGetByIDReq {
      const message = { ...baseIPPolicyGetByIDReq } as IPPolicyGetByIDReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseIPPolicyCreateReq: object = { accountId: 0,description: "",metadata: "",name: "",action: 0 };

export const IPPolicyCreateReq = {
            encode(
      message: IPPolicyCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.description !== "") {
          writer.uint32(42).string(message.description);
        }
if (message.metadata !== "") {
          writer.uint32(34).string(message.metadata);
        }
if (message.name !== "") {
          writer.uint32(18).string(message.name);
        }
if (message.action !== 0) {
          writer.uint32(24).int32(message.action);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPPolicyCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPPolicyCreateReq } as IPPolicyCreateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 5:
message.description = reader.string();
break;
case 4:
message.metadata = reader.string();
break;
case 2:
message.name = reader.string();
break;
case 3:
message.action = reader.int32() as any;
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPPolicyCreateReq>): IPPolicyCreateReq {
      const message = { ...baseIPPolicyCreateReq } as IPPolicyCreateReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.description !== undefined && object.description !== null) {
message.description = object.description;
} else {
message.description = ""
}
if (object.metadata !== undefined && object.metadata !== null) {
message.metadata = object.metadata;
} else {
message.metadata = ""
}
if (object.name !== undefined && object.name !== null) {
message.name = object.name;
} else {
message.name = ""
}
if (object.action !== undefined && object.action !== null) {
message.action = object.action;
} else {
message.action = 0
}
return message;
}
          };

const baseIPPolicyUpdateReq: object = {  };

export const IPPolicyUpdateReq = {
            encode(
      message: IPPolicyUpdateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.description !== undefined) {
          OptString.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
if (message.name !== undefined) {
          OptString.encode(message.name, writer.uint32(18).fork()).ldelim();
        }
if (message.metadata !== undefined) {
          OptString.encode(message.metadata, writer.uint32(26).fork()).ldelim();
        }
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(42).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPPolicyUpdateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPPolicyUpdateReq } as IPPolicyUpdateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.description = OptString.decode(reader, reader.uint32());
break;
case 2:
message.name = OptString.decode(reader, reader.uint32());
break;
case 3:
message.metadata = OptString.decode(reader, reader.uint32());
break;
case 5:
message.id = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPPolicyUpdateReq>): IPPolicyUpdateReq {
      const message = { ...baseIPPolicyUpdateReq } as IPPolicyUpdateReq;
if (object.description !== undefined && object.description !== null) {
message.description = OptString.fromPartial(object.description);
} else {
message.description = undefined
}
if (object.name !== undefined && object.name !== null) {
message.name = OptString.fromPartial(object.name);
} else {
message.name = undefined
}
if (object.metadata !== undefined && object.metadata !== null) {
message.metadata = OptString.fromPartial(object.metadata);
} else {
message.metadata = undefined
}
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
return message;
}
          };

const baseIPPolicyDeleteReq: object = {  };

export const IPPolicyDeleteReq = {
            encode(
      message: IPPolicyDeleteReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPPolicyDeleteReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPPolicyDeleteReq } as IPPolicyDeleteReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 2:
message.id = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPPolicyDeleteReq>): IPPolicyDeleteReq {
      const message = { ...baseIPPolicyDeleteReq } as IPPolicyDeleteReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
return message;
}
          };

const baseIPPolicyDeleteByAccountReq: object = { accountId: 0 };

export const IPPolicyDeleteByAccountReq = {
            encode(
      message: IPPolicyDeleteByAccountReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPPolicyDeleteByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPPolicyDeleteByAccountReq } as IPPolicyDeleteByAccountReq;
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

fromPartial(object: DeepPartial<IPPolicyDeleteByAccountReq>): IPPolicyDeleteByAccountReq {
      const message = { ...baseIPPolicyDeleteByAccountReq } as IPPolicyDeleteByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseIPPolicyRuleGetByAccountReq: object = { accountId: 0 };

export const IPPolicyRuleGetByAccountReq = {
            encode(
      message: IPPolicyRuleGetByAccountReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.paging !== undefined) {
          Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPPolicyRuleGetByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPPolicyRuleGetByAccountReq } as IPPolicyRuleGetByAccountReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.paging = Paging.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPPolicyRuleGetByAccountReq>): IPPolicyRuleGetByAccountReq {
      const message = { ...baseIPPolicyRuleGetByAccountReq } as IPPolicyRuleGetByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.paging !== undefined && object.paging !== null) {
message.paging = Paging.fromPartial(object.paging);
} else {
message.paging = undefined
}
return message;
}
          };

const baseIPPolicyRuleGetByPolicyIDReq: object = {  };

export const IPPolicyRuleGetByPolicyIDReq = {
            encode(
      message: IPPolicyRuleGetByPolicyIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.ipPolicyId !== undefined) {
          ID.encode(message.ipPolicyId, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPPolicyRuleGetByPolicyIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPPolicyRuleGetByPolicyIDReq } as IPPolicyRuleGetByPolicyIDReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 2:
message.ipPolicyId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPPolicyRuleGetByPolicyIDReq>): IPPolicyRuleGetByPolicyIDReq {
      const message = { ...baseIPPolicyRuleGetByPolicyIDReq } as IPPolicyRuleGetByPolicyIDReq;
if (object.ipPolicyId !== undefined && object.ipPolicyId !== null) {
message.ipPolicyId = ID.fromPartial(object.ipPolicyId);
} else {
message.ipPolicyId = undefined
}
return message;
}
          };

const baseIPPolicyRuleGetResp: object = {  };

export const IPPolicyRuleGetResp = {
            encode(
      message: IPPolicyRuleGetResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.rules) {
            IPPolicyRule.encode(v!, writer.uint32(10).fork()).ldelim();
          }
if (message.next !== undefined) {
          Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPPolicyRuleGetResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPPolicyRuleGetResp } as IPPolicyRuleGetResp;
message.rules = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.rules.push(IPPolicyRule.decode(reader, reader.uint32()));
break;
case 2:
message.next = Paging.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPPolicyRuleGetResp>): IPPolicyRuleGetResp {
      const message = { ...baseIPPolicyRuleGetResp } as IPPolicyRuleGetResp;
message.rules = [];
if (object.rules !== undefined && object.rules !== null) {
for (const e of object.rules) {
            message.rules.push(IPPolicyRule.fromPartial(e));
          }
}
if (object.next !== undefined && object.next !== null) {
message.next = Paging.fromPartial(object.next);
} else {
message.next = undefined
}
return message;
}
          };

const baseIPPolicyRuleGetByIDReq: object = { accountId: 0 };

export const IPPolicyRuleGetByIDReq = {
            encode(
      message: IPPolicyRuleGetByIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(26).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPPolicyRuleGetByIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPPolicyRuleGetByIDReq } as IPPolicyRuleGetByIDReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 3:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPPolicyRuleGetByIDReq>): IPPolicyRuleGetByIDReq {
      const message = { ...baseIPPolicyRuleGetByIDReq } as IPPolicyRuleGetByIDReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseIPPolicyRulesGetEnforceableReq: object = {  };

export const IPPolicyRulesGetEnforceableReq = {
            encode(
      message: IPPolicyRulesGetEnforceableReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.ipPolicyIds) {
            ID.encode(v!, writer.uint32(18).fork()).ldelim();
          }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPPolicyRulesGetEnforceableReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPPolicyRulesGetEnforceableReq } as IPPolicyRulesGetEnforceableReq;
message.ipPolicyIds = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 2:
message.ipPolicyIds.push(ID.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPPolicyRulesGetEnforceableReq>): IPPolicyRulesGetEnforceableReq {
      const message = { ...baseIPPolicyRulesGetEnforceableReq } as IPPolicyRulesGetEnforceableReq;
message.ipPolicyIds = [];
if (object.ipPolicyIds !== undefined && object.ipPolicyIds !== null) {
for (const e of object.ipPolicyIds) {
            message.ipPolicyIds.push(ID.fromPartial(e));
          }
}
return message;
}
          };

const baseIPPolicyRulesGetEnforceableResp: object = {  };

export const IPPolicyRulesGetEnforceableResp = {
            encode(
      message: IPPolicyRulesGetEnforceableResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.rules) {
            IPPolicyEnforceableRule.encode(v!, writer.uint32(10).fork()).ldelim();
          }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPPolicyRulesGetEnforceableResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPPolicyRulesGetEnforceableResp } as IPPolicyRulesGetEnforceableResp;
message.rules = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.rules.push(IPPolicyEnforceableRule.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPPolicyRulesGetEnforceableResp>): IPPolicyRulesGetEnforceableResp {
      const message = { ...baseIPPolicyRulesGetEnforceableResp } as IPPolicyRulesGetEnforceableResp;
message.rules = [];
if (object.rules !== undefined && object.rules !== null) {
for (const e of object.rules) {
            message.rules.push(IPPolicyEnforceableRule.fromPartial(e));
          }
}
return message;
}
          };

const baseIPPolicyEnforceableRule: object = { action: 0 };

export const IPPolicyEnforceableRule = {
            encode(
      message: IPPolicyEnforceableRule,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.cidr !== undefined) {
          CIDR.encode(message.cidr, writer.uint32(10).fork()).ldelim();
        }
if (message.action !== 0) {
          writer.uint32(24).int32(message.action);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPPolicyEnforceableRule {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPPolicyEnforceableRule } as IPPolicyEnforceableRule;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.cidr = CIDR.decode(reader, reader.uint32());
break;
case 3:
message.action = reader.int32() as any;
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPPolicyEnforceableRule>): IPPolicyEnforceableRule {
      const message = { ...baseIPPolicyEnforceableRule } as IPPolicyEnforceableRule;
if (object.cidr !== undefined && object.cidr !== null) {
message.cidr = CIDR.fromPartial(object.cidr);
} else {
message.cidr = undefined
}
if (object.action !== undefined && object.action !== null) {
message.action = object.action;
} else {
message.action = 0
}
return message;
}
          };

const baseIPPolicyRuleCreateReq: object = { accountId: 0,cidr: "",metadata: "",description: "",action: 0 };

export const IPPolicyRuleCreateReq = {
            encode(
      message: IPPolicyRuleCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.ipPolicyId !== undefined) {
          ID.encode(message.ipPolicyId, writer.uint32(50).fork()).ldelim();
        }
if (message.cidr !== "") {
          writer.uint32(26).string(message.cidr);
        }
if (message.metadata !== "") {
          writer.uint32(34).string(message.metadata);
        }
if (message.description !== "") {
          writer.uint32(42).string(message.description);
        }
if (message.action !== 0) {
          writer.uint32(56).int32(message.action);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPPolicyRuleCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPPolicyRuleCreateReq } as IPPolicyRuleCreateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 6:
message.ipPolicyId = ID.decode(reader, reader.uint32());
break;
case 3:
message.cidr = reader.string();
break;
case 4:
message.metadata = reader.string();
break;
case 5:
message.description = reader.string();
break;
case 7:
message.action = reader.int32() as any;
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPPolicyRuleCreateReq>): IPPolicyRuleCreateReq {
      const message = { ...baseIPPolicyRuleCreateReq } as IPPolicyRuleCreateReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.ipPolicyId !== undefined && object.ipPolicyId !== null) {
message.ipPolicyId = ID.fromPartial(object.ipPolicyId);
} else {
message.ipPolicyId = undefined
}
if (object.cidr !== undefined && object.cidr !== null) {
message.cidr = object.cidr;
} else {
message.cidr = ""
}
if (object.metadata !== undefined && object.metadata !== null) {
message.metadata = object.metadata;
} else {
message.metadata = ""
}
if (object.description !== undefined && object.description !== null) {
message.description = object.description;
} else {
message.description = ""
}
if (object.action !== undefined && object.action !== null) {
message.action = object.action;
} else {
message.action = 0
}
return message;
}
          };

const baseIPPolicyRuleUpdateReq: object = {  };

export const IPPolicyRuleUpdateReq = {
            encode(
      message: IPPolicyRuleUpdateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.cidr !== undefined) {
          OptString.encode(message.cidr, writer.uint32(10).fork()).ldelim();
        }
if (message.metadata !== undefined) {
          OptString.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
if (message.description !== undefined) {
          OptString.encode(message.description, writer.uint32(26).fork()).ldelim();
        }
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(42).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPPolicyRuleUpdateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPPolicyRuleUpdateReq } as IPPolicyRuleUpdateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.cidr = OptString.decode(reader, reader.uint32());
break;
case 2:
message.metadata = OptString.decode(reader, reader.uint32());
break;
case 3:
message.description = OptString.decode(reader, reader.uint32());
break;
case 5:
message.id = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPPolicyRuleUpdateReq>): IPPolicyRuleUpdateReq {
      const message = { ...baseIPPolicyRuleUpdateReq } as IPPolicyRuleUpdateReq;
if (object.cidr !== undefined && object.cidr !== null) {
message.cidr = OptString.fromPartial(object.cidr);
} else {
message.cidr = undefined
}
if (object.metadata !== undefined && object.metadata !== null) {
message.metadata = OptString.fromPartial(object.metadata);
} else {
message.metadata = undefined
}
if (object.description !== undefined && object.description !== null) {
message.description = OptString.fromPartial(object.description);
} else {
message.description = undefined
}
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
return message;
}
          };

const baseIPPolicyRuleDeleteReq: object = {  };

export const IPPolicyRuleDeleteReq = {
            encode(
      message: IPPolicyRuleDeleteReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPPolicyRuleDeleteReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPPolicyRuleDeleteReq } as IPPolicyRuleDeleteReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 2:
message.id = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPPolicyRuleDeleteReq>): IPPolicyRuleDeleteReq {
      const message = { ...baseIPPolicyRuleDeleteReq } as IPPolicyRuleDeleteReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
return message;
}
          };

export interface IPPolicies {
/** Read Operations */
GetByAccount(request: DeepPartial<IPPolicyGetByAccountReq>,metadata?: grpc.Metadata): Promise<IPPolicyGetByAccountResp>;
GetByID(request: DeepPartial<IPPolicyGetByIDReq>,metadata?: grpc.Metadata): Promise<IPPolicy>;
/** Mutations */
Create(request: DeepPartial<IPPolicyCreateReq>,metadata?: grpc.Metadata): Promise<IPPolicy>;
Update(request: DeepPartial<IPPolicyUpdateReq>,metadata?: grpc.Metadata): Promise<IPPolicy>;
Delete(request: DeepPartial<IPPolicyDeleteReq>,metadata?: grpc.Metadata): Promise<IPPolicy>;
DeleteByAccount(request: DeepPartial<IPPolicyDeleteByAccountReq>,metadata?: grpc.Metadata): Promise<Empty>;
}

export class IPPoliciesClientImpl implements IPPolicies {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.GetByAccount = this.GetByAccount.bind(this);this.GetByID = this.GetByID.bind(this);this.Create = this.Create.bind(this);this.Update = this.Update.bind(this);this.Delete = this.Delete.bind(this);this.DeleteByAccount = this.DeleteByAccount.bind(this);}

    GetByAccount(
      request: DeepPartial<IPPolicyGetByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<IPPolicyGetByAccountResp> {
      return this.rpc.unary(
        IPPoliciesGetByAccountDesc,
        IPPolicyGetByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByID(
      request: DeepPartial<IPPolicyGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<IPPolicy> {
      return this.rpc.unary(
        IPPoliciesGetByIDDesc,
        IPPolicyGetByIDReq.fromPartial(request),
        metadata,
      );
    }
  
    Create(
      request: DeepPartial<IPPolicyCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<IPPolicy> {
      return this.rpc.unary(
        IPPoliciesCreateDesc,
        IPPolicyCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<IPPolicyUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<IPPolicy> {
      return this.rpc.unary(
        IPPoliciesUpdateDesc,
        IPPolicyUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<IPPolicyDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<IPPolicy> {
      return this.rpc.unary(
        IPPoliciesDeleteDesc,
        IPPolicyDeleteReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteByAccount(
      request: DeepPartial<IPPolicyDeleteByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        IPPoliciesDeleteByAccountDesc,
        IPPolicyDeleteByAccountReq.fromPartial(request),
        metadata,
      );
    }
  }

export const IPPoliciesDesc = {
      serviceName: "rpx.IPPolicies",
    };

export const IPPoliciesGetByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "GetByAccount",
      service: IPPoliciesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPPolicyGetByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...IPPolicyGetByAccountResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPPoliciesGetByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByID",
      service: IPPoliciesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPPolicyGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...IPPolicy.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPPoliciesCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: IPPoliciesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPPolicyCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...IPPolicy.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPPoliciesUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: IPPoliciesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPPolicyUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...IPPolicy.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPPoliciesDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: IPPoliciesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPPolicyDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...IPPolicy.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPPoliciesDeleteByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteByAccount",
      service: IPPoliciesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPPolicyDeleteByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export interface IPPolicyRules {
/** Read operations */
GetByAccount(request: DeepPartial<IPPolicyRuleGetByAccountReq>,metadata?: grpc.Metadata): Promise<IPPolicyRuleGetResp>;
GetByPolicyID(request: DeepPartial<IPPolicyRuleGetByPolicyIDReq>,metadata?: grpc.Metadata): Promise<IPPolicyRuleGetResp>;
GetByID(request: DeepPartial<IPPolicyRuleGetByIDReq>,metadata?: grpc.Metadata): Promise<IPPolicyRule>;
/**
 * Used for enforcement of IP policies in endpoint.resolver (ip policy
 * pointcfg and endpoint ip restriction).  It returns a data-optimized
 * representation of the rules to enforce. For other ip restrictions, use the
 * Allows method on the IPRestriction service.
 */
GetEnforceable(request: DeepPartial<IPPolicyRulesGetEnforceableReq>,metadata?: grpc.Metadata): Promise<IPPolicyRulesGetEnforceableResp>;
/** Mutations */
Create(request: DeepPartial<IPPolicyRuleCreateReq>,metadata?: grpc.Metadata): Promise<IPPolicyRule>;
Update(request: DeepPartial<IPPolicyRuleUpdateReq>,metadata?: grpc.Metadata): Promise<IPPolicyRule>;
Delete(request: DeepPartial<IPPolicyRuleDeleteReq>,metadata?: grpc.Metadata): Promise<IPPolicyRule>;
/**
 * Replication
 * Currently used by EPR to trigger endpoint reloads even though it does not
 * store these records (it calls GetEnforceable instead).
 */
Sync(request: DeepPartial<SyncReq>,metadata?: grpc.Metadata): Promise<StreamItem>;
}

export class IPPolicyRulesClientImpl implements IPPolicyRules {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.GetByAccount = this.GetByAccount.bind(this);this.GetByPolicyID = this.GetByPolicyID.bind(this);this.GetByID = this.GetByID.bind(this);this.GetEnforceable = this.GetEnforceable.bind(this);this.Create = this.Create.bind(this);this.Update = this.Update.bind(this);this.Delete = this.Delete.bind(this);this.Sync = this.Sync.bind(this);}

    GetByAccount(
      request: DeepPartial<IPPolicyRuleGetByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<IPPolicyRuleGetResp> {
      return this.rpc.unary(
        IPPolicyRulesGetByAccountDesc,
        IPPolicyRuleGetByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByPolicyID(
      request: DeepPartial<IPPolicyRuleGetByPolicyIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<IPPolicyRuleGetResp> {
      return this.rpc.unary(
        IPPolicyRulesGetByPolicyIDDesc,
        IPPolicyRuleGetByPolicyIDReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByID(
      request: DeepPartial<IPPolicyRuleGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<IPPolicyRule> {
      return this.rpc.unary(
        IPPolicyRulesGetByIDDesc,
        IPPolicyRuleGetByIDReq.fromPartial(request),
        metadata,
      );
    }
  
    GetEnforceable(
      request: DeepPartial<IPPolicyRulesGetEnforceableReq>,
      metadata?: grpc.Metadata,
    ): Promise<IPPolicyRulesGetEnforceableResp> {
      return this.rpc.unary(
        IPPolicyRulesGetEnforceableDesc,
        IPPolicyRulesGetEnforceableReq.fromPartial(request),
        metadata,
      );
    }
  
    Create(
      request: DeepPartial<IPPolicyRuleCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<IPPolicyRule> {
      return this.rpc.unary(
        IPPolicyRulesCreateDesc,
        IPPolicyRuleCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<IPPolicyRuleUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<IPPolicyRule> {
      return this.rpc.unary(
        IPPolicyRulesUpdateDesc,
        IPPolicyRuleUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<IPPolicyRuleDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<IPPolicyRule> {
      return this.rpc.unary(
        IPPolicyRulesDeleteDesc,
        IPPolicyRuleDeleteReq.fromPartial(request),
        metadata,
      );
    }
  
    Sync(
      request: DeepPartial<SyncReq>,
      metadata?: grpc.Metadata,
    ): Promise<StreamItem> {
      return this.rpc.invoke(
        IPPolicyRulesSyncDesc,
        request,
        metadata,
      );
    }
  }

export const IPPolicyRulesDesc = {
      serviceName: "rpx.IPPolicyRules",
    };

export const IPPolicyRulesGetByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "GetByAccount",
      service: IPPolicyRulesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPPolicyRuleGetByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...IPPolicyRuleGetResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPPolicyRulesGetByPolicyIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByPolicyID",
      service: IPPolicyRulesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPPolicyRuleGetByPolicyIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...IPPolicyRuleGetResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPPolicyRulesGetByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByID",
      service: IPPolicyRulesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPPolicyRuleGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...IPPolicyRule.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPPolicyRulesGetEnforceableDesc: UnaryMethodDefinitionish = {
      methodName: "GetEnforceable",
      service: IPPolicyRulesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPPolicyRulesGetEnforceableReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...IPPolicyRulesGetEnforceableResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPPolicyRulesCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: IPPolicyRulesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPPolicyRuleCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...IPPolicyRule.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPPolicyRulesUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: IPPolicyRulesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPPolicyRuleUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...IPPolicyRule.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPPolicyRulesDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: IPPolicyRulesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPPolicyRuleDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...IPPolicyRule.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPPolicyRulesSyncDesc: UnaryMethodDefinitionish = {
      methodName: "Sync",
      service: IPPolicyRulesDesc,
      requestStream: false,
      responseStream: true,
      requestType: {
    serializeBinary() {
      return SyncReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...StreamItem.decode(data), toObject() { return this; } };
    }
  } as any,
    };

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> { requestStream: any; responseStream: any; }

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
unary<T extends UnaryMethodDefinitionish>(
      methodDesc: T,
      request: any,
      metadata: grpc.Metadata | undefined,
    ): Promise<any>;
invoke(..._: any[]): Promise<any>;
}

export class GrpcWebImpl {
      private host: string;
      private options: 
    {
      transport?: grpc.TransportFactory,
      streamingTransport?: grpc.TransportFactory,
      debug?: boolean,
      metadata?: grpc.Metadata,
    }
  ;
      
      constructor(host: string, options: 
    {
      transport?: grpc.TransportFactory,
      streamingTransport?: grpc.TransportFactory,
      debug?: boolean,
      metadata?: grpc.Metadata,
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
          ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
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
  
    invoke(..._: any[]): Promise<any> {
      throw new Error('Unsupported.');
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





type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
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
          throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER")
        }
        return long.toNumber();
      }



if (_m0.util.Long !== Long) {
        _m0.util.Long = Long as any;
        _m0.configure();
      }

