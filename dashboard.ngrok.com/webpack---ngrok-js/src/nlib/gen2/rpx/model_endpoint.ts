// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../pb/types";
import { Frontend, Tunnel } from "../rpx/model_tunnel";
import { MiddlewareConfiguration } from "../agent/middleware";
import { EndpointRuntimeMetadata } from "../rpx/runtime_metadata";

export const protobufPackage = "rpx";

export interface Endpoint {
  /**
   * unique id of the endpoint
   *
   * TODO(alan): replace this with a pb.ID field
   */
  id: string;
  /**
   * account id that owns the endpoint. 0 if the endpoint was created by an
   * anonymous/unauthenticated ephemeral tunnel.
   *
   * TODO(alan): replace this with a pb.ID field with the non-legacy account ID
   */
  accountId: number;
  /**
   * the id of the region this endpoint, e.g. 'us', 'in', 'sa'
   *
   * TODO(alan): rename this `region_id` and maybe make it an Enum
   */
  region: string;
  /**
   * timestamp when the endpoint was created. for agent-initiated endpoints
   * this is the same as the time when the tunnel was started. for
   * edge-initiated endpoints this is the time when the hostport was attached
   * to the edge. it's a bit fuzzier than that because endpoints can be
   * recreated for a number of other reasons and then the timestamp will not be
   * preserved across those events. so be careful interpreting this value.
   */
  createdAt: Timestamp | undefined;
  /**
   * timestamp when the endpoint was updated. endpoints are updated when their
   * configuration (the middleware handler tree in `frontend`) changes.
   */
  updatedAt: Timestamp | undefined;
  /** metadata from the tunnel (type == AgentInitiated) or edge (type == Edge) */
  metadata: string;
  /**
   * a combination of proto, hostname and port in the form `{proto}://{hostname}:{port}`
   * port is sometimes omitted if it is the canonical port of the protocol.
   */
  url: string;
  /**
   * the protocol of traffic this endpoint expects. currently one of 'http',
   * 'https', 'tcp' or 'tls'.
   */
  proto: string;
  /**
   * the hostname mux (the ngrok edge) listens on to receive traffic to this endpoint.
   * listening hostname is a bit of a tricky business.
   */
  hostname: string;
  /** the port mux (the ngrok edge) listens on to receive traffic to this endpoint */
  port: number;
  /**
   * if this endpoint matched a Domain object, this is the ID of that object
   *
   * TODO(alan): replace this with a pb.ID field
   */
  domainId: string;
  /**
   * if this endpoint matched a TCP Address, this is the ID of that object
   *
   * TODO(alan): replace this with a pb.ID field
   */
  tcpAddrId: string;
  /**
   * rank is the rank of this specific endpoint.
   * Multiple endpoints may have the same url if they have different ranks, in
   * which case the lowest rank endpoint will be served.
   * This abstraction exists because endpoints can be derived from either a
   * tunnel (i.e. an ephemeral endpoint), or from a reserved_domain+pointcfg
   * (i.e. a persistent endpoint).
   * It's desirable to have them both because, for example, if someone creates
   * a reserved domain and configures it with a static backend, and then
   * deletes the domain/static-backend-config, we would wish to return to
   * serving the tunnel that may have been there before.
   */
  rank: number;
  /** Frontend contains the current handler for this endpoint. */
  frontend: Frontend | undefined;
  /**
   * static_tunnel is only set if this Endpoint is tied to the life of a
   * specific agent (i.e. created by 'ngrok http 8080' or 'ssh -R ...').
   * It is not set for tunnel group backends, or other forms of backends.
   */
  staticTunnelId: string;
  /** edge_id is only set if this Endpoint is tied to an edge/backend */
  edgeId: string;
  /** LegacyEndpointOpts are set for tunnels that don't use the middleware path. */
  legacyOpts: Endpoint_LegacyEndpointOpts | undefined;
  /** Type is the type of this endpoint. */
  type: Endpoint_Type;
  /**
   * agent_middleware_configuration is configuration data sent from an ngrok
   * agent about middleware behaviors like oauth or circuit breaking to enable
   * on an endpoint. it is only non-nil for ephemeral agent-initiated
   * endpoints. this data is stored on the endpoint so that when EPR recomputes
   * the endpoint's handler tree that it has the configuration data to
   * reproduce the tree. if EPR ever replicates tunnel data this should no
   * longer be necessary.
   */
  agentMiddlewareConfiguration: MiddlewareConfiguration | undefined;
  /**
   * this is map that EPR can use to stash additional metadata about an
   * endpoint. it's currently used to store oauth/oidc client ids and secrets.
   */
  runtimeMetadataMap: { [key: string]: EndpointRuntimeMetadata };
  /**
   * the list of backend tunnels that match any tunnel group backends used to
   * back this endpoint. this value is computed in the dataplane by
   * endpoint.resolver.
   */
  backendTunnelMatches: Endpoint_BackendTunnelMatch[];
}

