// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from 'long';
import { grpc } from '@improbable-eng/grpc-web';
import _m0 from 'protobufjs/minimal';

import { Backend, Backend_Static, Backend_TunnelGroup, Backend_Weighted, Backend_Failover, Backend_HTTPResponse } from '../rpx/model_backends';
import { Empty, ID, OptString, OptBytes, OptMapStrStr, OptInt32 } from '../pb/types';
import { StreamItem, SyncReq } from '../rpx/stream';
import { BrowserHeaders } from 'browser-headers';

import { Paging } from '../rpx/model';

export const protobufPackage = 'rpx';

export enum BackendFilter {
ALL = 0,
STATIC = 1,
TUNNEL_GROUP = 2,
WEIGHTED = 3,
FAILOVER = 4,
HTTP_RESPONSE = 5,
}

export interface BackendGetByAccountReq {
accountId: number,
filter: BackendFilter,
paging: Paging | undefined,
}

export interface BackendGetByIDReq {
id: ID | undefined,
accountId: number,
filter: BackendFilter,
}

export interface BackendCreateReq {
accountId: number,
description: string,
metadata: string,
static: Backend_Static | undefined,
tunnelGroup: Backend_TunnelGroup | undefined,
weighted: Backend_Weighted | undefined,
failover: Backend_Failover | undefined,
httpResponse: Backend_HTTPResponse | undefined,
}

export interface BackendUpdateReq {
id: ID | undefined,
accountId: number,
description: OptString | undefined,
metadata: OptString | undefined,
static: Backend_Static | undefined,
tunnelGroup: Backend_TunnelGroup | undefined,
weighted: Backend_Weighted | undefined,
failover: Backend_Failover | undefined,
httpResponse: BackendUpdateReq_HTTPResponseUpdate | undefined,
}

/**
 * HTTPResponseUpdate is similar to HTTPResponse, but has all fields optional
 * so that partial updates may be performed.
 */
export interface BackendUpdateReq_HTTPResponseUpdate {
body: OptBytes | undefined,
headers: OptMapStrStr | undefined,
statusCode: OptInt32 | undefined,
}

export interface BackendDeleteReq {
id: ID | undefined,
accountId: number,
}

export interface BackendList {
backends: Backend[],
next: Paging | undefined,
}

export interface BackendDeleteByAccountReq {
accountId: number,
}

const baseBackendGetByAccountReq: object = { accountId: 0,filter: 0 };

export const BackendGetByAccountReq = {
            encode(
      message: BackendGetByAccountReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.filter !== 0) {
          writer.uint32(16).int32(message.filter);
        }
if (message.paging !== undefined) {
          Paging.encode(message.paging, writer.uint32(26).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): BackendGetByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseBackendGetByAccountReq } as BackendGetByAccountReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.filter = reader.int32() as any;
break;
case 3:
message.paging = Paging.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<BackendGetByAccountReq>): BackendGetByAccountReq {
      const message = { ...baseBackendGetByAccountReq } as BackendGetByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.filter !== undefined && object.filter !== null) {
message.filter = object.filter;
} else {
message.filter = 0
}
if (object.paging !== undefined && object.paging !== null) {
message.paging = Paging.fromPartial(object.paging);
} else {
message.paging = undefined
}
return message;
}
          };

const baseBackendGetByIDReq: object = { accountId: 0,filter: 0 };

export const BackendGetByIDReq = {
            encode(
      message: BackendGetByIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
if (message.filter !== 0) {
          writer.uint32(24).int32(message.filter);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): BackendGetByIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseBackendGetByIDReq } as BackendGetByIDReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 3:
message.filter = reader.int32() as any;
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<BackendGetByIDReq>): BackendGetByIDReq {
      const message = { ...baseBackendGetByIDReq } as BackendGetByIDReq;
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
if (object.filter !== undefined && object.filter !== null) {
message.filter = object.filter;
} else {
message.filter = 0
}
return message;
}
          };

