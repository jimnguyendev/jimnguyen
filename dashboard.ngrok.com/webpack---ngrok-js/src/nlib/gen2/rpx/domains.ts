// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from 'long';
import { grpc } from '@improbable-eng/grpc-web';
import _m0 from 'protobufjs/minimal';

import { Domain } from '../rpx/model_domain';
import { Empty, ID, OptString } from '../pb/types';
import { StreamItem, SyncReq } from '../rpx/stream';
import { BrowserHeaders } from 'browser-headers';

import { Paging, ManagedCertPolicyData } from '../rpx/model';

export const protobufPackage = 'rpx';

export interface DomainsGetByHTTPSConfigReq {
httpsConfigId: ID | undefined,
}

export interface DomainsMatchReq {
name: string,
}

export interface DomainsGetByIDReq {
id: ID | undefined,
accountId: number,
}

export interface DomainsScopedGetBySIDReq {
sid: string,
accountId: number,
}

export interface DomainsGetByNameReq {
name: string,
}

export interface DomainsGetByAccountReq {
accountId: number,
paging: Paging | undefined,
}

export interface DomainsGetByAccountResp {
domains: Domain[],
next: Paging | undefined,
}

export interface DomainsSearchReq {
query: string,
}

export interface DomainsListResp {
domains: Domain[],
}

export interface DomainsReserveReq {
legacyAccountId: number,
regionId: string,
name: string,
description: string,
metadata: string,
httpEndpointConfigurationId: ID | undefined,
httpsEndpointConfigurationId: ID | undefined,
certId: ID | undefined,
managedCertPolicy: ManagedCertPolicyData | undefined,
}

export interface DomainsReleaseReq {
domainId: ID | undefined,
}

export interface DomainsReleaseByAccountReq {
accountId: number,
}

export interface DomainsUpdateReq {
description: OptString | undefined,
metadata: OptString | undefined,
domainId: ID | undefined,
httpEndpointConfigurationId: ID | undefined,
httpsEndpointConfigurationId: ID | undefined,
certId: ID | undefined,
managedCertPolicy: ManagedCertPolicyData | undefined,
}

export interface DomainsDeleteNestedReq {
domainId: ID | undefined,
fields: DomainsDeleteNestedReq_Field[],
}

export enum DomainsDeleteNestedReq_Field {
UnknownField = 0,
HTTPEndpointConfigurationID = 1,
HTTPSEndpointConfigurationID = 2,
CertID = 3,
ManagedCertPolicyID = 4,
}

export interface DomainsVerifyReq {
domainId: ID | undefined,
}

export interface DomainsVerifyChallengeReq {
domainId: ID | undefined,
}

export interface DomainsAvailableReq {
legacyAccountId: number,
regionId: string,
domains: string[],
}

export interface DomainsAvailableResp {
domains: DomainsAvailableRespResult[],
}

export interface DomainsAvailableRespResult {
domain: string,
isValid: boolean,
validationErrors: string[],
isAvailable: boolean,
isOwned: boolean,
isNgrokDomain: boolean,
needsUpgrade: boolean,
limitReached: boolean,
}

const baseDomainsGetByHTTPSConfigReq: object = {  };

export const DomainsGetByHTTPSConfigReq = {
            encode(
      message: DomainsGetByHTTPSConfigReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.httpsConfigId !== undefined) {
          ID.encode(message.httpsConfigId, writer.uint32(10).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): DomainsGetByHTTPSConfigReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseDomainsGetByHTTPSConfigReq } as DomainsGetByHTTPSConfigReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.httpsConfigId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<DomainsGetByHTTPSConfigReq>): DomainsGetByHTTPSConfigReq {
      const message = { ...baseDomainsGetByHTTPSConfigReq } as DomainsGetByHTTPSConfigReq;
if (object.httpsConfigId !== undefined && object.httpsConfigId !== null) {
message.httpsConfigId = ID.fromPartial(object.httpsConfigId);
} else {
message.httpsConfigId = undefined
}
return message;
}
          };

const baseDomainsMatchReq: object = { name: "" };

