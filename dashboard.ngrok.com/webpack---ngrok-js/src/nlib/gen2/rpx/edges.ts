// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from 'long';
import { grpc } from '@improbable-eng/grpc-web';
import _m0 from 'protobufjs/minimal';

import { Edge, HTTPSEdge_Route, HTTPSEdge_RouteModules, EdgeHostPort, TCPEdge_Modules, TLSEdge_Modules, HTTPSEdge_Modules } from '../rpx/model_edges';
import { Empty, ID, OptString, OptRepeatedString } from '../pb/types';
import { StreamItem, SyncReq } from '../rpx/stream';
import { BrowserHeaders } from 'browser-headers';

import { Paging } from '../rpx/model';

export const protobufPackage = 'rpx';

export interface EdgesGetByIDReq {
id: ID | undefined,
accountId: ID | undefined,
edge: EdgesTypes_Edge,
}

export interface EdgesGetByAccountReq {
accountId: ID | undefined,
paging: Paging | undefined,
edge: EdgesTypes_Edge,
}

export interface EdgesCreateReq {
accountId: ID | undefined,
legacyAccountId: number,
description: string,
metadata: string,
hostports: string[],
tcpModules: TCPEdge_Modules | undefined,
tlsModules: TLSEdge_Modules | undefined,
httpsModules: HTTPSEdge_Modules | undefined,
routeList: RouteList | undefined,
}

export interface EdgesUpdateReq {
id: ID | undefined,
accountId: ID | undefined,
legacyAccountId: number,
description: OptString | undefined,
metadata: OptString | undefined,
hostports: OptRepeatedString | undefined,
tcpModules: TCPEdge_Modules | undefined,
tlsModules: TLSEdge_Modules | undefined,
httpsModules: HTTPSEdge_Modules | undefined,
routeList: RouteList | undefined,
}

export interface EdgesDeleteReq {
id: ID | undefined,
accountId: ID | undefined,
edge: EdgesTypes_Edge,
}

export interface EdgesDeleteModuleReq {
id: ID | undefined,
accountId: ID | undefined,
edge: EdgesTypes_Edge,
module: EdgesTypes_Module,
}

export interface EdgesDeleteByAccountReq {
accountId: ID | undefined,
}

export interface RouteList {
httpsRoutes: HTTPSEdge_Route[],
}

export interface EdgeList {
edges: Edge[],
next: Paging | undefined,
}

export interface EdgeRoutesGetByIDReq {
edgeId: ID | undefined,
id: ID | undefined,
accountId: ID | undefined,
}

export interface EdgeRoutesCreateReq {
edgeId: ID | undefined,
legacyAccountId: number,
accountId: ID | undefined,
route: HTTPSEdge_Route | undefined,
}

export interface EdgeRoutesUpdateReq {
edgeId: ID | undefined,
id: ID | undefined,
accountId: ID | undefined,
route: HTTPSEdge_Route | undefined,
}

export interface EdgeRoutesDeleteReq {
edgeId: ID | undefined,
id: ID | undefined,
accountId: ID | undefined,
}

export interface EdgeRoutesDeleteModuleReq {
edgeId: ID | undefined,
id: ID | undefined,
accountId: ID | undefined,
module: EdgesTypes_Module,
}

export interface EdgeRoutesModulesGetReq {
edgeId: ID | undefined,
id: ID | undefined,
accountId: ID | undefined,
}

export interface EdgesTypes {
}

export enum EdgesTypes_Module {
UndefinedModule = 0,
MutualTLS = 1,
BasicAuth = 2,
RequestHeaders = 3,
Compression = 4,
CircuitBreaker = 5,
IPRestriction = 6,
TLSTermination = 7,
WebhookValidation = 8,
OAuth = 9,
ResponseHeaders = 10,
Logging = 11,
SAML = 12,
OIDC = 13,
Backend = 14,
WebsocketTCPConverter = 15,
}

export enum EdgesTypes_Edge {
UndefinedEdge = 0,
TCP = 1,
TLS = 2,
HTTPS = 3,
}

export interface EdgeHostPortsGetByHostPortReq {
hostname: string,
port: number,
}

/**
 * used within edgepoints internally. Updates
 * the passed edge to contain these hostports exactly.
 */
export interface EdgeHostPortsUpdateReq {
accountId: ID | undefined,
legacyAccountId: number,
hostports: OptRepeatedString | undefined,
httpsEdgeId: ID | undefined,
tlsEdgeId: ID | undefined,
tcpEdgeId: ID | undefined,
}

export interface EdgeHostPortsGetByEdgeReq {
edgeId: ID | undefined,
}

export interface EdgeHostPortsGetByEdgeResp {
hostports: EdgeHostPort[],
}

const baseEdgesGetByIDReq: object = { edge: 0 };

export const EdgesGetByIDReq = {
            encode(
      message: EdgesGetByIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(18).fork()).ldelim();
        }
