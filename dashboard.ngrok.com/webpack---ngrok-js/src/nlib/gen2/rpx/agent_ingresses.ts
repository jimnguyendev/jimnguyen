// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from 'long';
import { grpc } from '@improbable-eng/grpc-web';
import _m0 from 'protobufjs/minimal';

import { AgentIngress, AgentIngressListResp } from '../rpx/model_agent_ingress';
import { Empty, ID, OptString, OptBool } from '../pb/types';
import { StreamItem, SyncReq } from '../rpx/stream';
import { BrowserHeaders } from 'browser-headers';

import { Paging } from '../rpx/model';

export const protobufPackage = 'rpx';

export interface AgentIngressesCreateReq {
domain: string,
accountId: ID | undefined,
description: string,
metadata: string,
legacyAccountId: number,
whitelabelCa: boolean,
}

export interface AgentIngressesUpdateReq {
id: ID | undefined,
accountId: ID | undefined,
description: OptString | undefined,
metadata: OptString | undefined,
}

export interface AgentIngressesDeleteReq {
id: ID | undefined,
accountId: ID | undefined,
}

export interface AgentIngressesDeleteByAccountReq {
accountId: ID | undefined,
}

export interface AgentIngressesGetByAccountReq {
accountId: ID | undefined,
paging: Paging | undefined,
}

export interface AgentIngressesGetByIDReq {
id: ID | undefined,
accountId: ID | undefined,
}

export interface AgentIngressesGetByUnscopedIDReq {
id: ID | undefined,
}

export interface AgentIngressesVerifyNSReq {
id: ID | undefined,
accountId: ID | undefined,
/**
 * If specified, return this value instead of performing the actual
 * implementation logic. Useful for local testing.
 */
mockSuccess: OptBool | undefined,
}

export interface AgentIngressesReissueCertificatesReq {
/**
 * if true, reissue certificates for all agent ingresses, regardless
 * of whether or not they're expiring
 */
reissueAll: boolean,
/** if not nil, reissue the certicate for an agent ingress with a given id */
id: ID | undefined,
}

export interface AgentIngressesSyncRecordsReq {
/**
 * an explicit list of ingress ids to sync DNS records for. if empty,
 * all ingresses will be sync'd
 */
ids: ID[],
}

const baseAgentIngressesCreateReq: object = { domain: "",description: "",metadata: "",legacyAccountId: 0,whitelabelCa: false };

export const AgentIngressesCreateReq = {
            encode(
      message: AgentIngressesCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.domain !== "") {
          writer.uint32(10).string(message.domain);
        }
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(18).fork()).ldelim();
        }
if (message.description !== "") {
          writer.uint32(26).string(message.description);
        }
if (message.metadata !== "") {
          writer.uint32(34).string(message.metadata);
        }
if (message.legacyAccountId !== 0) {
          writer.uint32(40).int64(message.legacyAccountId);
        }
if (message.whitelabelCa === true) {
          writer.uint32(48).bool(message.whitelabelCa);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): AgentIngressesCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseAgentIngressesCreateReq } as AgentIngressesCreateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.domain = reader.string();
break;
case 2:
message.accountId = ID.decode(reader, reader.uint32());
break;
case 3:
message.description = reader.string();
break;
case 4:
message.metadata = reader.string();
break;
case 5:
message.legacyAccountId = longToNumber(reader.int64() as Long);
break;
case 6:
message.whitelabelCa = reader.bool();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<AgentIngressesCreateReq>): AgentIngressesCreateReq {
      const message = { ...baseAgentIngressesCreateReq } as AgentIngressesCreateReq;
if (object.domain !== undefined && object.domain !== null) {
message.domain = object.domain;
} else {
message.domain = ""
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
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
if (object.legacyAccountId !== undefined && object.legacyAccountId !== null) {
message.legacyAccountId = object.legacyAccountId;
} else {
message.legacyAccountId = 0
}
if (object.whitelabelCa !== undefined && object.whitelabelCa !== null) {
message.whitelabelCa = object.whitelabelCa;
} else {
message.whitelabelCa = false
}
return message;
}
          };

const baseAgentIngressesUpdateReq: object = {  };

export const AgentIngressesUpdateReq = {
            encode(
      message: AgentIngressesUpdateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(18).fork()).ldelim();
        }
if (message.description !== undefined) {
          OptString.encode(message.description, writer.uint32(26).fork()).ldelim();
        }
