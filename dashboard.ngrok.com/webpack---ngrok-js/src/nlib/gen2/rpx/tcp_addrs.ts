// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from 'long';
import { grpc } from '@improbable-eng/grpc-web';
import _m0 from 'protobufjs/minimal';

import { TCPAddr } from '../rpx/model_tcp_addr';
import { Empty, ID, OptString } from '../pb/types';
import { StreamItem, SyncReq } from '../rpx/stream';
import { BrowserHeaders } from 'browser-headers';

import { Paging } from '../rpx/model';

export const protobufPackage = 'rpx';

export interface TCPAddrsGetByAddrReq {
addr: string,
}

export interface TCPAddrsGetByIDReq {
id: ID | undefined,
accountId: number,
}

export interface TCPAddrsScopedGetBySIDReq {
sid: string,
accountId: number,
}

export interface TCPAddrsGetByAccountReq {
accountId: number,
paging: Paging | undefined,
}

export interface TCPAddrsGetByAccountResp {
addrs: TCPAddr[],
next: Paging | undefined,
}

export interface TCPAddrsAssignReq {
legacyAccountId: number,
regionId: string,
description: string,
metadata: string,
endpointConfigurationId: ID | undefined,
}

export interface TCPAddrsReleaseReq {
addrId: ID | undefined,
}

export interface TCPAddrsReleaseByAccountReq {
accountId: number,
}

export interface TCPAddrsUpdateReq {
description: OptString | undefined,
metadata: OptString | undefined,
addrId: ID | undefined,
endpointConfigurationId: ID | undefined,
}

export interface TCPAddrsDeleteNestedReq {
addrId: ID | undefined,
fields: TCPAddrsDeleteNestedReq_Field[],
}

export enum TCPAddrsDeleteNestedReq_Field {
UnknownField = 0,
EndpointConfigurationID = 1,
}

export interface TCPAddrsCreateReq {
regionId: string,
addrs: string[],
}

export interface TCPAddrsCreateRangeIfNotExistsReq {
regionId: string,
hostname: string,
lowPort: number,
highPort: number,
}

export interface TCPAddrsSearchReq {
query: string,
}

export interface TCPAddrsSearchResp {
addrs: TCPAddr[],
}

const baseTCPAddrsGetByAddrReq: object = { addr: "" };

export const TCPAddrsGetByAddrReq = {
            encode(
      message: TCPAddrsGetByAddrReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.addr !== "") {
          writer.uint32(10).string(message.addr);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): TCPAddrsGetByAddrReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseTCPAddrsGetByAddrReq } as TCPAddrsGetByAddrReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.addr = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<TCPAddrsGetByAddrReq>): TCPAddrsGetByAddrReq {
      const message = { ...baseTCPAddrsGetByAddrReq } as TCPAddrsGetByAddrReq;
if (object.addr !== undefined && object.addr !== null) {
message.addr = object.addr;
} else {
message.addr = ""
}
return message;
}
          };

const baseTCPAddrsGetByIDReq: object = { accountId: 0 };

export const TCPAddrsGetByIDReq = {
            encode(
      message: TCPAddrsGetByIDReq,
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
    ): TCPAddrsGetByIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseTCPAddrsGetByIDReq } as TCPAddrsGetByIDReq;
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