if (message.edge !== 0) {
          writer.uint32(24).int32(message.edge);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EdgesGetByIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEdgesGetByIDReq } as EdgesGetByIDReq;
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
message.edge = reader.int32() as any;
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EdgesGetByIDReq>): EdgesGetByIDReq {
      const message = { ...baseEdgesGetByIDReq } as EdgesGetByIDReq;
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
if (object.edge !== undefined && object.edge !== null) {
message.edge = object.edge;
} else {
message.edge = 0
}
return message;
}
          };

const baseEdgesGetByAccountReq: object = { edge: 0 };

export const EdgesGetByAccountReq = {
            encode(
      message: EdgesGetByAccountReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
        }
if (message.paging !== undefined) {
          Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
if (message.edge !== 0) {
          writer.uint32(24).int32(message.edge);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EdgesGetByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEdgesGetByAccountReq } as EdgesGetByAccountReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = ID.decode(reader, reader.uint32());
break;
case 2:
message.paging = Paging.decode(reader, reader.uint32());
break;
case 3:
message.edge = reader.int32() as any;
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EdgesGetByAccountReq>): EdgesGetByAccountReq {
      const message = { ...baseEdgesGetByAccountReq } as EdgesGetByAccountReq;
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
if (object.edge !== undefined && object.edge !== null) {
message.edge = object.edge;
} else {
message.edge = 0
}
return message;
}
          };

const baseEdgesCreateReq: object = { legacyAccountId: 0,description: "",metadata: "",hostports: "" };

