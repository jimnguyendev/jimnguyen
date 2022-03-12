// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ID, Timestamp } from "../pb/types";
import {
  EndpointBackend,
  EndpointIPPolicy,
  EndpointMutualTLS,
  EndpointTLSTermination,
  EndpointRequestHeaders,
  EndpointResponseHeaders,
  EndpointCompression,
  EndpointCircuitBreaker,
  EndpointWebhookValidation,
  EndpointOAuth,
  EndpointSAML,
  EndpointOIDC,
  EndpointWebsocketTCPConverter,
} from "../rpx/pointcfg_module";

export const protobufPackage = "rpx";

export interface EdgeMetadata {
  id: ID | undefined;
  version: number;
  legacyAccountId: number;
  accountId: ID | undefined;
  createdAt: Timestamp | undefined;
  description: string;
  metadata: string;
  hostports: string[];
}

export interface TCPEdge {
  data: EdgeMetadata | undefined;
  modules: TCPEdge_Modules | undefined;
}

export interface TCPEdge_Modules {
  backend: EndpointBackend | undefined;
  ipRestriction: EndpointIPPolicy | undefined;
}

export interface TLSEdge {
  data: EdgeMetadata | undefined;
  modules: TLSEdge_Modules | undefined;
}

export interface TLSEdge_Modules {
  backend: EndpointBackend | undefined;
  ipRestriction: EndpointIPPolicy | undefined;
  mutualTls: EndpointMutualTLS | undefined;
  tlsTermination: EndpointTLSTermination | undefined;
}

export interface HTTPSEdge {
  data: EdgeMetadata | undefined;
  modules: HTTPSEdge_Modules | undefined;
  /** Routes */
  routes: HTTPSEdge_Route[];
}

export interface HTTPSEdge_Modules {
  mutualTls: EndpointMutualTLS | undefined;
  tlsTermination: EndpointTLSTermination | undefined;
}

export interface HTTPSEdge_Route {
  id: ID | undefined;
  description: string;
  metadata: string;
  selector: HTTPSEdge_Route_Selector | undefined;
  /** Per-route modules */
  modules: HTTPSEdge_RouteModules | undefined;
  edgeId: ID | undefined;
  createdAt: Timestamp | undefined;
}

export interface HTTPSEdge_Route_Selector {
  /** Route selector: "/blog" or "example.com" or "example.com/blog" */
  match: string;
  type: HTTPSEdge_Route_Selector_Type;
  /**
   * If multiple routes match, the route with the highest priority will be selected first
   * Note: priority '0' is higher than priority '1'
   */
  priority: number;
  hasPriority: boolean;
}

export enum HTTPSEdge_Route_Selector_Type {
  UNDEFINED = 0,
  EXACT_PATH = 1,
  PATH_PREFIX = 2,
}

export interface HTTPSEdge_RouteModules {
  requestHeaders: EndpointRequestHeaders | undefined;
  responseHeaders: EndpointResponseHeaders | undefined;
  compression: EndpointCompression | undefined;
  circuitBreaker: EndpointCircuitBreaker | undefined;
  ipRestriction: EndpointIPPolicy | undefined;
  webhookValidation: EndpointWebhookValidation | undefined;
  oauth: EndpointOAuth | undefined;
  saml: EndpointSAML | undefined;
  oidc: EndpointOIDC | undefined;
  backend: EndpointBackend | undefined;
  websocketTcpConverter: EndpointWebsocketTCPConverter | undefined;
}

export interface Edge {
  id: ID | undefined;
  /** Exactly one of the following fields should be populated. */
  tcp: TCPEdge | undefined;
  tls: TLSEdge | undefined;
  https: HTTPSEdge | undefined;
}

export interface EdgeHostPort {
  id: ID | undefined;
  createdAt: Timestamp | undefined;
  hostname: string;
  port: number;
  accountId: ID | undefined;
  legacyAccountId: number;
  httpsEdgeId: ID | undefined;
  tlsEdgeId: ID | undefined;
  tcpEdgeId: ID | undefined;
  addrId: ID | undefined;
  domainId: ID | undefined;
}

const baseEdgeMetadata: object = {
  version: 0,
  legacyAccountId: 0,
  description: "",
  metadata: "",
  hostports: "",
};