fromPartial(object: DeepPartial<TCPAddrsGetByIDReq>): TCPAddrsGetByIDReq {
      const message = { ...baseTCPAddrsGetByIDReq } as TCPAddrsGetByIDReq;
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

const baseTCPAddrsScopedGetBySIDReq: object = { sid: "",accountId: 0 };

export const TCPAddrsScopedGetBySIDReq = {
            encode(
      message: TCPAddrsScopedGetBySIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.sid !== "") {
          writer.uint32(10).string(message.sid);
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): TCPAddrsScopedGetBySIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseTCPAddrsScopedGetBySIDReq } as TCPAddrsScopedGetBySIDReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.sid = reader.string();
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

fromPartial(object: DeepPartial<TCPAddrsScopedGetBySIDReq>): TCPAddrsScopedGetBySIDReq {
      const message = { ...baseTCPAddrsScopedGetBySIDReq } as TCPAddrsScopedGetBySIDReq;
if (object.sid !== undefined && object.sid !== null) {
message.sid = object.sid;
} else {
message.sid = ""
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseTCPAddrsGetByAccountReq: object = { accountId: 0 };

export const TCPAddrsGetByAccountReq = {
            encode(
      message: TCPAddrsGetByAccountReq,
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
    ): TCPAddrsGetByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseTCPAddrsGetByAccountReq } as TCPAddrsGetByAccountReq;
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

fromPartial(object: DeepPartial<TCPAddrsGetByAccountReq>): TCPAddrsGetByAccountReq {
      const message = { ...baseTCPAddrsGetByAccountReq } as TCPAddrsGetByAccountReq;
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

const baseTCPAddrsGetByAccountResp: object = {  };

export const TCPAddrsGetByAccountResp = {
            encode(
      message: TCPAddrsGetByAccountResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.addrs) {
            TCPAddr.encode(v!, writer.uint32(10).fork()).ldelim();
          }
if (message.next !== undefined) {
          Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): TCPAddrsGetByAccountResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseTCPAddrsGetByAccountResp } as TCPAddrsGetByAccountResp;
message.addrs = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.addrs.push(TCPAddr.decode(reader, reader.uint32()));
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

fromPartial(object: DeepPartial<TCPAddrsGetByAccountResp>): TCPAddrsGetByAccountResp {
      const message = { ...baseTCPAddrsGetByAccountResp } as TCPAddrsGetByAccountResp;
message.addrs = [];
if (object.addrs !== undefined && object.addrs !== null) {
for (const e of object.addrs) {
            message.addrs.push(TCPAddr.fromPartial(e));
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

const baseTCPAddrsAssignReq: object = { legacyAccountId: 0,regionId: "",description: "",metadata: "" };

export const TCPAddrsAssignReq = {
            encode(
      message: TCPAddrsAssignReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.legacyAccountId !== 0) {
          writer.uint32(56).int64(message.legacyAccountId);
        }
if (message.regionId !== "") {
          writer.uint32(18).string(message.regionId);
        }
if (message.description !== "") {
          writer.uint32(26).string(message.description);
        }
if (message.metadata !== "") {
          writer.uint32(34).string(message.metadata);
        }
if (message.endpointConfigurationId !== undefined) {
          ID.encode(message.endpointConfigurationId, writer.uint32(50).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): TCPAddrsAssignReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseTCPAddrsAssignReq } as TCPAddrsAssignReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 7:
message.legacyAccountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.regionId = reader.string();
break;
case 3:
message.description = reader.string();
break;
case 4:
message.metadata = reader.string();
break;
case 6:
message.endpointConfigurationId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<TCPAddrsAssignReq>): TCPAddrsAssignReq {
      const message = { ...baseTCPAddrsAssignReq } as TCPAddrsAssignReq;
if (object.legacyAccountId !== undefined && object.legacyAccountId !== null) {
message.legacyAccountId = object.legacyAccountId;
} else {
message.legacyAccountId = 0
}
if (object.regionId !== undefined && object.regionId !== null) {
message.regionId = object.regionId;
} else {
message.regionId = ""
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
if (object.endpointConfigurationId !== undefined && object.endpointConfigurationId !== null) {
message.endpointConfigurationId = ID.fromPartial(object.endpointConfigurationId);
} else {
message.endpointConfigurationId = undefined
}
return message;
}
          };

const baseTCPAddrsReleaseReq: object = {  };

export const TCPAddrsReleaseReq = {
            encode(
      message: TCPAddrsReleaseReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.addrId !== undefined) {
          ID.encode(message.addrId, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): TCPAddrsReleaseReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseTCPAddrsReleaseReq } as TCPAddrsReleaseReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 2:
message.addrId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<TCPAddrsReleaseReq>): TCPAddrsReleaseReq {
      const message = { ...baseTCPAddrsReleaseReq } as TCPAddrsReleaseReq;
if (object.addrId !== undefined && object.addrId !== null) {
message.addrId = ID.fromPartial(object.addrId);
} else {
message.addrId = undefined
}
return message;
}
          };

const baseTCPAddrsReleaseByAccountReq: object = { accountId: 0 };

export const TCPAddrsReleaseByAccountReq = {
            encode(
      message: TCPAddrsReleaseByAccountReq,
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
    ): TCPAddrsReleaseByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseTCPAddrsReleaseByAccountReq } as TCPAddrsReleaseByAccountReq;
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

fromPartial(object: DeepPartial<TCPAddrsReleaseByAccountReq>): TCPAddrsReleaseByAccountReq {
      const message = { ...baseTCPAddrsReleaseByAccountReq } as TCPAddrsReleaseByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseTCPAddrsUpdateReq: object = {  };

export const TCPAddrsUpdateReq = {
            encode(
      message: TCPAddrsUpdateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.description !== undefined) {
          OptString.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
if (message.metadata !== undefined) {
          OptString.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
if (message.addrId !== undefined) {
          ID.encode(message.addrId, writer.uint32(42).fork()).ldelim();
        }
if (message.endpointConfigurationId !== undefined) {
          ID.encode(message.endpointConfigurationId, writer.uint32(50).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): TCPAddrsUpdateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseTCPAddrsUpdateReq } as TCPAddrsUpdateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.description = OptString.decode(reader, reader.uint32());
break;
case 2:
message.metadata = OptString.decode(reader, reader.uint32());
break;
case 5:
message.addrId = ID.decode(reader, reader.uint32());
break;
case 6:
message.endpointConfigurationId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<TCPAddrsUpdateReq>): TCPAddrsUpdateReq {
      const message = { ...baseTCPAddrsUpdateReq } as TCPAddrsUpdateReq;
if (object.description !== undefined && object.description !== null) {
message.description = OptString.fromPartial(object.description);
} else {
message.description = undefined
}
if (object.metadata !== undefined && object.metadata !== null) {
message.metadata = OptString.fromPartial(object.metadata);
} else {
message.metadata = undefined
}
if (object.addrId !== undefined && object.addrId !== null) {
message.addrId = ID.fromPartial(object.addrId);
} else {
message.addrId = undefined
}
if (object.endpointConfigurationId !== undefined && object.endpointConfigurationId !== null) {
message.endpointConfigurationId = ID.fromPartial(object.endpointConfigurationId);
} else {
message.endpointConfigurationId = undefined
}
return message;
}
          };

const baseTCPAddrsDeleteNestedReq: object = { fields: 0 };

export const TCPAddrsDeleteNestedReq = {
            encode(
      message: TCPAddrsDeleteNestedReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.addrId !== undefined) {
          ID.encode(message.addrId, writer.uint32(10).fork()).ldelim();
        }
writer.uint32(18).fork();
          for (const v of message.fields) {
            writer.int32(v);
          }
          writer.ldelim();
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): TCPAddrsDeleteNestedReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseTCPAddrsDeleteNestedReq } as TCPAddrsDeleteNestedReq;
message.fields = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.addrId = ID.decode(reader, reader.uint32());
break;
case 2:
if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fields.push(reader.int32() as any);
            }
          } else {
            message.fields.push(reader.int32() as any);
          }
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<TCPAddrsDeleteNestedReq>): TCPAddrsDeleteNestedReq {
      const message = { ...baseTCPAddrsDeleteNestedReq } as TCPAddrsDeleteNestedReq;
message.fields = [];
if (object.addrId !== undefined && object.addrId !== null) {
message.addrId = ID.fromPartial(object.addrId);
} else {
message.addrId = undefined
}
if (object.fields !== undefined && object.fields !== null) {
for (const e of object.fields) {
            message.fields.push(e);
          }
}
return message;
}
          };

const baseTCPAddrsCreateReq: object = { regionId: "",addrs: "" };

export const TCPAddrsCreateReq = {
            encode(
      message: TCPAddrsCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.regionId !== "") {
          writer.uint32(10).string(message.regionId);
        }
for (const v of message.addrs) {
            writer.uint32(18).string(v!);
          }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): TCPAddrsCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseTCPAddrsCreateReq } as TCPAddrsCreateReq;
message.addrs = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.regionId = reader.string();
break;
case 2:
message.addrs.push(reader.string());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<TCPAddrsCreateReq>): TCPAddrsCreateReq {
      const message = { ...baseTCPAddrsCreateReq } as TCPAddrsCreateReq;
message.addrs = [];
if (object.regionId !== undefined && object.regionId !== null) {
message.regionId = object.regionId;
} else {
message.regionId = ""
}
if (object.addrs !== undefined && object.addrs !== null) {
for (const e of object.addrs) {
            message.addrs.push(e);
          }
}
return message;
}
          };