if (message.metadata !== undefined) {
          OptString.encode(message.metadata, writer.uint32(34).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): AgentIngressesUpdateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseAgentIngressesUpdateReq } as AgentIngressesUpdateReq;
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
message.description = OptString.decode(reader, reader.uint32());
break;
case 4:
message.metadata = OptString.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<AgentIngressesUpdateReq>): AgentIngressesUpdateReq {
      const message = { ...baseAgentIngressesUpdateReq } as AgentIngressesUpdateReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
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
return message;
}
          };

const baseAgentIngressesDeleteReq: object = {  };

export const AgentIngressesDeleteReq = {
            encode(
      message: AgentIngressesDeleteReq,
      writer: _m0.Writer = _m0.Writer.create(),
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
      length?: number,
    ): AgentIngressesDeleteReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseAgentIngressesDeleteReq } as AgentIngressesDeleteReq;
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

fromPartial(object: DeepPartial<AgentIngressesDeleteReq>): AgentIngressesDeleteReq {
      const message = { ...baseAgentIngressesDeleteReq } as AgentIngressesDeleteReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
return message;
}
          };

const baseAgentIngressesDeleteByAccountReq: object = {  };

export const AgentIngressesDeleteByAccountReq = {
            encode(
      message: AgentIngressesDeleteByAccountReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): AgentIngressesDeleteByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseAgentIngressesDeleteByAccountReq } as AgentIngressesDeleteByAccountReq;
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

fromPartial(object: DeepPartial<AgentIngressesDeleteByAccountReq>): AgentIngressesDeleteByAccountReq {
      const message = { ...baseAgentIngressesDeleteByAccountReq } as AgentIngressesDeleteByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
return message;
}
          };

const baseAgentIngressesGetByAccountReq: object = {  };

export const AgentIngressesGetByAccountReq = {
            encode(
      message: AgentIngressesGetByAccountReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
        }
if (message.paging !== undefined) {
          Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): AgentIngressesGetByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseAgentIngressesGetByAccountReq } as AgentIngressesGetByAccountReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = ID.decode(reader, reader.uint32());
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

fromPartial(object: DeepPartial<AgentIngressesGetByAccountReq>): AgentIngressesGetByAccountReq {
      const message = { ...baseAgentIngressesGetByAccountReq } as AgentIngressesGetByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
if (object.paging !== undefined && object.paging !== null) {
message.paging = Paging.fromPartial(object.paging);
} else {
message.paging = undefined
}
return message;
}
          };

const baseAgentIngressesGetByIDReq: object = {  };

export const AgentIngressesGetByIDReq = {
            encode(
      message: AgentIngressesGetByIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
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
      length?: number,
    ): AgentIngressesGetByIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseAgentIngressesGetByIDReq } as AgentIngressesGetByIDReq;
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

fromPartial(object: DeepPartial<AgentIngressesGetByIDReq>): AgentIngressesGetByIDReq {
      const message = { ...baseAgentIngressesGetByIDReq } as AgentIngressesGetByIDReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
return message;
}
          };

const baseAgentIngressesGetByUnscopedIDReq: object = {  };

export const AgentIngressesGetByUnscopedIDReq = {
            encode(
      message: AgentIngressesGetByUnscopedIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): AgentIngressesGetByUnscopedIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseAgentIngressesGetByUnscopedIDReq } as AgentIngressesGetByUnscopedIDReq;
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

fromPartial(object: DeepPartial<AgentIngressesGetByUnscopedIDReq>): AgentIngressesGetByUnscopedIDReq {
      const message = { ...baseAgentIngressesGetByUnscopedIDReq } as AgentIngressesGetByUnscopedIDReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
return message;
}
          };

const baseAgentIngressesVerifyNSReq: object = {  };

export const AgentIngressesVerifyNSReq = {
            encode(
      message: AgentIngressesVerifyNSReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(18).fork()).ldelim();
        }
if (message.mockSuccess !== undefined) {
          OptBool.encode(message.mockSuccess, writer.uint32(26).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): AgentIngressesVerifyNSReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseAgentIngressesVerifyNSReq } as AgentIngressesVerifyNSReq;
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
message.mockSuccess = OptBool.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<AgentIngressesVerifyNSReq>): AgentIngressesVerifyNSReq {
      const message = { ...baseAgentIngressesVerifyNSReq } as AgentIngressesVerifyNSReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
if (object.mockSuccess !== undefined && object.mockSuccess !== null) {
message.mockSuccess = OptBool.fromPartial(object.mockSuccess);
} else {
message.mockSuccess = undefined
}
return message;
}
          };

const baseAgentIngressesReissueCertificatesReq: object = { reissueAll: false };