export const DomainsMatchReq = {
            encode(
      message: DomainsMatchReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.name !== "") {
          writer.uint32(10).string(message.name);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): DomainsMatchReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseDomainsMatchReq } as DomainsMatchReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.name = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<DomainsMatchReq>): DomainsMatchReq {
      const message = { ...baseDomainsMatchReq } as DomainsMatchReq;
if (object.name !== undefined && object.name !== null) {
message.name = object.name;
} else {
message.name = ""
}
return message;
}
          };

const baseDomainsGetByIDReq: object = { accountId: 0 };

export const DomainsGetByIDReq = {
            encode(
      message: DomainsGetByIDReq,
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
    ): DomainsGetByIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseDomainsGetByIDReq } as DomainsGetByIDReq;
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

fromPartial(object: DeepPartial<DomainsGetByIDReq>): DomainsGetByIDReq {
      const message = { ...baseDomainsGetByIDReq } as DomainsGetByIDReq;
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

const baseDomainsScopedGetBySIDReq: object = { sid: "",accountId: 0 };

export const DomainsScopedGetBySIDReq = {
            encode(
      message: DomainsScopedGetBySIDReq,
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
    ): DomainsScopedGetBySIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseDomainsScopedGetBySIDReq } as DomainsScopedGetBySIDReq;
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

fromPartial(object: DeepPartial<DomainsScopedGetBySIDReq>): DomainsScopedGetBySIDReq {
      const message = { ...baseDomainsScopedGetBySIDReq } as DomainsScopedGetBySIDReq;
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

const baseDomainsGetByNameReq: object = { name: "" };

export const DomainsGetByNameReq = {
            encode(
      message: DomainsGetByNameReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.name !== "") {
          writer.uint32(10).string(message.name);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): DomainsGetByNameReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseDomainsGetByNameReq } as DomainsGetByNameReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.name = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<DomainsGetByNameReq>): DomainsGetByNameReq {
      const message = { ...baseDomainsGetByNameReq } as DomainsGetByNameReq;
if (object.name !== undefined && object.name !== null) {
message.name = object.name;
} else {
message.name = ""
}
return message;
}
          };

const baseDomainsGetByAccountReq: object = { accountId: 0 };

export const DomainsGetByAccountReq = {
            encode(
      message: DomainsGetByAccountReq,
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
    ): DomainsGetByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseDomainsGetByAccountReq } as DomainsGetByAccountReq;
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