const baseBackendCreateReq: object = { accountId: 0,description: "",metadata: "" };

export const BackendCreateReq = {
            encode(
      message: BackendCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.description !== "") {
          writer.uint32(18).string(message.description);
        }
if (message.metadata !== "") {
          writer.uint32(26).string(message.metadata);
        }
if (message.static !== undefined) {
          Backend_Static.encode(message.static, writer.uint32(130).fork()).ldelim();
        }
if (message.tunnelGroup !== undefined) {
          Backend_TunnelGroup.encode(message.tunnelGroup, writer.uint32(138).fork()).ldelim();
        }
if (message.weighted !== undefined) {
          Backend_Weighted.encode(message.weighted, writer.uint32(146).fork()).ldelim();
        }
if (message.failover !== undefined) {
          Backend_Failover.encode(message.failover, writer.uint32(154).fork()).ldelim();
        }
if (message.httpResponse !== undefined) {
          Backend_HTTPResponse.encode(message.httpResponse, writer.uint32(162).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): BackendCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseBackendCreateReq } as BackendCreateReq;
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
message.metadata = reader.string();
break;
case 16:
message.static = Backend_Static.decode(reader, reader.uint32());
break;
case 17:
message.tunnelGroup = Backend_TunnelGroup.decode(reader, reader.uint32());
break;
case 18:
message.weighted = Backend_Weighted.decode(reader, reader.uint32());
break;
case 19:
message.failover = Backend_Failover.decode(reader, reader.uint32());
break;
case 20:
message.httpResponse = Backend_HTTPResponse.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<BackendCreateReq>): BackendCreateReq {
      const message = { ...baseBackendCreateReq } as BackendCreateReq;
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
if (object.static !== undefined && object.static !== null) {
message.static = Backend_Static.fromPartial(object.static);
} else {
message.static = undefined
}
if (object.tunnelGroup !== undefined && object.tunnelGroup !== null) {
message.tunnelGroup = Backend_TunnelGroup.fromPartial(object.tunnelGroup);
} else {
message.tunnelGroup = undefined
}
if (object.weighted !== undefined && object.weighted !== null) {
message.weighted = Backend_Weighted.fromPartial(object.weighted);
} else {
message.weighted = undefined
}
if (object.failover !== undefined && object.failover !== null) {
message.failover = Backend_Failover.fromPartial(object.failover);
} else {
message.failover = undefined
}
if (object.httpResponse !== undefined && object.httpResponse !== null) {
message.httpResponse = Backend_HTTPResponse.fromPartial(object.httpResponse);
} else {
message.httpResponse = undefined
}
return message;
}
          };

const baseBackendUpdateReq: object = { accountId: 0 };

