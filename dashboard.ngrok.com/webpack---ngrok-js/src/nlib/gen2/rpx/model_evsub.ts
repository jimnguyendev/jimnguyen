// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ID, Timestamp } from "../pb/types";
import { EventField } from "../rpx/model_evstream";

export const protobufPackage = "rpx";

/**
 * EventKind is a completely internal concept. Each value corresponds to
 * exactly one location in our codebase where an event is emitted, and one
 * business object protobuf.
 *
 * A value here maps to zero or more EventVersion values. The zero case is so
 * we can emit events that are not available for public consumption. Those
 * events could later be made available by adding an EventVersion value.
 */
export enum EventKind {
  EVENT_KIND_UNDEFINED = 0,
  EVENT_KIND_IP_POLICY_CREATED = 1,
  EVENT_KIND_IP_POLICY_UPDATED = 2,
  EVENT_KIND_IP_POLICY_DELETED = 3,
  EVENT_KIND_IP_POLICY_RULE_CREATED = 4,
  EVENT_KIND_IP_POLICY_RULE_UPDATED = 5,
  EVENT_KIND_IP_POLICY_RULE_DELETED = 6,
  EVENT_KIND_IP_RESTRICTION_CREATED = 7,
  EVENT_KIND_IP_RESTRICTION_UPDATED = 8,
  EVENT_KIND_IP_RESTRICTION_DELETED = 9,
  EVENT_KIND_EVENT_SUBSCRIPTION_CREATED = 10,
  EVENT_KIND_EVENT_SUBSCRIPTION_UPDATED = 11,
  EVENT_KIND_EVENT_SUBSCRIPTION_DELETED = 12,
  EVENT_KIND_EVENT_DESTINATION_CREATED = 13,
  EVENT_KIND_EVENT_DESTINATION_UPDATED = 14,
  EVENT_KIND_EVENT_DESTINATION_DELETED = 15,
  EVENT_KIND_SSH_PUBLIC_KEY_CREATED = 16,
  EVENT_KIND_SSH_PUBLIC_KEY_UPDATED = 17,
  EVENT_KIND_SSH_PUBLIC_KEY_DELETED = 18,
  EVENT_KIND_API_KEY_CREATED = 19,
  EVENT_KIND_API_KEY_UPDATED = 20,
  EVENT_KIND_API_KEY_DELETED = 21,
  EVENT_KIND_TUNNEL_CREDENTIAL_CREATED = 22,
  EVENT_KIND_TUNNEL_CREDENTIAL_UPDATED = 23,
  EVENT_KIND_TUNNEL_CREDENTIAL_DELETED = 24,
  EVENT_KIND_TLS_CERTIFICATE_CREATED = 25,
  EVENT_KIND_TLS_CERTIFICATE_UPDATED = 26,
  EVENT_KIND_TLS_CERTIFICATE_DELETED = 27,
  EVENT_KIND_CERTIFICATE_AUTHORITY_CREATED = 28,
  EVENT_KIND_CERTIFICATE_AUTHORITY_UPDATED = 29,
  EVENT_KIND_CERTIFICATE_AUTHORITY_DELETED = 30,
  EVENT_KIND_SSH_CERTIFICATE_AUTHORITY_CREATED = 31,
  EVENT_KIND_SSH_CERTIFICATE_AUTHORITY_UPDATED = 32,
  EVENT_KIND_SSH_CERTIFICATE_AUTHORITY_DELETED = 33,
  EVENT_KIND_SSH_HOST_CERTIFICATE_CREATED = 34,
  EVENT_KIND_SSH_HOST_CERTIFICATE_UPDATED = 35,
  EVENT_KIND_SSH_HOST_CERTIFICATE_DELETED = 36,
  EVENT_KIND_SSH_USER_CERTIFICATE_CREATED = 37,
  EVENT_KIND_SSH_USER_CERTIFICATE_UPDATED = 38,
  EVENT_KIND_SSH_USER_CERTIFICATE_DELETED = 39,
  EVENT_KIND_TCP_ADDRESS_CREATED = 40,
  EVENT_KIND_TCP_ADDRESS_UPDATED = 41,
  EVENT_KIND_TCP_ADDRESS_DELETED = 42,
  EVENT_KIND_DOMAIN_CREATED = 43,
  EVENT_KIND_DOMAIN_UPDATED = 44,
  EVENT_KIND_DOMAIN_DELETED = 45,
  EVENT_KIND_HTTP_REQUEST_COMPLETE = 46,
  EVENT_KIND_TCP_CONNECTION_CLOSED = 47,
}