fromPartial(object: DeepPartial<DomainsGetByAccountReq>): DomainsGetByAccountReq {
      const message = { ...baseDomainsGetByAccountReq } as DomainsGetByAccountReq;
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

const baseDomainsGetByAccountResp: object = {  };

export const DomainsGetByAccountResp = {
            encode(
      message: DomainsGetByAccountResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.domains) {
            Domain.encode(v!, writer.uint32(10).fork()).ldelim();
          }
if (message.next !== undefined) {
          Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): DomainsGetByAccountResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseDomainsGetByAccountResp } as DomainsGetByAccountResp;
message.domains = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.domains.push(Domain.decode(reader, reader.uint32()));
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

fromPartial(object: DeepPartial<DomainsGetByAccountResp>): DomainsGetByAccountResp {
      const message = { ...baseDomainsGetByAccountResp } as DomainsGetByAccountResp;
message.domains = [];
if (object.domains !== undefined && object.domains !== null) {
for (const e of object.domains) {
            message.domains.push(Domain.fromPartial(e));
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

const baseDomainsSearchReq: object = { query: "" };

export const DomainsSearchReq = {
            encode(
      message: DomainsSearchReq,
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
    ): DomainsSearchReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseDomainsSearchReq } as DomainsSearchReq;
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

fromPartial(object: DeepPartial<DomainsSearchReq>): DomainsSearchReq {
      const message = { ...baseDomainsSearchReq } as DomainsSearchReq;
if (object.query !== undefined && object.query !== null) {
message.query = object.query;
} else {
message.query = ""
}
return message;
}
          };

const baseDomainsListResp: object = {  };

export const DomainsListResp = {
            encode(
      message: DomainsListResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.domains) {
            Domain.encode(v!, writer.uint32(10).fork()).ldelim();
          }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): DomainsListResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseDomainsListResp } as DomainsListResp;
message.domains = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.domains.push(Domain.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<DomainsListResp>): DomainsListResp {
      const message = { ...baseDomainsListResp } as DomainsListResp;
message.domains = [];
if (object.domains !== undefined && object.domains !== null) {
for (const e of object.domains) {
            message.domains.push(Domain.fromPartial(e));
          }
}
return message;
}
          };

const baseDomainsReserveReq: object = { legacyAccountId: 0,regionId: "",name: "",description: "",metadata: "" };

export const DomainsReserveReq = {
            encode(
      message: DomainsReserveReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.legacyAccountId !== 0) {
          writer.uint32(80).int64(message.legacyAccountId);
        }
if (message.regionId !== "") {
          writer.uint32(18).string(message.regionId);
        }
if (message.name !== "") {
          writer.uint32(26).string(message.name);
        }
if (message.description !== "") {
          writer.uint32(34).string(message.description);
        }
if (message.metadata !== "") {
          writer.uint32(42).string(message.metadata);
        }
if (message.httpEndpointConfigurationId !== undefined) {
          ID.encode(message.httpEndpointConfigurationId, writer.uint32(66).fork()).ldelim();
        }
if (message.httpsEndpointConfigurationId !== undefined) {
          ID.encode(message.httpsEndpointConfigurationId, writer.uint32(74).fork()).ldelim();
        }
if (message.certId !== undefined) {
          ID.encode(message.certId, writer.uint32(50).fork()).ldelim();
        }
if (message.managedCertPolicy !== undefined) {
          ManagedCertPolicyData.encode(message.managedCertPolicy, writer.uint32(58).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): DomainsReserveReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseDomainsReserveReq } as DomainsReserveReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 10:
message.legacyAccountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.regionId = reader.string();
break;
case 3:
message.name = reader.string();
break;
case 4:
message.description = reader.string();
break;
case 5:
message.metadata = reader.string();
break;
case 8:
message.httpEndpointConfigurationId = ID.decode(reader, reader.uint32());
break;
case 9:
message.httpsEndpointConfigurationId = ID.decode(reader, reader.uint32());
break;
case 6:
message.certId = ID.decode(reader, reader.uint32());
break;
case 7:
message.managedCertPolicy = ManagedCertPolicyData.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<DomainsReserveReq>): DomainsReserveReq {
      const message = { ...baseDomainsReserveReq } as DomainsReserveReq;
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
if (object.name !== undefined && object.name !== null) {
message.name = object.name;
} else {
message.name = ""
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
if (object.httpEndpointConfigurationId !== undefined && object.httpEndpointConfigurationId !== null) {
message.httpEndpointConfigurationId = ID.fromPartial(object.httpEndpointConfigurationId);
} else {
message.httpEndpointConfigurationId = undefined
}
if (object.httpsEndpointConfigurationId !== undefined && object.httpsEndpointConfigurationId !== null) {
message.httpsEndpointConfigurationId = ID.fromPartial(object.httpsEndpointConfigurationId);
} else {
message.httpsEndpointConfigurationId = undefined
}
if (object.certId !== undefined && object.certId !== null) {
message.certId = ID.fromPartial(object.certId);
} else {
message.certId = undefined
}
if (object.managedCertPolicy !== undefined && object.managedCertPolicy !== null) {
message.managedCertPolicy = ManagedCertPolicyData.fromPartial(object.managedCertPolicy);
} else {
message.managedCertPolicy = undefined
}
return message;
}
          };

const baseDomainsReleaseReq: object = {  };

export const DomainsReleaseReq = {
            encode(
      message: DomainsReleaseReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.domainId !== undefined) {
          ID.encode(message.domainId, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): DomainsReleaseReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseDomainsReleaseReq } as DomainsReleaseReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 2:
message.domainId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<DomainsReleaseReq>): DomainsReleaseReq {
      const message = { ...baseDomainsReleaseReq } as DomainsReleaseReq;
if (object.domainId !== undefined && object.domainId !== null) {
message.domainId = ID.fromPartial(object.domainId);
} else {
message.domainId = undefined
}
return message;
}
          };

