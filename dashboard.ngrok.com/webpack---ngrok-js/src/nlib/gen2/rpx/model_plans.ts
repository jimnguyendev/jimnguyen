// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../pb/types";

export const protobufPackage = "rpx";

/** defines all flags as part of plans config */
export interface Flag {
  type: Flag_Type;
  /** js uses this */
  name: string;
  description: string;
}

/** any change here must be sync up with config/src/plans/flags.ts */
export enum Flag_Type {
  Undefined = 0,
  AllowWebhookValidation = 1,
  AllowOAuth = 2,
  TrustedAPIReporter = 3,
  AllowAPIReports = 4,
  AllowIPRestrictions = 5,
  AllowUploadedCerts = 6,
  AllowManagedCerts = 7,
  AllowReserveBaseDomain = 8,
  AllowCAs = 9,
  EnrolledInBeta = 10,
  AllowEventStreams = 11,
  AllowSSHCerts = 12,
  AllowLegacyCharDomains = 13,
  AllowEnterpriseAgentIngress = 14,
  AllowEdges = 15,
  AllowEventSubscriptions = 16,
  AllowAgentUpdate = 17,
  AllowAgentStopRestart = 18,
  AllowAgentRunAsService = 19,
  AllowAgentHTTPProxy = 20,
  AllowAgentSOCKS5Proxy = 21,
  AllowAgentCustomCAs = 22,
  AllowAgentCustomNetworkInterface = 23,
  AllowAgentProxyProto = 24,
  AllowMutualTLSAtAgent = 25,
  AllowMutualTLSAtEdge = 26,
  AllowCredentialACLs = 27,
  AllowHostHeaderRewrite = 28,
  /** AllowCompression - Tunnels */
  AllowCompression = 29,
  AllowCircuitBreaker = 30,
  AllowBasicAuth = 31,
  AllowOIDC = 32,
  AllowSAML = 33,
  AllowRequestHeaders = 34,
  AllowResponseHeaders = 35,
  AllowTLSTermination = 36,
  /** AllowAgentIPRestriction - IP Restrictions */
  AllowAgentIPRestriction = 48,
  AllowDashboardIPRestriction = 49,
  AllowAPIIPRestriction = 50,
  AllowEndpointsIPRestriction = 51,
  /** AllowWeightedBackend - Backends */
  AllowWeightedBackend = 64,
  AllowTunnelGroupBackend = 65,
  AllowFailoverBackend = 66,
  AllowTCPAddressBackend = 67,
  AllowHTTPResponseBackend = 68,
  AllowRBAC = 70,
  AllowWebsocketTCPConverter = 71,
  /** AllowTLSTunnel - Others extracted from account */
  AllowTLSTunnel = 72,
  AllowSubdomain = 73,
  AllowCustomHostname = 74,
  AllowAPI = 75,
  AllowCredentials = 76,
  AllowGoogleSSO = 78,
  /** UseLegacyEdge - bool enable_edge_frontend = 34; */
  UseLegacyEdge = 79,
  AllowSSHTunnel = 80,
  AllowAPIVersionOptional = 81,
  AllowIPPolicy = 82,
  AllowEndpointConfig = 83,
  AllowSessionOperations = 84,
  AllowAzurePrivateLinkACLRules = 85,
  AllowAgentIngresses = 86,
  AllowNgrokLinkAccess = 87,
  AllowDomains = 88,
  AllowWildcardDomains = 89,
  AllowTCPAddrs = 90,
  AllowCollaborators = 91,
  AllowBillingSubscription = 92,
  AddAgentIPsHeader = 93,
  EnforceContentBans = 94,
  DisallowHTML = 95,
  DisallowHTMLInIndia = 96,
  ShowHTMLInterstitial = 97,
}

/** defines all limits as part of plans config */
export interface Limit {
  type: Limit_Type;
  /** js uses this */
  name: string;
  description: string;
}

