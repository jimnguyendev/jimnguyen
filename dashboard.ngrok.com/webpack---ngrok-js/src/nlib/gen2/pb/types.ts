// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "pb";

export interface Timestamp {
  /**
   * Represents seconds of UTC time since Unix epoch
   * 1970-01-01T00:00:00Z. Must be from from 0001-01-01T00:00:00Z to
   * 9999-12-31T23:59:59Z inclusive.
   */
  seconds: number;
  /**
   * Non-negative fractions of a second at nanosecond resolution. Negative
   * second values with fractions must still have non-negative nanos values
   * that count forward in time. Must be from 0 to 999,999,999
   * inclusive.
   */
  nanos: number;
}

export interface Duration {
  nanos: number;
}

/**
 * Empty is only used as a message for rpc calls that
 * return no data.
 */
export interface Empty {}

/**
 * An optional string value used for RPCs that update a record.
 * If the Optional is undefined, the updating code will not change
 * the field.
 */
export interface OptString {
  /** should be private, but conflicts with field tags */
  val: string;
}

export interface OptBytes {
  val: Uint8Array;
}

export interface OptInt32 {
  val: number;
}

export interface OptInt64 {
  val: number;
}

export interface OptUint32 {
  val: number;
}

export interface OptUint64 {
  val: number;
}

export interface OptBool {
  val: boolean;
}

export interface OptDouble {
  val: number;
}

export interface OptRepeatedString {
  items: string[];
}

export interface OptMapStrStr {
  val: { [key: string]: string };
}

export interface OptMapStrStr_ValEntry {
  key: string;
  value: string;
}

export interface CIDR {
  ip: Uint8Array;
  mask: Uint8Array;
}

export interface ID {
  /**
   * id is a ksuid-based ID with a prefix.
   * It always comes in the form 'prefix_ksuid' with the ksuid encoded as a
   * string.
   */
  id: string;
}

export interface Headers {
  headers: { [key: string]: HeaderValues };
}

export interface Headers_HeadersEntry {
  key: string;
  value: HeaderValues | undefined;
}

export interface HeaderValues {
  items: string[];
}

export interface TimeRange {
  start: Timestamp | undefined;
  end: Timestamp | undefined;
}

const baseTimestamp: object = { seconds: 0, nanos: 0 };

export const Timestamp = {
  encode(
    message: Timestamp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.seconds !== 0) {
      writer.uint32(8).int64(message.seconds);
    }
    if (message.nanos !== 0) {
      writer.uint32(16).int64(message.nanos);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Timestamp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTimestamp } as Timestamp;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seconds = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.nanos = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Timestamp>): Timestamp {
    const message = { ...baseTimestamp } as Timestamp;
    if (object.seconds !== undefined && object.seconds !== null) {
      message.seconds = object.seconds;
    } else {
      message.seconds = 0;
    }
    if (object.nanos !== undefined && object.nanos !== null) {
      message.nanos = object.nanos;
    } else {
      message.nanos = 0;
    }
    return message;
  },
};

const baseDuration: object = { nanos: 0 };

export const Duration = {
  encode(
    message: Duration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nanos !== 0) {
      writer.uint32(8).int64(message.nanos);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Duration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDuration } as Duration;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nanos = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Duration>): Duration {
    const message = { ...baseDuration } as Duration;
    if (object.nanos !== undefined && object.nanos !== null) {
      message.nanos = object.nanos;
    } else {
      message.nanos = 0;
    }
    return message;
  },
};

const baseEmpty: object = {};

export const Empty = {
  encode(_: Empty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Empty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEmpty } as Empty;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(_: DeepPartial<Empty>): Empty {
    const message = { ...baseEmpty } as Empty;
    return message;
  },
};

const baseOptString: object = { val: "" };

export const OptString = {
  encode(
    message: OptString,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.val !== "") {
      writer.uint32(10).string(message.val);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptString {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOptString } as OptString;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.val = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<OptString>): OptString {
    const message = { ...baseOptString } as OptString;
    if (object.val !== undefined && object.val !== null) {
      message.val = object.val;
    } else {
      message.val = "";
    }
    return message;
  },
};

