// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Account } from "../rpx/model_account";
import {
  Cred,
  SSHCred,
  CertKeyPair,
  IPRestriction,
  Session,
} from "../rpx/model";
import { Domain } from "../rpx/model_domain";
import { TCPAddr } from "../rpx/model_tcp_addr";
import { EndpointConfiguration } from "../rpx/pointcfg_module";
import { EventStream, EventDestination } from "../rpx/model_evstream";
import { BannedAddr } from "../rpx/model_banned_addrs";
import { GlobalFirewallRule } from "../rpx/model_global_firewall";
import { IPPolicyRule } from "../rpx/model_ip_policy";
import { Backend } from "../rpx/model_backends";
import { Tunnel } from "../rpx/model_tunnel";
import { Endpoint } from "../rpx/model_endpoint";
import { Edge } from "../rpx/model_edges";
import { EventSubscription } from "../rpx/model_evsub";
import { AgentIngress } from "../rpx/model_agent_ingress";
import { BanlistEntry } from "../rpx/model_banlist";

export const protobufPackage = "rpx";

export interface SyncReq {
  /**
   * Last revision successfully processed by the caller. The first streamed
   * record will be from the next revision.
   */
  spec: StreamSpec | undefined;
  metadata: { [key: string]: string };
}

export interface SyncReq_MetadataEntry {
  key: string;
  value: string;
}

export interface StreamSpec {
  /** map of shard -> revision/sequence */
  seqByShard: { [key: string]: string };
}

export interface StreamSpec_SeqByShardEntry {
  key: string;
  value: string;
}

export interface StreamItem {
  seq: StreamSeq | undefined;
  error: string;
  revisionUnavailable: boolean;
  events: StreamEvent[];
  bootstrapEvent: StreamItem_BootstrapEvent;
}

export enum StreamItem_BootstrapEvent {
  Undefined = 0,
  BootstrapStart = 1,
  BootstrapStop = 2,
  BootstrapSkip = 3,
}

export interface StreamSeq {
  shardId: string;
  val: string;
}

export interface StreamEvent {
  op: StreamEvent_Op;
  obj: StreamObj | undefined;
}

export enum StreamEvent_Op {
  PUT = 0,
  DELETE = 1,
}

export interface StreamObj {
  createRevision: number;
  modRevision: number;
  version: number;
  key: Uint8Array;
  account: Account | undefined;
  cred: Cred | undefined;
  sshCred: SSHCred | undefined;
  cert: CertKeyPair | undefined;
  domain: Domain | undefined;
  tcpAddr: TCPAddr | undefined;
  endpointConfiguration: EndpointConfiguration | undefined;
  ipRestriction: IPRestriction | undefined;
  eventStream: EventStream | undefined;
  eventDestination: EventDestination | undefined;
  bannedAddr: BannedAddr | undefined;
  globalFirewallRule: GlobalFirewallRule | undefined;
  ipPolicyRule: IPPolicyRule | undefined;
  backend: Backend | undefined;
  tunnel: Tunnel | undefined;
  endpoint: Endpoint | undefined;
  session: Session | undefined;
  edge: Edge | undefined;
  eventSubscription: EventSubscription | undefined;
  agentIngress: AgentIngress | undefined;
  banlistEntry: BanlistEntry | undefined;
}

const baseSyncReq: object = {};