const baseDomainsReleaseByAccountReq: object = { accountId: 0 };

export const DomainsReleaseByAccountReq = {
            encode(
      message: DomainsReleaseByAccountReq,
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
    ): DomainsReleaseByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseDomainsReleaseByAccountReq } as DomainsReleaseByAccountReq;
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

fromPartial(object: DeepPartial<DomainsReleaseByAccountReq>): DomainsReleaseByAccountReq {
      const message = { ...baseDomainsReleaseByAccountReq } as DomainsReleaseByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseDomainsUpdateReq: object = {  };

export const DomainsUpdateReq = {
            encode(
      message: DomainsUpdateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.description !== undefined) {
          OptString.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
if (message.metadata !== undefined) {
          OptString.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
if (message.domainId !== undefined) {
          ID.encode(message.domainId, writer.uint32(50).fork()).ldelim();
        }
if (message.httpEndpointConfigurationId !== undefined) {
          ID.encode(message.httpEndpointConfigurationId, writer.uint32(58).fork()).ldelim();
        }
if (message.httpsEndpointConfigurationId !== undefined) {
          ID.encode(message.httpsEndpointConfigurationId, writer.uint32(66).fork()).ldelim();
        }
if (message.certId !== undefined) {
          ID.encode(message.certId, writer.uint32(26).fork()).ldelim();
        }
if (message.managedCertPolicy !== undefined) {
          ManagedCertPolicyData.encode(message.managedCertPolicy, writer.uint32(34).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): DomainsUpdateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseDomainsUpdateReq } as DomainsUpdateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.description = OptString.decode(reader, reader.uint32());
break;
case 2:
message.metadata = OptString.decode(reader, reader.uint32());
break;
case 6:
message.domainId = ID.decode(reader, reader.uint32());
break;
case 7:
message.httpEndpointConfigurationId = ID.decode(reader, reader.uint32());
break;
case 8:
message.httpsEndpointConfigurationId = ID.decode(reader, reader.uint32());
break;
case 3:
message.certId = ID.decode(reader, reader.uint32());
break;
case 4:
message.managedCertPolicy = ManagedCertPolicyData.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<DomainsUpdateReq>): DomainsUpdateReq {
      const message = { ...baseDomainsUpdateReq } as DomainsUpdateReq;
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
if (object.domainId !== undefined && object.domainId !== null) {
message.domainId = ID.fromPartial(object.domainId);
} else {
message.domainId = undefined
}
if (object.httpEndpointConfigurationId !== undefined && object.httpEndpointConfigurationId !== null) {
message.httpEndpointConfigurationId = ID.fromPartial(object.httpEndpointConfigurationId);
} else {
message.httpEndpointConfigurationId = undefined
}
if (object.httpsEndpointConfigurationId !== undefined && object.httpsEndpointConfigurationId !== null) {
message.httpsEndpointConfigurationId = ID.fromPartial(object.httpsEndpointConfigurationId);
} else {
message.httpsEndpointConfigurationId = undefined
}
if (object.certId !== undefined && object.certId !== null) {
message.certId = ID.fromPartial(object.certId);
} else {
message.certId = undefined
}
if (object.managedCertPolicy !== undefined && object.managedCertPolicy !== null) {
message.managedCertPolicy = ManagedCertPolicyData.fromPartial(object.managedCertPolicy);
} else {
message.managedCertPolicy = undefined
}
return message;
}
          };

const baseDomainsDeleteNestedReq: object = { fields: 0 };

export const DomainsDeleteNestedReq = {
            encode(
      message: DomainsDeleteNestedReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.domainId !== undefined) {
          ID.encode(message.domainId, writer.uint32(10).fork()).ldelim();
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
    ): DomainsDeleteNestedReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseDomainsDeleteNestedReq } as DomainsDeleteNestedReq;
message.fields = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.domainId = ID.decode(reader, reader.uint32());
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

fromPartial(object: DeepPartial<DomainsDeleteNestedReq>): DomainsDeleteNestedReq {
      const message = { ...baseDomainsDeleteNestedReq } as DomainsDeleteNestedReq;
message.fields = [];
if (object.domainId !== undefined && object.domainId !== null) {
message.domainId = ID.fromPartial(object.domainId);
} else {
message.domainId = undefined
}
if (object.fields !== undefined && object.fields !== null) {
for (const e of object.fields) {
            message.fields.push(e);
          }
}
return message;
}
          };

const baseDomainsVerifyReq: object = {  };

export const DomainsVerifyReq = {
            encode(
      message: DomainsVerifyReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.domainId !== undefined) {
          ID.encode(message.domainId, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): DomainsVerifyReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseDomainsVerifyReq } as DomainsVerifyReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 2:
message.domainId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<DomainsVerifyReq>): DomainsVerifyReq {
      const message = { ...baseDomainsVerifyReq } as DomainsVerifyReq;
if (object.domainId !== undefined && object.domainId !== null) {
message.domainId = ID.fromPartial(object.domainId);
} else {
message.domainId = undefined
}
return message;
}
          };