/** any change here must be sync up with config/src/plans/limits.ts */
export enum Limit_Type {
  Unknown = 0,
  Sessions = 1,
  SessionTunnels = 2,
  TCPAddrs = 3,
  Domains = 4,
  WildcardDomains = 5,
  Connections = 6,
  Users = 8,
  TunnelAuthtokens = 11,
  APIKeys = 12,
  SSHPublicKeys = 13,
  IPPolicies = 14,
  IPPolicyRules = 15,
  EndpointConfigs = 16,
  EndpointConfigTLSMaxCertSize = 17,
  EndpointConfigIPPolicies = 18,
  EndpointConfigHeaders = 19,
  APIRequestsPerMinute = 20,
  EventStreamDestinations = 21,
  EventDestinations = 29,
  EventSubscriptions = 22,
  EventSubscriptionDestinations = 23,
  Edges = 24,
  EdgeHostPorts = 25,
  EdgeRoutes = 26,
  SessionDuration = 27,
  IdleTimeout = 28,
}

export interface Plan {
  name: string;
  type: Plan_Type;
  flags: Plan_Flag[];
  limits: Plan_Limit[];
}

export enum Plan_Type {
  Unknown = 0,
  Legacy = 1,
  Beta = 2,
}

export interface Plan_Flag {
  type: Flag_Type;
  enabled: boolean;
}

export interface Plan_Limit {
  type: Limit_Type;
  amount: number;
  scaleWithUserCount: boolean;
}

export interface FeaturePlans {
  plans: FeaturePlans_Plan[];
  flagOverrides: FeaturePlans_Flag[];
  limitOverrides: FeaturePlans_Limit[];
}

export interface FeaturePlans_Plan {
  name: string;
  /** optional */
  expiresAt: Timestamp | undefined;
}

export interface FeaturePlans_Flag {
  type: Flag_Type;
  enabled: boolean;
  /** optional */
  expiresAt: Timestamp | undefined;
}

export interface FeaturePlans_Limit {
  type: Limit_Type;
  amount: number;
  scaleWithUserCount: boolean;
  /** optional */
  expiresAt: Timestamp | undefined;
}

/** AccountPlan is a view of the assigned FeaturePlans suitable for corp */
export interface AccountPlan {
  plans: FeaturePlans | undefined;
  flags: AccountPlan_Flag[];
  limits: AccountPlan_Limit[];
}

/** ValueSource shows where we pulled this value from */
export enum AccountPlan_ValueSource {
  /** Unknown - not found in plan or override, defaults to false/0 */
  Unknown = 0,
  Plan = 1,
  Override = 2,
}

export interface AccountPlan_Flag {
  type: Flag_Type;
  /** the current value of the flag */
  active: AccountPlan_Flag_Value | undefined;
  /** any other values we find, e.g. if set in multiple plans */
  others: AccountPlan_Flag_Value[];
}

export interface AccountPlan_Flag_Value {
  enabled: boolean;
  expiresAt: Timestamp | undefined;
  source: AccountPlan_ValueSource;
  /** when source = plan */
  planName: string;
}

export interface AccountPlan_Limit {
  type: Limit_Type;
  /** the current value of the limit */
  active: AccountPlan_Limit_Value | undefined;
  /** any other values we find, e.g. if set in multiple plans */
  others: AccountPlan_Limit_Value[];
}

export interface AccountPlan_Limit_Value {
  /** when scale, multiplied by the user count */
  amount: number;
  /** in case of scale, shows the basic amount/multiplier */
  basis: number;
  scaleWithUserCount: boolean;
  expiresAt: Timestamp | undefined;
  source: AccountPlan_ValueSource;
  /** when source = plan */
  planName: string;
}

const baseFlag: object = { type: 0, name: "", description: "" };