export const AgentIngressesReissueCertificatesReq = {
            encode(
      message: AgentIngressesReissueCertificatesReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.reissueAll === true) {
          writer.uint32(8).bool(message.reissueAll);
        }
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): AgentIngressesReissueCertificatesReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseAgentIngressesReissueCertificatesReq } as AgentIngressesReissueCertificatesReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.reissueAll = reader.bool();
break;
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

fromPartial(object: DeepPartial<AgentIngressesReissueCertificatesReq>): AgentIngressesReissueCertificatesReq {
      const message = { ...baseAgentIngressesReissueCertificatesReq } as AgentIngressesReissueCertificatesReq;
if (object.reissueAll !== undefined && object.reissueAll !== null) {
message.reissueAll = object.reissueAll;
} else {
message.reissueAll = false
}
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
return message;
}
          };

const baseAgentIngressesSyncRecordsReq: object = {  };

export const AgentIngressesSyncRecordsReq = {
            encode(
      message: AgentIngressesSyncRecordsReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.ids) {
            ID.encode(v!, writer.uint32(10).fork()).ldelim();
          }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): AgentIngressesSyncRecordsReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseAgentIngressesSyncRecordsReq } as AgentIngressesSyncRecordsReq;
message.ids = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.ids.push(ID.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<AgentIngressesSyncRecordsReq>): AgentIngressesSyncRecordsReq {
      const message = { ...baseAgentIngressesSyncRecordsReq } as AgentIngressesSyncRecordsReq;
message.ids = [];
if (object.ids !== undefined && object.ids !== null) {
for (const e of object.ids) {
            message.ids.push(ID.fromPartial(e));
          }
}
return message;
}
          };

export interface AgentIngresses {
/** Create an Agent Ingress */
Create(request: DeepPartial<AgentIngressesCreateReq>,metadata?: grpc.Metadata): Promise<AgentIngress>;
/** Update an Agent Ingress */
Update(request: DeepPartial<AgentIngressesUpdateReq>,metadata?: grpc.Metadata): Promise<AgentIngress>;
/** Delete an Agent Ingress */
Delete(request: DeepPartial<AgentIngressesDeleteReq>,metadata?: grpc.Metadata): Promise<AgentIngress>;
/** Delete all Agent Ingresses owned by a given account. */
DeleteByAccount(request: DeepPartial<AgentIngressesDeleteByAccountReq>,metadata?: grpc.Metadata): Promise<AgentIngressListResp>;
/**
 * Reissue certificates for agent ingresses. By default it only reissues
 * certificates that are about to expire. Callers may override to ask the
 * service to reissue all certificates.
 */
ReissueCertificates(request: DeepPartial<AgentIngressesReissueCertificatesReq>,metadata?: grpc.Metadata): Promise<AgentIngressListResp>;
/**
 * Sync DNS records for agent ingresses to match the authoritative tunnel DNS
 * records. By default it will synchronize all ingresses, but the caller may
 * specify an explicit list of ingresses to synchronize.
 */
SyncRecords(request: DeepPartial<AgentIngressesSyncRecordsReq>,metadata?: grpc.Metadata): Promise<Empty>;
/**
 * Return all Agent Ingresses owned by a given account. Only a subset
 * of results will be returned if the paging parameter is included.
 */
GetByAccount(request: DeepPartial<AgentIngressesGetByAccountReq>,metadata?: grpc.Metadata): Promise<AgentIngressListResp>;
/**
 * Check the DNS NS record for the agent ingress domain and return
 * an error if it does not contain the correct NS target record values.
 */
VerifyNS(request: DeepPartial<AgentIngressesVerifyNSReq>,metadata?: grpc.Metadata): Promise<Empty>;
/** Return an Agent Ingress by ID within a given account. */
GetByID(request: DeepPartial<AgentIngressesGetByIDReq>,metadata?: grpc.Metadata): Promise<AgentIngress>;
/** Return an Agent Ingress by ID without limiting the search by an account id. */
GetByUnscopedID(request: DeepPartial<AgentIngressesGetByUnscopedIDReq>,metadata?: grpc.Metadata): Promise<AgentIngress>;
Sync(request: DeepPartial<SyncReq>,metadata?: grpc.Metadata): Promise<StreamItem>;
}

