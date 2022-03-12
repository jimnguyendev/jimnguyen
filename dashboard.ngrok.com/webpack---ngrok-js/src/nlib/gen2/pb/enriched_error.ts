// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "pb";

/**
 * An EnrichedError encapsulates rich metadata details about
 * an error that has occurred.
 *
 * If `internal` is false, this error is user-facing and the message
 * should be displayed to the end-user. otherwise the any edge service
 * should only show 'internal server error' to the user.
 *
 * This type is only used for the wire representation. Inside of our
 * Go code we use the ee.EnrichedError type and convert it to/from
 * this type when transmitting over the network.
 *
 * We have implemented Go interceptors which transparently
 * serialize/deserialize an enriched erro across RPC calls so that
 * you may return an ee.EnrichedError error and the client caller
 * will receive the same type as the error. The interceptors accomplish
 * this by serializing all values using the additional Details of a
 * grpc status.
 */
export interface EnrichedError {
  message: string;
  legacyNumberCode: number;
  context: EnrichedError_Context[];
  internal: boolean;
  grpcStatusCode: number;
  httpStatusCode: number;
  stack: EnrichedError_StackFrame[];
  code: string;
}

export interface EnrichedError_Context {
  method: string;
  stackTrace: string[];
}

export interface EnrichedError_StackFrame {
  module: string;
  package: string;
  function: string;
  file: string;
  line: number;
}

const baseEnrichedError: object = {
  message: "",
  legacyNumberCode: 0,
  internal: false,
  grpcStatusCode: 0,
  httpStatusCode: 0,
  code: "",
};

export const EnrichedError = {
  encode(
    message: EnrichedError,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.legacyNumberCode !== 0) {
      writer.uint32(16).int64(message.legacyNumberCode);
    }
    for (const v of message.context) {
      EnrichedError_Context.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.internal === true) {
      writer.uint32(32).bool(message.internal);
    }
    if (message.grpcStatusCode !== 0) {
      writer.uint32(40).uint32(message.grpcStatusCode);
    }
    if (message.httpStatusCode !== 0) {
      writer.uint32(48).uint32(message.httpStatusCode);
    }
    for (const v of message.stack) {
      EnrichedError_StackFrame.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.code !== "") {
      writer.uint32(66).string(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnrichedError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEnrichedError } as EnrichedError;
    message.context = [];
    message.stack = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.legacyNumberCode = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.context.push(
            EnrichedError_Context.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.internal = reader.bool();
          break;
        case 5:
          message.grpcStatusCode = reader.uint32();
          break;
        case 6:
          message.httpStatusCode = reader.uint32();
          break;
        case 7:
          message.stack.push(
            EnrichedError_StackFrame.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.code = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EnrichedError>): EnrichedError {
    const message = { ...baseEnrichedError } as EnrichedError;
    message.context = [];
    message.stack = [];
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    if (
      object.legacyNumberCode !== undefined &&
      object.legacyNumberCode !== null
    ) {
      message.legacyNumberCode = object.legacyNumberCode;
    } else {
      message.legacyNumberCode = 0;
    }
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(EnrichedError_Context.fromPartial(e));
      }
    }
    if (object.internal !== undefined && object.internal !== null) {
      message.internal = object.internal;
    } else {
      message.internal = false;
    }
    if (object.grpcStatusCode !== undefined && object.grpcStatusCode !== null) {
      message.grpcStatusCode = object.grpcStatusCode;
    } else {
      message.grpcStatusCode = 0;
    }
    if (object.httpStatusCode !== undefined && object.httpStatusCode !== null) {
      message.httpStatusCode = object.httpStatusCode;
    } else {
      message.httpStatusCode = 0;
    }
    if (object.stack !== undefined && object.stack !== null) {
      for (const e of object.stack) {
        message.stack.push(EnrichedError_StackFrame.fromPartial(e));
      }
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    return message;
  },
};

const baseEnrichedError_Context: object = { method: "", stackTrace: "" };

export const EnrichedError_Context = {
  encode(
    message: EnrichedError_Context,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.method !== "") {
      writer.uint32(10).string(message.method);
    }
    for (const v of message.stackTrace) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EnrichedError_Context {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEnrichedError_Context } as EnrichedError_Context;
    message.stackTrace = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.method = reader.string();
          break;
        case 2:
          message.stackTrace.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<EnrichedError_Context>
  ): EnrichedError_Context {
    const message = { ...baseEnrichedError_Context } as EnrichedError_Context;
    message.stackTrace = [];
    if (object.method !== undefined && object.method !== null) {
      message.method = object.method;
    } else {
      message.method = "";
    }
    if (object.stackTrace !== undefined && object.stackTrace !== null) {
      for (const e of object.stackTrace) {
        message.stackTrace.push(e);
      }
    }
    return message;
  },
};

const baseEnrichedError_StackFrame: object = {
  module: "",
  package: "",
  function: "",
  file: "",
  line: 0,
};

export const EnrichedError_StackFrame = {
  encode(
    message: EnrichedError_StackFrame,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.package !== "") {
      writer.uint32(18).string(message.package);
    }
    if (message.function !== "") {
      writer.uint32(26).string(message.function);
    }
    if (message.file !== "") {
      writer.uint32(34).string(message.file);
    }
    if (message.line !== 0) {
      writer.uint32(40).uint32(message.line);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EnrichedError_StackFrame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEnrichedError_StackFrame,
    } as EnrichedError_StackFrame;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.package = reader.string();
          break;
        case 3:
          message.function = reader.string();
          break;
        case 4:
          message.file = reader.string();
          break;
        case 5:
          message.line = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<EnrichedError_StackFrame>
  ): EnrichedError_StackFrame {
    const message = {
      ...baseEnrichedError_StackFrame,
    } as EnrichedError_StackFrame;
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    } else {
      message.module = "";
    }
    if (object.package !== undefined && object.package !== null) {
      message.package = object.package;
    } else {
      message.package = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    } else {
      message.function = "";
    }
    if (object.file !== undefined && object.file !== null) {
      message.file = object.file;
    } else {
      message.file = "";
    }
    if (object.line !== undefined && object.line !== null) {
      message.line = object.line;
    } else {
      message.line = 0;
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