const baseDomainsVerifyChallengeReq: object = {  };

export const DomainsVerifyChallengeReq = {
            encode(
      message: DomainsVerifyChallengeReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.domainId !== undefined) {
          ID.encode(message.domainId, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): DomainsVerifyChallengeReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseDomainsVerifyChallengeReq } as DomainsVerifyChallengeReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 2:
message.domainId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<DomainsVerifyChallengeReq>): DomainsVerifyChallengeReq {
      const message = { ...baseDomainsVerifyChallengeReq } as DomainsVerifyChallengeReq;
if (object.domainId !== undefined && object.domainId !== null) {
message.domainId = ID.fromPartial(object.domainId);
} else {
message.domainId = undefined
}
return message;
}
          };

const baseDomainsAvailableReq: object = { legacyAccountId: 0,regionId: "",domains: "" };

export const DomainsAvailableReq = {
            encode(
      message: DomainsAvailableReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.legacyAccountId !== 0) {
          writer.uint32(32).int64(message.legacyAccountId);
        }
if (message.regionId !== "") {
          writer.uint32(18).string(message.regionId);
        }
for (const v of message.domains) {
            writer.uint32(26).string(v!);
          }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): DomainsAvailableReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseDomainsAvailableReq } as DomainsAvailableReq;
message.domains = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 4:
message.legacyAccountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.regionId = reader.string();
break;
case 3:
message.domains.push(reader.string());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<DomainsAvailableReq>): DomainsAvailableReq {
      const message = { ...baseDomainsAvailableReq } as DomainsAvailableReq;
message.domains = [];
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
if (object.domains !== undefined && object.domains !== null) {
for (const e of object.domains) {
            message.domains.push(e);
          }
}
return message;
}
          };

const baseDomainsAvailableResp: object = {  };

export const DomainsAvailableResp = {
            encode(
      message: DomainsAvailableResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.domains) {
            DomainsAvailableRespResult.encode(v!, writer.uint32(10).fork()).ldelim();
          }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): DomainsAvailableResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseDomainsAvailableResp } as DomainsAvailableResp;
message.domains = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.domains.push(DomainsAvailableRespResult.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<DomainsAvailableResp>): DomainsAvailableResp {
      const message = { ...baseDomainsAvailableResp } as DomainsAvailableResp;
message.domains = [];
if (object.domains !== undefined && object.domains !== null) {
for (const e of object.domains) {
            message.domains.push(DomainsAvailableRespResult.fromPartial(e));
          }
}
return message;
}
          };

const baseDomainsAvailableRespResult: object = { domain: "",isValid: false,validationErrors: "",isAvailable: false,isOwned: false,isNgrokDomain: false,needsUpgrade: false,limitReached: false };

