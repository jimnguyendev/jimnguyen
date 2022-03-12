// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp, ID } from "../pb/types";
import { ManagedCertPolicy, ManagedCertPolicyStatus } from "../rpx/model";

export const protobufPackage = "rpx";

export interface Domain {
  sid: string;
  name: string;
  accountId: number;
  regionId: string;
  cnameTarget: string;
  createdAt: Timestamp | undefined;
  description: string;
  metadata: string;
  httpEndpointConfigurationId: ID | undefined;
  httpsEndpointConfigurationId: ID | undefined;
  id: ID | undefined;
  certId: ID | undefined;
  managedCertPolicyId: ID | undefined;
  managedCertPolicy: ManagedCertPolicy | undefined;
  managedCertPolicyStatus: ManagedCertPolicyStatus | undefined;
  challengeCname: string;
}

const baseDomain: object = {
  sid: "",
  name: "",
  accountId: 0,
  regionId: "",
  cnameTarget: "",
  description: "",
  metadata: "",
  challengeCname: "",
};

export const Domain = {
  encode(
    message: Domain,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sid !== "") {
      writer.uint32(18).string(message.sid);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.accountId !== 0) {
      writer.uint32(32).int64(message.accountId);
    }
    if (message.regionId !== "") {
      writer.uint32(42).string(message.regionId);
    }
    if (message.cnameTarget !== "") {
      writer.uint32(50).string(message.cnameTarget);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(66).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(74).string(message.description);
    }
    if (message.metadata !== "") {
      writer.uint32(82).string(message.metadata);
    }
    if (message.httpEndpointConfigurationId !== undefined) {
      ID.encode(
        message.httpEndpointConfigurationId,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.httpsEndpointConfigurationId !== undefined) {
      ID.encode(
        message.httpsEndpointConfigurationId,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(122).fork()).ldelim();
    }
    if (message.certId !== undefined) {
      ID.encode(message.certId, writer.uint32(98).fork()).ldelim();
    }
    if (message.managedCertPolicyId !== undefined) {
      ID.encode(
        message.managedCertPolicyId,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.managedCertPolicy !== undefined) {
      ManagedCertPolicy.encode(
        message.managedCertPolicy,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.managedCertPolicyStatus !== undefined) {
      ManagedCertPolicyStatus.encode(
        message.managedCertPolicyStatus,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.challengeCname !== "") {
      writer.uint32(154).string(message.challengeCname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Domain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDomain } as Domain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.sid = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.regionId = reader.string();
          break;
        case 6:
          message.cnameTarget = reader.string();
          break;
        case 8:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.description = reader.string();
          break;
        case 10:
          message.metadata = reader.string();
          break;
        case 14:
          message.httpEndpointConfigurationId = ID.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.httpsEndpointConfigurationId = ID.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 12:
          message.certId = ID.decode(reader, reader.uint32());
          break;
        case 13:
          message.managedCertPolicyId = ID.decode(reader, reader.uint32());
          break;
        case 17:
          message.managedCertPolicy = ManagedCertPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 18:
          message.managedCertPolicyStatus = ManagedCertPolicyStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 19:
          message.challengeCname = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Domain>): Domain {
    const message = { ...baseDomain } as Domain;
    if (object.sid !== undefined && object.sid !== null) {
      message.sid = object.sid;
    } else {
      message.sid = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.regionId !== undefined && object.regionId !== null) {
      message.regionId = object.regionId;
    } else {
      message.regionId = "";
    }
    if (object.cnameTarget !== undefined && object.cnameTarget !== null) {
      message.cnameTarget = object.cnameTarget;
    } else {
      message.cnameTarget = "";
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
    if (
      object.httpEndpointConfigurationId !== undefined &&
      object.httpEndpointConfigurationId !== null
    ) {
      message.httpEndpointConfigurationId = ID.fromPartial(
        object.httpEndpointConfigurationId
      );
    } else {
      message.httpEndpointConfigurationId = undefined;
    }
    if (
      object.httpsEndpointConfigurationId !== undefined &&
      object.httpsEndpointConfigurationId !== null
    ) {
      message.httpsEndpointConfigurationId = ID.fromPartial(
        object.httpsEndpointConfigurationId
      );
    } else {
      message.httpsEndpointConfigurationId = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.certId !== undefined && object.certId !== null) {
      message.certId = ID.fromPartial(object.certId);
    } else {
      message.certId = undefined;
    }
    if (
      object.managedCertPolicyId !== undefined &&
      object.managedCertPolicyId !== null
    ) {
      message.managedCertPolicyId = ID.fromPartial(object.managedCertPolicyId);
    } else {
      message.managedCertPolicyId = undefined;
    }
    if (
      object.managedCertPolicy !== undefined &&
      object.managedCertPolicy !== null
    ) {
      message.managedCertPolicy = ManagedCertPolicy.fromPartial(
        object.managedCertPolicy
      );
    } else {
      message.managedCertPolicy = undefined;
    }
    if (
      object.managedCertPolicyStatus !== undefined &&
      object.managedCertPolicyStatus !== null
    ) {
      message.managedCertPolicyStatus = ManagedCertPolicyStatus.fromPartial(
        object.managedCertPolicyStatus
      );
    } else {
      message.managedCertPolicyStatus = undefined;
    }
    if (object.challengeCname !== undefined && object.challengeCname !== null) {
      message.challengeCname = object.challengeCname;
    } else {
      message.challengeCname = "";
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