export const BackendUpdateReq = {
            encode(
      message: BackendUpdateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
if (message.description !== undefined) {
          OptString.encode(message.description, writer.uint32(26).fork()).ldelim();
        }
if (message.metadata !== undefined) {
          OptString.encode(message.metadata, writer.uint32(34).fork()).ldelim();
        }
if (message.static !== undefined) {
          Backend_Static.encode(message.static, writer.uint32(130).fork()).ldelim();
        }
if (message.tunnelGroup !== undefined) {
          Backend_TunnelGroup.encode(message.tunnelGroup, writer.uint32(138).fork()).ldelim();
        }
if (message.weighted !== undefined) {
          Backend_Weighted.encode(message.weighted, writer.uint32(146).fork()).ldelim();
        }
if (message.failover !== undefined) {
          Backend_Failover.encode(message.failover, writer.uint32(154).fork()).ldelim();
        }
if (message.httpResponse !== undefined) {
          BackendUpdateReq_HTTPResponseUpdate.encode(message.httpResponse, writer.uint32(162).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): BackendUpdateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseBackendUpdateReq } as BackendUpdateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 3:
message.description = OptString.decode(reader, reader.uint32());
break;
case 4:
message.metadata = OptString.decode(reader, reader.uint32());
break;
case 16:
message.static = Backend_Static.decode(reader, reader.uint32());
break;
case 17:
message.tunnelGroup = Backend_TunnelGroup.decode(reader, reader.uint32());
break;
case 18:
message.weighted = Backend_Weighted.decode(reader, reader.uint32());
break;
case 19:
message.failover = Backend_Failover.decode(reader, reader.uint32());
break;
case 20:
message.httpResponse = BackendUpdateReq_HTTPResponseUpdate.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<BackendUpdateReq>): BackendUpdateReq {
      const message = { ...baseBackendUpdateReq } as BackendUpdateReq;
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
if (object.static !== undefined && object.static !== null) {
message.static = Backend_Static.fromPartial(object.static);
} else {
message.static = undefined
}
if (object.tunnelGroup !== undefined && object.tunnelGroup !== null) {
message.tunnelGroup = Backend_TunnelGroup.fromPartial(object.tunnelGroup);
} else {
message.tunnelGroup = undefined
}
if (object.weighted !== undefined && object.weighted !== null) {
message.weighted = Backend_Weighted.fromPartial(object.weighted);
} else {
message.weighted = undefined
}
if (object.failover !== undefined && object.failover !== null) {
message.failover = Backend_Failover.fromPartial(object.failover);
} else {
message.failover = undefined
}
if (object.httpResponse !== undefined && object.httpResponse !== null) {
message.httpResponse = BackendUpdateReq_HTTPResponseUpdate.fromPartial(object.httpResponse);
} else {
message.httpResponse = undefined
}
return message;
}
          };

const baseBackendUpdateReq_HTTPResponseUpdate: object = {  };

export const BackendUpdateReq_HTTPResponseUpdate = {
            encode(
      message: BackendUpdateReq_HTTPResponseUpdate,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.body !== undefined) {
          OptBytes.encode(message.body, writer.uint32(10).fork()).ldelim();
        }
if (message.headers !== undefined) {
          OptMapStrStr.encode(message.headers, writer.uint32(18).fork()).ldelim();
        }
if (message.statusCode !== undefined) {
          OptInt32.encode(message.statusCode, writer.uint32(26).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): BackendUpdateReq_HTTPResponseUpdate {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseBackendUpdateReq_HTTPResponseUpdate } as BackendUpdateReq_HTTPResponseUpdate;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.body = OptBytes.decode(reader, reader.uint32());
break;
case 2:
message.headers = OptMapStrStr.decode(reader, reader.uint32());
break;
case 3:
message.statusCode = OptInt32.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<BackendUpdateReq_HTTPResponseUpdate>): BackendUpdateReq_HTTPResponseUpdate {
      const message = { ...baseBackendUpdateReq_HTTPResponseUpdate } as BackendUpdateReq_HTTPResponseUpdate;
if (object.body !== undefined && object.body !== null) {
message.body = OptBytes.fromPartial(object.body);
} else {
message.body = undefined
}
if (object.headers !== undefined && object.headers !== null) {
message.headers = OptMapStrStr.fromPartial(object.headers);
} else {
message.headers = undefined
}
if (object.statusCode !== undefined && object.statusCode !== null) {
message.statusCode = OptInt32.fromPartial(object.statusCode);
} else {
message.statusCode = undefined
}
return message;
}
          };

const baseBackendDeleteReq: object = { accountId: 0 };

export const BackendDeleteReq = {
            encode(
      message: BackendDeleteReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): BackendDeleteReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseBackendDeleteReq } as BackendDeleteReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
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

