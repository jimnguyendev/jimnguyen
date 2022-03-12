// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from 'long';
import { grpc } from '@improbable-eng/grpc-web';
import _m0 from 'protobufjs/minimal';
import { IPRestriction_Type, IPRestriction, Paging } from '../rpx/model';

import { Empty, ID, OptString, OptBool } from '../pb/types';
import { StreamItem, SyncReq } from '../rpx/stream';
import { BrowserHeaders } from 'browser-headers';


export const protobufPackage = 'rpx';

export interface IPRestrictionsGetByAccountReq {
accountId: number,
paging: Paging | undefined,
}

export interface IPRestrictionsGetByTypeReq {
accountId: number,
type: IPRestriction_Type,
}

export interface IPRestrictionsGetByIDReq {
id: ID | undefined,
accountId: number,
}

export interface IPRestrictionList {
ipRestrictions: IPRestriction[],
next: Paging | undefined,
}

export interface IPRestrictionsUpdateReq {
id: ID | undefined,
accountId: number,
metadata: OptString | undefined,
description: OptString | undefined,
ipPolicyIds: ID[],
enforced: OptBool | undefined,
}

export interface IPRestrictionsCreateReq {
accountId: number,
type: IPRestriction_Type,
metadata: string,
description: string,
ipPolicyIds: ID[],
enforced: boolean,
}

export interface IPRestrictionsDeleteReq {
accountId: number,
type: IPRestriction_Type,
}

export interface IPRestrictionsDeleteByAccountReq {
accountId: number,
}

export interface IPRestrictionsDeleteByIDReq {
accountId: number,
id: ID | undefined,
}

export interface IPRestrictionsAllowsReq {
accountId: number,
type: IPRestriction_Type,
ip: string,
}

export interface IPRestrictionsAllowsResp {
allowed: boolean,
enforced: boolean,
}

const baseIPRestrictionsGetByAccountReq: object = { accountId: 0 };

export const IPRestrictionsGetByAccountReq = {
            encode(
      message: IPRestrictionsGetByAccountReq,
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
    ): IPRestrictionsGetByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPRestrictionsGetByAccountReq } as IPRestrictionsGetByAccountReq;
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

fromPartial(object: DeepPartial<IPRestrictionsGetByAccountReq>): IPRestrictionsGetByAccountReq {
      const message = { ...baseIPRestrictionsGetByAccountReq } as IPRestrictionsGetByAccountReq;
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

const baseIPRestrictionsGetByTypeReq: object = { accountId: 0,type: 0 };

export const IPRestrictionsGetByTypeReq = {
            encode(
      message: IPRestrictionsGetByTypeReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.type !== 0) {
          writer.uint32(16).int32(message.type);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPRestrictionsGetByTypeReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPRestrictionsGetByTypeReq } as IPRestrictionsGetByTypeReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.type = reader.int32() as any;
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPRestrictionsGetByTypeReq>): IPRestrictionsGetByTypeReq {
      const message = { ...baseIPRestrictionsGetByTypeReq } as IPRestrictionsGetByTypeReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.type !== undefined && object.type !== null) {
message.type = object.type;
} else {
message.type = 0
}
return message;
}
          };

const baseIPRestrictionsGetByIDReq: object = { accountId: 0 };