export const EdgesCreateReq = {
            encode(
      message: EdgesCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
        }
if (message.legacyAccountId !== 0) {
          writer.uint32(16).int64(message.legacyAccountId);
        }
if (message.description !== "") {
          writer.uint32(26).string(message.description);
        }
if (message.metadata !== "") {
          writer.uint32(34).string(message.metadata);
        }
for (const v of message.hostports) {
            writer.uint32(42).string(v!);
          }
if (message.tcpModules !== undefined) {
          TCPEdge_Modules.encode(message.tcpModules, writer.uint32(50).fork()).ldelim();
        }
if (message.tlsModules !== undefined) {
          TLSEdge_Modules.encode(message.tlsModules, writer.uint32(58).fork()).ldelim();
        }
if (message.httpsModules !== undefined) {
          HTTPSEdge_Modules.encode(message.httpsModules, writer.uint32(66).fork()).ldelim();
        }
if (message.routeList !== undefined) {
          RouteList.encode(message.routeList, writer.uint32(82).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EdgesCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEdgesCreateReq } as EdgesCreateReq;
message.hostports = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = ID.decode(reader, reader.uint32());
break;
case 2:
message.legacyAccountId = longToNumber(reader.int64() as Long);
break;
case 3:
message.description = reader.string();
break;
case 4:
message.metadata = reader.string();
break;
case 5:
message.hostports.push(reader.string());
break;
case 6:
message.tcpModules = TCPEdge_Modules.decode(reader, reader.uint32());
break;
case 7:
message.tlsModules = TLSEdge_Modules.decode(reader, reader.uint32());
break;
case 8:
message.httpsModules = HTTPSEdge_Modules.decode(reader, reader.uint32());
break;
case 10:
message.routeList = RouteList.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EdgesCreateReq>): EdgesCreateReq {
      const message = { ...baseEdgesCreateReq } as EdgesCreateReq;
message.hostports = [];
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
if (object.legacyAccountId !== undefined && object.legacyAccountId !== null) {
message.legacyAccountId = object.legacyAccountId;
} else {
message.legacyAccountId = 0
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
if (object.hostports !== undefined && object.hostports !== null) {
for (const e of object.hostports) {
            message.hostports.push(e);
          }
}
if (object.tcpModules !== undefined && object.tcpModules !== null) {
message.tcpModules = TCPEdge_Modules.fromPartial(object.tcpModules);
} else {
message.tcpModules = undefined
}
if (object.tlsModules !== undefined && object.tlsModules !== null) {
message.tlsModules = TLSEdge_Modules.fromPartial(object.tlsModules);
} else {
message.tlsModules = undefined
}
if (object.httpsModules !== undefined && object.httpsModules !== null) {
message.httpsModules = HTTPSEdge_Modules.fromPartial(object.httpsModules);
} else {
message.httpsModules = undefined
}
if (object.routeList !== undefined && object.routeList !== null) {
message.routeList = RouteList.fromPartial(object.routeList);
} else {
message.routeList = undefined
}
return message;
}
          };

const baseEdgesUpdateReq: object = { legacyAccountId: 0 };

export const EdgesUpdateReq = {
            encode(
      message: EdgesUpdateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(18).fork()).ldelim();
        }
if (message.legacyAccountId !== 0) {
          writer.uint32(24).int64(message.legacyAccountId);
        }
if (message.description !== undefined) {
          OptString.encode(message.description, writer.uint32(34).fork()).ldelim();
        }
if (message.metadata !== undefined) {
          OptString.encode(message.metadata, writer.uint32(42).fork()).ldelim();
        }
if (message.hostports !== undefined) {
          OptRepeatedString.encode(message.hostports, writer.uint32(50).fork()).ldelim();
        }
if (message.tcpModules !== undefined) {
          TCPEdge_Modules.encode(message.tcpModules, writer.uint32(58).fork()).ldelim();
        }
if (message.tlsModules !== undefined) {
          TLSEdge_Modules.encode(message.tlsModules, writer.uint32(66).fork()).ldelim();
        }
if (message.httpsModules !== undefined) {
          HTTPSEdge_Modules.encode(message.httpsModules, writer.uint32(74).fork()).ldelim();
        }
if (message.routeList !== undefined) {
          RouteList.encode(message.routeList, writer.uint32(90).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EdgesUpdateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEdgesUpdateReq } as EdgesUpdateReq;
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
message.legacyAccountId = longToNumber(reader.int64() as Long);
break;
case 4:
message.description = OptString.decode(reader, reader.uint32());
break;
case 5:
message.metadata = OptString.decode(reader, reader.uint32());
break;
case 6:
message.hostports = OptRepeatedString.decode(reader, reader.uint32());
break;
case 7:
message.tcpModules = TCPEdge_Modules.decode(reader, reader.uint32());
break;
case 8:
message.tlsModules = TLSEdge_Modules.decode(reader, reader.uint32());
break;
case 9:
message.httpsModules = HTTPSEdge_Modules.decode(reader, reader.uint32());
break;
case 11:
message.routeList = RouteList.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EdgesUpdateReq>): EdgesUpdateReq {
      const message = { ...baseEdgesUpdateReq } as EdgesUpdateReq;
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
if (object.legacyAccountId !== undefined && object.legacyAccountId !== null) {
message.legacyAccountId = object.legacyAccountId;
} else {
message.legacyAccountId = 0
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
if (object.hostports !== undefined && object.hostports !== null) {
message.hostports = OptRepeatedString.fromPartial(object.hostports);
} else {
message.hostports = undefined
}
if (object.tcpModules !== undefined && object.tcpModules !== null) {
message.tcpModules = TCPEdge_Modules.fromPartial(object.tcpModules);
} else {
message.tcpModules = undefined
}
if (object.tlsModules !== undefined && object.tlsModules !== null) {
message.tlsModules = TLSEdge_Modules.fromPartial(object.tlsModules);
} else {
message.tlsModules = undefined
}
if (object.httpsModules !== undefined && object.httpsModules !== null) {
message.httpsModules = HTTPSEdge_Modules.fromPartial(object.httpsModules);
} else {
message.httpsModules = undefined
}
if (object.routeList !== undefined && object.routeList !== null) {
message.routeList = RouteList.fromPartial(object.routeList);
} else {
message.routeList = undefined
}
return message;
}
          };

const baseEdgesDeleteReq: object = { edge: 0 };

export const EdgesDeleteReq = {
            encode(
      message: EdgesDeleteReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(18).fork()).ldelim();
        }
if (message.edge !== 0) {
          writer.uint32(24).int32(message.edge);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EdgesDeleteReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEdgesDeleteReq } as EdgesDeleteReq;
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
message.edge = reader.int32() as any;
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EdgesDeleteReq>): EdgesDeleteReq {
      const message = { ...baseEdgesDeleteReq } as EdgesDeleteReq;
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
if (object.edge !== undefined && object.edge !== null) {
message.edge = object.edge;
} else {
message.edge = 0
}
return message;
}
          };

const baseEdgesDeleteModuleReq: object = { edge: 0,module: 0 };

export const EdgesDeleteModuleReq = {
            encode(
      message: EdgesDeleteModuleReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(18).fork()).ldelim();
        }
if (message.edge !== 0) {
          writer.uint32(24).int32(message.edge);
        }
if (message.module !== 0) {
          writer.uint32(32).int32(message.module);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EdgesDeleteModuleReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEdgesDeleteModuleReq } as EdgesDeleteModuleReq;
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
message.edge = reader.int32() as any;
break;
case 4:
message.module = reader.int32() as any;
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EdgesDeleteModuleReq>): EdgesDeleteModuleReq {
      const message = { ...baseEdgesDeleteModuleReq } as EdgesDeleteModuleReq;
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
if (object.edge !== undefined && object.edge !== null) {
message.edge = object.edge;
} else {
message.edge = 0
}
if (object.module !== undefined && object.module !== null) {
message.module = object.module;
} else {
message.module = 0
}
return message;
}
          };

const baseEdgesDeleteByAccountReq: object = {  };

export const EdgesDeleteByAccountReq = {
            encode(
      message: EdgesDeleteByAccountReq,
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
    ): EdgesDeleteByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEdgesDeleteByAccountReq } as EdgesDeleteByAccountReq;
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