const baseOptBytes: object = {};

export const OptBytes = {
  encode(
    message: OptBytes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptBytes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOptBytes } as OptBytes;
    message.val = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.val = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<OptBytes>): OptBytes {
    const message = { ...baseOptBytes } as OptBytes;
    if (object.val !== undefined && object.val !== null) {
      message.val = object.val;
    } else {
      message.val = new Uint8Array();
    }
    return message;
  },
};

const baseOptInt32: object = { val: 0 };

export const OptInt32 = {
  encode(
    message: OptInt32,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.val !== 0) {
      writer.uint32(8).int32(message.val);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptInt32 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOptInt32 } as OptInt32;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.val = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<OptInt32>): OptInt32 {
    const message = { ...baseOptInt32 } as OptInt32;
    if (object.val !== undefined && object.val !== null) {
      message.val = object.val;
    } else {
      message.val = 0;
    }
    return message;
  },
};

const baseOptInt64: object = { val: 0 };

export const OptInt64 = {
  encode(
    message: OptInt64,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.val !== 0) {
      writer.uint32(8).int64(message.val);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptInt64 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOptInt64 } as OptInt64;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.val = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<OptInt64>): OptInt64 {
    const message = { ...baseOptInt64 } as OptInt64;
    if (object.val !== undefined && object.val !== null) {
      message.val = object.val;
    } else {
      message.val = 0;
    }
    return message;
  },
};

const baseOptUint32: object = { val: 0 };

export const OptUint32 = {
  encode(
    message: OptUint32,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.val !== 0) {
      writer.uint32(8).uint32(message.val);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptUint32 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOptUint32 } as OptUint32;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.val = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<OptUint32>): OptUint32 {
    const message = { ...baseOptUint32 } as OptUint32;
    if (object.val !== undefined && object.val !== null) {
      message.val = object.val;
    } else {
      message.val = 0;
    }
    return message;
  },
};

const baseOptUint64: object = { val: 0 };

export const OptUint64 = {
  encode(
    message: OptUint64,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.val !== 0) {
      writer.uint32(8).uint64(message.val);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptUint64 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOptUint64 } as OptUint64;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.val = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<OptUint64>): OptUint64 {
    const message = { ...baseOptUint64 } as OptUint64;
    if (object.val !== undefined && object.val !== null) {
      message.val = object.val;
    } else {
      message.val = 0;
    }
    return message;
  },
};

const baseOptBool: object = { val: false };

export const OptBool = {
  encode(
    message: OptBool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.val === true) {
      writer.uint32(8).bool(message.val);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptBool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOptBool } as OptBool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.val = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<OptBool>): OptBool {
    const message = { ...baseOptBool } as OptBool;
    if (object.val !== undefined && object.val !== null) {
      message.val = object.val;
    } else {
      message.val = false;
    }
    return message;
  },
};

const baseOptDouble: object = { val: 0 };

export const OptDouble = {
  encode(
    message: OptDouble,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.val !== 0) {
      writer.uint32(9).double(message.val);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptDouble {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOptDouble } as OptDouble;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.val = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<OptDouble>): OptDouble {
    const message = { ...baseOptDouble } as OptDouble;
    if (object.val !== undefined && object.val !== null) {
      message.val = object.val;
    } else {
      message.val = 0;
    }
    return message;
  },
};

const baseOptRepeatedString: object = { items: "" };

export const OptRepeatedString = {
  encode(
    message: OptRepeatedString,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptRepeatedString {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOptRepeatedString } as OptRepeatedString;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<OptRepeatedString>): OptRepeatedString {
    const message = { ...baseOptRepeatedString } as OptRepeatedString;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(e);
      }
    }
    return message;
  },
};

const baseOptMapStrStr: object = {};

