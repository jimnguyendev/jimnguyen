// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp, ID } from "../pb/types";
import { MachineID, BanDetails } from "../rpx/model";
import { Handler } from "../rpx/mw";

export const protobufPackage = "rpx";

export interface Tunnel {
  /**
   * Unique ID of the Tunnel Object.
   * TODO(alan): deprecate this with a pb.ID field
   */
  id: string;
  /** timestamp when the tunnel was initiated */
  createdAt: Timestamp | undefined;
  /**
   * timestamp when the tunnel was closed. this property is nearly always null
   * and it is only populated in the message sent to the audit publisher
   */
  deletedAt: Timestamp | undefined;
  /**
   * ID of the account that created the tunnel. 0 if the tunnel was started by
   * an anonymous/unauthenticated tunnel session
   *
   * TODO(alan): deprecate this with a pb.ID field of the account ID
   */
  accountId: number;
  /**
   * user-defined metadata of the tunnel object defined in the ngrok agent's
   * configuration file
   */
  metadata: string;
  /**
   * ID of the parent Session object that started this Tunnel.
   *
   * TODO(alan): deprecate this with a pb.ID field
   */
  sessionId: string;
  /**
   * ID of the persistent Session ID that started this Tunnel. Refer to the
   * Session ngrok tunnel session that started this Tunnel.
   *
   * TODO(alan): deprecate this with a pb.ID field
   */
  persistentSessionId: string;
  /**
   * The IP address and port of the tunnel.v2 or tunnel.ssh pod that hosts the
   * Session this Tunnel is initiated from. this is denormalized/copied form
   * the parent Session object.
   */
  serverAddr: string;
  /**
   * The ID of the tunnel.v2 or tunnel.ssh server that hosts the Session this
   * Tunnel is initiated from. this is denormalized/copied from the parent
   * Session object.
   */
  serverId: string;
  /**
   * information that helps uniquely fingerprint and identify the machine that
   * the ngrok agent was started on. this information is currently unused. it
   * was, for a time, used as part of our system to combat abuse, but the
   * information is not robust to running inside of containers or other
   * packaged environments which has rendered it mostly useless for any abuse
   * purposes.
   */
  machineId: MachineID | undefined;
  /**
   * The IP address (no port) of the ngrok agent (or SSH -R process) that
   * started the tunnel.  this is denormalized/copied form the parent Session
   * object.
   */
  remoteAddr: string;
  /**
   * ID of the region this tunnel was initiated in. e.g. 'us', 'jp', 'eu'.
   *
   * TODO(alan): this should be renamed region_id for consistency and possibly
   * be made an Enum
   */
  region: string;
  /**
   * timestamp when the tunnel expires. this is denormalized/copied from the
   * parent Session object. if the tunnel does not expire then it is null / 0
   */
  expiresAt: Timestamp | undefined;
  /**
   * version of the ngrok agent. this is denormalized/copied from the parent
   * Session object.
   *
   * TODO(alan): rename this to agent_version
   */
  clientVersion: string;
  /**
   * Auth information the agent that created this tunnel supplied.
   *
   * TODO(alan): stop populating this value and instead have tunnel.handler or
   * tunnel.v2 translate v2 agent's basic auth information into
   * agent.MiddlwareConfiguration.BasicAuth
   */
  agentAuth: Tunnel_AgentBasicAuth | undefined;
  /**
   * This is the amount of time a proxied connection can remain idle before we
   * terminate it.
   *
   * TODO(alan): remove this value entirely, it doesn't belong here. mux is
   * the arbiter of idle timeouts and this value can be pulled by endpoint.resolver
   * from the account's limits/restrictions.
   */
  idleTimeout: number;
  /**
   * the version of the PROXY protocol the agent intends to use when proxying
   * connections to the upstream server
   */
  proxyProto: Tunnel_ProxyProto;
  /**
   * the address the ngrok agent is forwarding to. e.g. if you run `ngrok http
   * 80` this property is `80`. for agents older than ngrok v3.0.0 this
   * property is empty. this property is also empty for all SSH-initiated
   * tunnel sessions.
   */
  forwardsTo: string;
  /**
   * ID of the ephemeral Endpoint object associated with this tunnel. This
   * property is populated only for agent-initiated endpoints (when a tunnel is
   * started with `ngrok [http|tcp|tls]`). It is not populated if this is
   * backend 'labeled' tunnel started with `ngrok tunnel`.
   *
   * TODO(alan): replace this with a pb.ID field
   */
  endpointId: string;
  /**
   * labels this agent registered with. Used for matching tunnel group
   * backends.  it is empty for tunnels with agent-initiated ephemeral
   * endpoints.
   */
  labels: { [key: string]: string };
  /**
   * A list of Tunnel Group Backend IDs that this tunnel matches.
   * This property is populated by map.global and is thus *always* empty in the dataplane.
   * This property will always be empty for tunnels with agent-initiated endpoints.
   * It may also be empty if the labeled tunnel matches no tunnel groups.
   *
   * TODO(alan): replace this with a repeated pb.ID field
   */
  backendIds: string[];
  /**
   * A list of all edge routes that this tunnel matched by being
   * part of a TunnelGroup backend which was attached to the backend
   * of an edge route. These values are populated in map.global and are
   * _not_ available in the dataplane.
   */
  edgeRouteBackendMatches: Tunnel_EdgeRouteBackendMatch[];
  /**
   * deprecated in favor of of the Frontend in Endpoint
   * Frontend is a frontend handler that has the same lifetime as the
   * Tunnel.
   *
   * @deprecated
   */
  frontend: Frontend | undefined;
  /**
   * This field is deprecated in favor of frontend and may be deleted once all
   * sessions in map with FrontendIDs are gone.
   *
   * @deprecated
   */
  deprecatedFrontendId: Uint8Array;
  /**
   * deprecated in favor of Endpoint
   *
   * @deprecated
   */
  frontendId: ID | undefined;
  /**
   * deprecated in favor of Endpoint
   *
   * @deprecated
   */
  hostname: string;
  /**
   * deprecated in favor of Endpoint
   *
   * @deprecated
   */
  port: number;
  /**
   * deprecated in favor of Endpoint. use `endpoint_id` to look it up
   *
   * @deprecated
   */
  proto: string;
  /**
   * deprecated in favor of Endpoint. use `endpoint_id` to look it up
   *
   * @deprecated
   */
  url: string;
  /**
   * this property was never used
   *
   * @deprecated
   */
  balance: boolean;
  /**
   * ID of the user that created the tunnel.
   * NOTE(alan): this is currently always zero because the code to populate
   * this was never hooked up. it cannot be populated until tunnel authtokens
   * are parented by a user/membership.
   *
   * TODO(alan): deprecate this with a pb.ID field of the membership ID
   * (probably not the user ID)
   *
   * @deprecated
   */
  userId: number;
}