fromPartial(object: DeepPartial<EdgesDeleteByAccountReq>): EdgesDeleteByAccountReq {
      const message = { ...baseEdgesDeleteByAccountReq } as EdgesDeleteByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
return message;
}
          };

const baseRouteList: object = {  };

export const RouteList = {
            encode(
      message: RouteList,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.httpsRoutes) {
            HTTPSEdge_Route.encode(v!, writer.uint32(82).fork()).ldelim();
          }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): RouteList {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseRouteList } as RouteList;
message.httpsRoutes = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 10:
message.httpsRoutes.push(HTTPSEdge_Route.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<RouteList>): RouteList {
      const message = { ...baseRouteList } as RouteList;
message.httpsRoutes = [];
if (object.httpsRoutes !== undefined && object.httpsRoutes !== null) {
for (const e of object.httpsRoutes) {
            message.httpsRoutes.push(HTTPSEdge_Route.fromPartial(e));
          }
}
return message;
}
          };

const baseEdgeList: object = {  };

export const EdgeList = {
            encode(
      message: EdgeList,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.edges) {
            Edge.encode(v!, writer.uint32(10).fork()).ldelim();
          }
if (message.next !== undefined) {
          Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EdgeList {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEdgeList } as EdgeList;
message.edges = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.edges.push(Edge.decode(reader, reader.uint32()));
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

fromPartial(object: DeepPartial<EdgeList>): EdgeList {
      const message = { ...baseEdgeList } as EdgeList;
message.edges = [];
if (object.edges !== undefined && object.edges !== null) {
for (const e of object.edges) {
            message.edges.push(Edge.fromPartial(e));
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

const baseEdgeRoutesGetByIDReq: object = {  };

export const EdgeRoutesGetByIDReq = {
            encode(
      message: EdgeRoutesGetByIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.edgeId !== undefined) {
          ID.encode(message.edgeId, writer.uint32(10).fork()).ldelim();
        }
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(18).fork()).ldelim();
        }
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(26).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EdgeRoutesGetByIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEdgeRoutesGetByIDReq } as EdgeRoutesGetByIDReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.edgeId = ID.decode(reader, reader.uint32());
break;
case 2:
message.id = ID.decode(reader, reader.uint32());
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

fromPartial(object: DeepPartial<EdgeRoutesGetByIDReq>): EdgeRoutesGetByIDReq {
      const message = { ...baseEdgeRoutesGetByIDReq } as EdgeRoutesGetByIDReq;
if (object.edgeId !== undefined && object.edgeId !== null) {
message.edgeId = ID.fromPartial(object.edgeId);
} else {
message.edgeId = undefined
}
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

const baseEdgeRoutesCreateReq: object = { legacyAccountId: 0 };

export const EdgeRoutesCreateReq = {
            encode(
      message: EdgeRoutesCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.edgeId !== undefined) {
          ID.encode(message.edgeId, writer.uint32(10).fork()).ldelim();
        }
if (message.legacyAccountId !== 0) {
          writer.uint32(16).int64(message.legacyAccountId);
        }
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(26).fork()).ldelim();
        }
if (message.route !== undefined) {
          HTTPSEdge_Route.encode(message.route, writer.uint32(34).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EdgeRoutesCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEdgeRoutesCreateReq } as EdgeRoutesCreateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.edgeId = ID.decode(reader, reader.uint32());
break;
case 2:
message.legacyAccountId = longToNumber(reader.int64() as Long);
break;
case 3:
message.accountId = ID.decode(reader, reader.uint32());
break;
case 4:
message.route = HTTPSEdge_Route.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EdgeRoutesCreateReq>): EdgeRoutesCreateReq {
      const message = { ...baseEdgeRoutesCreateReq } as EdgeRoutesCreateReq;
if (object.edgeId !== undefined && object.edgeId !== null) {
message.edgeId = ID.fromPartial(object.edgeId);
} else {
message.edgeId = undefined
}
if (object.legacyAccountId !== undefined && object.legacyAccountId !== null) {
message.legacyAccountId = object.legacyAccountId;
} else {
message.legacyAccountId = 0
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
if (object.route !== undefined && object.route !== null) {
message.route = HTTPSEdge_Route.fromPartial(object.route);
} else {
message.route = undefined
}
return message;
}
          };

const baseEdgeRoutesUpdateReq: object = {  };

export const EdgeRoutesUpdateReq = {
            encode(
      message: EdgeRoutesUpdateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.edgeId !== undefined) {
          ID.encode(message.edgeId, writer.uint32(10).fork()).ldelim();
        }
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(18).fork()).ldelim();
        }
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(26).fork()).ldelim();
        }