const baseTCPAddrsCreateRangeIfNotExistsReq: object = { regionId: "",hostname: "",lowPort: 0,highPort: 0 };

export const TCPAddrsCreateRangeIfNotExistsReq = {
            encode(
      message: TCPAddrsCreateRangeIfNotExistsReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.regionId !== "") {
          writer.uint32(10).string(message.regionId);
        }
if (message.hostname !== "") {
          writer.uint32(18).string(message.hostname);
        }
if (message.lowPort !== 0) {
          writer.uint32(24).int64(message.lowPort);
        }
if (message.highPort !== 0) {
          writer.uint32(32).int64(message.highPort);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): TCPAddrsCreateRangeIfNotExistsReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseTCPAddrsCreateRangeIfNotExistsReq } as TCPAddrsCreateRangeIfNotExistsReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.regionId = reader.string();
break;
case 2:
message.hostname = reader.string();
break;
case 3:
message.lowPort = longToNumber(reader.int64() as Long);
break;
case 4:
message.highPort = longToNumber(reader.int64() as Long);
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<TCPAddrsCreateRangeIfNotExistsReq>): TCPAddrsCreateRangeIfNotExistsReq {
      const message = { ...baseTCPAddrsCreateRangeIfNotExistsReq } as TCPAddrsCreateRangeIfNotExistsReq;
if (object.regionId !== undefined && object.regionId !== null) {
message.regionId = object.regionId;
} else {
message.regionId = ""
}
if (object.hostname !== undefined && object.hostname !== null) {
message.hostname = object.hostname;
} else {
message.hostname = ""
}
if (object.lowPort !== undefined && object.lowPort !== null) {
message.lowPort = object.lowPort;
} else {
message.lowPort = 0
}
if (object.highPort !== undefined && object.highPort !== null) {
message.highPort = object.highPort;
} else {
message.highPort = 0
}
return message;
}
          };