export const EdgeMetadata = {
  encode(
    message: EdgeMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.version !== 0) {
      writer.uint32(16).int64(message.version);
    }
    if (message.legacyAccountId !== 0) {
      writer.uint32(32).int64(message.legacyAccountId);
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(42).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(50).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(58).string(message.description);
    }
    if (message.metadata !== "") {
      writer.uint32(66).string(message.metadata);
    }
    for (const v of message.hostports) {
      writer.uint32(74).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EdgeMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEdgeMetadata } as EdgeMetadata;
    message.hostports = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.version = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.legacyAccountId = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        case 6:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.description = reader.string();
          break;
        case 8:
          message.metadata = reader.string();
          break;
        case 9:
          message.hostports.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EdgeMetadata>): EdgeMetadata {
    const message = { ...baseEdgeMetadata } as EdgeMetadata;
    message.hostports = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = 0;
    }
    if (
      object.legacyAccountId !== undefined &&
      object.legacyAccountId !== null
    ) {
      message.legacyAccountId = object.legacyAccountId;
    } else {
      message.legacyAccountId = 0;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.hostports !== undefined && object.hostports !== null) {
      for (const e of object.hostports) {
        message.hostports.push(e);
      }
    }
    return message;
  },
};

const baseTCPEdge: object = {};