export enum Tunnel_ProxyProto {
  ProxyProtoNone = 0,
  ProxyProtoV1 = 1,
  ProxyProtoV2 = 2,
}

/** Auth information the agent can provide */
export interface Tunnel_AgentBasicAuth {
  /**
   * Hash of the 'username:password', since that's the canonical format of
   * basic auth.
   * More importantly, we historically have allowed malformed basic auth
   * (auth with no ':' character), so the only way to correctly store that
   * auth is a single hashed string.
   * XXX: Switch to 'username, hashedPassword' if we decide to require
   * properly formed basic auth.
   */
  hashedAuth: Uint8Array;
}

export interface Tunnel_LabelsEntry {
  key: string;
  value: string;
}

/** TODO(alan): replace all fields in this struct with pb.ID fields */
export interface Tunnel_EdgeRouteBackendMatch {
  edgeId: string;
  routeId: string;
  backendId: string;
}

/**
 * TODO(alan): move this to model_endpoint.proto when the legacy path is dead
 * and the Tunnel object no longer embeds it
 */
export interface Frontend {
  /** 2: reserved for SID until a full deployment of all dependent services */
  handler: Handler | undefined;
  fingerprint: string;
  status: FrontendStatus | undefined;
}

/**
 * TODO(alan): move this to model_endpoint.proto when the legacy path is dead
 * and the Tunnel object no longer embeds it
 *
 * FrontendStatus contains metadata about an endpoint.
 */
export interface FrontendStatus {
  banDetails: BanDetails | undefined;
}

const baseTunnel: object = {
  id: "",
  accountId: 0,
  metadata: "",
  sessionId: "",
  persistentSessionId: "",
  serverAddr: "",
  serverId: "",
  remoteAddr: "",
  region: "",
  clientVersion: "",
  idleTimeout: 0,
  proxyProto: 0,
  forwardsTo: "",
  endpointId: "",
  backendIds: "",
  hostname: "",
  port: 0,
  proto: "",
  url: "",
  balance: false,
  userId: 0,
};