const baseTCPAddrsSearchReq: object = { query: "" };

export const TCPAddrsSearchReq = {
            encode(
      message: TCPAddrsSearchReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.query !== "") {
          writer.uint32(10).string(message.query);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): TCPAddrsSearchReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseTCPAddrsSearchReq } as TCPAddrsSearchReq;
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

fromPartial(object: DeepPartial<TCPAddrsSearchReq>): TCPAddrsSearchReq {
      const message = { ...baseTCPAddrsSearchReq } as TCPAddrsSearchReq;
if (object.query !== undefined && object.query !== null) {
message.query = object.query;
} else {
message.query = ""
}
return message;
}
          };

const baseTCPAddrsSearchResp: object = {  };

export const TCPAddrsSearchResp = {
            encode(
      message: TCPAddrsSearchResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.addrs) {
            TCPAddr.encode(v!, writer.uint32(10).fork()).ldelim();
          }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): TCPAddrsSearchResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseTCPAddrsSearchResp } as TCPAddrsSearchResp;
message.addrs = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.addrs.push(TCPAddr.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<TCPAddrsSearchResp>): TCPAddrsSearchResp {
      const message = { ...baseTCPAddrsSearchResp } as TCPAddrsSearchResp;
message.addrs = [];
if (object.addrs !== undefined && object.addrs !== null) {
for (const e of object.addrs) {
            message.addrs.push(TCPAddr.fromPartial(e));
          }
}
return message;
}
          };