export enum Endpoint_Type {
  /**
   * NotFound - NotFound endpoints are endpoints for reserved domains that are not bound
   * to an Edge. They exist solely for the purposes of being able to serve
   * a proper certificate from those domains even when they're not in use.
   */
  NotFound = 0,
  /**
   * AgentInitiated - AgentInitiated endpoints are created by ngrok agents dynamically via the
   * `ngrok [http|tcp|tls] <addr>` set of commands. They are ephemeral and
   * tied to the lifetime of the tunnel. This type will alwas have
   * static_tunnel_id set.
   */
  AgentInitiated = 1,
  /**
   * Edge - Edge endpoints are endpoints that are created by attaching a domain or
   * address as a hostport of an edge.
   */
  Edge = 2,
}

export interface Endpoint_LegacyEndpointOpts {
  /**
   * For legacy endpoints, just splat in the whole tunnel and let mux pluck
   * off whatever it needs.
   */
  tunnel: Tunnel | undefined;
}

export interface Endpoint_RuntimeMetadataMapEntry {
  key: string;
  value: EndpointRuntimeMetadata | undefined;
}

export interface Endpoint_BackendTunnelMatch {
  backendId: string;
  tunnelId: string;
  routeId: string;
}

const baseEndpoint: object = {
  id: "",
  accountId: 0,
  region: "",
  metadata: "",
  url: "",
  proto: "",
  hostname: "",
  port: 0,
  domainId: "",
  tcpAddrId: "",
  rank: 0,
  staticTunnelId: "",
  edgeId: "",
  type: 0,
};