export const Tunnel = {
  encode(
    message: Tunnel,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(18).fork()).ldelim();
    }
    if (message.deletedAt !== undefined) {
      Timestamp.encode(message.deletedAt, writer.uint32(218).fork()).ldelim();
    }
    if (message.accountId !== 0) {
      writer.uint32(24).int64(message.accountId);
    }
    if (message.metadata !== "") {
      writer.uint32(82).string(message.metadata);
    }
    if (message.sessionId !== "") {
      writer.uint32(42).string(message.sessionId);
    }
    if (message.persistentSessionId !== "") {
      writer.uint32(202).string(message.persistentSessionId);
    }
    if (message.serverAddr !== "") {
      writer.uint32(50).string(message.serverAddr);
    }
    if (message.serverId !== "") {
      writer.uint32(170).string(message.serverId);
    }
    if (message.machineId !== undefined) {
      MachineID.encode(message.machineId, writer.uint32(194).fork()).ldelim();
    }
    if (message.remoteAddr !== "") {
      writer.uint32(74).string(message.remoteAddr);
    }
    if (message.region !== "") {
      writer.uint32(98).string(message.region);
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(message.expiresAt, writer.uint32(138).fork()).ldelim();
    }
    if (message.clientVersion !== "") {
      writer.uint32(146).string(message.clientVersion);
    }
    if (message.agentAuth !== undefined) {
      Tunnel_AgentBasicAuth.encode(
        message.agentAuth,
        writer.uint32(250).fork()
      ).ldelim();
    }
    if (message.idleTimeout !== 0) {
      writer.uint32(176).int64(message.idleTimeout);
    }
    if (message.proxyProto !== 0) {
      writer.uint32(264).int32(message.proxyProto);
    }
    if (message.forwardsTo !== "") {
      writer.uint32(298).string(message.forwardsTo);
    }
    if (message.endpointId !== "") {
      writer.uint32(274).string(message.endpointId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Tunnel_LabelsEntry.encode(
        { key: key as any, value },
        writer.uint32(258).fork()
      ).ldelim();
    });
    for (const v of message.backendIds) {
      writer.uint32(282).string(v!);
    }
    for (const v of message.edgeRouteBackendMatches) {
      Tunnel_EdgeRouteBackendMatch.encode(
        v!,
        writer.uint32(290).fork()
      ).ldelim();
    }
    if (message.frontend !== undefined) {
      Frontend.encode(message.frontend, writer.uint32(234).fork()).ldelim();
    }
    if (message.deprecatedFrontendId.length !== 0) {
      writer.uint32(226).bytes(message.deprecatedFrontendId);
    }
    if (message.frontendId !== undefined) {
      ID.encode(message.frontendId, writer.uint32(242).fork()).ldelim();
    }
    if (message.hostname !== "") {
      writer.uint32(106).string(message.hostname);
    }
    if (message.port !== 0) {
      writer.uint32(112).int64(message.port);
    }
    if (message.proto !== "") {
      writer.uint32(66).string(message.proto);
    }
    if (message.url !== "") {
      writer.uint32(58).string(message.url);
    }
    if (message.balance === true) {
      writer.uint32(88).bool(message.balance);
    }
    if (message.userId !== 0) {
      writer.uint32(32).int64(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tunnel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTunnel } as Tunnel;
    message.labels = {};
    message.backendIds = [];
    message.edgeRouteBackendMatches = [];
    message.deprecatedFrontendId = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 27:
          message.deletedAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.metadata = reader.string();
          break;
        case 5:
          message.sessionId = reader.string();
          break;
        case 25:
          message.persistentSessionId = reader.string();
          break;
        case 6:
          message.serverAddr = reader.string();
          break;
        case 21:
          message.serverId = reader.string();
          break;
        case 24:
          message.machineId = MachineID.decode(reader, reader.uint32());
          break;
        case 9:
          message.remoteAddr = reader.string();
          break;
        case 12:
          message.region = reader.string();
          break;
        case 17:
          message.expiresAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 18:
          message.clientVersion = reader.string();
          break;
        case 31:
          message.agentAuth = Tunnel_AgentBasicAuth.decode(
            reader,
            reader.uint32()
          );
          break;
        case 22:
          message.idleTimeout = longToNumber(reader.int64() as Long);
          break;
        case 33:
          message.proxyProto = reader.int32() as any;
          break;
        case 37:
          message.forwardsTo = reader.string();
          break;
        case 34:
          message.endpointId = reader.string();
          break;
        case 32:
          const entry32 = Tunnel_LabelsEntry.decode(reader, reader.uint32());
          if (entry32.value !== undefined) {
            message.labels[entry32.key] = entry32.value;
          }
          break;
        case 35:
          message.backendIds.push(reader.string());
          break;
        case 36:
          message.edgeRouteBackendMatches.push(
            Tunnel_EdgeRouteBackendMatch.decode(reader, reader.uint32())
          );
          break;
        case 29:
          message.frontend = Frontend.decode(reader, reader.uint32());
          break;
        case 28:
          message.deprecatedFrontendId = reader.bytes();
          break;
        case 30:
          message.frontendId = ID.decode(reader, reader.uint32());
          break;
        case 13:
          message.hostname = reader.string();
          break;
        case 14:
          message.port = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.proto = reader.string();
          break;
        case 7:
          message.url = reader.string();
          break;
        case 11:
          message.balance = reader.bool();
          break;
        case 4:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Tunnel>): Tunnel {
    const message = { ...baseTunnel } as Tunnel;
    message.labels = {};
    message.backendIds = [];
    message.edgeRouteBackendMatches = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.deletedAt !== undefined && object.deletedAt !== null) {
      message.deletedAt = Timestamp.fromPartial(object.deletedAt);
    } else {
      message.deletedAt = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.sessionId !== undefined && object.sessionId !== null) {
      message.sessionId = object.sessionId;
    } else {
      message.sessionId = "";
    }
    if (
      object.persistentSessionId !== undefined &&
      object.persistentSessionId !== null
    ) {
      message.persistentSessionId = object.persistentSessionId;
    } else {
      message.persistentSessionId = "";
    }
    if (object.serverAddr !== undefined && object.serverAddr !== null) {
      message.serverAddr = object.serverAddr;
    } else {
      message.serverAddr = "";
    }
    if (object.serverId !== undefined && object.serverId !== null) {
      message.serverId = object.serverId;
    } else {
      message.serverId = "";
    }
    if (object.machineId !== undefined && object.machineId !== null) {
      message.machineId = MachineID.fromPartial(object.machineId);
    } else {
      message.machineId = undefined;
    }
    if (object.remoteAddr !== undefined && object.remoteAddr !== null) {
      message.remoteAddr = object.remoteAddr;
    } else {
      message.remoteAddr = "";
    }
    if (object.region !== undefined && object.region !== null) {
      message.region = object.region;
    } else {
      message.region = "";
    }
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = Timestamp.fromPartial(object.expiresAt);
    } else {
      message.expiresAt = undefined;
    }
    if (object.clientVersion !== undefined && object.clientVersion !== null) {
      message.clientVersion = object.clientVersion;
    } else {
      message.clientVersion = "";
    }
    if (object.agentAuth !== undefined && object.agentAuth !== null) {
      message.agentAuth = Tunnel_AgentBasicAuth.fromPartial(object.agentAuth);
    } else {
      message.agentAuth = undefined;
    }
    if (object.idleTimeout !== undefined && object.idleTimeout !== null) {
      message.idleTimeout = object.idleTimeout;
    } else {
      message.idleTimeout = 0;
    }
    if (object.proxyProto !== undefined && object.proxyProto !== null) {
      message.proxyProto = object.proxyProto;
    } else {
      message.proxyProto = 0;
    }
    if (object.forwardsTo !== undefined && object.forwardsTo !== null) {
      message.forwardsTo = object.forwardsTo;
    } else {
      message.forwardsTo = "";
    }
    if (object.endpointId !== undefined && object.endpointId !== null) {
      message.endpointId = object.endpointId;
    } else {
      message.endpointId = "";
    }
    if (object.labels !== undefined && object.labels !== null) {
      Object.entries(object.labels).forEach(([key, value]) => {
        if (value !== undefined) {
          message.labels[key] = String(value);
        }
      });
    }
    if (object.backendIds !== undefined && object.backendIds !== null) {
      for (const e of object.backendIds) {
        message.backendIds.push(e);
      }
    }
    if (
      object.edgeRouteBackendMatches !== undefined &&
      object.edgeRouteBackendMatches !== null
    ) {
      for (const e of object.edgeRouteBackendMatches) {
        message.edgeRouteBackendMatches.push(
          Tunnel_EdgeRouteBackendMatch.fromPartial(e)
        );
      }
    }
    if (object.frontend !== undefined && object.frontend !== null) {
      message.frontend = Frontend.fromPartial(object.frontend);
    } else {
      message.frontend = undefined;
    }
    if (
      object.deprecatedFrontendId !== undefined &&
      object.deprecatedFrontendId !== null
    ) {
      message.deprecatedFrontendId = object.deprecatedFrontendId;
    } else {
      message.deprecatedFrontendId = new Uint8Array();
    }
    if (object.frontendId !== undefined && object.frontendId !== null) {
      message.frontendId = ID.fromPartial(object.frontendId);
    } else {
      message.frontendId = undefined;
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
    if (object.proto !== undefined && object.proto !== null) {
      message.proto = object.proto;
    } else {
      message.proto = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    } else {
      message.balance = false;
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    } else {
      message.userId = 0;
    }
    return message;
  },
};