if (message.route !== undefined) {
          HTTPSEdge_Route.encode(message.route, writer.uint32(34).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EdgeRoutesUpdateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEdgeRoutesUpdateReq } as EdgeRoutesUpdateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.edgeId = ID.decode(reader, reader.uint32());
break;
case 2:
message.id = ID.decode(reader, reader.uint32());
break;
case 3:
message.accountId = ID.decode(reader, reader.uint32());
break;
case 4:
message.route = HTTPSEdge_Route.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EdgeRoutesUpdateReq>): EdgeRoutesUpdateReq {
      const message = { ...baseEdgeRoutesUpdateReq } as EdgeRoutesUpdateReq;
if (object.edgeId !== undefined && object.edgeId !== null) {
message.edgeId = ID.fromPartial(object.edgeId);
} else {
message.edgeId = undefined
}
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
if (object.route !== undefined && object.route !== null) {
message.route = HTTPSEdge_Route.fromPartial(object.route);
} else {
message.route = undefined
}
return message;
}
          };

const baseEdgeRoutesDeleteReq: object = {  };

export const EdgeRoutesDeleteReq = {
            encode(
      message: EdgeRoutesDeleteReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.edgeId !== undefined) {
          ID.encode(message.edgeId, writer.uint32(10).fork()).ldelim();
        }
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(18).fork()).ldelim();
        }
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(26).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EdgeRoutesDeleteReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEdgeRoutesDeleteReq } as EdgeRoutesDeleteReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.edgeId = ID.decode(reader, reader.uint32());
break;
case 2:
message.id = ID.decode(reader, reader.uint32());
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

fromPartial(object: DeepPartial<EdgeRoutesDeleteReq>): EdgeRoutesDeleteReq {
      const message = { ...baseEdgeRoutesDeleteReq } as EdgeRoutesDeleteReq;
if (object.edgeId !== undefined && object.edgeId !== null) {
message.edgeId = ID.fromPartial(object.edgeId);
} else {
message.edgeId = undefined
}
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

const baseEdgeRoutesDeleteModuleReq: object = { module: 0 };

export const EdgeRoutesDeleteModuleReq = {
            encode(
      message: EdgeRoutesDeleteModuleReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.edgeId !== undefined) {
          ID.encode(message.edgeId, writer.uint32(10).fork()).ldelim();
        }
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(18).fork()).ldelim();
        }
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(26).fork()).ldelim();
        }
if (message.module !== 0) {
          writer.uint32(32).int32(message.module);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EdgeRoutesDeleteModuleReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEdgeRoutesDeleteModuleReq } as EdgeRoutesDeleteModuleReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.edgeId = ID.decode(reader, reader.uint32());
break;
case 2:
message.id = ID.decode(reader, reader.uint32());
break;
case 3:
message.accountId = ID.decode(reader, reader.uint32());
break;
case 4:
message.module = reader.int32() as any;
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EdgeRoutesDeleteModuleReq>): EdgeRoutesDeleteModuleReq {
      const message = { ...baseEdgeRoutesDeleteModuleReq } as EdgeRoutesDeleteModuleReq;
if (object.edgeId !== undefined && object.edgeId !== null) {
message.edgeId = ID.fromPartial(object.edgeId);
} else {
message.edgeId = undefined
}
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
if (object.module !== undefined && object.module !== null) {
message.module = object.module;
} else {
message.module = 0
}
return message;
}
          };

const baseEdgeRoutesModulesGetReq: object = {  };

export const EdgeRoutesModulesGetReq = {
            encode(
      message: EdgeRoutesModulesGetReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.edgeId !== undefined) {
          ID.encode(message.edgeId, writer.uint32(10).fork()).ldelim();
        }
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(18).fork()).ldelim();
        }
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(26).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EdgeRoutesModulesGetReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEdgeRoutesModulesGetReq } as EdgeRoutesModulesGetReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.edgeId = ID.decode(reader, reader.uint32());
break;
case 2:
message.id = ID.decode(reader, reader.uint32());
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