export const IPRestrictionsGetByIDReq = {
            encode(
      message: IPRestrictionsGetByIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(58).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPRestrictionsGetByIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPRestrictionsGetByIDReq } as IPRestrictionsGetByIDReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 7:
message.id = ID.decode(reader, reader.uint32());
break;
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

fromPartial(object: DeepPartial<IPRestrictionsGetByIDReq>): IPRestrictionsGetByIDReq {
      const message = { ...baseIPRestrictionsGetByIDReq } as IPRestrictionsGetByIDReq;
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

const baseIPRestrictionList: object = {  };

export const IPRestrictionList = {
            encode(
      message: IPRestrictionList,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.ipRestrictions) {
            IPRestriction.encode(v!, writer.uint32(10).fork()).ldelim();
          }
if (message.next !== undefined) {
          Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPRestrictionList {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPRestrictionList } as IPRestrictionList;
message.ipRestrictions = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.ipRestrictions.push(IPRestriction.decode(reader, reader.uint32()));
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

fromPartial(object: DeepPartial<IPRestrictionList>): IPRestrictionList {
      const message = { ...baseIPRestrictionList } as IPRestrictionList;
message.ipRestrictions = [];
if (object.ipRestrictions !== undefined && object.ipRestrictions !== null) {
for (const e of object.ipRestrictions) {
            message.ipRestrictions.push(IPRestriction.fromPartial(e));
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

const baseIPRestrictionsUpdateReq: object = { accountId: 0 };

export const IPRestrictionsUpdateReq = {
            encode(
      message: IPRestrictionsUpdateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(58).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.metadata !== undefined) {
          OptString.encode(message.metadata, writer.uint32(26).fork()).ldelim();
        }
if (message.description !== undefined) {
          OptString.encode(message.description, writer.uint32(34).fork()).ldelim();
        }
for (const v of message.ipPolicyIds) {
            ID.encode(v!, writer.uint32(42).fork()).ldelim();
          }
if (message.enforced !== undefined) {
          OptBool.encode(message.enforced, writer.uint32(50).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPRestrictionsUpdateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPRestrictionsUpdateReq } as IPRestrictionsUpdateReq;
message.ipPolicyIds = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 7:
message.id = ID.decode(reader, reader.uint32());
break;
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 3:
message.metadata = OptString.decode(reader, reader.uint32());
break;
case 4:
message.description = OptString.decode(reader, reader.uint32());
break;
case 5:
message.ipPolicyIds.push(ID.decode(reader, reader.uint32()));
break;
case 6:
message.enforced = OptBool.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPRestrictionsUpdateReq>): IPRestrictionsUpdateReq {
      const message = { ...baseIPRestrictionsUpdateReq } as IPRestrictionsUpdateReq;
message.ipPolicyIds = [];
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
if (object.ipPolicyIds !== undefined && object.ipPolicyIds !== null) {
for (const e of object.ipPolicyIds) {
            message.ipPolicyIds.push(ID.fromPartial(e));
          }
}
if (object.enforced !== undefined && object.enforced !== null) {
message.enforced = OptBool.fromPartial(object.enforced);
} else {
message.enforced = undefined
}
return message;
}
          };

const baseIPRestrictionsCreateReq: object = { accountId: 0,type: 0,metadata: "",description: "",enforced: false };

export const IPRestrictionsCreateReq = {
            encode(
      message: IPRestrictionsCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.type !== 0) {
          writer.uint32(16).int32(message.type);
        }
if (message.metadata !== "") {
          writer.uint32(26).string(message.metadata);
        }
if (message.description !== "") {
          writer.uint32(34).string(message.description);
        }
for (const v of message.ipPolicyIds) {
            ID.encode(v!, writer.uint32(42).fork()).ldelim();
          }
if (message.enforced === true) {
          writer.uint32(48).bool(message.enforced);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPRestrictionsCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPRestrictionsCreateReq } as IPRestrictionsCreateReq;
message.ipPolicyIds = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.type = reader.int32() as any;
break;
case 3:
message.metadata = reader.string();
break;
case 4:
message.description = reader.string();
break;
case 5:
message.ipPolicyIds.push(ID.decode(reader, reader.uint32()));
break;
case 6:
message.enforced = reader.bool();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPRestrictionsCreateReq>): IPRestrictionsCreateReq {
      const message = { ...baseIPRestrictionsCreateReq } as IPRestrictionsCreateReq;
message.ipPolicyIds = [];
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.type !== undefined && object.type !== null) {
message.type = object.type;
} else {
message.type = 0
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
if (object.ipPolicyIds !== undefined && object.ipPolicyIds !== null) {
for (const e of object.ipPolicyIds) {
            message.ipPolicyIds.push(ID.fromPartial(e));
          }
}
if (object.enforced !== undefined && object.enforced !== null) {
message.enforced = object.enforced;
} else {
message.enforced = false
}
return message;
}
          };

const baseIPRestrictionsDeleteReq: object = { accountId: 0,type: 0 };

export const IPRestrictionsDeleteReq = {
            encode(
      message: IPRestrictionsDeleteReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.type !== 0) {
          writer.uint32(16).int32(message.type);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPRestrictionsDeleteReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPRestrictionsDeleteReq } as IPRestrictionsDeleteReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.type = reader.int32() as any;
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPRestrictionsDeleteReq>): IPRestrictionsDeleteReq {
      const message = { ...baseIPRestrictionsDeleteReq } as IPRestrictionsDeleteReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.type !== undefined && object.type !== null) {
message.type = object.type;
} else {
message.type = 0
}
return message;
}
          };

const baseIPRestrictionsDeleteByAccountReq: object = { accountId: 0 };

export const IPRestrictionsDeleteByAccountReq = {
            encode(
      message: IPRestrictionsDeleteByAccountReq,
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
    ): IPRestrictionsDeleteByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPRestrictionsDeleteByAccountReq } as IPRestrictionsDeleteByAccountReq;
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

fromPartial(object: DeepPartial<IPRestrictionsDeleteByAccountReq>): IPRestrictionsDeleteByAccountReq {
      const message = { ...baseIPRestrictionsDeleteByAccountReq } as IPRestrictionsDeleteByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseIPRestrictionsDeleteByIDReq: object = { accountId: 0 };

export const IPRestrictionsDeleteByIDReq = {
            encode(
      message: IPRestrictionsDeleteByIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(58).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPRestrictionsDeleteByIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPRestrictionsDeleteByIDReq } as IPRestrictionsDeleteByIDReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 7:
message.id = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPRestrictionsDeleteByIDReq>): IPRestrictionsDeleteByIDReq {
      const message = { ...baseIPRestrictionsDeleteByIDReq } as IPRestrictionsDeleteByIDReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
return message;
}
          };

const baseIPRestrictionsAllowsReq: object = { accountId: 0,type: 0,ip: "" };

export const IPRestrictionsAllowsReq = {
            encode(
      message: IPRestrictionsAllowsReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.type !== 0) {
          writer.uint32(16).int32(message.type);
        }
if (message.ip !== "") {
          writer.uint32(26).string(message.ip);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPRestrictionsAllowsReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPRestrictionsAllowsReq } as IPRestrictionsAllowsReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.type = reader.int32() as any;
break;
case 3:
message.ip = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPRestrictionsAllowsReq>): IPRestrictionsAllowsReq {
      const message = { ...baseIPRestrictionsAllowsReq } as IPRestrictionsAllowsReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.type !== undefined && object.type !== null) {
message.type = object.type;
} else {
message.type = 0
}
if (object.ip !== undefined && object.ip !== null) {
message.ip = object.ip;
} else {
message.ip = ""
}
return message;
}
          };

const baseIPRestrictionsAllowsResp: object = { allowed: false,enforced: false };

export const IPRestrictionsAllowsResp = {
            encode(
      message: IPRestrictionsAllowsResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.allowed === true) {
          writer.uint32(8).bool(message.allowed);
        }
if (message.enforced === true) {
          writer.uint32(16).bool(message.enforced);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): IPRestrictionsAllowsResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseIPRestrictionsAllowsResp } as IPRestrictionsAllowsResp;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.allowed = reader.bool();
break;
case 2:
message.enforced = reader.bool();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<IPRestrictionsAllowsResp>): IPRestrictionsAllowsResp {
      const message = { ...baseIPRestrictionsAllowsResp } as IPRestrictionsAllowsResp;
if (object.allowed !== undefined && object.allowed !== null) {
message.allowed = object.allowed;
} else {
message.allowed = false
}
if (object.enforced !== undefined && object.enforced !== null) {
message.enforced = object.enforced;
} else {
message.enforced = false
}
return message;
}
          };