export const DomainsAvailableRespResult = {
            encode(
      message: DomainsAvailableRespResult,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.domain !== "") {
          writer.uint32(10).string(message.domain);
        }
if (message.isValid === true) {
          writer.uint32(16).bool(message.isValid);
        }
for (const v of message.validationErrors) {
            writer.uint32(26).string(v!);
          }
if (message.isAvailable === true) {
          writer.uint32(32).bool(message.isAvailable);
        }
if (message.isOwned === true) {
          writer.uint32(40).bool(message.isOwned);
        }
if (message.isNgrokDomain === true) {
          writer.uint32(48).bool(message.isNgrokDomain);
        }
if (message.needsUpgrade === true) {
          writer.uint32(56).bool(message.needsUpgrade);
        }
if (message.limitReached === true) {
          writer.uint32(64).bool(message.limitReached);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): DomainsAvailableRespResult {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseDomainsAvailableRespResult } as DomainsAvailableRespResult;
message.validationErrors = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.domain = reader.string();
break;
case 2:
message.isValid = reader.bool();
break;
case 3:
message.validationErrors.push(reader.string());
break;
case 4:
message.isAvailable = reader.bool();
break;
case 5:
message.isOwned = reader.bool();
break;
case 6:
message.isNgrokDomain = reader.bool();
break;
case 7:
message.needsUpgrade = reader.bool();
break;
case 8:
message.limitReached = reader.bool();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<DomainsAvailableRespResult>): DomainsAvailableRespResult {
      const message = { ...baseDomainsAvailableRespResult } as DomainsAvailableRespResult;
message.validationErrors = [];
if (object.domain !== undefined && object.domain !== null) {
message.domain = object.domain;
} else {
message.domain = ""
}
if (object.isValid !== undefined && object.isValid !== null) {
message.isValid = object.isValid;
} else {
message.isValid = false
}
if (object.validationErrors !== undefined && object.validationErrors !== null) {
for (const e of object.validationErrors) {
            message.validationErrors.push(e);
          }
}
if (object.isAvailable !== undefined && object.isAvailable !== null) {
message.isAvailable = object.isAvailable;
} else {
message.isAvailable = false
}
if (object.isOwned !== undefined && object.isOwned !== null) {
message.isOwned = object.isOwned;
} else {
message.isOwned = false
}
if (object.isNgrokDomain !== undefined && object.isNgrokDomain !== null) {
message.isNgrokDomain = object.isNgrokDomain;
} else {
message.isNgrokDomain = false
}
if (object.needsUpgrade !== undefined && object.needsUpgrade !== null) {
message.needsUpgrade = object.needsUpgrade;
} else {
message.needsUpgrade = false
}
if (object.limitReached !== undefined && object.limitReached !== null) {
message.limitReached = object.limitReached;
} else {
message.limitReached = false
}
return message;
}
          };

export interface Domains {
/** Read operations */
Match(request: DeepPartial<DomainsMatchReq>,metadata?: grpc.Metadata): Promise<Domain>;
GetByID(request: DeepPartial<DomainsGetByIDReq>,metadata?: grpc.Metadata): Promise<Domain>;
ScopedGetBySID(request: DeepPartial<DomainsScopedGetBySIDReq>,metadata?: grpc.Metadata): Promise<Domain>;
GetByName(request: DeepPartial<DomainsGetByNameReq>,metadata?: grpc.Metadata): Promise<Domain>;
GetByAccount(request: DeepPartial<DomainsGetByAccountReq>,metadata?: grpc.Metadata): Promise<DomainsGetByAccountResp>;
Search(request: DeepPartial<DomainsSearchReq>,metadata?: grpc.Metadata): Promise<DomainsListResp>;
VerifyCNAME(request: DeepPartial<DomainsVerifyReq>,metadata?: grpc.Metadata): Promise<Empty>;
VerifyACMEChallengeCNAME(request: DeepPartial<DomainsVerifyChallengeReq>,metadata?: grpc.Metadata): Promise<Empty>;
Available(request: DeepPartial<DomainsAvailableReq>,metadata?: grpc.Metadata): Promise<DomainsAvailableResp>;
GetByHTTPSConfig(request: DeepPartial<DomainsGetByHTTPSConfigReq>,metadata?: grpc.Metadata): Promise<DomainsListResp>;
/** Mutations */
Reserve(request: DeepPartial<DomainsReserveReq>,metadata?: grpc.Metadata): Promise<Domain>;
Release(request: DeepPartial<DomainsReleaseReq>,metadata?: grpc.Metadata): Promise<Domain>;
Update(request: DeepPartial<DomainsUpdateReq>,metadata?: grpc.Metadata): Promise<Domain>;
DeleteNested(request: DeepPartial<DomainsDeleteNestedReq>,metadata?: grpc.Metadata): Promise<Domain>;
ReleaseByAccount(request: DeepPartial<DomainsReleaseByAccountReq>,metadata?: grpc.Metadata): Promise<Empty>;
/** Replication */
Sync(request: DeepPartial<SyncReq>,metadata?: grpc.Metadata): Promise<StreamItem>;
}