fromPartial(object: DeepPartial<EdgeRoutesModulesGetReq>): EdgeRoutesModulesGetReq {
      const message = { ...baseEdgeRoutesModulesGetReq } as EdgeRoutesModulesGetReq;
if (object.edgeId !== undefined && object.edgeId !== null) {
message.edgeId = ID.fromPartial(object.edgeId);
} else {
message.edgeId = undefined
}
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

const baseEdgesTypes: object = {  };

export const EdgesTypes = {
            encode(
      _: EdgesTypes,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EdgesTypes {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEdgesTypes } as EdgesTypes;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(_: DeepPartial<EdgesTypes>): EdgesTypes {
      const message = { ...baseEdgesTypes } as EdgesTypes;
return message;
}
          };

const baseEdgeHostPortsGetByHostPortReq: object = { hostname: "",port: 0 };

export const EdgeHostPortsGetByHostPortReq = {
            encode(
      message: EdgeHostPortsGetByHostPortReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.hostname !== "") {
          writer.uint32(18).string(message.hostname);
        }
if (message.port !== 0) {
          writer.uint32(24).int32(message.port);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EdgeHostPortsGetByHostPortReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEdgeHostPortsGetByHostPortReq } as EdgeHostPortsGetByHostPortReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 2:
message.hostname = reader.string();
break;
case 3:
message.port = reader.int32();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EdgeHostPortsGetByHostPortReq>): EdgeHostPortsGetByHostPortReq {
      const message = { ...baseEdgeHostPortsGetByHostPortReq } as EdgeHostPortsGetByHostPortReq;
if (object.hostname !== undefined && object.hostname !== null) {
message.hostname = object.hostname;
} else {
message.hostname = ""
}
if (object.port !== undefined && object.port !== null) {
message.port = object.port;
} else {
message.port = 0
}
return message;
}
          };

const baseEdgeHostPortsUpdateReq: object = { legacyAccountId: 0 };

export const EdgeHostPortsUpdateReq = {
            encode(
      message: EdgeHostPortsUpdateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
        }
if (message.legacyAccountId !== 0) {
          writer.uint32(16).int64(message.legacyAccountId);
        }
if (message.hostports !== undefined) {
          OptRepeatedString.encode(message.hostports, writer.uint32(26).fork()).ldelim();
        }
if (message.httpsEdgeId !== undefined) {
          ID.encode(message.httpsEdgeId, writer.uint32(34).fork()).ldelim();
        }
if (message.tlsEdgeId !== undefined) {
          ID.encode(message.tlsEdgeId, writer.uint32(42).fork()).ldelim();
        }
if (message.tcpEdgeId !== undefined) {
          ID.encode(message.tcpEdgeId, writer.uint32(50).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EdgeHostPortsUpdateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEdgeHostPortsUpdateReq } as EdgeHostPortsUpdateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = ID.decode(reader, reader.uint32());
break;
case 2:
message.legacyAccountId = longToNumber(reader.int64() as Long);
break;
case 3:
message.hostports = OptRepeatedString.decode(reader, reader.uint32());
break;
case 4:
message.httpsEdgeId = ID.decode(reader, reader.uint32());
break;
case 5:
message.tlsEdgeId = ID.decode(reader, reader.uint32());
break;
case 6:
message.tcpEdgeId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EdgeHostPortsUpdateReq>): EdgeHostPortsUpdateReq {
      const message = { ...baseEdgeHostPortsUpdateReq } as EdgeHostPortsUpdateReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
if (object.legacyAccountId !== undefined && object.legacyAccountId !== null) {
message.legacyAccountId = object.legacyAccountId;
} else {
message.legacyAccountId = 0
}
if (object.hostports !== undefined && object.hostports !== null) {
message.hostports = OptRepeatedString.fromPartial(object.hostports);
} else {
message.hostports = undefined
}
if (object.httpsEdgeId !== undefined && object.httpsEdgeId !== null) {
message.httpsEdgeId = ID.fromPartial(object.httpsEdgeId);
} else {
message.httpsEdgeId = undefined
}
if (object.tlsEdgeId !== undefined && object.tlsEdgeId !== null) {
message.tlsEdgeId = ID.fromPartial(object.tlsEdgeId);
} else {
message.tlsEdgeId = undefined
}
if (object.tcpEdgeId !== undefined && object.tcpEdgeId !== null) {
message.tcpEdgeId = ID.fromPartial(object.tcpEdgeId);
} else {
message.tcpEdgeId = undefined
}
return message;
}
          };

const baseEdgeHostPortsGetByEdgeReq: object = {  };

export const EdgeHostPortsGetByEdgeReq = {
            encode(
      message: EdgeHostPortsGetByEdgeReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.edgeId !== undefined) {
          ID.encode(message.edgeId, writer.uint32(10).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EdgeHostPortsGetByEdgeReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEdgeHostPortsGetByEdgeReq } as EdgeHostPortsGetByEdgeReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.edgeId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EdgeHostPortsGetByEdgeReq>): EdgeHostPortsGetByEdgeReq {
      const message = { ...baseEdgeHostPortsGetByEdgeReq } as EdgeHostPortsGetByEdgeReq;
if (object.edgeId !== undefined && object.edgeId !== null) {
message.edgeId = ID.fromPartial(object.edgeId);
} else {
message.edgeId = undefined
}
return message;
}
          };

const baseEdgeHostPortsGetByEdgeResp: object = {  };

export const EdgeHostPortsGetByEdgeResp = {
            encode(
      message: EdgeHostPortsGetByEdgeResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.hostports) {
            EdgeHostPort.encode(v!, writer.uint32(10).fork()).ldelim();
          }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EdgeHostPortsGetByEdgeResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEdgeHostPortsGetByEdgeResp } as EdgeHostPortsGetByEdgeResp;
message.hostports = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.hostports.push(EdgeHostPort.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EdgeHostPortsGetByEdgeResp>): EdgeHostPortsGetByEdgeResp {
      const message = { ...baseEdgeHostPortsGetByEdgeResp } as EdgeHostPortsGetByEdgeResp;
message.hostports = [];
if (object.hostports !== undefined && object.hostports !== null) {
for (const e of object.hostports) {
            message.hostports.push(EdgeHostPort.fromPartial(e));
          }
}
return message;
}
          };