/**
 * EventTypeV1 is the public-facing event type. Each value maps to exactly
 * one EventKind value.
 */
export enum EventTypeV1 {
  EVENT_TYPE_UNDEFINED = 0,
  EVENT_TYPE_IP_POLICY_CREATED_V0 = 4,
  EVENT_TYPE_IP_POLICY_UPDATED_V0 = 5,
  EVENT_TYPE_IP_POLICY_DELETED_V0 = 6,
  EVENT_TYPE_IP_POLICY_RULE_CREATED_V0 = 7,
  EVENT_TYPE_IP_POLICY_RULE_UPDATED_V0 = 8,
  EVENT_TYPE_IP_POLICY_RULE_DELETED_V0 = 9,
  EVENT_TYPE_IP_RESTRICTION_CREATED_V0 = 10,
  EVENT_TYPE_IP_RESTRICTION_UPDATED_V0 = 11,
  EVENT_TYPE_IP_RESTRICTION_DELETED_V0 = 12,
  EVENT_TYPE_EVENT_SUBSCRIPTION_CREATED_V0 = 13,
  EVENT_TYPE_EVENT_SUBSCRIPTION_UPDATED_V0 = 14,
  EVENT_TYPE_EVENT_SUBSCRIPTION_DELETED_V0 = 15,
  EVENT_TYPE_EVENT_DESTINATION_CREATED_V0 = 16,
  EVENT_TYPE_EVENT_DESTINATION_UPDATED_V0 = 17,
  EVENT_TYPE_EVENT_DESTINATION_DELETED_V0 = 18,
  EVENT_TYPE_SSH_PUBLIC_KEY_CREATED_V0 = 19,
  EVENT_TYPE_SSH_PUBLIC_KEY_UPDATED_V0 = 20,
  EVENT_TYPE_SSH_PUBLIC_KEY_DELETED_V0 = 21,
  EVENT_TYPE_API_KEY_CREATED_V0 = 22,
  EVENT_TYPE_API_KEY_UPDATED_V0 = 23,
  EVENT_TYPE_API_KEY_DELETED_V0 = 24,
  EVENT_TYPE_TUNNEL_CREDENTIAL_CREATED_V0 = 25,
  EVENT_TYPE_TUNNEL_CREDENTIAL_UPDATED_V0 = 26,
  EVENT_TYPE_TUNNEL_CREDENTIAL_DELETED_V0 = 27,
  EVENT_TYPE_TLS_CERTIFICATE_CREATED_V0 = 28,
  EVENT_TYPE_TLS_CERTIFICATE_UPDATED_V0 = 29,
  EVENT_TYPE_TLS_CERTIFICATE_DELETED_V0 = 30,
  EVENT_TYPE_CERTIFICATE_AUTHORITY_CREATED_V0 = 31,
  EVENT_TYPE_CERTIFICATE_AUTHORITY_UPDATED_V0 = 32,
  EVENT_TYPE_CERTIFICATE_AUTHORITY_DELETED_V0 = 33,
  EVENT_TYPE_SSH_CERTIFICATE_AUTHORITY_CREATED_V0 = 34,
  EVENT_TYPE_SSH_CERTIFICATE_AUTHORITY_UPDATED_V0 = 35,
  EVENT_TYPE_SSH_CERTIFICATE_AUTHORITY_DELETED_V0 = 36,
  EVENT_TYPE_SSH_HOST_CERTIFICATE_CREATED_V0 = 37,
  EVENT_TYPE_SSH_HOST_CERTIFICATE_UPDATED_V0 = 38,
  EVENT_TYPE_SSH_HOST_CERTIFICATE_DELETED_V0 = 39,
  EVENT_TYPE_SSH_USER_CERTIFICATE_CREATED_V0 = 40,
  EVENT_TYPE_SSH_USER_CERTIFICATE_UPDATED_V0 = 41,
  EVENT_TYPE_SSH_USER_CERTIFICATE_DELETED_V0 = 42,
  EVENT_TYPE_TCP_ADDRESS_CREATED_V0 = 43,
  EVENT_TYPE_TCP_ADDRESS_UPDATED_V0 = 44,
  EVENT_TYPE_TCP_ADDRESS_DELETED_V0 = 45,
  EVENT_TYPE_DOMAIN_CREATED_V0 = 46,
  EVENT_TYPE_DOMAIN_UPDATED_V0 = 47,
  EVENT_TYPE_DOMAIN_DELETED_V0 = 48,
  EVENT_TYPE_HTTP_REQUEST_COMPLETE_V0 = 49,
  EVENT_TYPE_TCP_CONNECTION_CLOSED_V0 = 50,
}