export interface TCPAddrs {
/** Read operations */
GetByAddr(request: DeepPartial<TCPAddrsGetByAddrReq>,metadata?: grpc.Metadata): Promise<TCPAddr>;
GetByID(request: DeepPartial<TCPAddrsGetByIDReq>,metadata?: grpc.Metadata): Promise<TCPAddr>;
ScopedGetBySID(request: DeepPartial<TCPAddrsScopedGetBySIDReq>,metadata?: grpc.Metadata): Promise<TCPAddr>;
GetByAccount(request: DeepPartial<TCPAddrsGetByAccountReq>,metadata?: grpc.Metadata): Promise<TCPAddrsGetByAccountResp>;
Search(request: DeepPartial<TCPAddrsSearchReq>,metadata?: grpc.Metadata): Promise<TCPAddrsSearchResp>;
/** Mutations */
Assign(request: DeepPartial<TCPAddrsAssignReq>,metadata?: grpc.Metadata): Promise<TCPAddr>;
Release(request: DeepPartial<TCPAddrsReleaseReq>,metadata?: grpc.Metadata): Promise<TCPAddr>;
ReleaseByAccount(request: DeepPartial<TCPAddrsReleaseByAccountReq>,metadata?: grpc.Metadata): Promise<Empty>;
Update(request: DeepPartial<TCPAddrsUpdateReq>,metadata?: grpc.Metadata): Promise<TCPAddr>;
DeleteNested(request: DeepPartial<TCPAddrsDeleteNestedReq>,metadata?: grpc.Metadata): Promise<TCPAddr>;
/** NB: these creates are used for environment bootstrapping only. you may be looking for Assign */
Create(request: DeepPartial<TCPAddrsCreateReq>,metadata?: grpc.Metadata): Promise<Empty>;
CreateRangeIfNotExists(request: DeepPartial<TCPAddrsCreateRangeIfNotExistsReq>,metadata?: grpc.Metadata): Promise<Empty>;
/** Replication */
Sync(request: DeepPartial<SyncReq>,metadata?: grpc.Metadata): Promise<StreamItem>;
}