export interface Edges {
GetByID(request: DeepPartial<EdgesGetByIDReq>,metadata?: grpc.Metadata): Promise<Edge>;
GetByAccount(request: DeepPartial<EdgesGetByAccountReq>,metadata?: grpc.Metadata): Promise<EdgeList>;
Create(request: DeepPartial<EdgesCreateReq>,metadata?: grpc.Metadata): Promise<Edge>;
Update(request: DeepPartial<EdgesUpdateReq>,metadata?: grpc.Metadata): Promise<Edge>;
Delete(request: DeepPartial<EdgesDeleteReq>,metadata?: grpc.Metadata): Promise<Empty>;
DeleteModule(request: DeepPartial<EdgesDeleteModuleReq>,metadata?: grpc.Metadata): Promise<Edge>;
/** Delete all edges owned by the given account ID. */
DeleteByAccount(request: DeepPartial<EdgesDeleteByAccountReq>,metadata?: grpc.Metadata): Promise<Empty>;
/** Replication */
Sync(request: DeepPartial<SyncReq>,metadata?: grpc.Metadata): Promise<StreamItem>;
}

export class EdgesClientImpl implements Edges {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.GetByID = this.GetByID.bind(this);this.GetByAccount = this.GetByAccount.bind(this);this.Create = this.Create.bind(this);this.Update = this.Update.bind(this);this.Delete = this.Delete.bind(this);this.DeleteModule = this.DeleteModule.bind(this);this.DeleteByAccount = this.DeleteByAccount.bind(this);this.Sync = this.Sync.bind(this);}

    GetByID(
      request: DeepPartial<EdgesGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<Edge> {
      return this.rpc.unary(
        EdgesGetByIDDesc,
        EdgesGetByIDReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByAccount(
      request: DeepPartial<EdgesGetByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<EdgeList> {
      return this.rpc.unary(
        EdgesGetByAccountDesc,
        EdgesGetByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    Create(
      request: DeepPartial<EdgesCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<Edge> {
      return this.rpc.unary(
        EdgesCreateDesc,
        EdgesCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<EdgesUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<Edge> {
      return this.rpc.unary(
        EdgesUpdateDesc,
        EdgesUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<EdgesDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        EdgesDeleteDesc,
        EdgesDeleteReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteModule(
      request: DeepPartial<EdgesDeleteModuleReq>,
      metadata?: grpc.Metadata,
    ): Promise<Edge> {
      return this.rpc.unary(
        EdgesDeleteModuleDesc,
        EdgesDeleteModuleReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteByAccount(
      request: DeepPartial<EdgesDeleteByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        EdgesDeleteByAccountDesc,
        EdgesDeleteByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    Sync(
      request: DeepPartial<SyncReq>,
      metadata?: grpc.Metadata,
    ): Promise<StreamItem> {
      return this.rpc.invoke(
        EdgesSyncDesc,
        request,
        metadata,
      );
    }
  }

export const EdgesDesc = {
      serviceName: "rpx.Edges",
    };

export const EdgesGetByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByID",
      service: EdgesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EdgesGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Edge.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EdgesGetByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "GetByAccount",
      service: EdgesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EdgesGetByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EdgeList.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EdgesCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: EdgesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EdgesCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Edge.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EdgesUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: EdgesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EdgesUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Edge.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EdgesDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: EdgesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EdgesDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EdgesDeleteModuleDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteModule",
      service: EdgesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EdgesDeleteModuleReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Edge.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EdgesDeleteByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteByAccount",
      service: EdgesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EdgesDeleteByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EdgesSyncDesc: UnaryMethodDefinitionish = {
      methodName: "Sync",
      service: EdgesDesc,
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

export interface EdgeRoutes {
GetByID(request: DeepPartial<EdgeRoutesGetByIDReq>,metadata?: grpc.Metadata): Promise<HTTPSEdge_Route>;
Create(request: DeepPartial<EdgeRoutesCreateReq>,metadata?: grpc.Metadata): Promise<HTTPSEdge_Route>;
Update(request: DeepPartial<EdgeRoutesUpdateReq>,metadata?: grpc.Metadata): Promise<HTTPSEdge_Route>;
Delete(request: DeepPartial<EdgeRoutesDeleteReq>,metadata?: grpc.Metadata): Promise<Empty>;
DeleteModule(request: DeepPartial<EdgeRoutesDeleteModuleReq>,metadata?: grpc.Metadata): Promise<HTTPSEdge_Route>;
GetModulesByID(request: DeepPartial<EdgeRoutesModulesGetReq>,metadata?: grpc.Metadata): Promise<HTTPSEdge_RouteModules>;
}

export class EdgeRoutesClientImpl implements EdgeRoutes {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.GetByID = this.GetByID.bind(this);this.Create = this.Create.bind(this);this.Update = this.Update.bind(this);this.Delete = this.Delete.bind(this);this.DeleteModule = this.DeleteModule.bind(this);this.GetModulesByID = this.GetModulesByID.bind(this);}

    GetByID(
      request: DeepPartial<EdgeRoutesGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<HTTPSEdge_Route> {
      return this.rpc.unary(
        EdgeRoutesGetByIDDesc,
        EdgeRoutesGetByIDReq.fromPartial(request),
        metadata,
      );
    }
  
    Create(
      request: DeepPartial<EdgeRoutesCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<HTTPSEdge_Route> {
      return this.rpc.unary(
        EdgeRoutesCreateDesc,
        EdgeRoutesCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<EdgeRoutesUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<HTTPSEdge_Route> {
      return this.rpc.unary(
        EdgeRoutesUpdateDesc,
        EdgeRoutesUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<EdgeRoutesDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        EdgeRoutesDeleteDesc,
        EdgeRoutesDeleteReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteModule(
      request: DeepPartial<EdgeRoutesDeleteModuleReq>,
      metadata?: grpc.Metadata,
    ): Promise<HTTPSEdge_Route> {
      return this.rpc.unary(
        EdgeRoutesDeleteModuleDesc,
        EdgeRoutesDeleteModuleReq.fromPartial(request),
        metadata,
      );
    }
  
    GetModulesByID(
      request: DeepPartial<EdgeRoutesModulesGetReq>,
      metadata?: grpc.Metadata,
    ): Promise<HTTPSEdge_RouteModules> {
      return this.rpc.unary(
        EdgeRoutesGetModulesByIDDesc,
        EdgeRoutesModulesGetReq.fromPartial(request),
        metadata,
      );
    }
  }

export const EdgeRoutesDesc = {
      serviceName: "rpx.EdgeRoutes",
    };

export const EdgeRoutesGetByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByID",
      service: EdgeRoutesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EdgeRoutesGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...HTTPSEdge_Route.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EdgeRoutesCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: EdgeRoutesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EdgeRoutesCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...HTTPSEdge_Route.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EdgeRoutesUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: EdgeRoutesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EdgeRoutesUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...HTTPSEdge_Route.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EdgeRoutesDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: EdgeRoutesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EdgeRoutesDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EdgeRoutesDeleteModuleDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteModule",
      service: EdgeRoutesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EdgeRoutesDeleteModuleReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...HTTPSEdge_Route.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EdgeRoutesGetModulesByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetModulesByID",
      service: EdgeRoutesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EdgeRoutesModulesGetReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...HTTPSEdge_RouteModules.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export interface EdgeHostPorts {
GetByHostPort(request: DeepPartial<EdgeHostPortsGetByHostPortReq>,metadata?: grpc.Metadata): Promise<EdgeHostPort>;
GetByEdge(request: DeepPartial<EdgeHostPortsGetByEdgeReq>,metadata?: grpc.Metadata): Promise<EdgeHostPortsGetByEdgeResp>;
}

export class EdgeHostPortsClientImpl implements EdgeHostPorts {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.GetByHostPort = this.GetByHostPort.bind(this);this.GetByEdge = this.GetByEdge.bind(this);}

    GetByHostPort(
      request: DeepPartial<EdgeHostPortsGetByHostPortReq>,
      metadata?: grpc.Metadata,
    ): Promise<EdgeHostPort> {
      return this.rpc.unary(
        EdgeHostPortsGetByHostPortDesc,
        EdgeHostPortsGetByHostPortReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByEdge(
      request: DeepPartial<EdgeHostPortsGetByEdgeReq>,
      metadata?: grpc.Metadata,
    ): Promise<EdgeHostPortsGetByEdgeResp> {
      return this.rpc.unary(
        EdgeHostPortsGetByEdgeDesc,
        EdgeHostPortsGetByEdgeReq.fromPartial(request),
        metadata,
      );
    }
  }

export const EdgeHostPortsDesc = {
      serviceName: "rpx.EdgeHostPorts",
    };

export const EdgeHostPortsGetByHostPortDesc: UnaryMethodDefinitionish = {
      methodName: "GetByHostPort",
      service: EdgeHostPortsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EdgeHostPortsGetByHostPortReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EdgeHostPort.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EdgeHostPortsGetByEdgeDesc: UnaryMethodDefinitionish = {
      methodName: "GetByEdge",
      service: EdgeHostPortsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EdgeHostPortsGetByEdgeReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EdgeHostPortsGetByEdgeResp.decode(data), toObject() { return this; } };
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