/**
 * SubscriptionEvent persists in Kafka and thus should never be changed in a
 * backwards-incompatible way. It will always be in binary-form, so it will be
 * safe to rename things if necessary.
 */
export interface SubscriptionEvent {
  id: ID | undefined;
  accountId: ID | undefined;
  legacyAccountId: number;
  kind: EventKind;
  object: Uint8Array;
  /**
   * For events coming from mux, this will be populated with a list of
   * subscriptions that the event pertains to.
   */
  eventSubscriptions: EventSubscription[];
}

export interface EventSubscription {
  id: ID | undefined;
  /** Note: not populated in the middleware handler or dataplane kafka event. */
  accountId: ID | undefined;
  /** Note: not populated in the middleware handler or dataplane kafka event. */
  createdAt: Timestamp | undefined;
  /** Note: not populated in the middleware handler or dataplane kafka event. */
  metadata: string;
  /** Note: not populated in the middleware handler or dataplane kafka event. */
  description: string;
  eventSources: EventSource[];
  eventDestinationIds: ID[];
  /** Note: not populated in the middleware handler or dataplane kafka event. */
  legacyAccountId: number;
}

export interface EventSource {
  /**
   * Note: This field could be unset when a subscription ID is implied by a
   * surrounding message. Will not be populated in the middleware handler or
   * dataplane kafka event.
   */
  eventSubscriptionId: ID | undefined;
  eventType: EventTypeV1;
  /**
   * Note: This field could be unset when a created timestamp would otherwise be
   * ignored, such as a create or update nested under a subscription. Will not
   * be populated in the middleware handler or dataplane kafka event.
   */
  createdAt: Timestamp | undefined;
  /**
   * This is not yet supported. Will not be populated in the dataplane kafka
   * event.
   */
  filter: string;
  /** This is not yet supported. */
  fields: EventField[];
}

const baseSubscriptionEvent: object = { legacyAccountId: 0, kind: 0 };