export interface IPRestrictions {
/** reads */
GetByAccount(request: DeepPartial<IPRestrictionsGetByAccountReq>,metadata?: grpc.Metadata): Promise<IPRestrictionList>;
GetByType(request: DeepPartial<IPRestrictionsGetByTypeReq>,metadata?: grpc.Metadata): Promise<IPRestriction>;
GetByID(request: DeepPartial<IPRestrictionsGetByIDReq>,metadata?: grpc.Metadata): Promise<IPRestriction>;
Allows(request: DeepPartial<IPRestrictionsAllowsReq>,metadata?: grpc.Metadata): Promise<IPRestrictionsAllowsResp>;
/** mutations */
Update(request: DeepPartial<IPRestrictionsUpdateReq>,metadata?: grpc.Metadata): Promise<IPRestriction>;
Create(request: DeepPartial<IPRestrictionsCreateReq>,metadata?: grpc.Metadata): Promise<IPRestriction>;
Delete(request: DeepPartial<IPRestrictionsDeleteReq>,metadata?: grpc.Metadata): Promise<Empty>;
DeleteByID(request: DeepPartial<IPRestrictionsDeleteByIDReq>,metadata?: grpc.Metadata): Promise<Empty>;
DeleteByAccount(request: DeepPartial<IPRestrictionsDeleteByAccountReq>,metadata?: grpc.Metadata): Promise<Empty>;
/** replication */
Sync(request: DeepPartial<SyncReq>,metadata?: grpc.Metadata): Promise<StreamItem>;
}