const baseTunnel_AgentBasicAuth: object = {};

export const Tunnel_AgentBasicAuth = {
  encode(
    message: Tunnel_AgentBasicAuth,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hashedAuth.length !== 0) {
      writer.uint32(10).bytes(message.hashedAuth);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Tunnel_AgentBasicAuth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTunnel_AgentBasicAuth } as Tunnel_AgentBasicAuth;
    message.hashedAuth = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hashedAuth = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Tunnel_AgentBasicAuth>
  ): Tunnel_AgentBasicAuth {
    const message = { ...baseTunnel_AgentBasicAuth } as Tunnel_AgentBasicAuth;
    if (object.hashedAuth !== undefined && object.hashedAuth !== null) {
      message.hashedAuth = object.hashedAuth;
    } else {
      message.hashedAuth = new Uint8Array();
    }
    return message;
  },
};

const baseTunnel_LabelsEntry: object = { key: "", value: "" };

export const Tunnel_LabelsEntry = {
  encode(
    message: Tunnel_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tunnel_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTunnel_LabelsEntry } as Tunnel_LabelsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Tunnel_LabelsEntry>): Tunnel_LabelsEntry {
    const message = { ...baseTunnel_LabelsEntry } as Tunnel_LabelsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseTunnel_EdgeRouteBackendMatch: object = {
  edgeId: "",
  routeId: "",
  backendId: "",
};

export const Tunnel_EdgeRouteBackendMatch = {
  encode(
    message: Tunnel_EdgeRouteBackendMatch,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.edgeId !== "") {
      writer.uint32(10).string(message.edgeId);
    }
    if (message.routeId !== "") {
      writer.uint32(18).string(message.routeId);
    }
    if (message.backendId !== "") {
      writer.uint32(26).string(message.backendId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Tunnel_EdgeRouteBackendMatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTunnel_EdgeRouteBackendMatch,
    } as Tunnel_EdgeRouteBackendMatch;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.edgeId = reader.string();
          break;
        case 2:
          message.routeId = reader.string();
          break;
        case 3:
          message.backendId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<Tunnel_EdgeRouteBackendMatch>
  ): Tunnel_EdgeRouteBackendMatch {
    const message = {
      ...baseTunnel_EdgeRouteBackendMatch,
    } as Tunnel_EdgeRouteBackendMatch;
    if (object.edgeId !== undefined && object.edgeId !== null) {
      message.edgeId = object.edgeId;
    } else {
      message.edgeId = "";
    }
    if (object.routeId !== undefined && object.routeId !== null) {
      message.routeId = object.routeId;
    } else {
      message.routeId = "";
    }
    if (object.backendId !== undefined && object.backendId !== null) {
      message.backendId = object.backendId;
    } else {
      message.backendId = "";
    }
    return message;
  },
};

const baseFrontend: object = { fingerprint: "" };

export const Frontend = {
  encode(
    message: Frontend,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.handler !== undefined) {
      Handler.encode(message.handler, writer.uint32(66).fork()).ldelim();
    }
    if (message.fingerprint !== "") {
      writer.uint32(74).string(message.fingerprint);
    }
    if (message.status !== undefined) {
      FrontendStatus.encode(message.status, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Frontend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFrontend } as Frontend;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 8:
          message.handler = Handler.decode(reader, reader.uint32());
          break;
        case 9:
          message.fingerprint = reader.string();
          break;
        case 10:
          message.status = FrontendStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Frontend>): Frontend {
    const message = { ...baseFrontend } as Frontend;
    if (object.handler !== undefined && object.handler !== null) {
      message.handler = Handler.fromPartial(object.handler);
    } else {
      message.handler = undefined;
    }
    if (object.fingerprint !== undefined && object.fingerprint !== null) {
      message.fingerprint = object.fingerprint;
    } else {
      message.fingerprint = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = FrontendStatus.fromPartial(object.status);
    } else {
      message.status = undefined;
    }
    return message;
  },
};

const baseFrontendStatus: object = {};

export const FrontendStatus = {
  encode(
    message: FrontendStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.banDetails !== undefined) {
      BanDetails.encode(message.banDetails, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FrontendStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFrontendStatus } as FrontendStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.banDetails = BanDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<FrontendStatus>): FrontendStatus {
    const message = { ...baseFrontendStatus } as FrontendStatus;
    if (object.banDetails !== undefined && object.banDetails !== null) {
      message.banDetails = BanDetails.fromPartial(object.banDetails);
    } else {
      message.banDetails = undefined;
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