export class AgentIngressesClientImpl implements AgentIngresses {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.Create = this.Create.bind(this);this.Update = this.Update.bind(this);this.Delete = this.Delete.bind(this);this.DeleteByAccount = this.DeleteByAccount.bind(this);this.ReissueCertificates = this.ReissueCertificates.bind(this);this.SyncRecords = this.SyncRecords.bind(this);this.GetByAccount = this.GetByAccount.bind(this);this.VerifyNS = this.VerifyNS.bind(this);this.GetByID = this.GetByID.bind(this);this.GetByUnscopedID = this.GetByUnscopedID.bind(this);this.Sync = this.Sync.bind(this);}

    Create(
      request: DeepPartial<AgentIngressesCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<AgentIngress> {
      return this.rpc.unary(
        AgentIngressesCreateDesc,
        AgentIngressesCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<AgentIngressesUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<AgentIngress> {
      return this.rpc.unary(
        AgentIngressesUpdateDesc,
        AgentIngressesUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<AgentIngressesDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<AgentIngress> {
      return this.rpc.unary(
        AgentIngressesDeleteDesc,
        AgentIngressesDeleteReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteByAccount(
      request: DeepPartial<AgentIngressesDeleteByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<AgentIngressListResp> {
      return this.rpc.unary(
        AgentIngressesDeleteByAccountDesc,
        AgentIngressesDeleteByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    ReissueCertificates(
      request: DeepPartial<AgentIngressesReissueCertificatesReq>,
      metadata?: grpc.Metadata,
    ): Promise<AgentIngressListResp> {
      return this.rpc.unary(
        AgentIngressesReissueCertificatesDesc,
        AgentIngressesReissueCertificatesReq.fromPartial(request),
        metadata,
      );
    }
  
    SyncRecords(
      request: DeepPartial<AgentIngressesSyncRecordsReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        AgentIngressesSyncRecordsDesc,
        AgentIngressesSyncRecordsReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByAccount(
      request: DeepPartial<AgentIngressesGetByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<AgentIngressListResp> {
      return this.rpc.unary(
        AgentIngressesGetByAccountDesc,
        AgentIngressesGetByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    VerifyNS(
      request: DeepPartial<AgentIngressesVerifyNSReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        AgentIngressesVerifyNSDesc,
        AgentIngressesVerifyNSReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByID(
      request: DeepPartial<AgentIngressesGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<AgentIngress> {
      return this.rpc.unary(
        AgentIngressesGetByIDDesc,
        AgentIngressesGetByIDReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByUnscopedID(
      request: DeepPartial<AgentIngressesGetByUnscopedIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<AgentIngress> {
      return this.rpc.unary(
        AgentIngressesGetByUnscopedIDDesc,
        AgentIngressesGetByUnscopedIDReq.fromPartial(request),
        metadata,
      );
    }
  
    Sync(
      request: DeepPartial<SyncReq>,
      metadata?: grpc.Metadata,
    ): Promise<StreamItem> {
      return this.rpc.invoke(
        AgentIngressesSyncDesc,
        request,
        metadata,
      );
    }
  }

export const AgentIngressesDesc = {
      serviceName: "rpx.AgentIngresses",
    };

export const AgentIngressesCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: AgentIngressesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return AgentIngressesCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...AgentIngress.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const AgentIngressesUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: AgentIngressesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return AgentIngressesUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...AgentIngress.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const AgentIngressesDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: AgentIngressesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return AgentIngressesDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...AgentIngress.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const AgentIngressesDeleteByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteByAccount",
      service: AgentIngressesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return AgentIngressesDeleteByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...AgentIngressListResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const AgentIngressesReissueCertificatesDesc: UnaryMethodDefinitionish = {
      methodName: "ReissueCertificates",
      service: AgentIngressesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return AgentIngressesReissueCertificatesReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...AgentIngressListResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const AgentIngressesSyncRecordsDesc: UnaryMethodDefinitionish = {
      methodName: "SyncRecords",
      service: AgentIngressesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return AgentIngressesSyncRecordsReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const AgentIngressesGetByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "GetByAccount",
      service: AgentIngressesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return AgentIngressesGetByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...AgentIngressListResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const AgentIngressesVerifyNSDesc: UnaryMethodDefinitionish = {
      methodName: "VerifyNS",
      service: AgentIngressesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return AgentIngressesVerifyNSReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const AgentIngressesGetByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByID",
      service: AgentIngressesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return AgentIngressesGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...AgentIngress.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const AgentIngressesGetByUnscopedIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByUnscopedID",
      service: AgentIngressesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return AgentIngressesGetByUnscopedIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...AgentIngress.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const AgentIngressesSyncDesc: UnaryMethodDefinitionish = {
      methodName: "Sync",
      service: AgentIngressesDesc,
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