export const TCPEdge = {
  encode(
    message: TCPEdge,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      EdgeMetadata.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.modules !== undefined) {
      TCPEdge_Modules.encode(
        message.modules,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TCPEdge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTCPEdge } as TCPEdge;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = EdgeMetadata.decode(reader, reader.uint32());
          break;
        case 2:
          message.modules = TCPEdge_Modules.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<TCPEdge>): TCPEdge {
    const message = { ...baseTCPEdge } as TCPEdge;
    if (object.data !== undefined && object.data !== null) {
      message.data = EdgeMetadata.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    if (object.modules !== undefined && object.modules !== null) {
      message.modules = TCPEdge_Modules.fromPartial(object.modules);
    } else {
      message.modules = undefined;
    }
    return message;
  },
};

const baseTCPEdge_Modules: object = {};

export const TCPEdge_Modules = {
  encode(
    message: TCPEdge_Modules,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backend !== undefined) {
      EndpointBackend.encode(
        message.backend,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.ipRestriction !== undefined) {
      EndpointIPPolicy.encode(
        message.ipRestriction,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TCPEdge_Modules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTCPEdge_Modules } as TCPEdge_Modules;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backend = EndpointBackend.decode(reader, reader.uint32());
          break;
        case 2:
          message.ipRestriction = EndpointIPPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<TCPEdge_Modules>): TCPEdge_Modules {
    const message = { ...baseTCPEdge_Modules } as TCPEdge_Modules;
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = EndpointBackend.fromPartial(object.backend);
    } else {
      message.backend = undefined;
    }
    if (object.ipRestriction !== undefined && object.ipRestriction !== null) {
      message.ipRestriction = EndpointIPPolicy.fromPartial(
        object.ipRestriction
      );
    } else {
      message.ipRestriction = undefined;
    }
    return message;
  },
};

const baseTLSEdge: object = {};

export const TLSEdge = {
  encode(
    message: TLSEdge,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      EdgeMetadata.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.modules !== undefined) {
      TLSEdge_Modules.encode(
        message.modules,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TLSEdge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTLSEdge } as TLSEdge;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = EdgeMetadata.decode(reader, reader.uint32());
          break;
        case 2:
          message.modules = TLSEdge_Modules.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<TLSEdge>): TLSEdge {
    const message = { ...baseTLSEdge } as TLSEdge;
    if (object.data !== undefined && object.data !== null) {
      message.data = EdgeMetadata.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    if (object.modules !== undefined && object.modules !== null) {
      message.modules = TLSEdge_Modules.fromPartial(object.modules);
    } else {
      message.modules = undefined;
    }
    return message;
  },
};

const baseTLSEdge_Modules: object = {};

export const TLSEdge_Modules = {
  encode(
    message: TLSEdge_Modules,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backend !== undefined) {
      EndpointBackend.encode(
        message.backend,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.ipRestriction !== undefined) {
      EndpointIPPolicy.encode(
        message.ipRestriction,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.mutualTls !== undefined) {
      EndpointMutualTLS.encode(
        message.mutualTls,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.tlsTermination !== undefined) {
      EndpointTLSTermination.encode(
        message.tlsTermination,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TLSEdge_Modules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTLSEdge_Modules } as TLSEdge_Modules;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backend = EndpointBackend.decode(reader, reader.uint32());
          break;
        case 2:
          message.ipRestriction = EndpointIPPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.mutualTls = EndpointMutualTLS.decode(reader, reader.uint32());
          break;
        case 4:
          message.tlsTermination = EndpointTLSTermination.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<TLSEdge_Modules>): TLSEdge_Modules {
    const message = { ...baseTLSEdge_Modules } as TLSEdge_Modules;
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = EndpointBackend.fromPartial(object.backend);
    } else {
      message.backend = undefined;
    }
    if (object.ipRestriction !== undefined && object.ipRestriction !== null) {
      message.ipRestriction = EndpointIPPolicy.fromPartial(
        object.ipRestriction
      );
    } else {
      message.ipRestriction = undefined;
    }
    if (object.mutualTls !== undefined && object.mutualTls !== null) {
      message.mutualTls = EndpointMutualTLS.fromPartial(object.mutualTls);
    } else {
      message.mutualTls = undefined;
    }
    if (object.tlsTermination !== undefined && object.tlsTermination !== null) {
      message.tlsTermination = EndpointTLSTermination.fromPartial(
        object.tlsTermination
      );
    } else {
      message.tlsTermination = undefined;
    }
    return message;
  },
};

const baseHTTPSEdge: object = {};

export const HTTPSEdge = {
  encode(
    message: HTTPSEdge,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      EdgeMetadata.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.modules !== undefined) {
      HTTPSEdge_Modules.encode(
        message.modules,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.routes) {
      HTTPSEdge_Route.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HTTPSEdge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHTTPSEdge } as HTTPSEdge;
    message.routes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = EdgeMetadata.decode(reader, reader.uint32());
          break;
        case 2:
          message.modules = HTTPSEdge_Modules.decode(reader, reader.uint32());
          break;
        case 3:
          message.routes.push(HTTPSEdge_Route.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<HTTPSEdge>): HTTPSEdge {
    const message = { ...baseHTTPSEdge } as HTTPSEdge;
    message.routes = [];
    if (object.data !== undefined && object.data !== null) {
      message.data = EdgeMetadata.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    if (object.modules !== undefined && object.modules !== null) {
      message.modules = HTTPSEdge_Modules.fromPartial(object.modules);
    } else {
      message.modules = undefined;
    }
    if (object.routes !== undefined && object.routes !== null) {
      for (const e of object.routes) {
        message.routes.push(HTTPSEdge_Route.fromPartial(e));
      }
    }
    return message;
  },
};

const baseHTTPSEdge_Modules: object = {};

export const HTTPSEdge_Modules = {
  encode(
    message: HTTPSEdge_Modules,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mutualTls !== undefined) {
      EndpointMutualTLS.encode(
        message.mutualTls,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.tlsTermination !== undefined) {
      EndpointTLSTermination.encode(
        message.tlsTermination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HTTPSEdge_Modules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHTTPSEdge_Modules } as HTTPSEdge_Modules;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mutualTls = EndpointMutualTLS.decode(reader, reader.uint32());
          break;
        case 2:
          message.tlsTermination = EndpointTLSTermination.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<HTTPSEdge_Modules>): HTTPSEdge_Modules {
    const message = { ...baseHTTPSEdge_Modules } as HTTPSEdge_Modules;
    if (object.mutualTls !== undefined && object.mutualTls !== null) {
      message.mutualTls = EndpointMutualTLS.fromPartial(object.mutualTls);
    } else {
      message.mutualTls = undefined;
    }
    if (object.tlsTermination !== undefined && object.tlsTermination !== null) {
      message.tlsTermination = EndpointTLSTermination.fromPartial(
        object.tlsTermination
      );
    } else {
      message.tlsTermination = undefined;
    }
    return message;
  },
};

const baseHTTPSEdge_Route: object = { description: "", metadata: "" };

export const HTTPSEdge_Route = {
  encode(
    message: HTTPSEdge_Route,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.metadata !== "") {
      writer.uint32(58).string(message.metadata);
    }
    if (message.selector !== undefined) {
      HTTPSEdge_Route_Selector.encode(
        message.selector,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.modules !== undefined) {
      HTTPSEdge_RouteModules.encode(
        message.modules,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.edgeId !== undefined) {
      ID.encode(message.edgeId, writer.uint32(34).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HTTPSEdge_Route {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHTTPSEdge_Route } as HTTPSEdge_Route;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.metadata = reader.string();
          break;
        case 2:
          message.selector = HTTPSEdge_Route_Selector.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.modules = HTTPSEdge_RouteModules.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.edgeId = ID.decode(reader, reader.uint32());
          break;
        case 5:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<HTTPSEdge_Route>): HTTPSEdge_Route {
    const message = { ...baseHTTPSEdge_Route } as HTTPSEdge_Route;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.selector !== undefined && object.selector !== null) {
      message.selector = HTTPSEdge_Route_Selector.fromPartial(object.selector);
    } else {
      message.selector = undefined;
    }
    if (object.modules !== undefined && object.modules !== null) {
      message.modules = HTTPSEdge_RouteModules.fromPartial(object.modules);
    } else {
      message.modules = undefined;
    }
    if (object.edgeId !== undefined && object.edgeId !== null) {
      message.edgeId = ID.fromPartial(object.edgeId);
    } else {
      message.edgeId = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    return message;
  },
};

const baseHTTPSEdge_Route_Selector: object = {
  match: "",
  type: 0,
  priority: 0,
  hasPriority: false,
};

export const HTTPSEdge_Route_Selector = {
  encode(
    message: HTTPSEdge_Route_Selector,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.match !== "") {
      writer.uint32(10).string(message.match);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.priority !== 0) {
      writer.uint32(24).uint32(message.priority);
    }
    if (message.hasPriority === true) {
      writer.uint32(32).bool(message.hasPriority);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): HTTPSEdge_Route_Selector {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseHTTPSEdge_Route_Selector,
    } as HTTPSEdge_Route_Selector;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.match = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.priority = reader.uint32();
          break;
        case 4:
          message.hasPriority = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<HTTPSEdge_Route_Selector>
  ): HTTPSEdge_Route_Selector {
    const message = {
      ...baseHTTPSEdge_Route_Selector,
    } as HTTPSEdge_Route_Selector;
    if (object.match !== undefined && object.match !== null) {
      message.match = object.match;
    } else {
      message.match = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = object.priority;
    } else {
      message.priority = 0;
    }
    if (object.hasPriority !== undefined && object.hasPriority !== null) {
      message.hasPriority = object.hasPriority;
    } else {
      message.hasPriority = false;
    }
    return message;
  },
};

const baseHTTPSEdge_RouteModules: object = {};

export const HTTPSEdge_RouteModules = {
  encode(
    message: HTTPSEdge_RouteModules,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestHeaders !== undefined) {
      EndpointRequestHeaders.encode(
        message.requestHeaders,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.responseHeaders !== undefined) {
      EndpointResponseHeaders.encode(
        message.responseHeaders,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.compression !== undefined) {
      EndpointCompression.encode(
        message.compression,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.circuitBreaker !== undefined) {
      EndpointCircuitBreaker.encode(
        message.circuitBreaker,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.ipRestriction !== undefined) {
      EndpointIPPolicy.encode(
        message.ipRestriction,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.webhookValidation !== undefined) {
      EndpointWebhookValidation.encode(
        message.webhookValidation,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.oauth !== undefined) {
      EndpointOAuth.encode(message.oauth, writer.uint32(90).fork()).ldelim();
    }
    if (message.saml !== undefined) {
      EndpointSAML.encode(message.saml, writer.uint32(98).fork()).ldelim();
    }
    if (message.oidc !== undefined) {
      EndpointOIDC.encode(message.oidc, writer.uint32(106).fork()).ldelim();
    }
    if (message.backend !== undefined) {
      EndpointBackend.encode(
        message.backend,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.websocketTcpConverter !== undefined) {
      EndpointWebsocketTCPConverter.encode(
        message.websocketTcpConverter,
        writer.uint32(122).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): HTTPSEdge_RouteModules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHTTPSEdge_RouteModules } as HTTPSEdge_RouteModules;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          message.requestHeaders = EndpointRequestHeaders.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.responseHeaders = EndpointResponseHeaders.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.compression = EndpointCompression.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.circuitBreaker = EndpointCircuitBreaker.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.ipRestriction = EndpointIPPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.webhookValidation = EndpointWebhookValidation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.oauth = EndpointOAuth.decode(reader, reader.uint32());
          break;
        case 12:
          message.saml = EndpointSAML.decode(reader, reader.uint32());
          break;
        case 13:
          message.oidc = EndpointOIDC.decode(reader, reader.uint32());
          break;
        case 14:
          message.backend = EndpointBackend.decode(reader, reader.uint32());
          break;
        case 15:
          message.websocketTcpConverter = EndpointWebsocketTCPConverter.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<HTTPSEdge_RouteModules>
  ): HTTPSEdge_RouteModules {
    const message = { ...baseHTTPSEdge_RouteModules } as HTTPSEdge_RouteModules;
    if (object.requestHeaders !== undefined && object.requestHeaders !== null) {
      message.requestHeaders = EndpointRequestHeaders.fromPartial(
        object.requestHeaders
      );
    } else {
      message.requestHeaders = undefined;
    }
    if (
      object.responseHeaders !== undefined &&
      object.responseHeaders !== null
    ) {
      message.responseHeaders = EndpointResponseHeaders.fromPartial(
        object.responseHeaders
      );
    } else {
      message.responseHeaders = undefined;
    }
    if (object.compression !== undefined && object.compression !== null) {
      message.compression = EndpointCompression.fromPartial(object.compression);
    } else {
      message.compression = undefined;
    }
    if (object.circuitBreaker !== undefined && object.circuitBreaker !== null) {
      message.circuitBreaker = EndpointCircuitBreaker.fromPartial(
        object.circuitBreaker
      );
    } else {
      message.circuitBreaker = undefined;
    }
    if (object.ipRestriction !== undefined && object.ipRestriction !== null) {
      message.ipRestriction = EndpointIPPolicy.fromPartial(
        object.ipRestriction
      );
    } else {
      message.ipRestriction = undefined;
    }
    if (
      object.webhookValidation !== undefined &&
      object.webhookValidation !== null
    ) {
      message.webhookValidation = EndpointWebhookValidation.fromPartial(
        object.webhookValidation
      );
    } else {
      message.webhookValidation = undefined;
    }
    if (object.oauth !== undefined && object.oauth !== null) {
      message.oauth = EndpointOAuth.fromPartial(object.oauth);
    } else {
      message.oauth = undefined;
    }
    if (object.saml !== undefined && object.saml !== null) {
      message.saml = EndpointSAML.fromPartial(object.saml);
    } else {
      message.saml = undefined;
    }
    if (object.oidc !== undefined && object.oidc !== null) {
      message.oidc = EndpointOIDC.fromPartial(object.oidc);
    } else {
      message.oidc = undefined;
    }
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = EndpointBackend.fromPartial(object.backend);
    } else {
      message.backend = undefined;
    }
    if (
      object.websocketTcpConverter !== undefined &&
      object.websocketTcpConverter !== null
    ) {
      message.websocketTcpConverter = EndpointWebsocketTCPConverter.fromPartial(
        object.websocketTcpConverter
      );
    } else {
      message.websocketTcpConverter = undefined;
    }
    return message;
  },
};

const baseEdge: object = {};

export const Edge = {
  encode(message: Edge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.tcp !== undefined) {
      TCPEdge.encode(message.tcp, writer.uint32(18).fork()).ldelim();
    }
    if (message.tls !== undefined) {
      TLSEdge.encode(message.tls, writer.uint32(26).fork()).ldelim();
    }
    if (message.https !== undefined) {
      HTTPSEdge.encode(message.https, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Edge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEdge } as Edge;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.tcp = TCPEdge.decode(reader, reader.uint32());
          break;
        case 3:
          message.tls = TLSEdge.decode(reader, reader.uint32());
          break;
        case 4:
          message.https = HTTPSEdge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Edge>): Edge {
    const message = { ...baseEdge } as Edge;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.tcp !== undefined && object.tcp !== null) {
      message.tcp = TCPEdge.fromPartial(object.tcp);
    } else {
      message.tcp = undefined;
    }
    if (object.tls !== undefined && object.tls !== null) {
      message.tls = TLSEdge.fromPartial(object.tls);
    } else {
      message.tls = undefined;
    }
    if (object.https !== undefined && object.https !== null) {
      message.https = HTTPSEdge.fromPartial(object.https);
    } else {
      message.https = undefined;
    }
    return message;
  },
};

const baseEdgeHostPort: object = { hostname: "", port: 0, legacyAccountId: 0 };

export const EdgeHostPort = {
  encode(
    message: EdgeHostPort,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(18).fork()).ldelim();
    }
    if (message.hostname !== "") {
      writer.uint32(26).string(message.hostname);
    }
    if (message.port !== 0) {
      writer.uint32(32).int32(message.port);
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(42).fork()).ldelim();
    }
    if (message.legacyAccountId !== 0) {
      writer.uint32(48).int64(message.legacyAccountId);
    }
    if (message.httpsEdgeId !== undefined) {
      ID.encode(message.httpsEdgeId, writer.uint32(58).fork()).ldelim();
    }
    if (message.tlsEdgeId !== undefined) {
      ID.encode(message.tlsEdgeId, writer.uint32(66).fork()).ldelim();
    }
    if (message.tcpEdgeId !== undefined) {
      ID.encode(message.tcpEdgeId, writer.uint32(74).fork()).ldelim();
    }
    if (message.addrId !== undefined) {
      ID.encode(message.addrId, writer.uint32(82).fork()).ldelim();
    }
    if (message.domainId !== undefined) {
      ID.encode(message.domainId, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EdgeHostPort {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEdgeHostPort } as EdgeHostPort;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.hostname = reader.string();
          break;
        case 4:
          message.port = reader.int32();
          break;
        case 5:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        case 6:
          message.legacyAccountId = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.httpsEdgeId = ID.decode(reader, reader.uint32());
          break;
        case 8:
          message.tlsEdgeId = ID.decode(reader, reader.uint32());
          break;
        case 9:
          message.tcpEdgeId = ID.decode(reader, reader.uint32());
          break;
        case 10:
          message.addrId = ID.decode(reader, reader.uint32());
          break;
        case 11:
          message.domainId = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EdgeHostPort>): EdgeHostPort {
    const message = { ...baseEdgeHostPort } as EdgeHostPort;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.hostname !== undefined && object.hostname !== null) {
      message.hostname = object.hostname;
    } else {
      message.hostname = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = 0;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    if (
      object.legacyAccountId !== undefined &&
      object.legacyAccountId !== null
    ) {
      message.legacyAccountId = object.legacyAccountId;
    } else {
      message.legacyAccountId = 0;
    }
    if (object.httpsEdgeId !== undefined && object.httpsEdgeId !== null) {
      message.httpsEdgeId = ID.fromPartial(object.httpsEdgeId);
    } else {
      message.httpsEdgeId = undefined;
    }
    if (object.tlsEdgeId !== undefined && object.tlsEdgeId !== null) {
      message.tlsEdgeId = ID.fromPartial(object.tlsEdgeId);
    } else {
      message.tlsEdgeId = undefined;
    }
    if (object.tcpEdgeId !== undefined && object.tcpEdgeId !== null) {
      message.tcpEdgeId = ID.fromPartial(object.tcpEdgeId);
    } else {
      message.tcpEdgeId = undefined;
    }
    if (object.addrId !== undefined && object.addrId !== null) {
      message.addrId = ID.fromPartial(object.addrId);
    } else {
      message.addrId = undefined;
    }
    if (object.domainId !== undefined && object.domainId !== null) {
      message.domainId = ID.fromPartial(object.domainId);
    } else {
      message.domainId = undefined;
    }
    return message;
  },
};

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
