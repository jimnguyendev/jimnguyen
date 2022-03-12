// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "rpx";

export interface AppDomData {
  csrfToken: string;
  releaseVersion: string;
  webHostname: string;
  dashHostname: string;
  recaptchaSiteKey: string;
  federatedIdpHostname: string;
  stripePublicKey: string;
}

const baseAppDomData: object = {
  csrfToken: "",
  releaseVersion: "",
  webHostname: "",
  dashHostname: "",
  recaptchaSiteKey: "",
  federatedIdpHostname: "",
  stripePublicKey: "",
};

export const AppDomData = {
  encode(
    message: AppDomData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.csrfToken !== "") {
      writer.uint32(10).string(message.csrfToken);
    }
    if (message.releaseVersion !== "") {
      writer.uint32(18).string(message.releaseVersion);
    }
    if (message.webHostname !== "") {
      writer.uint32(26).string(message.webHostname);
    }
    if (message.dashHostname !== "") {
      writer.uint32(34).string(message.dashHostname);
    }
    if (message.recaptchaSiteKey !== "") {
      writer.uint32(42).string(message.recaptchaSiteKey);
    }
    if (message.federatedIdpHostname !== "") {
      writer.uint32(50).string(message.federatedIdpHostname);
    }
    if (message.stripePublicKey !== "") {
      writer.uint32(58).string(message.stripePublicKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppDomData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAppDomData } as AppDomData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.csrfToken = reader.string();
          break;
        case 2:
          message.releaseVersion = reader.string();
          break;
        case 3:
          message.webHostname = reader.string();
          break;
        case 4:
          message.dashHostname = reader.string();
          break;
        case 5:
          message.recaptchaSiteKey = reader.string();
          break;
        case 6:
          message.federatedIdpHostname = reader.string();
          break;
        case 7:
          message.stripePublicKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<AppDomData>): AppDomData {
    const message = { ...baseAppDomData } as AppDomData;
    if (object.csrfToken !== undefined && object.csrfToken !== null) {
      message.csrfToken = object.csrfToken;
    } else {
      message.csrfToken = "";
    }
    if (object.releaseVersion !== undefined && object.releaseVersion !== null) {
      message.releaseVersion = object.releaseVersion;
    } else {
      message.releaseVersion = "";
    }
    if (object.webHostname !== undefined && object.webHostname !== null) {
      message.webHostname = object.webHostname;
    } else {
      message.webHostname = "";
    }
    if (object.dashHostname !== undefined && object.dashHostname !== null) {
      message.dashHostname = object.dashHostname;
    } else {
      message.dashHostname = "";
    }
    if (
      object.recaptchaSiteKey !== undefined &&
      object.recaptchaSiteKey !== null
    ) {
      message.recaptchaSiteKey = object.recaptchaSiteKey;
    } else {
      message.recaptchaSiteKey = "";
    }
    if (
      object.federatedIdpHostname !== undefined &&
      object.federatedIdpHostname !== null
    ) {
      message.federatedIdpHostname = object.federatedIdpHostname;
    } else {
      message.federatedIdpHostname = "";
    }
    if (
      object.stripePublicKey !== undefined &&
      object.stripePublicKey !== null
    ) {
      message.stripePublicKey = object.stripePublicKey;
    } else {
      message.stripePublicKey = "";
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