export class IPRestrictionsClientImpl implements IPRestrictions {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.GetByAccount = this.GetByAccount.bind(this);this.GetByType = this.GetByType.bind(this);this.GetByID = this.GetByID.bind(this);this.Allows = this.Allows.bind(this);this.Update = this.Update.bind(this);this.Create = this.Create.bind(this);this.Delete = this.Delete.bind(this);this.DeleteByID = this.DeleteByID.bind(this);this.DeleteByAccount = this.DeleteByAccount.bind(this);this.Sync = this.Sync.bind(this);}

    GetByAccount(
      request: DeepPartial<IPRestrictionsGetByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<IPRestrictionList> {
      return this.rpc.unary(
        IPRestrictionsGetByAccountDesc,
        IPRestrictionsGetByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByType(
      request: DeepPartial<IPRestrictionsGetByTypeReq>,
      metadata?: grpc.Metadata,
    ): Promise<IPRestriction> {
      return this.rpc.unary(
        IPRestrictionsGetByTypeDesc,
        IPRestrictionsGetByTypeReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByID(
      request: DeepPartial<IPRestrictionsGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<IPRestriction> {
      return this.rpc.unary(
        IPRestrictionsGetByIDDesc,
        IPRestrictionsGetByIDReq.fromPartial(request),
        metadata,
      );
    }
  
    Allows(
      request: DeepPartial<IPRestrictionsAllowsReq>,
      metadata?: grpc.Metadata,
    ): Promise<IPRestrictionsAllowsResp> {
      return this.rpc.unary(
        IPRestrictionsAllowsDesc,
        IPRestrictionsAllowsReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<IPRestrictionsUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<IPRestriction> {
      return this.rpc.unary(
        IPRestrictionsUpdateDesc,
        IPRestrictionsUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    Create(
      request: DeepPartial<IPRestrictionsCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<IPRestriction> {
      return this.rpc.unary(
        IPRestrictionsCreateDesc,
        IPRestrictionsCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<IPRestrictionsDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        IPRestrictionsDeleteDesc,
        IPRestrictionsDeleteReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteByID(
      request: DeepPartial<IPRestrictionsDeleteByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        IPRestrictionsDeleteByIDDesc,
        IPRestrictionsDeleteByIDReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteByAccount(
      request: DeepPartial<IPRestrictionsDeleteByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        IPRestrictionsDeleteByAccountDesc,
        IPRestrictionsDeleteByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    Sync(
      request: DeepPartial<SyncReq>,
      metadata?: grpc.Metadata,
    ): Promise<StreamItem> {
      return this.rpc.invoke(
        IPRestrictionsSyncDesc,
        request,
        metadata,
      );
    }
  }

export const IPRestrictionsDesc = {
      serviceName: "rpx.IPRestrictions",
    };

export const IPRestrictionsGetByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "GetByAccount",
      service: IPRestrictionsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPRestrictionsGetByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...IPRestrictionList.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPRestrictionsGetByTypeDesc: UnaryMethodDefinitionish = {
      methodName: "GetByType",
      service: IPRestrictionsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPRestrictionsGetByTypeReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...IPRestriction.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPRestrictionsGetByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByID",
      service: IPRestrictionsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPRestrictionsGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...IPRestriction.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPRestrictionsAllowsDesc: UnaryMethodDefinitionish = {
      methodName: "Allows",
      service: IPRestrictionsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPRestrictionsAllowsReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...IPRestrictionsAllowsResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPRestrictionsUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: IPRestrictionsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPRestrictionsUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...IPRestriction.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPRestrictionsCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: IPRestrictionsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPRestrictionsCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...IPRestriction.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPRestrictionsDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: IPRestrictionsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPRestrictionsDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPRestrictionsDeleteByIDDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteByID",
      service: IPRestrictionsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPRestrictionsDeleteByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPRestrictionsDeleteByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteByAccount",
      service: IPRestrictionsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return IPRestrictionsDeleteByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const IPRestrictionsSyncDesc: UnaryMethodDefinitionish = {
      methodName: "Sync",
      service: IPRestrictionsDesc,
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