export const SubscriptionEvent = {
  encode(
    message: SubscriptionEvent,
    writer: _m0.Writer = _m0.Writer.create()
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
    if (message.kind !== 0) {
      writer.uint32(32).int32(message.kind);
    }
    if (message.object.length !== 0) {
      writer.uint32(42).bytes(message.object);
    }
    for (const v of message.eventSubscriptions) {
      EventSubscription.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscriptionEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSubscriptionEvent } as SubscriptionEvent;
    message.eventSubscriptions = [];
    message.object = new Uint8Array();
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
          message.kind = reader.int32() as any;
          break;
        case 5:
          message.object = reader.bytes();
          break;
        case 6:
          message.eventSubscriptions.push(
            EventSubscription.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<SubscriptionEvent>): SubscriptionEvent {
    const message = { ...baseSubscriptionEvent } as SubscriptionEvent;
    message.eventSubscriptions = [];
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
    if (
      object.legacyAccountId !== undefined &&
      object.legacyAccountId !== null
    ) {
      message.legacyAccountId = object.legacyAccountId;
    } else {
      message.legacyAccountId = 0;
    }
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    } else {
      message.kind = 0;
    }
    if (object.object !== undefined && object.object !== null) {
      message.object = object.object;
    } else {
      message.object = new Uint8Array();
    }
    if (
      object.eventSubscriptions !== undefined &&
      object.eventSubscriptions !== null
    ) {
      for (const e of object.eventSubscriptions) {
        message.eventSubscriptions.push(EventSubscription.fromPartial(e));
      }
    }
    return message;
  },
};

const baseEventSubscription: object = {
  metadata: "",
  description: "",
  legacyAccountId: 0,
};

export const EventSubscription = {
  encode(
    message: EventSubscription,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(18).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(26).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    for (const v of message.eventSources) {
      EventSource.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.eventDestinationIds) {
      ID.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.legacyAccountId !== 0) {
      writer.uint32(64).int64(message.legacyAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventSubscription } as EventSubscription;
    message.eventSources = [];
    message.eventDestinationIds = [];
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
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.eventSources.push(
            EventSource.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.eventDestinationIds.push(ID.decode(reader, reader.uint32()));
          break;
        case 8:
          message.legacyAccountId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EventSubscription>): EventSubscription {
    const message = { ...baseEventSubscription } as EventSubscription;
    message.eventSources = [];
    message.eventDestinationIds = [];
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
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.eventSources !== undefined && object.eventSources !== null) {
      for (const e of object.eventSources) {
        message.eventSources.push(EventSource.fromPartial(e));
      }
    }
    if (
      object.eventDestinationIds !== undefined &&
      object.eventDestinationIds !== null
    ) {
      for (const e of object.eventDestinationIds) {
        message.eventDestinationIds.push(ID.fromPartial(e));
      }
    }
    if (
      object.legacyAccountId !== undefined &&
      object.legacyAccountId !== null
    ) {
      message.legacyAccountId = object.legacyAccountId;
    } else {
      message.legacyAccountId = 0;
    }
    return message;
  },
};

const baseEventSource: object = { eventType: 0, filter: "", fields: 0 };

export const EventSource = {
  encode(
    message: EventSource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.eventSubscriptionId !== undefined) {
      ID.encode(message.eventSubscriptionId, writer.uint32(10).fork()).ldelim();
    }
    if (message.eventType !== 0) {
      writer.uint32(16).int32(message.eventType);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(26).fork()).ldelim();
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    writer.uint32(42).fork();
    for (const v of message.fields) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventSource } as EventSource;
    message.fields = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventSubscriptionId = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.eventType = reader.int32() as any;
          break;
        case 3:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.filter = reader.string();
          break;
        case 5:
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

  fromPartial(object: DeepPartial<EventSource>): EventSource {
    const message = { ...baseEventSource } as EventSource;
    message.fields = [];
    if (
      object.eventSubscriptionId !== undefined &&
      object.eventSubscriptionId !== null
    ) {
      message.eventSubscriptionId = ID.fromPartial(object.eventSubscriptionId);
    } else {
      message.eventSubscriptionId = undefined;
    }
    if (object.eventType !== undefined && object.eventType !== null) {
      message.eventType = object.eventType;
    } else {
      message.eventType = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = object.filter;
    } else {
      message.filter = "";
    }
    if (object.fields !== undefined && object.fields !== null) {
      for (const e of object.fields) {
        message.fields.push(e);
      }
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
