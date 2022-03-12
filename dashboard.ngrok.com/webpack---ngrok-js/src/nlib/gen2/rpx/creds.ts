// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from 'long';
import { grpc } from '@improbable-eng/grpc-web';
import _m0 from 'protobufjs/minimal';

import { Cred, SSHCred, Paging, ACL } from '../rpx/model';
import { Empty, ID, OptString } from '../pb/types';
import { StreamItem, SyncReq } from '../rpx/stream';
import { BrowserHeaders } from 'browser-headers';


export const protobufPackage = 'rpx';

export interface CredsAuthReq {
token: string,
}

export interface CredsAuthResp {
cred: Cred | undefined,
}

export interface SSHCredsAuthReq {
publicKeySha256: Uint8Array[],
}

export interface SSHCredsAuthResp {
cred: SSHCred | undefined,
}

export interface CredsGetBySIDReq {
credSid: string,
}

export interface CredsGetByIDReq {
id: ID | undefined,
accountId: number,
}

export interface CredsScopedGetBySIDReq {
credSid: string,
accountId: number,
}

export interface CredsGetByAccountReq {
accountId: number,
paging: Paging | undefined,
}

export interface CredsGetByAccountResp {
creds: Cred[],
next: Paging | undefined,
}

export interface SSHCredsGetByAccountResp {
creds: SSHCred[],
next: Paging | undefined,
}

export interface CredsCreateReq {
accountId: number,
description: string,
acl: ACL | undefined,
saveToken: boolean,
deleteProtection: boolean,
metadata: string,
/** explicitly not allowed in prod */
fixtureToken: string,
}

export interface SSHCredsCreateReq {
accountId: number,
publicKey: string,
description: string,
acl: ACL | undefined,
metadata: string,
id: ID | undefined,
}

export interface CredsDeleteReq {
id: ID | undefined,
override: boolean,
}

export interface CredsDeleteByAccountReq {
accountId: number,
}

export interface CredsUpdateReq {
id: ID | undefined,
description: OptString | undefined,
metadata: OptString | undefined,
acl: ACL | undefined,
}

export interface CredsGetByLegacyIDReq {
id: number,
}

export interface CredsRehashReq {
id: ID | undefined,
token: string,
}

const baseCredsAuthReq: object = { token: "" };

export const CredsAuthReq = {
            encode(
      message: CredsAuthReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.token !== "") {
          writer.uint32(10).string(message.token);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CredsAuthReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCredsAuthReq } as CredsAuthReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.token = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CredsAuthReq>): CredsAuthReq {
      const message = { ...baseCredsAuthReq } as CredsAuthReq;
if (object.token !== undefined && object.token !== null) {
message.token = object.token;
} else {
message.token = ""
}
return message;
}
          };

const baseCredsAuthResp: object = {  };

export const CredsAuthResp = {
            encode(
      message: CredsAuthResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.cred !== undefined) {
          Cred.encode(message.cred, writer.uint32(10).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CredsAuthResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCredsAuthResp } as CredsAuthResp;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.cred = Cred.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CredsAuthResp>): CredsAuthResp {
      const message = { ...baseCredsAuthResp } as CredsAuthResp;
if (object.cred !== undefined && object.cred !== null) {
message.cred = Cred.fromPartial(object.cred);
} else {
message.cred = undefined
}
return message;
}
          };

const baseSSHCredsAuthReq: object = {  };

export const SSHCredsAuthReq = {
            encode(
      message: SSHCredsAuthReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.publicKeySha256) {
            writer.uint32(10).bytes(v!);
          }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): SSHCredsAuthReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseSSHCredsAuthReq } as SSHCredsAuthReq;
message.publicKeySha256 = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.publicKeySha256.push(reader.bytes());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<SSHCredsAuthReq>): SSHCredsAuthReq {
      const message = { ...baseSSHCredsAuthReq } as SSHCredsAuthReq;
message.publicKeySha256 = [];
if (object.publicKeySha256 !== undefined && object.publicKeySha256 !== null) {
for (const e of object.publicKeySha256) {
            message.publicKeySha256.push(e);
          }
}
return message;
}
          };

const baseSSHCredsAuthResp: object = {  };