export class DomainsClientImpl implements Domains {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.Match = this.Match.bind(this);this.GetByID = this.GetByID.bind(this);this.ScopedGetBySID = this.ScopedGetBySID.bind(this);this.GetByName = this.GetByName.bind(this);this.GetByAccount = this.GetByAccount.bind(this);this.Search = this.Search.bind(this);this.VerifyCNAME = this.VerifyCNAME.bind(this);this.VerifyACMEChallengeCNAME = this.VerifyACMEChallengeCNAME.bind(this);this.Available = this.Available.bind(this);this.GetByHTTPSConfig = this.GetByHTTPSConfig.bind(this);this.Reserve = this.Reserve.bind(this);this.Release = this.Release.bind(this);this.Update = this.Update.bind(this);this.DeleteNested = this.DeleteNested.bind(this);this.ReleaseByAccount = this.ReleaseByAccount.bind(this);this.Sync = this.Sync.bind(this);}

    Match(
      request: DeepPartial<DomainsMatchReq>,
      metadata?: grpc.Metadata,
    ): Promise<Domain> {
      return this.rpc.unary(
        DomainsMatchDesc,
        DomainsMatchReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByID(
      request: DeepPartial<DomainsGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<Domain> {
      return this.rpc.unary(
        DomainsGetByIDDesc,
        DomainsGetByIDReq.fromPartial(request),
        metadata,
      );
    }
  
    ScopedGetBySID(
      request: DeepPartial<DomainsScopedGetBySIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<Domain> {
      return this.rpc.unary(
        DomainsScopedGetBySIDDesc,
        DomainsScopedGetBySIDReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByName(
      request: DeepPartial<DomainsGetByNameReq>,
      metadata?: grpc.Metadata,
    ): Promise<Domain> {
      return this.rpc.unary(
        DomainsGetByNameDesc,
        DomainsGetByNameReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByAccount(
      request: DeepPartial<DomainsGetByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<DomainsGetByAccountResp> {
      return this.rpc.unary(
        DomainsGetByAccountDesc,
        DomainsGetByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    Search(
      request: DeepPartial<DomainsSearchReq>,
      metadata?: grpc.Metadata,
    ): Promise<DomainsListResp> {
      return this.rpc.unary(
        DomainsSearchDesc,
        DomainsSearchReq.fromPartial(request),
        metadata,
      );
    }
  
    VerifyCNAME(
      request: DeepPartial<DomainsVerifyReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        DomainsVerifyCNAMEDesc,
        DomainsVerifyReq.fromPartial(request),
        metadata,
      );
    }
  
    VerifyACMEChallengeCNAME(
      request: DeepPartial<DomainsVerifyChallengeReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        DomainsVerifyACMEChallengeCNAMEDesc,
        DomainsVerifyChallengeReq.fromPartial(request),
        metadata,
      );
    }
  
    Available(
      request: DeepPartial<DomainsAvailableReq>,
      metadata?: grpc.Metadata,
    ): Promise<DomainsAvailableResp> {
      return this.rpc.unary(
        DomainsAvailableDesc,
        DomainsAvailableReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByHTTPSConfig(
      request: DeepPartial<DomainsGetByHTTPSConfigReq>,
      metadata?: grpc.Metadata,
    ): Promise<DomainsListResp> {
      return this.rpc.unary(
        DomainsGetByHTTPSConfigDesc,
        DomainsGetByHTTPSConfigReq.fromPartial(request),
        metadata,
      );
    }
  
    Reserve(
      request: DeepPartial<DomainsReserveReq>,
      metadata?: grpc.Metadata,
    ): Promise<Domain> {
      return this.rpc.unary(
        DomainsReserveDesc,
        DomainsReserveReq.fromPartial(request),
        metadata,
      );
    }
  
    Release(
      request: DeepPartial<DomainsReleaseReq>,
      metadata?: grpc.Metadata,
    ): Promise<Domain> {
      return this.rpc.unary(
        DomainsReleaseDesc,
        DomainsReleaseReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<DomainsUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<Domain> {
      return this.rpc.unary(
        DomainsUpdateDesc,
        DomainsUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteNested(
      request: DeepPartial<DomainsDeleteNestedReq>,
      metadata?: grpc.Metadata,
    ): Promise<Domain> {
      return this.rpc.unary(
        DomainsDeleteNestedDesc,
        DomainsDeleteNestedReq.fromPartial(request),
        metadata,
      );
    }
  
    ReleaseByAccount(
      request: DeepPartial<DomainsReleaseByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        DomainsReleaseByAccountDesc,
        DomainsReleaseByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    Sync(
      request: DeepPartial<SyncReq>,
      metadata?: grpc.Metadata,
    ): Promise<StreamItem> {
      return this.rpc.invoke(
        DomainsSyncDesc,
        request,
        metadata,
      );
    }
  }

export const DomainsDesc = {
      serviceName: "rpx.Domains",
    };

export const DomainsMatchDesc: UnaryMethodDefinitionish = {
      methodName: "Match",
      service: DomainsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return DomainsMatchReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Domain.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const DomainsGetByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByID",
      service: DomainsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return DomainsGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Domain.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const DomainsScopedGetBySIDDesc: UnaryMethodDefinitionish = {
      methodName: "ScopedGetBySID",
      service: DomainsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return DomainsScopedGetBySIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Domain.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const DomainsGetByNameDesc: UnaryMethodDefinitionish = {
      methodName: "GetByName",
      service: DomainsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return DomainsGetByNameReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Domain.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const DomainsGetByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "GetByAccount",
      service: DomainsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return DomainsGetByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...DomainsGetByAccountResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const DomainsSearchDesc: UnaryMethodDefinitionish = {
      methodName: "Search",
      service: DomainsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return DomainsSearchReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...DomainsListResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const DomainsVerifyCNAMEDesc: UnaryMethodDefinitionish = {
      methodName: "VerifyCNAME",
      service: DomainsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return DomainsVerifyReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const DomainsVerifyACMEChallengeCNAMEDesc: UnaryMethodDefinitionish = {
      methodName: "VerifyACMEChallengeCNAME",
      service: DomainsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return DomainsVerifyChallengeReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const DomainsAvailableDesc: UnaryMethodDefinitionish = {
      methodName: "Available",
      service: DomainsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return DomainsAvailableReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...DomainsAvailableResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const DomainsGetByHTTPSConfigDesc: UnaryMethodDefinitionish = {
      methodName: "GetByHTTPSConfig",
      service: DomainsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return DomainsGetByHTTPSConfigReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...DomainsListResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const DomainsReserveDesc: UnaryMethodDefinitionish = {
      methodName: "Reserve",
      service: DomainsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return DomainsReserveReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Domain.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const DomainsReleaseDesc: UnaryMethodDefinitionish = {
      methodName: "Release",
      service: DomainsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return DomainsReleaseReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Domain.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const DomainsUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: DomainsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return DomainsUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Domain.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const DomainsDeleteNestedDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteNested",
      service: DomainsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return DomainsDeleteNestedReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Domain.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const DomainsReleaseByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "ReleaseByAccount",
      service: DomainsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return DomainsReleaseByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const DomainsSyncDesc: UnaryMethodDefinitionish = {
      methodName: "Sync",
      service: DomainsDesc,
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