export class TCPAddrsClientImpl implements TCPAddrs {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.GetByAddr = this.GetByAddr.bind(this);this.GetByID = this.GetByID.bind(this);this.ScopedGetBySID = this.ScopedGetBySID.bind(this);this.GetByAccount = this.GetByAccount.bind(this);this.Search = this.Search.bind(this);this.Assign = this.Assign.bind(this);this.Release = this.Release.bind(this);this.ReleaseByAccount = this.ReleaseByAccount.bind(this);this.Update = this.Update.bind(this);this.DeleteNested = this.DeleteNested.bind(this);this.Create = this.Create.bind(this);this.CreateRangeIfNotExists = this.CreateRangeIfNotExists.bind(this);this.Sync = this.Sync.bind(this);}

    GetByAddr(
      request: DeepPartial<TCPAddrsGetByAddrReq>,
      metadata?: grpc.Metadata,
    ): Promise<TCPAddr> {
      return this.rpc.unary(
        TCPAddrsGetByAddrDesc,
        TCPAddrsGetByAddrReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByID(
      request: DeepPartial<TCPAddrsGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<TCPAddr> {
      return this.rpc.unary(
        TCPAddrsGetByIDDesc,
        TCPAddrsGetByIDReq.fromPartial(request),
        metadata,
      );
    }
  
    ScopedGetBySID(
      request: DeepPartial<TCPAddrsScopedGetBySIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<TCPAddr> {
      return this.rpc.unary(
        TCPAddrsScopedGetBySIDDesc,
        TCPAddrsScopedGetBySIDReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByAccount(
      request: DeepPartial<TCPAddrsGetByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<TCPAddrsGetByAccountResp> {
      return this.rpc.unary(
        TCPAddrsGetByAccountDesc,
        TCPAddrsGetByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    Search(
      request: DeepPartial<TCPAddrsSearchReq>,
      metadata?: grpc.Metadata,
    ): Promise<TCPAddrsSearchResp> {
      return this.rpc.unary(
        TCPAddrsSearchDesc,
        TCPAddrsSearchReq.fromPartial(request),
        metadata,
      );
    }
  
    Assign(
      request: DeepPartial<TCPAddrsAssignReq>,
      metadata?: grpc.Metadata,
    ): Promise<TCPAddr> {
      return this.rpc.unary(
        TCPAddrsAssignDesc,
        TCPAddrsAssignReq.fromPartial(request),
        metadata,
      );
    }
  
    Release(
      request: DeepPartial<TCPAddrsReleaseReq>,
      metadata?: grpc.Metadata,
    ): Promise<TCPAddr> {
      return this.rpc.unary(
        TCPAddrsReleaseDesc,
        TCPAddrsReleaseReq.fromPartial(request),
        metadata,
      );
    }
  
    ReleaseByAccount(
      request: DeepPartial<TCPAddrsReleaseByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        TCPAddrsReleaseByAccountDesc,
        TCPAddrsReleaseByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<TCPAddrsUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<TCPAddr> {
      return this.rpc.unary(
        TCPAddrsUpdateDesc,
        TCPAddrsUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteNested(
      request: DeepPartial<TCPAddrsDeleteNestedReq>,
      metadata?: grpc.Metadata,
    ): Promise<TCPAddr> {
      return this.rpc.unary(
        TCPAddrsDeleteNestedDesc,
        TCPAddrsDeleteNestedReq.fromPartial(request),
        metadata,
      );
    }
  
    Create(
      request: DeepPartial<TCPAddrsCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        TCPAddrsCreateDesc,
        TCPAddrsCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    CreateRangeIfNotExists(
      request: DeepPartial<TCPAddrsCreateRangeIfNotExistsReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        TCPAddrsCreateRangeIfNotExistsDesc,
        TCPAddrsCreateRangeIfNotExistsReq.fromPartial(request),
        metadata,
      );
    }
  
    Sync(
      request: DeepPartial<SyncReq>,
      metadata?: grpc.Metadata,
    ): Promise<StreamItem> {
      return this.rpc.invoke(
        TCPAddrsSyncDesc,
        request,
        metadata,
      );
    }
  }

export const TCPAddrsDesc = {
      serviceName: "rpx.TCPAddrs",
    };

export const TCPAddrsGetByAddrDesc: UnaryMethodDefinitionish = {
      methodName: "GetByAddr",
      service: TCPAddrsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return TCPAddrsGetByAddrReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...TCPAddr.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TCPAddrsGetByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByID",
      service: TCPAddrsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return TCPAddrsGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...TCPAddr.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TCPAddrsScopedGetBySIDDesc: UnaryMethodDefinitionish = {
      methodName: "ScopedGetBySID",
      service: TCPAddrsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return TCPAddrsScopedGetBySIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...TCPAddr.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TCPAddrsGetByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "GetByAccount",
      service: TCPAddrsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return TCPAddrsGetByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...TCPAddrsGetByAccountResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TCPAddrsSearchDesc: UnaryMethodDefinitionish = {
      methodName: "Search",
      service: TCPAddrsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return TCPAddrsSearchReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...TCPAddrsSearchResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TCPAddrsAssignDesc: UnaryMethodDefinitionish = {
      methodName: "Assign",
      service: TCPAddrsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return TCPAddrsAssignReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...TCPAddr.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TCPAddrsReleaseDesc: UnaryMethodDefinitionish = {
      methodName: "Release",
      service: TCPAddrsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return TCPAddrsReleaseReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...TCPAddr.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TCPAddrsReleaseByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "ReleaseByAccount",
      service: TCPAddrsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return TCPAddrsReleaseByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TCPAddrsUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: TCPAddrsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return TCPAddrsUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...TCPAddr.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TCPAddrsDeleteNestedDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteNested",
      service: TCPAddrsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return TCPAddrsDeleteNestedReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...TCPAddr.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TCPAddrsCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: TCPAddrsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return TCPAddrsCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TCPAddrsCreateRangeIfNotExistsDesc: UnaryMethodDefinitionish = {
      methodName: "CreateRangeIfNotExists",
      service: TCPAddrsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return TCPAddrsCreateRangeIfNotExistsReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TCPAddrsSyncDesc: UnaryMethodDefinitionish = {
      methodName: "Sync",
      service: TCPAddrsDesc,
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