export const Flag = {
  encode(message: Flag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Flag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFlag } as Flag;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Flag>): Flag {
    const message = { ...baseFlag } as Flag;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

const baseLimit: object = { type: 0, name: "", description: "" };

export const Limit = {
  encode(message: Limit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Limit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLimit } as Limit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Limit>): Limit {
    const message = { ...baseLimit } as Limit;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

const basePlan: object = { name: "", type: 0 };

export const Plan = {
  encode(message: Plan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    for (const v of message.flags) {
      Plan_Flag.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.limits) {
      Plan_Limit.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Plan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlan } as Plan;
    message.flags = [];
    message.limits = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.flags.push(Plan_Flag.decode(reader, reader.uint32()));
          break;
        case 4:
          message.limits.push(Plan_Limit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Plan>): Plan {
    const message = { ...basePlan } as Plan;
    message.flags = [];
    message.limits = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.flags !== undefined && object.flags !== null) {
      for (const e of object.flags) {
        message.flags.push(Plan_Flag.fromPartial(e));
      }
    }
    if (object.limits !== undefined && object.limits !== null) {
      for (const e of object.limits) {
        message.limits.push(Plan_Limit.fromPartial(e));
      }
    }
    return message;
  },
};

const basePlan_Flag: object = { type: 0, enabled: false };

export const Plan_Flag = {
  encode(
    message: Plan_Flag,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Plan_Flag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlan_Flag } as Plan_Flag;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Plan_Flag>): Plan_Flag {
    const message = { ...basePlan_Flag } as Plan_Flag;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    return message;
  },
};

const basePlan_Limit: object = {
  type: 0,
  amount: 0,
  scaleWithUserCount: false,
};

export const Plan_Limit = {
  encode(
    message: Plan_Limit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int64(message.amount);
    }
    if (message.scaleWithUserCount === true) {
      writer.uint32(24).bool(message.scaleWithUserCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Plan_Limit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlan_Limit } as Plan_Limit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.amount = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.scaleWithUserCount = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Plan_Limit>): Plan_Limit {
    const message = { ...basePlan_Limit } as Plan_Limit;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (
      object.scaleWithUserCount !== undefined &&
      object.scaleWithUserCount !== null
    ) {
      message.scaleWithUserCount = object.scaleWithUserCount;
    } else {
      message.scaleWithUserCount = false;
    }
    return message;
  },
};

const baseFeaturePlans: object = {};

export const FeaturePlans = {
  encode(
    message: FeaturePlans,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.plans) {
      FeaturePlans_Plan.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.flagOverrides) {
      FeaturePlans_Flag.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.limitOverrides) {
      FeaturePlans_Limit.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeaturePlans {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeaturePlans } as FeaturePlans;
    message.plans = [];
    message.flagOverrides = [];
    message.limitOverrides = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plans.push(FeaturePlans_Plan.decode(reader, reader.uint32()));
          break;
        case 2:
          message.flagOverrides.push(
            FeaturePlans_Flag.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.limitOverrides.push(
            FeaturePlans_Limit.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<FeaturePlans>): FeaturePlans {
    const message = { ...baseFeaturePlans } as FeaturePlans;
    message.plans = [];
    message.flagOverrides = [];
    message.limitOverrides = [];
    if (object.plans !== undefined && object.plans !== null) {
      for (const e of object.plans) {
        message.plans.push(FeaturePlans_Plan.fromPartial(e));
      }
    }
    if (object.flagOverrides !== undefined && object.flagOverrides !== null) {
      for (const e of object.flagOverrides) {
        message.flagOverrides.push(FeaturePlans_Flag.fromPartial(e));
      }
    }
    if (object.limitOverrides !== undefined && object.limitOverrides !== null) {
      for (const e of object.limitOverrides) {
        message.limitOverrides.push(FeaturePlans_Limit.fromPartial(e));
      }
    }
    return message;
  },
};

const baseFeaturePlans_Plan: object = { name: "" };

export const FeaturePlans_Plan = {
  encode(
    message: FeaturePlans_Plan,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(message.expiresAt, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeaturePlans_Plan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeaturePlans_Plan } as FeaturePlans_Plan;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.expiresAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<FeaturePlans_Plan>): FeaturePlans_Plan {
    const message = { ...baseFeaturePlans_Plan } as FeaturePlans_Plan;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = Timestamp.fromPartial(object.expiresAt);
    } else {
      message.expiresAt = undefined;
    }
    return message;
  },
};

const baseFeaturePlans_Flag: object = { type: 0, enabled: false };

export const FeaturePlans_Flag = {
  encode(
    message: FeaturePlans_Flag,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(message.expiresAt, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeaturePlans_Flag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeaturePlans_Flag } as FeaturePlans_Flag;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        case 3:
          message.expiresAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<FeaturePlans_Flag>): FeaturePlans_Flag {
    const message = { ...baseFeaturePlans_Flag } as FeaturePlans_Flag;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = Timestamp.fromPartial(object.expiresAt);
    } else {
      message.expiresAt = undefined;
    }
    return message;
  },
};

const baseFeaturePlans_Limit: object = {
  type: 0,
  amount: 0,
  scaleWithUserCount: false,
};

export const FeaturePlans_Limit = {
  encode(
    message: FeaturePlans_Limit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int64(message.amount);
    }
    if (message.scaleWithUserCount === true) {
      writer.uint32(24).bool(message.scaleWithUserCount);
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(message.expiresAt, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeaturePlans_Limit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeaturePlans_Limit } as FeaturePlans_Limit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.amount = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.scaleWithUserCount = reader.bool();
          break;
        case 4:
          message.expiresAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<FeaturePlans_Limit>): FeaturePlans_Limit {
    const message = { ...baseFeaturePlans_Limit } as FeaturePlans_Limit;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (
      object.scaleWithUserCount !== undefined &&
      object.scaleWithUserCount !== null
    ) {
      message.scaleWithUserCount = object.scaleWithUserCount;
    } else {
      message.scaleWithUserCount = false;
    }
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = Timestamp.fromPartial(object.expiresAt);
    } else {
      message.expiresAt = undefined;
    }
    return message;
  },
};