export const SyncReq = {
  encode(
    message: SyncReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spec !== undefined) {
      StreamSpec.encode(message.spec, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      SyncReq_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyncReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSyncReq } as SyncReq;
    message.metadata = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spec = StreamSpec.decode(reader, reader.uint32());
          break;
        case 2:
          const entry2 = SyncReq_MetadataEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.metadata[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<SyncReq>): SyncReq {
    const message = { ...baseSyncReq } as SyncReq;
    message.metadata = {};
    if (object.spec !== undefined && object.spec !== null) {
      message.spec = StreamSpec.fromPartial(object.spec);
    } else {
      message.spec = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        if (value !== undefined) {
          message.metadata[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseSyncReq_MetadataEntry: object = { key: "", value: "" };

export const SyncReq_MetadataEntry = {
  encode(
    message: SyncReq_MetadataEntry,
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
  ): SyncReq_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSyncReq_MetadataEntry } as SyncReq_MetadataEntry;
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
    object: DeepPartial<SyncReq_MetadataEntry>
  ): SyncReq_MetadataEntry {
    const message = { ...baseSyncReq_MetadataEntry } as SyncReq_MetadataEntry;
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

const baseStreamSpec: object = {};

export const StreamSpec = {
  encode(
    message: StreamSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.seqByShard).forEach(([key, value]) => {
      StreamSpec_SeqByShardEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamSpec } as StreamSpec;
    message.seqByShard = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = StreamSpec_SeqByShardEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.seqByShard[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<StreamSpec>): StreamSpec {
    const message = { ...baseStreamSpec } as StreamSpec;
    message.seqByShard = {};
    if (object.seqByShard !== undefined && object.seqByShard !== null) {
      Object.entries(object.seqByShard).forEach(([key, value]) => {
        if (value !== undefined) {
          message.seqByShard[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseStreamSpec_SeqByShardEntry: object = { key: "", value: "" };

export const StreamSpec_SeqByShardEntry = {
  encode(
    message: StreamSpec_SeqByShardEntry,
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
  ): StreamSpec_SeqByShardEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseStreamSpec_SeqByShardEntry,
    } as StreamSpec_SeqByShardEntry;
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
    object: DeepPartial<StreamSpec_SeqByShardEntry>
  ): StreamSpec_SeqByShardEntry {
    const message = {
      ...baseStreamSpec_SeqByShardEntry,
    } as StreamSpec_SeqByShardEntry;
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

const baseStreamItem: object = {
  error: "",
  revisionUnavailable: false,
  bootstrapEvent: 0,
};

export const StreamItem = {
  encode(
    message: StreamItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.seq !== undefined) {
      StreamSeq.encode(message.seq, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    if (message.revisionUnavailable === true) {
      writer.uint32(24).bool(message.revisionUnavailable);
    }
    for (const v of message.events) {
      StreamEvent.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.bootstrapEvent !== 0) {
      writer.uint32(56).int32(message.bootstrapEvent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamItem } as StreamItem;
    message.events = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seq = StreamSeq.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = reader.string();
          break;
        case 3:
          message.revisionUnavailable = reader.bool();
          break;
        case 4:
          message.events.push(StreamEvent.decode(reader, reader.uint32()));
          break;
        case 7:
          message.bootstrapEvent = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<StreamItem>): StreamItem {
    const message = { ...baseStreamItem } as StreamItem;
    message.events = [];
    if (object.seq !== undefined && object.seq !== null) {
      message.seq = StreamSeq.fromPartial(object.seq);
    } else {
      message.seq = undefined;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = "";
    }
    if (
      object.revisionUnavailable !== undefined &&
      object.revisionUnavailable !== null
    ) {
      message.revisionUnavailable = object.revisionUnavailable;
    } else {
      message.revisionUnavailable = false;
    }
    if (object.events !== undefined && object.events !== null) {
      for (const e of object.events) {
        message.events.push(StreamEvent.fromPartial(e));
      }
    }
    if (object.bootstrapEvent !== undefined && object.bootstrapEvent !== null) {
      message.bootstrapEvent = object.bootstrapEvent;
    } else {
      message.bootstrapEvent = 0;
    }
    return message;
  },
};

const baseStreamSeq: object = { shardId: "", val: "" };

export const StreamSeq = {
  encode(
    message: StreamSeq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.shardId !== "") {
      writer.uint32(10).string(message.shardId);
    }
    if (message.val !== "") {
      writer.uint32(18).string(message.val);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamSeq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamSeq } as StreamSeq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shardId = reader.string();
          break;
        case 2:
          message.val = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<StreamSeq>): StreamSeq {
    const message = { ...baseStreamSeq } as StreamSeq;
    if (object.shardId !== undefined && object.shardId !== null) {
      message.shardId = object.shardId;
    } else {
      message.shardId = "";
    }
    if (object.val !== undefined && object.val !== null) {
      message.val = object.val;
    } else {
      message.val = "";
    }
    return message;
  },
};

const baseStreamEvent: object = { op: 0 };

export const StreamEvent = {
  encode(
    message: StreamEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.op !== 0) {
      writer.uint32(8).int32(message.op);
    }
    if (message.obj !== undefined) {
      StreamObj.encode(message.obj, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamEvent } as StreamEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.op = reader.int32() as any;
          break;
        case 2:
          message.obj = StreamObj.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<StreamEvent>): StreamEvent {
    const message = { ...baseStreamEvent } as StreamEvent;
    if (object.op !== undefined && object.op !== null) {
      message.op = object.op;
    } else {
      message.op = 0;
    }
    if (object.obj !== undefined && object.obj !== null) {
      message.obj = StreamObj.fromPartial(object.obj);
    } else {
      message.obj = undefined;
    }
    return message;
  },
};

const baseStreamObj: object = { createRevision: 0, modRevision: 0, version: 0 };

export const StreamObj = {
  encode(
    message: StreamObj,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.createRevision !== 0) {
      writer.uint32(8).int64(message.createRevision);
    }
    if (message.modRevision !== 0) {
      writer.uint32(16).int64(message.modRevision);
    }
    if (message.version !== 0) {
      writer.uint32(24).int64(message.version);
    }
    if (message.key.length !== 0) {
      writer.uint32(34).bytes(message.key);
    }
    if (message.account !== undefined) {
      Account.encode(message.account, writer.uint32(42).fork()).ldelim();
    }
    if (message.cred !== undefined) {
      Cred.encode(message.cred, writer.uint32(50).fork()).ldelim();
    }
    if (message.sshCred !== undefined) {
      SSHCred.encode(message.sshCred, writer.uint32(58).fork()).ldelim();
    }
    if (message.cert !== undefined) {
      CertKeyPair.encode(message.cert, writer.uint32(66).fork()).ldelim();
    }
    if (message.domain !== undefined) {
      Domain.encode(message.domain, writer.uint32(90).fork()).ldelim();
    }
    if (message.tcpAddr !== undefined) {
      TCPAddr.encode(message.tcpAddr, writer.uint32(98).fork()).ldelim();
    }
    if (message.endpointConfiguration !== undefined) {
      EndpointConfiguration.encode(
        message.endpointConfiguration,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.ipRestriction !== undefined) {
      IPRestriction.encode(
        message.ipRestriction,
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.eventStream !== undefined) {
      EventStream.encode(
        message.eventStream,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.eventDestination !== undefined) {
      EventDestination.encode(
        message.eventDestination,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.bannedAddr !== undefined) {
      BannedAddr.encode(message.bannedAddr, writer.uint32(186).fork()).ldelim();
    }
    if (message.globalFirewallRule !== undefined) {
      GlobalFirewallRule.encode(
        message.globalFirewallRule,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.ipPolicyRule !== undefined) {
      IPPolicyRule.encode(
        message.ipPolicyRule,
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.backend !== undefined) {
      Backend.encode(message.backend, writer.uint32(210).fork()).ldelim();
    }
    if (message.tunnel !== undefined) {
      Tunnel.encode(message.tunnel, writer.uint32(218).fork()).ldelim();
    }
    if (message.endpoint !== undefined) {
      Endpoint.encode(message.endpoint, writer.uint32(226).fork()).ldelim();
    }
    if (message.session !== undefined) {
      Session.encode(message.session, writer.uint32(234).fork()).ldelim();
    }
    if (message.edge !== undefined) {
      Edge.encode(message.edge, writer.uint32(242).fork()).ldelim();
    }
    if (message.eventSubscription !== undefined) {
      EventSubscription.encode(
        message.eventSubscription,
        writer.uint32(250).fork()
      ).ldelim();
    }
    if (message.agentIngress !== undefined) {
      AgentIngress.encode(
        message.agentIngress,
        writer.uint32(258).fork()
      ).ldelim();
    }
    if (message.banlistEntry !== undefined) {
      BanlistEntry.encode(
        message.banlistEntry,
        writer.uint32(266).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamObj {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamObj } as StreamObj;
    message.key = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.createRevision = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.modRevision = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.version = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.key = reader.bytes();
          break;
        case 5:
          message.account = Account.decode(reader, reader.uint32());
          break;
        case 6:
          message.cred = Cred.decode(reader, reader.uint32());
          break;
        case 7:
          message.sshCred = SSHCred.decode(reader, reader.uint32());
          break;
        case 8:
          message.cert = CertKeyPair.decode(reader, reader.uint32());
          break;
        case 11:
          message.domain = Domain.decode(reader, reader.uint32());
          break;
        case 12:
          message.tcpAddr = TCPAddr.decode(reader, reader.uint32());
          break;
        case 13:
          message.endpointConfiguration = EndpointConfiguration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 20:
          message.ipRestriction = IPRestriction.decode(reader, reader.uint32());
          break;
        case 21:
          message.eventStream = EventStream.decode(reader, reader.uint32());
          break;
        case 22:
          message.eventDestination = EventDestination.decode(
            reader,
            reader.uint32()
          );
          break;
        case 23:
          message.bannedAddr = BannedAddr.decode(reader, reader.uint32());
          break;
        case 24:
          message.globalFirewallRule = GlobalFirewallRule.decode(
            reader,
            reader.uint32()
          );
          break;
        case 25:
          message.ipPolicyRule = IPPolicyRule.decode(reader, reader.uint32());
          break;
        case 26:
          message.backend = Backend.decode(reader, reader.uint32());
          break;
        case 27:
          message.tunnel = Tunnel.decode(reader, reader.uint32());
          break;
        case 28:
          message.endpoint = Endpoint.decode(reader, reader.uint32());
          break;
        case 29:
          message.session = Session.decode(reader, reader.uint32());
          break;
        case 30:
          message.edge = Edge.decode(reader, reader.uint32());
          break;
        case 31:
          message.eventSubscription = EventSubscription.decode(
            reader,
            reader.uint32()
          );
          break;
        case 32:
          message.agentIngress = AgentIngress.decode(reader, reader.uint32());
          break;
        case 33:
          message.banlistEntry = BanlistEntry.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<StreamObj>): StreamObj {
    const message = { ...baseStreamObj } as StreamObj;
    if (object.createRevision !== undefined && object.createRevision !== null) {
      message.createRevision = object.createRevision;
    } else {
      message.createRevision = 0;
    }
    if (object.modRevision !== undefined && object.modRevision !== null) {
      message.modRevision = object.modRevision;
    } else {
      message.modRevision = 0;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = 0;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = new Uint8Array();
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = Account.fromPartial(object.account);
    } else {
      message.account = undefined;
    }
    if (object.cred !== undefined && object.cred !== null) {
      message.cred = Cred.fromPartial(object.cred);
    } else {
      message.cred = undefined;
    }
    if (object.sshCred !== undefined && object.sshCred !== null) {
      message.sshCred = SSHCred.fromPartial(object.sshCred);
    } else {
      message.sshCred = undefined;
    }
    if (object.cert !== undefined && object.cert !== null) {
      message.cert = CertKeyPair.fromPartial(object.cert);
    } else {
      message.cert = undefined;
    }
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = Domain.fromPartial(object.domain);
    } else {
      message.domain = undefined;
    }
    if (object.tcpAddr !== undefined && object.tcpAddr !== null) {
      message.tcpAddr = TCPAddr.fromPartial(object.tcpAddr);
    } else {
      message.tcpAddr = undefined;
    }
    if (
      object.endpointConfiguration !== undefined &&
      object.endpointConfiguration !== null
    ) {
      message.endpointConfiguration = EndpointConfiguration.fromPartial(
        object.endpointConfiguration
      );
    } else {
      message.endpointConfiguration = undefined;
    }
    if (object.ipRestriction !== undefined && object.ipRestriction !== null) {
      message.ipRestriction = IPRestriction.fromPartial(object.ipRestriction);
    } else {
      message.ipRestriction = undefined;
    }
    if (object.eventStream !== undefined && object.eventStream !== null) {
      message.eventStream = EventStream.fromPartial(object.eventStream);
    } else {
      message.eventStream = undefined;
    }
    if (
      object.eventDestination !== undefined &&
      object.eventDestination !== null
    ) {
      message.eventDestination = EventDestination.fromPartial(
        object.eventDestination
      );
    } else {
      message.eventDestination = undefined;
    }
    if (object.bannedAddr !== undefined && object.bannedAddr !== null) {
      message.bannedAddr = BannedAddr.fromPartial(object.bannedAddr);
    } else {
      message.bannedAddr = undefined;
    }
    if (
      object.globalFirewallRule !== undefined &&
      object.globalFirewallRule !== null
    ) {
      message.globalFirewallRule = GlobalFirewallRule.fromPartial(
        object.globalFirewallRule
      );
    } else {
      message.globalFirewallRule = undefined;
    }
    if (object.ipPolicyRule !== undefined && object.ipPolicyRule !== null) {
      message.ipPolicyRule = IPPolicyRule.fromPartial(object.ipPolicyRule);
    } else {
      message.ipPolicyRule = undefined;
    }
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = Backend.fromPartial(object.backend);
    } else {
      message.backend = undefined;
    }
    if (object.tunnel !== undefined && object.tunnel !== null) {
      message.tunnel = Tunnel.fromPartial(object.tunnel);
    } else {
      message.tunnel = undefined;
    }
    if (object.endpoint !== undefined && object.endpoint !== null) {
      message.endpoint = Endpoint.fromPartial(object.endpoint);
    } else {
      message.endpoint = undefined;
    }
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromPartial(object.session);
    } else {
      message.session = undefined;
    }
    if (object.edge !== undefined && object.edge !== null) {
      message.edge = Edge.fromPartial(object.edge);
    } else {
      message.edge = undefined;
    }
    if (
      object.eventSubscription !== undefined &&
      object.eventSubscription !== null
    ) {
      message.eventSubscription = EventSubscription.fromPartial(
        object.eventSubscription
      );
    } else {
      message.eventSubscription = undefined;
    }
    if (object.agentIngress !== undefined && object.agentIngress !== null) {
      message.agentIngress = AgentIngress.fromPartial(object.agentIngress);
    } else {
      message.agentIngress = undefined;
    }
    if (object.banlistEntry !== undefined && object.banlistEntry !== null) {
      message.banlistEntry = BanlistEntry.fromPartial(object.banlistEntry);
    } else {
      message.banlistEntry = undefined;
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