export const SSHCredsAuthResp = {
            encode(
      message: SSHCredsAuthResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.cred !== undefined) {
          SSHCred.encode(message.cred, writer.uint32(10).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): SSHCredsAuthResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseSSHCredsAuthResp } as SSHCredsAuthResp;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.cred = SSHCred.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<SSHCredsAuthResp>): SSHCredsAuthResp {
      const message = { ...baseSSHCredsAuthResp } as SSHCredsAuthResp;
if (object.cred !== undefined && object.cred !== null) {
message.cred = SSHCred.fromPartial(object.cred);
} else {
message.cred = undefined
}
return message;
}
          };

const baseCredsGetBySIDReq: object = { credSid: "" };

export const CredsGetBySIDReq = {
            encode(
      message: CredsGetBySIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.credSid !== "") {
          writer.uint32(10).string(message.credSid);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CredsGetBySIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCredsGetBySIDReq } as CredsGetBySIDReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.credSid = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CredsGetBySIDReq>): CredsGetBySIDReq {
      const message = { ...baseCredsGetBySIDReq } as CredsGetBySIDReq;
if (object.credSid !== undefined && object.credSid !== null) {
message.credSid = object.credSid;
} else {
message.credSid = ""
}
return message;
}
          };

const baseCredsGetByIDReq: object = { accountId: 0 };

export const CredsGetByIDReq = {
            encode(
      message: CredsGetByIDReq,
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
    ): CredsGetByIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCredsGetByIDReq } as CredsGetByIDReq;
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