fromPartial(object: DeepPartial<BackendDeleteReq>): BackendDeleteReq {
      const message = { ...baseBackendDeleteReq } as BackendDeleteReq;
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

const baseBackendList: object = {  };

export const BackendList = {
            encode(
      message: BackendList,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.backends) {
            Backend.encode(v!, writer.uint32(10).fork()).ldelim();
          }
if (message.next !== undefined) {
          Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): BackendList {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseBackendList } as BackendList;
message.backends = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.backends.push(Backend.decode(reader, reader.uint32()));
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

fromPartial(object: DeepPartial<BackendList>): BackendList {
      const message = { ...baseBackendList } as BackendList;
message.backends = [];
if (object.backends !== undefined && object.backends !== null) {
for (const e of object.backends) {
            message.backends.push(Backend.fromPartial(e));
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

const baseBackendDeleteByAccountReq: object = { accountId: 0 };

export const BackendDeleteByAccountReq = {
            encode(
      message: BackendDeleteByAccountReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): BackendDeleteByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseBackendDeleteByAccountReq } as BackendDeleteByAccountReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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

fromPartial(object: DeepPartial<BackendDeleteByAccountReq>): BackendDeleteByAccountReq {
      const message = { ...baseBackendDeleteByAccountReq } as BackendDeleteByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

export interface Backends {
GetByAccount(request: DeepPartial<BackendGetByAccountReq>,metadata?: grpc.Metadata): Promise<BackendList>;
GetByID(request: DeepPartial<BackendGetByIDReq>,metadata?: grpc.Metadata): Promise<Backend>;
Create(request: DeepPartial<BackendCreateReq>,metadata?: grpc.Metadata): Promise<Backend>;
Update(request: DeepPartial<BackendUpdateReq>,metadata?: grpc.Metadata): Promise<Backend>;
Delete(request: DeepPartial<BackendDeleteReq>,metadata?: grpc.Metadata): Promise<Empty>;
DeleteByAccount(request: DeepPartial<BackendDeleteByAccountReq>,metadata?: grpc.Metadata): Promise<Empty>;
/** Replication */
Sync(request: DeepPartial<SyncReq>,metadata?: grpc.Metadata): Promise<StreamItem>;
}

export class BackendsClientImpl implements Backends {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.GetByAccount = this.GetByAccount.bind(this);this.GetByID = this.GetByID.bind(this);this.Create = this.Create.bind(this);this.Update = this.Update.bind(this);this.Delete = this.Delete.bind(this);this.DeleteByAccount = this.DeleteByAccount.bind(this);this.Sync = this.Sync.bind(this);}

    GetByAccount(
      request: DeepPartial<BackendGetByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<BackendList> {
      return this.rpc.unary(
        BackendsGetByAccountDesc,
        BackendGetByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByID(
      request: DeepPartial<BackendGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<Backend> {
      return this.rpc.unary(
        BackendsGetByIDDesc,
        BackendGetByIDReq.fromPartial(request),
        metadata,
      );
    }
  
    Create(
      request: DeepPartial<BackendCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<Backend> {
      return this.rpc.unary(
        BackendsCreateDesc,
        BackendCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<BackendUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<Backend> {
      return this.rpc.unary(
        BackendsUpdateDesc,
        BackendUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<BackendDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        BackendsDeleteDesc,
        BackendDeleteReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteByAccount(
      request: DeepPartial<BackendDeleteByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        BackendsDeleteByAccountDesc,
        BackendDeleteByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    Sync(
      request: DeepPartial<SyncReq>,
      metadata?: grpc.Metadata,
    ): Promise<StreamItem> {
      return this.rpc.invoke(
        BackendsSyncDesc,
        request,
        metadata,
      );
    }
  }

export const BackendsDesc = {
      serviceName: "rpx.Backends",
    };

export const BackendsGetByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "GetByAccount",
      service: BackendsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return BackendGetByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...BackendList.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const BackendsGetByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByID",
      service: BackendsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return BackendGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Backend.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const BackendsCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: BackendsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return BackendCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Backend.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const BackendsUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: BackendsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return BackendUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Backend.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const BackendsDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: BackendsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return BackendDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const BackendsDeleteByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteByAccount",
      service: BackendsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return BackendDeleteByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const BackendsSyncDesc: UnaryMethodDefinitionish = {
      methodName: "Sync",
      service: BackendsDesc,
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

