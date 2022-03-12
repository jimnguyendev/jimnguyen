// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ID, Timestamp } from "../pb/types";
import { Paging } from "../rpx/model";

export const protobufPackage = "rpx";

export interface AgentIngress {
  id: ID | undefined;
  accountId: ID | undefined;
  domain: string;
  nsTargets: string[];
  description: string;
  metadata: string;
  createdAt: Timestamp | undefined;
  certificateAuthorityId: ID | undefined;
  regionDomains: { [key: string]: string };
  legacyAccountId: number;
  cert: Uint8Array;
  sealedPrivateKey: Uint8Array;
}

export interface AgentIngress_RegionDomainsEntry {
  key: string;
  value: string;
}

export interface AgentIngressListResp {
  ingresses: AgentIngress[];
  next: Paging | undefined;
}

const baseAgentIngress: object = {
  domain: "",
  nsTargets: "",
  description: "",
  metadata: "",
  legacyAccountId: 0,
};

export const AgentIngress = {
  encode(
    message: AgentIngress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(18).fork()).ldelim();
    }
    if (message.domain !== "") {
      writer.uint32(26).string(message.domain);
    }
    for (const v of message.nsTargets) {
      writer.uint32(34).string(v!);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.metadata !== "") {
      writer.uint32(50).string(message.metadata);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(58).fork()).ldelim();
    }
    if (message.certificateAuthorityId !== undefined) {
      ID.encode(
        message.certificateAuthorityId,
        writer.uint32(66).fork()
      ).ldelim();
    }
    Object.entries(message.regionDomains).forEach(([key, value]) => {
      AgentIngress_RegionDomainsEntry.encode(
        { key: key as any, value },
        writer.uint32(74).fork()
      ).ldelim();
    });
    if (message.legacyAccountId !== 0) {
      writer.uint32(80).int64(message.legacyAccountId);
    }
    if (message.cert.length !== 0) {
      writer.uint32(90).bytes(message.cert);
    }
    if (message.sealedPrivateKey.length !== 0) {
      writer.uint32(98).bytes(message.sealedPrivateKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AgentIngress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAgentIngress } as AgentIngress;
    message.nsTargets = [];
    message.regionDomains = {};
    message.cert = new Uint8Array();
    message.sealedPrivateKey = new Uint8Array();
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
          message.domain = reader.string();
          break;
        case 4:
          message.nsTargets.push(reader.string());
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.metadata = reader.string();
          break;
        case 7:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.certificateAuthorityId = ID.decode(reader, reader.uint32());
          break;
        case 9:
          const entry9 = AgentIngress_RegionDomainsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry9.value !== undefined) {
            message.regionDomains[entry9.key] = entry9.value;
          }
          break;
        case 10:
          message.legacyAccountId = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.cert = reader.bytes();
          break;
        case 12:
          message.sealedPrivateKey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AgentIngress>): AgentIngress {
    const message = { ...baseAgentIngress } as AgentIngress;
    message.nsTargets = [];
    message.regionDomains = {};
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    } else {
      message.domain = "";
    }
    if (object.nsTargets !== undefined && object.nsTargets !== null) {
      for (const e of object.nsTargets) {
        message.nsTargets.push(e);
      }
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
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (
      object.certificateAuthorityId !== undefined &&
      object.certificateAuthorityId !== null
    ) {
      message.certificateAuthorityId = ID.fromPartial(
        object.certificateAuthorityId
      );
    } else {
      message.certificateAuthorityId = undefined;
    }
    if (object.regionDomains !== undefined && object.regionDomains !== null) {
      Object.entries(object.regionDomains).forEach(([key, value]) => {
        if (value !== undefined) {
          message.regionDomains[key] = String(value);
        }
      });
    }
    if (
      object.legacyAccountId !== undefined &&
      object.legacyAccountId !== null
    ) {
      message.legacyAccountId = object.legacyAccountId;
    } else {
      message.legacyAccountId = 0;
    }
    if (object.cert !== undefined && object.cert !== null) {
      message.cert = object.cert;
    } else {
      message.cert = new Uint8Array();
    }
    if (
      object.sealedPrivateKey !== undefined &&
      object.sealedPrivateKey !== null
    ) {
      message.sealedPrivateKey = object.sealedPrivateKey;
    } else {
      message.sealedPrivateKey = new Uint8Array();
    }
    return message;
  },
};

const baseAgentIngress_RegionDomainsEntry: object = { key: "", value: "" };

export const AgentIngress_RegionDomainsEntry = {
  encode(
    message: AgentIngress_RegionDomainsEntry,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AgentIngress_RegionDomainsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAgentIngress_RegionDomainsEntry,
    } as AgentIngress_RegionDomainsEntry;
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

  fromPartial(
    object: DeepPartial<AgentIngress_RegionDomainsEntry>
  ): AgentIngress_RegionDomainsEntry {
    const message = {
      ...baseAgentIngress_RegionDomainsEntry,
    } as AgentIngress_RegionDomainsEntry;
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

const baseAgentIngressListResp: object = {};

export const AgentIngressListResp = {
  encode(
    message: AgentIngressListResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.ingresses) {
      AgentIngress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.next !== undefined) {
      Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AgentIngressListResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAgentIngressListResp } as AgentIngressListResp;
    message.ingresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ingresses.push(AgentIngress.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<AgentIngressListResp>): AgentIngressListResp {
    const message = { ...baseAgentIngressListResp } as AgentIngressListResp;
    message.ingresses = [];
    if (object.ingresses !== undefined && object.ingresses !== null) {
      for (const e of object.ingresses) {
        message.ingresses.push(AgentIngress.fromPartial(e));
      }
    }
    if (object.next !== undefined && object.next !== null) {
      message.next = Paging.fromPartial(object.next);
    } else {
      message.next = undefined;
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