const baseAccountPlan: object = {};

export const AccountPlan = {
  encode(
    message: AccountPlan,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.plans !== undefined) {
      FeaturePlans.encode(message.plans, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.flags) {
      AccountPlan_Flag.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.limits) {
      AccountPlan_Limit.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountPlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountPlan } as AccountPlan;
    message.flags = [];
    message.limits = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plans = FeaturePlans.decode(reader, reader.uint32());
          break;
        case 2:
          message.flags.push(AccountPlan_Flag.decode(reader, reader.uint32()));
          break;
        case 3:
          message.limits.push(
            AccountPlan_Limit.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AccountPlan>): AccountPlan {
    const message = { ...baseAccountPlan } as AccountPlan;
    message.flags = [];
    message.limits = [];
    if (object.plans !== undefined && object.plans !== null) {
      message.plans = FeaturePlans.fromPartial(object.plans);
    } else {
      message.plans = undefined;
    }
    if (object.flags !== undefined && object.flags !== null) {
      for (const e of object.flags) {
        message.flags.push(AccountPlan_Flag.fromPartial(e));
      }
    }
    if (object.limits !== undefined && object.limits !== null) {
      for (const e of object.limits) {
        message.limits.push(AccountPlan_Limit.fromPartial(e));
      }
    }
    return message;
  },
};

const baseAccountPlan_Flag: object = { type: 0 };

export const AccountPlan_Flag = {
  encode(
    message: AccountPlan_Flag,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.active !== undefined) {
      AccountPlan_Flag_Value.encode(
        message.active,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.others) {
      AccountPlan_Flag_Value.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountPlan_Flag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountPlan_Flag } as AccountPlan_Flag;
    message.others = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.active = AccountPlan_Flag_Value.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.others.push(
            AccountPlan_Flag_Value.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AccountPlan_Flag>): AccountPlan_Flag {
    const message = { ...baseAccountPlan_Flag } as AccountPlan_Flag;
    message.others = [];
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = AccountPlan_Flag_Value.fromPartial(object.active);
    } else {
      message.active = undefined;
    }
    if (object.others !== undefined && object.others !== null) {
      for (const e of object.others) {
        message.others.push(AccountPlan_Flag_Value.fromPartial(e));
      }
    }
    return message;
  },
};

const baseAccountPlan_Flag_Value: object = {
  enabled: false,
  source: 0,
  planName: "",
};

export const AccountPlan_Flag_Value = {
  encode(
    message: AccountPlan_Flag_Value,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(message.expiresAt, writer.uint32(18).fork()).ldelim();
    }
    if (message.source !== 0) {
      writer.uint32(24).int32(message.source);
    }
    if (message.planName !== "") {
      writer.uint32(34).string(message.planName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountPlan_Flag_Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountPlan_Flag_Value } as AccountPlan_Flag_Value;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.expiresAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.source = reader.int32() as any;
          break;
        case 4:
          message.planName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<AccountPlan_Flag_Value>
  ): AccountPlan_Flag_Value {
    const message = { ...baseAccountPlan_Flag_Value } as AccountPlan_Flag_Value;
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = Timestamp.fromPartial(object.expiresAt);
    } else {
      message.expiresAt = undefined;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = 0;
    }
    if (object.planName !== undefined && object.planName !== null) {
      message.planName = object.planName;
    } else {
      message.planName = "";
    }
    return message;
  },
};