export const OptMapStrStr = {
  encode(
    message: OptMapStrStr,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.val).forEach(([key, value]) => {
      OptMapStrStr_ValEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptMapStrStr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOptMapStrStr } as OptMapStrStr;
    message.val = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = OptMapStrStr_ValEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.val[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<OptMapStrStr>): OptMapStrStr {
    const message = { ...baseOptMapStrStr } as OptMapStrStr;
    message.val = {};
    if (object.val !== undefined && object.val !== null) {
      Object.entries(object.val).forEach(([key, value]) => {
        if (value !== undefined) {
          message.val[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseOptMapStrStr_ValEntry: object = { key: "", value: "" };

export const OptMapStrStr_ValEntry = {
  encode(
    message: OptMapStrStr_ValEntry,
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
  ): OptMapStrStr_ValEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOptMapStrStr_ValEntry } as OptMapStrStr_ValEntry;
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
    object: DeepPartial<OptMapStrStr_ValEntry>
  ): OptMapStrStr_ValEntry {
    const message = { ...baseOptMapStrStr_ValEntry } as OptMapStrStr_ValEntry;
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

const baseCIDR: object = {};

export const CIDR = {
  encode(message: CIDR, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip.length !== 0) {
      writer.uint32(10).bytes(message.ip);
    }
    if (message.mask.length !== 0) {
      writer.uint32(18).bytes(message.mask);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CIDR {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCIDR } as CIDR;
    message.ip = new Uint8Array();
    message.mask = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ip = reader.bytes();
          break;
        case 2:
          message.mask = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CIDR>): CIDR {
    const message = { ...baseCIDR } as CIDR;
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = object.ip;
    } else {
      message.ip = new Uint8Array();
    }
    if (object.mask !== undefined && object.mask !== null) {
      message.mask = object.mask;
    } else {
      message.mask = new Uint8Array();
    }
    return message;
  },
};

const baseID: object = { id: "" };

export const ID = {
  encode(message: ID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseID } as ID;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<ID>): ID {
    const message = { ...baseID } as ID;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseHeaders: object = {};

export const Headers = {
  encode(
    message: Headers,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.headers).forEach(([key, value]) => {
      Headers_HeadersEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Headers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHeaders } as Headers;
    message.headers = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Headers_HeadersEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.headers[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Headers>): Headers {
    const message = { ...baseHeaders } as Headers;
    message.headers = {};
    if (object.headers !== undefined && object.headers !== null) {
      Object.entries(object.headers).forEach(([key, value]) => {
        if (value !== undefined) {
          message.headers[key] = HeaderValues.fromPartial(value);
        }
      });
    }
    return message;
  },
};

const baseHeaders_HeadersEntry: object = { key: "" };

export const Headers_HeadersEntry = {
  encode(
    message: Headers_HeadersEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      HeaderValues.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Headers_HeadersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHeaders_HeadersEntry } as Headers_HeadersEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = HeaderValues.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<Headers_HeadersEntry>): Headers_HeadersEntry {
    const message = { ...baseHeaders_HeadersEntry } as Headers_HeadersEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = HeaderValues.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseHeaderValues: object = { items: "" };

export const HeaderValues = {
  encode(
    message: HeaderValues,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeaderValues {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHeaderValues } as HeaderValues;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<HeaderValues>): HeaderValues {
    const message = { ...baseHeaderValues } as HeaderValues;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(e);
      }
    }
    return message;
  },
};

const baseTimeRange: object = {};

export const TimeRange = {
  encode(
    message: TimeRange,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.start !== undefined) {
      Timestamp.encode(message.start, writer.uint32(10).fork()).ldelim();
    }
    if (message.end !== undefined) {
      Timestamp.encode(message.end, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimeRange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTimeRange } as TimeRange;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.end = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<TimeRange>): TimeRange {
    const message = { ...baseTimeRange } as TimeRange;
    if (object.start !== undefined && object.start !== null) {
      message.start = Timestamp.fromPartial(object.start);
    } else {
      message.start = undefined;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = Timestamp.fromPartial(object.end);
    } else {
      message.end = undefined;
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
