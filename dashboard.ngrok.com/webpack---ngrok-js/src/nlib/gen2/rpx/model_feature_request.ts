// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ID, Timestamp } from "../pb/types";

export const protobufPackage = "rpx";

/**
 * Represents a user-submitted feature request for a particular feature in the
 * product.
 */
export interface FeatureRequest {
  /** unique id of this feature request */
  id: ID | undefined;
  /** ID of the user who made this feature request */
  userId: ID | undefined;
  /** ID of the account which made this feature request */
  accountId: ID | undefined;
  /** the feature this feature request was submitted for */
  feature: FeatureRequest_Feature;
  /** freeform text of the feature suggestion */
  request: string;
  /** time when the feature request was submitted */
  createdAt: Timestamp | undefined;
}

/** product features that support feature requests */
export enum FeatureRequest_Feature {
  Undefined = 0,
  OAuthProvider = 1,
  WebhookValidationProvider = 2,
  EventDestination = 3,
}

const baseFeatureRequest: object = { feature: 0, request: "" };

export const FeatureRequest = {
  encode(
    message: FeatureRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(18).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(26).fork()).ldelim();
    }
    if (message.feature !== 0) {
      writer.uint32(32).int32(message.feature);
    }
    if (message.request !== "") {
      writer.uint32(42).string(message.request);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeatureRequest } as FeatureRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        case 4:
          message.feature = reader.int32() as any;
          break;
        case 5:
          message.request = reader.string();
          break;
        case 6:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<FeatureRequest>): FeatureRequest {
    const message = { ...baseFeatureRequest } as FeatureRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    if (object.feature !== undefined && object.feature !== null) {
      message.feature = object.feature;
    } else {
      message.feature = 0;
    }
    if (object.request !== undefined && object.request !== null) {
      message.request = object.request;
    } else {
      message.request = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Timestamp.fromPartial(object.createdAt);
    } else {
      message.createdAt = undefined;
    }
    return message;
  },
};

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