fromPartial(object: DeepPartial<CredsGetByIDReq>): CredsGetByIDReq {
      const message = { ...baseCredsGetByIDReq } as CredsGetByIDReq;
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

const baseCredsScopedGetBySIDReq: object = { credSid: "",accountId: 0 };

export const CredsScopedGetBySIDReq = {
            encode(
      message: CredsScopedGetBySIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.credSid !== "") {
          writer.uint32(10).string(message.credSid);
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CredsScopedGetBySIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCredsScopedGetBySIDReq } as CredsScopedGetBySIDReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.credSid = reader.string();
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

fromPartial(object: DeepPartial<CredsScopedGetBySIDReq>): CredsScopedGetBySIDReq {
      const message = { ...baseCredsScopedGetBySIDReq } as CredsScopedGetBySIDReq;
if (object.credSid !== undefined && object.credSid !== null) {
message.credSid = object.credSid;
} else {
message.credSid = ""
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseCredsGetByAccountReq: object = { accountId: 0 };

export const CredsGetByAccountReq = {
            encode(
      message: CredsGetByAccountReq,
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
    ): CredsGetByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCredsGetByAccountReq } as CredsGetByAccountReq;
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

fromPartial(object: DeepPartial<CredsGetByAccountReq>): CredsGetByAccountReq {
      const message = { ...baseCredsGetByAccountReq } as CredsGetByAccountReq;
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

const baseCredsGetByAccountResp: object = {  };

export const CredsGetByAccountResp = {
            encode(
      message: CredsGetByAccountResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.creds) {
            Cred.encode(v!, writer.uint32(10).fork()).ldelim();
          }
if (message.next !== undefined) {
          Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CredsGetByAccountResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCredsGetByAccountResp } as CredsGetByAccountResp;
message.creds = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.creds.push(Cred.decode(reader, reader.uint32()));
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

fromPartial(object: DeepPartial<CredsGetByAccountResp>): CredsGetByAccountResp {
      const message = { ...baseCredsGetByAccountResp } as CredsGetByAccountResp;
message.creds = [];
if (object.creds !== undefined && object.creds !== null) {
for (const e of object.creds) {
            message.creds.push(Cred.fromPartial(e));
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

const baseSSHCredsGetByAccountResp: object = {  };

export const SSHCredsGetByAccountResp = {
            encode(
      message: SSHCredsGetByAccountResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.creds) {
            SSHCred.encode(v!, writer.uint32(10).fork()).ldelim();
          }
if (message.next !== undefined) {
          Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): SSHCredsGetByAccountResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseSSHCredsGetByAccountResp } as SSHCredsGetByAccountResp;
message.creds = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.creds.push(SSHCred.decode(reader, reader.uint32()));
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

fromPartial(object: DeepPartial<SSHCredsGetByAccountResp>): SSHCredsGetByAccountResp {
      const message = { ...baseSSHCredsGetByAccountResp } as SSHCredsGetByAccountResp;
message.creds = [];
if (object.creds !== undefined && object.creds !== null) {
for (const e of object.creds) {
            message.creds.push(SSHCred.fromPartial(e));
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

const baseCredsCreateReq: object = { accountId: 0,description: "",saveToken: false,deleteProtection: false,metadata: "",fixtureToken: "" };

export const CredsCreateReq = {
            encode(
      message: CredsCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.description !== "") {
          writer.uint32(18).string(message.description);
        }
if (message.acl !== undefined) {
          ACL.encode(message.acl, writer.uint32(26).fork()).ldelim();
        }
if (message.saveToken === true) {
          writer.uint32(32).bool(message.saveToken);
        }
if (message.deleteProtection === true) {
          writer.uint32(40).bool(message.deleteProtection);
        }
if (message.metadata !== "") {
          writer.uint32(50).string(message.metadata);
        }
if (message.fixtureToken !== "") {
          writer.uint32(58).string(message.fixtureToken);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CredsCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCredsCreateReq } as CredsCreateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.description = reader.string();
break;
case 3:
message.acl = ACL.decode(reader, reader.uint32());
break;
case 4:
message.saveToken = reader.bool();
break;
case 5:
message.deleteProtection = reader.bool();
break;
case 6:
message.metadata = reader.string();
break;
case 7:
message.fixtureToken = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CredsCreateReq>): CredsCreateReq {
      const message = { ...baseCredsCreateReq } as CredsCreateReq;
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
if (object.acl !== undefined && object.acl !== null) {
message.acl = ACL.fromPartial(object.acl);
} else {
message.acl = undefined
}
if (object.saveToken !== undefined && object.saveToken !== null) {
message.saveToken = object.saveToken;
} else {
message.saveToken = false
}
if (object.deleteProtection !== undefined && object.deleteProtection !== null) {
message.deleteProtection = object.deleteProtection;
} else {
message.deleteProtection = false
}
if (object.metadata !== undefined && object.metadata !== null) {
message.metadata = object.metadata;
} else {
message.metadata = ""
}
if (object.fixtureToken !== undefined && object.fixtureToken !== null) {
message.fixtureToken = object.fixtureToken;
} else {
message.fixtureToken = ""
}
return message;
}
          };

const baseSSHCredsCreateReq: object = { accountId: 0,publicKey: "",description: "",metadata: "" };

export const SSHCredsCreateReq = {
            encode(
      message: SSHCredsCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.publicKey !== "") {
          writer.uint32(18).string(message.publicKey);
        }
if (message.description !== "") {
          writer.uint32(26).string(message.description);
        }
if (message.acl !== undefined) {
          ACL.encode(message.acl, writer.uint32(34).fork()).ldelim();
        }
if (message.metadata !== "") {
          writer.uint32(50).string(message.metadata);
        }
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(66).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): SSHCredsCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseSSHCredsCreateReq } as SSHCredsCreateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.publicKey = reader.string();
break;
case 3:
message.description = reader.string();
break;
case 4:
message.acl = ACL.decode(reader, reader.uint32());
break;
case 6:
message.metadata = reader.string();
break;
case 8:
message.id = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<SSHCredsCreateReq>): SSHCredsCreateReq {
      const message = { ...baseSSHCredsCreateReq } as SSHCredsCreateReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.publicKey !== undefined && object.publicKey !== null) {
message.publicKey = object.publicKey;
} else {
message.publicKey = ""
}
if (object.description !== undefined && object.description !== null) {
message.description = object.description;
} else {
message.description = ""
}
if (object.acl !== undefined && object.acl !== null) {
message.acl = ACL.fromPartial(object.acl);
} else {
message.acl = undefined
}
if (object.metadata !== undefined && object.metadata !== null) {
message.metadata = object.metadata;
} else {
message.metadata = ""
}
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
return message;
}
          };

const baseCredsDeleteReq: object = { override: false };

export const CredsDeleteReq = {
            encode(
      message: CredsDeleteReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(26).fork()).ldelim();
        }
if (message.override === true) {
          writer.uint32(16).bool(message.override);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CredsDeleteReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCredsDeleteReq } as CredsDeleteReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 3:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.override = reader.bool();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CredsDeleteReq>): CredsDeleteReq {
      const message = { ...baseCredsDeleteReq } as CredsDeleteReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.override !== undefined && object.override !== null) {
message.override = object.override;
} else {
message.override = false
}
return message;
}
          };

const baseCredsDeleteByAccountReq: object = { accountId: 0 };

export const CredsDeleteByAccountReq = {
            encode(
      message: CredsDeleteByAccountReq,
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
    ): CredsDeleteByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCredsDeleteByAccountReq } as CredsDeleteByAccountReq;
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

fromPartial(object: DeepPartial<CredsDeleteByAccountReq>): CredsDeleteByAccountReq {
      const message = { ...baseCredsDeleteByAccountReq } as CredsDeleteByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseCredsUpdateReq: object = {  };

export const CredsUpdateReq = {
            encode(
      message: CredsUpdateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(42).fork()).ldelim();
        }
if (message.description !== undefined) {
          OptString.encode(message.description, writer.uint32(18).fork()).ldelim();
        }
if (message.metadata !== undefined) {
          OptString.encode(message.metadata, writer.uint32(26).fork()).ldelim();
        }
if (message.acl !== undefined) {
          ACL.encode(message.acl, writer.uint32(34).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CredsUpdateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCredsUpdateReq } as CredsUpdateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 5:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.description = OptString.decode(reader, reader.uint32());
break;
case 3:
message.metadata = OptString.decode(reader, reader.uint32());
break;
case 4:
message.acl = ACL.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CredsUpdateReq>): CredsUpdateReq {
      const message = { ...baseCredsUpdateReq } as CredsUpdateReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
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
if (object.acl !== undefined && object.acl !== null) {
message.acl = ACL.fromPartial(object.acl);
} else {
message.acl = undefined
}
return message;
}
          };

const baseCredsGetByLegacyIDReq: object = { id: 0 };

export const CredsGetByLegacyIDReq = {
            encode(
      message: CredsGetByLegacyIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== 0) {
          writer.uint32(8).int64(message.id);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CredsGetByLegacyIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCredsGetByLegacyIDReq } as CredsGetByLegacyIDReq;
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

fromPartial(object: DeepPartial<CredsGetByLegacyIDReq>): CredsGetByLegacyIDReq {
      const message = { ...baseCredsGetByLegacyIDReq } as CredsGetByLegacyIDReq;
if (object.id !== undefined && object.id !== null) {
message.id = object.id;
} else {
message.id = 0
}
return message;
}
          };

const baseCredsRehashReq: object = { token: "" };

export const CredsRehashReq = {
            encode(
      message: CredsRehashReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.token !== "") {
          writer.uint32(18).string(message.token);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): CredsRehashReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseCredsRehashReq } as CredsRehashReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.token = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<CredsRehashReq>): CredsRehashReq {
      const message = { ...baseCredsRehashReq } as CredsRehashReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.token !== undefined && object.token !== null) {
message.token = object.token;
} else {
message.token = ""
}
return message;
}
          };

/**
 * -----------------
 * API Keys
 * -----------------
 */
export interface APIKeys {
/** Read Operations */
Auth(request: DeepPartial<CredsAuthReq>,metadata?: grpc.Metadata): Promise<CredsAuthResp>;
ScopedGetBySID(request: DeepPartial<CredsScopedGetBySIDReq>,metadata?: grpc.Metadata): Promise<Cred>;
GetBySID(request: DeepPartial<CredsGetBySIDReq>,metadata?: grpc.Metadata): Promise<Cred>;
GetByID(request: DeepPartial<CredsGetByIDReq>,metadata?: grpc.Metadata): Promise<Cred>;
GetByAccount(request: DeepPartial<CredsGetByAccountReq>,metadata?: grpc.Metadata): Promise<CredsGetByAccountResp>;
/** Mutations */
Create(request: DeepPartial<CredsCreateReq>,metadata?: grpc.Metadata): Promise<Cred>;
Delete(request: DeepPartial<CredsDeleteReq>,metadata?: grpc.Metadata): Promise<Cred>;
Update(request: DeepPartial<CredsUpdateReq>,metadata?: grpc.Metadata): Promise<Cred>;
Rehash(request: DeepPartial<CredsRehashReq>,metadata?: grpc.Metadata): Promise<Empty>;
DeleteByAccount(request: DeepPartial<CredsDeleteByAccountReq>,metadata?: grpc.Metadata): Promise<Empty>;
/** Replication */
Sync(request: DeepPartial<SyncReq>,metadata?: grpc.Metadata): Promise<StreamItem>;
}

export class APIKeysClientImpl implements APIKeys {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.Auth = this.Auth.bind(this);this.ScopedGetBySID = this.ScopedGetBySID.bind(this);this.GetBySID = this.GetBySID.bind(this);this.GetByID = this.GetByID.bind(this);this.GetByAccount = this.GetByAccount.bind(this);this.Create = this.Create.bind(this);this.Delete = this.Delete.bind(this);this.Update = this.Update.bind(this);this.Rehash = this.Rehash.bind(this);this.DeleteByAccount = this.DeleteByAccount.bind(this);this.Sync = this.Sync.bind(this);}

    Auth(
      request: DeepPartial<CredsAuthReq>,
      metadata?: grpc.Metadata,
    ): Promise<CredsAuthResp> {
      return this.rpc.unary(
        APIKeysAuthDesc,
        CredsAuthReq.fromPartial(request),
        metadata,
      );
    }
  
    ScopedGetBySID(
      request: DeepPartial<CredsScopedGetBySIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<Cred> {
      return this.rpc.unary(
        APIKeysScopedGetBySIDDesc,
        CredsScopedGetBySIDReq.fromPartial(request),
        metadata,
      );
    }
  
    GetBySID(
      request: DeepPartial<CredsGetBySIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<Cred> {
      return this.rpc.unary(
        APIKeysGetBySIDDesc,
        CredsGetBySIDReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByID(
      request: DeepPartial<CredsGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<Cred> {
      return this.rpc.unary(
        APIKeysGetByIDDesc,
        CredsGetByIDReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByAccount(
      request: DeepPartial<CredsGetByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<CredsGetByAccountResp> {
      return this.rpc.unary(
        APIKeysGetByAccountDesc,
        CredsGetByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    Create(
      request: DeepPartial<CredsCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<Cred> {
      return this.rpc.unary(
        APIKeysCreateDesc,
        CredsCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<CredsDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<Cred> {
      return this.rpc.unary(
        APIKeysDeleteDesc,
        CredsDeleteReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<CredsUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<Cred> {
      return this.rpc.unary(
        APIKeysUpdateDesc,
        CredsUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    Rehash(
      request: DeepPartial<CredsRehashReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        APIKeysRehashDesc,
        CredsRehashReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteByAccount(
      request: DeepPartial<CredsDeleteByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        APIKeysDeleteByAccountDesc,
        CredsDeleteByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    Sync(
      request: DeepPartial<SyncReq>,
      metadata?: grpc.Metadata,
    ): Promise<StreamItem> {
      return this.rpc.invoke(
        APIKeysSyncDesc,
        request,
        metadata,
      );
    }
  }

export const APIKeysDesc = {
      serviceName: "rpx.APIKeys",
    };

export const APIKeysAuthDesc: UnaryMethodDefinitionish = {
      methodName: "Auth",
      service: APIKeysDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsAuthReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...CredsAuthResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const APIKeysScopedGetBySIDDesc: UnaryMethodDefinitionish = {
      methodName: "ScopedGetBySID",
      service: APIKeysDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsScopedGetBySIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Cred.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const APIKeysGetBySIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetBySID",
      service: APIKeysDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsGetBySIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Cred.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const APIKeysGetByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByID",
      service: APIKeysDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Cred.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const APIKeysGetByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "GetByAccount",
      service: APIKeysDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsGetByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...CredsGetByAccountResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const APIKeysCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: APIKeysDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Cred.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const APIKeysDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: APIKeysDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Cred.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const APIKeysUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: APIKeysDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Cred.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const APIKeysRehashDesc: UnaryMethodDefinitionish = {
      methodName: "Rehash",
      service: APIKeysDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsRehashReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const APIKeysDeleteByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteByAccount",
      service: APIKeysDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsDeleteByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const APIKeysSyncDesc: UnaryMethodDefinitionish = {
      methodName: "Sync",
      service: APIKeysDesc,
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

/**
 * ---------------------
 * Tunnel Authtokens
 * ---------------------
 */
export interface TunnelAuthtokens {
/** Read Operations */
Auth(request: DeepPartial<CredsAuthReq>,metadata?: grpc.Metadata): Promise<CredsAuthResp>;
ScopedGetBySID(request: DeepPartial<CredsScopedGetBySIDReq>,metadata?: grpc.Metadata): Promise<Cred>;
GetByAccount(request: DeepPartial<CredsGetByAccountReq>,metadata?: grpc.Metadata): Promise<CredsGetByAccountResp>;
GetBySID(request: DeepPartial<CredsGetBySIDReq>,metadata?: grpc.Metadata): Promise<Cred>;
GetByID(request: DeepPartial<CredsGetByIDReq>,metadata?: grpc.Metadata): Promise<Cred>;
GetByLegacyID(request: DeepPartial<CredsGetByLegacyIDReq>,metadata?: grpc.Metadata): Promise<Cred>;
/** Mutations */
Create(request: DeepPartial<CredsCreateReq>,metadata?: grpc.Metadata): Promise<Cred>;
Delete(request: DeepPartial<CredsDeleteReq>,metadata?: grpc.Metadata): Promise<Cred>;
Update(request: DeepPartial<CredsUpdateReq>,metadata?: grpc.Metadata): Promise<Cred>;
Rehash(request: DeepPartial<CredsRehashReq>,metadata?: grpc.Metadata): Promise<Empty>;
DeleteByAccount(request: DeepPartial<CredsDeleteByAccountReq>,metadata?: grpc.Metadata): Promise<Empty>;
/** Replication */
Sync(request: DeepPartial<SyncReq>,metadata?: grpc.Metadata): Promise<StreamItem>;
}

export class TunnelAuthtokensClientImpl implements TunnelAuthtokens {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.Auth = this.Auth.bind(this);this.ScopedGetBySID = this.ScopedGetBySID.bind(this);this.GetByAccount = this.GetByAccount.bind(this);this.GetBySID = this.GetBySID.bind(this);this.GetByID = this.GetByID.bind(this);this.GetByLegacyID = this.GetByLegacyID.bind(this);this.Create = this.Create.bind(this);this.Delete = this.Delete.bind(this);this.Update = this.Update.bind(this);this.Rehash = this.Rehash.bind(this);this.DeleteByAccount = this.DeleteByAccount.bind(this);this.Sync = this.Sync.bind(this);}

    Auth(
      request: DeepPartial<CredsAuthReq>,
      metadata?: grpc.Metadata,
    ): Promise<CredsAuthResp> {
      return this.rpc.unary(
        TunnelAuthtokensAuthDesc,
        CredsAuthReq.fromPartial(request),
        metadata,
      );
    }
  
    ScopedGetBySID(
      request: DeepPartial<CredsScopedGetBySIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<Cred> {
      return this.rpc.unary(
        TunnelAuthtokensScopedGetBySIDDesc,
        CredsScopedGetBySIDReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByAccount(
      request: DeepPartial<CredsGetByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<CredsGetByAccountResp> {
      return this.rpc.unary(
        TunnelAuthtokensGetByAccountDesc,
        CredsGetByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    GetBySID(
      request: DeepPartial<CredsGetBySIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<Cred> {
      return this.rpc.unary(
        TunnelAuthtokensGetBySIDDesc,
        CredsGetBySIDReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByID(
      request: DeepPartial<CredsGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<Cred> {
      return this.rpc.unary(
        TunnelAuthtokensGetByIDDesc,
        CredsGetByIDReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByLegacyID(
      request: DeepPartial<CredsGetByLegacyIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<Cred> {
      return this.rpc.unary(
        TunnelAuthtokensGetByLegacyIDDesc,
        CredsGetByLegacyIDReq.fromPartial(request),
        metadata,
      );
    }
  
    Create(
      request: DeepPartial<CredsCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<Cred> {
      return this.rpc.unary(
        TunnelAuthtokensCreateDesc,
        CredsCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<CredsDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<Cred> {
      return this.rpc.unary(
        TunnelAuthtokensDeleteDesc,
        CredsDeleteReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<CredsUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<Cred> {
      return this.rpc.unary(
        TunnelAuthtokensUpdateDesc,
        CredsUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    Rehash(
      request: DeepPartial<CredsRehashReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        TunnelAuthtokensRehashDesc,
        CredsRehashReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteByAccount(
      request: DeepPartial<CredsDeleteByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        TunnelAuthtokensDeleteByAccountDesc,
        CredsDeleteByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    Sync(
      request: DeepPartial<SyncReq>,
      metadata?: grpc.Metadata,
    ): Promise<StreamItem> {
      return this.rpc.invoke(
        TunnelAuthtokensSyncDesc,
        request,
        metadata,
      );
    }
  }

export const TunnelAuthtokensDesc = {
      serviceName: "rpx.TunnelAuthtokens",
    };

export const TunnelAuthtokensAuthDesc: UnaryMethodDefinitionish = {
      methodName: "Auth",
      service: TunnelAuthtokensDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsAuthReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...CredsAuthResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TunnelAuthtokensScopedGetBySIDDesc: UnaryMethodDefinitionish = {
      methodName: "ScopedGetBySID",
      service: TunnelAuthtokensDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsScopedGetBySIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Cred.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TunnelAuthtokensGetByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "GetByAccount",
      service: TunnelAuthtokensDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsGetByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...CredsGetByAccountResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TunnelAuthtokensGetBySIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetBySID",
      service: TunnelAuthtokensDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsGetBySIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Cred.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TunnelAuthtokensGetByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByID",
      service: TunnelAuthtokensDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Cred.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TunnelAuthtokensGetByLegacyIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByLegacyID",
      service: TunnelAuthtokensDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsGetByLegacyIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Cred.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TunnelAuthtokensCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: TunnelAuthtokensDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Cred.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TunnelAuthtokensDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: TunnelAuthtokensDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Cred.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TunnelAuthtokensUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: TunnelAuthtokensDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Cred.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TunnelAuthtokensRehashDesc: UnaryMethodDefinitionish = {
      methodName: "Rehash",
      service: TunnelAuthtokensDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsRehashReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TunnelAuthtokensDeleteByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteByAccount",
      service: TunnelAuthtokensDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsDeleteByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const TunnelAuthtokensSyncDesc: UnaryMethodDefinitionish = {
      methodName: "Sync",
      service: TunnelAuthtokensDesc,
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

/**
 * --------------------
 * SSH Public Keys
 * --------------------
 */
export interface SSHPublicKeys {
Auth(request: DeepPartial<SSHCredsAuthReq>,metadata?: grpc.Metadata): Promise<SSHCredsAuthResp>;
ScopedGetBySID(request: DeepPartial<CredsScopedGetBySIDReq>,metadata?: grpc.Metadata): Promise<SSHCred>;
GetBySID(request: DeepPartial<CredsGetBySIDReq>,metadata?: grpc.Metadata): Promise<SSHCred>;
GetByID(request: DeepPartial<CredsGetByIDReq>,metadata?: grpc.Metadata): Promise<SSHCred>;
GetByAccount(request: DeepPartial<CredsGetByAccountReq>,metadata?: grpc.Metadata): Promise<SSHCredsGetByAccountResp>;
/** Mutations */
Create(request: DeepPartial<SSHCredsCreateReq>,metadata?: grpc.Metadata): Promise<SSHCred>;
Update(request: DeepPartial<CredsUpdateReq>,metadata?: grpc.Metadata): Promise<SSHCred>;
Delete(request: DeepPartial<CredsDeleteReq>,metadata?: grpc.Metadata): Promise<SSHCred>;
DeleteByAccount(request: DeepPartial<CredsDeleteByAccountReq>,metadata?: grpc.Metadata): Promise<Empty>;
/** Replication */
Sync(request: DeepPartial<SyncReq>,metadata?: grpc.Metadata): Promise<StreamItem>;
}

export class SSHPublicKeysClientImpl implements SSHPublicKeys {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.Auth = this.Auth.bind(this);this.ScopedGetBySID = this.ScopedGetBySID.bind(this);this.GetBySID = this.GetBySID.bind(this);this.GetByID = this.GetByID.bind(this);this.GetByAccount = this.GetByAccount.bind(this);this.Create = this.Create.bind(this);this.Update = this.Update.bind(this);this.Delete = this.Delete.bind(this);this.DeleteByAccount = this.DeleteByAccount.bind(this);this.Sync = this.Sync.bind(this);}

    Auth(
      request: DeepPartial<SSHCredsAuthReq>,
      metadata?: grpc.Metadata,
    ): Promise<SSHCredsAuthResp> {
      return this.rpc.unary(
        SSHPublicKeysAuthDesc,
        SSHCredsAuthReq.fromPartial(request),
        metadata,
      );
    }
  
    ScopedGetBySID(
      request: DeepPartial<CredsScopedGetBySIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<SSHCred> {
      return this.rpc.unary(
        SSHPublicKeysScopedGetBySIDDesc,
        CredsScopedGetBySIDReq.fromPartial(request),
        metadata,
      );
    }
  
    GetBySID(
      request: DeepPartial<CredsGetBySIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<SSHCred> {
      return this.rpc.unary(
        SSHPublicKeysGetBySIDDesc,
        CredsGetBySIDReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByID(
      request: DeepPartial<CredsGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<SSHCred> {
      return this.rpc.unary(
        SSHPublicKeysGetByIDDesc,
        CredsGetByIDReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByAccount(
      request: DeepPartial<CredsGetByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<SSHCredsGetByAccountResp> {
      return this.rpc.unary(
        SSHPublicKeysGetByAccountDesc,
        CredsGetByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    Create(
      request: DeepPartial<SSHCredsCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<SSHCred> {
      return this.rpc.unary(
        SSHPublicKeysCreateDesc,
        SSHCredsCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<CredsUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<SSHCred> {
      return this.rpc.unary(
        SSHPublicKeysUpdateDesc,
        CredsUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<CredsDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<SSHCred> {
      return this.rpc.unary(
        SSHPublicKeysDeleteDesc,
        CredsDeleteReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteByAccount(
      request: DeepPartial<CredsDeleteByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        SSHPublicKeysDeleteByAccountDesc,
        CredsDeleteByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    Sync(
      request: DeepPartial<SyncReq>,
      metadata?: grpc.Metadata,
    ): Promise<StreamItem> {
      return this.rpc.invoke(
        SSHPublicKeysSyncDesc,
        request,
        metadata,
      );
    }
  }

export const SSHPublicKeysDesc = {
      serviceName: "rpx.SSHPublicKeys",
    };

export const SSHPublicKeysAuthDesc: UnaryMethodDefinitionish = {
      methodName: "Auth",
      service: SSHPublicKeysDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return SSHCredsAuthReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...SSHCredsAuthResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const SSHPublicKeysScopedGetBySIDDesc: UnaryMethodDefinitionish = {
      methodName: "ScopedGetBySID",
      service: SSHPublicKeysDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsScopedGetBySIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...SSHCred.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const SSHPublicKeysGetBySIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetBySID",
      service: SSHPublicKeysDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsGetBySIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...SSHCred.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const SSHPublicKeysGetByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByID",
      service: SSHPublicKeysDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...SSHCred.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const SSHPublicKeysGetByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "GetByAccount",
      service: SSHPublicKeysDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsGetByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...SSHCredsGetByAccountResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const SSHPublicKeysCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: SSHPublicKeysDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return SSHCredsCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...SSHCred.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const SSHPublicKeysUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: SSHPublicKeysDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...SSHCred.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const SSHPublicKeysDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: SSHPublicKeysDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...SSHCred.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const SSHPublicKeysDeleteByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteByAccount",
      service: SSHPublicKeysDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return CredsDeleteByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const SSHPublicKeysSyncDesc: UnaryMethodDefinitionish = {
      methodName: "Sync",
      service: SSHPublicKeysDesc,
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