export const Endpoint = {
  encode(
    message: Endpoint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).int64(message.accountId);
    }
    if (message.region !== "") {
      writer.uint32(162).string(message.region);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(170).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(message.updatedAt, writer.uint32(178).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(186).string(message.metadata);
    }
    if (message.url !== "") {
      writer.uint32(34).string(message.url);
    }
    if (message.proto !== "") {
      writer.uint32(42).string(message.proto);
    }
    if (message.hostname !== "") {
      writer.uint32(50).string(message.hostname);
    }
    if (message.port !== 0) {
      writer.uint32(56).int64(message.port);
    }
    if (message.domainId !== "") {
      writer.uint32(194).string(message.domainId);
    }
    if (message.tcpAddrId !== "") {
      writer.uint32(202).string(message.tcpAddrId);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int32(message.rank);
    }
    if (message.frontend !== undefined) {
      Frontend.encode(message.frontend, writer.uint32(802).fork()).ldelim();
    }
    if (message.staticTunnelId !== "") {
      writer.uint32(66).string(message.staticTunnelId);
    }
    if (message.edgeId !== "") {
      writer.uint32(210).string(message.edgeId);
    }
    if (message.legacyOpts !== undefined) {
      Endpoint_LegacyEndpointOpts.encode(
        message.legacyOpts,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(88).int32(message.type);
    }
    if (message.agentMiddlewareConfiguration !== undefined) {
      MiddlewareConfiguration.encode(
        message.agentMiddlewareConfiguration,
        writer.uint32(98).fork()
      ).ldelim();
    }
    Object.entries(message.runtimeMetadataMap).forEach(([key, value]) => {
      Endpoint_RuntimeMetadataMapEntry.encode(
        { key: key as any, value },
        writer.uint32(106).fork()
      ).ldelim();
    });
    for (const v of message.backendTunnelMatches) {
      Endpoint_BackendTunnelMatch.encode(
        v!,
        writer.uint32(242).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEndpoint } as Endpoint;
    message.runtimeMetadataMap = {};
    message.backendTunnelMatches = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.region = reader.string();
          break;
        case 21:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 22:
          message.updatedAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 23:
          message.metadata = reader.string();
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.proto = reader.string();
          break;
        case 6:
          message.hostname = reader.string();
          break;
        case 7:
          message.port = longToNumber(reader.int64() as Long);
          break;
        case 24:
          message.domainId = reader.string();
          break;
        case 25:
          message.tcpAddrId = reader.string();
          break;
        case 10:
          message.rank = reader.int32();
          break;
        case 100:
          message.frontend = Frontend.decode(reader, reader.uint32());
          break;
        case 8:
          message.staticTunnelId = reader.string();
          break;
        case 26:
          message.edgeId = reader.string();
          break;
        case 9:
          message.legacyOpts = Endpoint_LegacyEndpointOpts.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.type = reader.int32() as any;
          break;
        case 12:
          message.agentMiddlewareConfiguration = MiddlewareConfiguration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          const entry13 = Endpoint_RuntimeMetadataMapEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry13.value !== undefined) {
            message.runtimeMetadataMap[entry13.key] = entry13.value;
          }
          break;
        case 30:
          message.backendTunnelMatches.push(
            Endpoint_BackendTunnelMatch.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Endpoint>): Endpoint {
    const message = { ...baseEndpoint } as Endpoint;
    message.runtimeMetadataMap = {};
    message.backendTunnelMatches = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.region !== undefined && object.region !== null) {
      message.region = object.region;
    } else {
      message.region = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Timestamp.fromPartial(object.updatedAt);
    } else {
      message.updatedAt = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.proto !== undefined && object.proto !== null) {
      message.proto = object.proto;
    } else {
      message.proto = "";
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
    if (object.domainId !== undefined && object.domainId !== null) {
      message.domainId = object.domainId;
    } else {
      message.domainId = "";
    }
    if (object.tcpAddrId !== undefined && object.tcpAddrId !== null) {
      message.tcpAddrId = object.tcpAddrId;
    } else {
      message.tcpAddrId = "";
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = object.rank;
    } else {
      message.rank = 0;
    }
    if (object.frontend !== undefined && object.frontend !== null) {
      message.frontend = Frontend.fromPartial(object.frontend);
    } else {
      message.frontend = undefined;
    }
    if (object.staticTunnelId !== undefined && object.staticTunnelId !== null) {
      message.staticTunnelId = object.staticTunnelId;
    } else {
      message.staticTunnelId = "";
    }
    if (object.edgeId !== undefined && object.edgeId !== null) {
      message.edgeId = object.edgeId;
    } else {
      message.edgeId = "";
    }
    if (object.legacyOpts !== undefined && object.legacyOpts !== null) {
      message.legacyOpts = Endpoint_LegacyEndpointOpts.fromPartial(
        object.legacyOpts
      );
    } else {
      message.legacyOpts = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (
      object.agentMiddlewareConfiguration !== undefined &&
      object.agentMiddlewareConfiguration !== null
    ) {
      message.agentMiddlewareConfiguration =
        MiddlewareConfiguration.fromPartial(
          object.agentMiddlewareConfiguration
        );
    } else {
      message.agentMiddlewareConfiguration = undefined;
    }
    if (
      object.runtimeMetadataMap !== undefined &&
      object.runtimeMetadataMap !== null
    ) {
      Object.entries(object.runtimeMetadataMap).forEach(([key, value]) => {
        if (value !== undefined) {
          message.runtimeMetadataMap[key] =
            EndpointRuntimeMetadata.fromPartial(value);
        }
      });
    }
    if (
      object.backendTunnelMatches !== undefined &&
      object.backendTunnelMatches !== null
    ) {
      for (const e of object.backendTunnelMatches) {
        message.backendTunnelMatches.push(
          Endpoint_BackendTunnelMatch.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const baseEndpoint_LegacyEndpointOpts: object = {};

export const Endpoint_LegacyEndpointOpts = {
  encode(
    message: Endpoint_LegacyEndpointOpts,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tunnel !== undefined) {
      Tunnel.encode(message.tunnel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Endpoint_LegacyEndpointOpts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEndpoint_LegacyEndpointOpts,
    } as Endpoint_LegacyEndpointOpts;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunnel = Tunnel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Endpoint_LegacyEndpointOpts>
  ): Endpoint_LegacyEndpointOpts {
    const message = {
      ...baseEndpoint_LegacyEndpointOpts,
    } as Endpoint_LegacyEndpointOpts;
    if (object.tunnel !== undefined && object.tunnel !== null) {
      message.tunnel = Tunnel.fromPartial(object.tunnel);
    } else {
      message.tunnel = undefined;
    }
    return message;
  },
};

const baseEndpoint_RuntimeMetadataMapEntry: object = { key: "" };

export const Endpoint_RuntimeMetadataMapEntry = {
  encode(
    message: Endpoint_RuntimeMetadataMapEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      EndpointRuntimeMetadata.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Endpoint_RuntimeMetadataMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEndpoint_RuntimeMetadataMapEntry,
    } as Endpoint_RuntimeMetadataMapEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = EndpointRuntimeMetadata.decode(
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
    object: DeepPartial<Endpoint_RuntimeMetadataMapEntry>
  ): Endpoint_RuntimeMetadataMapEntry {
    const message = {
      ...baseEndpoint_RuntimeMetadataMapEntry,
    } as Endpoint_RuntimeMetadataMapEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = EndpointRuntimeMetadata.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseEndpoint_BackendTunnelMatch: object = {
  backendId: "",
  tunnelId: "",
  routeId: "",
};

export const Endpoint_BackendTunnelMatch = {
  encode(
    message: Endpoint_BackendTunnelMatch,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.backendId !== "") {
      writer.uint32(10).string(message.backendId);
    }
    if (message.tunnelId !== "") {
      writer.uint32(18).string(message.tunnelId);
    }
    if (message.routeId !== "") {
      writer.uint32(26).string(message.routeId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Endpoint_BackendTunnelMatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEndpoint_BackendTunnelMatch,
    } as Endpoint_BackendTunnelMatch;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backendId = reader.string();
          break;
        case 2:
          message.tunnelId = reader.string();
          break;
        case 3:
          message.routeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Endpoint_BackendTunnelMatch>
  ): Endpoint_BackendTunnelMatch {
    const message = {
      ...baseEndpoint_BackendTunnelMatch,
    } as Endpoint_BackendTunnelMatch;
    if (object.backendId !== undefined && object.backendId !== null) {
      message.backendId = object.backendId;
    } else {
      message.backendId = "";
    }
    if (object.tunnelId !== undefined && object.tunnelId !== null) {
      message.tunnelId = object.tunnelId;
    } else {
      message.tunnelId = "";
    }
    if (object.routeId !== undefined && object.routeId !== null) {
      message.routeId = object.routeId;
    } else {
      message.routeId = "";
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