const baseAccountPlan_Limit: object = { type: 0 };

export const AccountPlan_Limit = {
  encode(
    message: AccountPlan_Limit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.active !== undefined) {
      AccountPlan_Limit_Value.encode(
        message.active,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.others) {
      AccountPlan_Limit_Value.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountPlan_Limit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountPlan_Limit } as AccountPlan_Limit;
    message.others = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.active = AccountPlan_Limit_Value.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.others.push(
            AccountPlan_Limit_Value.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AccountPlan_Limit>): AccountPlan_Limit {
    const message = { ...baseAccountPlan_Limit } as AccountPlan_Limit;
    message.others = [];
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = AccountPlan_Limit_Value.fromPartial(object.active);
    } else {
      message.active = undefined;
    }
    if (object.others !== undefined && object.others !== null) {
      for (const e of object.others) {
        message.others.push(AccountPlan_Limit_Value.fromPartial(e));
      }
    }
    return message;
  },
};

const baseAccountPlan_Limit_Value: object = {
  amount: 0,
  basis: 0,
  scaleWithUserCount: false,
  source: 0,
  planName: "",
};

export const AccountPlan_Limit_Value = {
  encode(
    message: AccountPlan_Limit_Value,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).int64(message.amount);
    }
    if (message.basis !== 0) {
      writer.uint32(16).int64(message.basis);
    }
    if (message.scaleWithUserCount === true) {
      writer.uint32(24).bool(message.scaleWithUserCount);
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(message.expiresAt, writer.uint32(34).fork()).ldelim();
    }
    if (message.source !== 0) {
      writer.uint32(40).int32(message.source);
    }
    if (message.planName !== "") {
      writer.uint32(50).string(message.planName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountPlan_Limit_Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAccountPlan_Limit_Value,
    } as AccountPlan_Limit_Value;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.basis = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.scaleWithUserCount = reader.bool();
          break;
        case 4:
          message.expiresAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.source = reader.int32() as any;
          break;
        case 6:
          message.planName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<AccountPlan_Limit_Value>
  ): AccountPlan_Limit_Value {
    const message = {
      ...baseAccountPlan_Limit_Value,
    } as AccountPlan_Limit_Value;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.basis !== undefined && object.basis !== null) {
      message.basis = object.basis;
    } else {
      message.basis = 0;
    }
    if (
      object.scaleWithUserCount !== undefined &&
      object.scaleWithUserCount !== null
    ) {
      message.scaleWithUserCount = object.scaleWithUserCount;
    } else {
      message.scaleWithUserCount = false;
    }
    if (object.expiresAt !== undefined && object.expiresAt !== null) {
      message.expiresAt = Timestamp.fromPartial(object.expiresAt);
    } else {
      message.expiresAt = undefined;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = 0;
    }
    if (object.planName !== undefined && object.planName !== null) {
      message.planName = object.planName;
    } else {
      message.planName = "";
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
