// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "rpx";

export interface EventLogConsumeReq {
  start: EventLogConsumeReq_Start | undefined;
  ack: EventLogConsumeReq_Ack | undefined;
}

export interface EventLogConsumeReq_Start {
  topic: string;
  group: string;
}

export interface EventLogConsumeReq_Ack {
  partition: number;
  offset: number;
}

export interface EventLogConsumeResp {
  start: EventLogConsumeResp_SessionStart | undefined;
  item: EventLogConsumeItem | undefined;
  stop: EventLogConsumeResp_SessionStop | undefined;
}

export interface EventLogConsumeResp_SessionStart {
  partitions: number[];
}

export interface EventLogConsumeResp_SessionStop {
  partitions: number[];
}

export interface EventLogConsumeItem {
  partition: number;
  offset: number;
  payload: Uint8Array;
  lag: number;
}

const baseEventLogConsumeReq: object = {};

export const EventLogConsumeReq = {
  encode(
    message: EventLogConsumeReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.start !== undefined) {
      EventLogConsumeReq_Start.encode(
        message.start,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.ack !== undefined) {
      EventLogConsumeReq_Ack.encode(
        message.ack,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventLogConsumeReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventLogConsumeReq } as EventLogConsumeReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = EventLogConsumeReq_Start.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.ack = EventLogConsumeReq_Ack.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EventLogConsumeReq>): EventLogConsumeReq {
    const message = { ...baseEventLogConsumeReq } as EventLogConsumeReq;
    if (object.start !== undefined && object.start !== null) {
      message.start = EventLogConsumeReq_Start.fromPartial(object.start);
    } else {
      message.start = undefined;
    }
    if (object.ack !== undefined && object.ack !== null) {
      message.ack = EventLogConsumeReq_Ack.fromPartial(object.ack);
    } else {
      message.ack = undefined;
    }
    return message;
  },
};

const baseEventLogConsumeReq_Start: object = { topic: "", group: "" };

export const EventLogConsumeReq_Start = {
  encode(
    message: EventLogConsumeReq_Start,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.topic !== "") {
      writer.uint32(10).string(message.topic);
    }
    if (message.group !== "") {
      writer.uint32(18).string(message.group);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventLogConsumeReq_Start {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventLogConsumeReq_Start,
    } as EventLogConsumeReq_Start;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topic = reader.string();
          break;
        case 2:
          message.group = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<EventLogConsumeReq_Start>
  ): EventLogConsumeReq_Start {
    const message = {
      ...baseEventLogConsumeReq_Start,
    } as EventLogConsumeReq_Start;
    if (object.topic !== undefined && object.topic !== null) {
      message.topic = object.topic;
    } else {
      message.topic = "";
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = object.group;
    } else {
      message.group = "";
    }
    return message;
  },
};

const baseEventLogConsumeReq_Ack: object = { partition: 0, offset: 0 };

export const EventLogConsumeReq_Ack = {
  encode(
    message: EventLogConsumeReq_Ack,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partition !== 0) {
      writer.uint32(8).int32(message.partition);
    }
    if (message.offset !== 0) {
      writer.uint32(16).int64(message.offset);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventLogConsumeReq_Ack {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventLogConsumeReq_Ack } as EventLogConsumeReq_Ack;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partition = reader.int32();
          break;
        case 2:
          message.offset = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<EventLogConsumeReq_Ack>
  ): EventLogConsumeReq_Ack {
    const message = { ...baseEventLogConsumeReq_Ack } as EventLogConsumeReq_Ack;
    if (object.partition !== undefined && object.partition !== null) {
      message.partition = object.partition;
    } else {
      message.partition = 0;
    }
    if (object.offset !== undefined && object.offset !== null) {
      message.offset = object.offset;
    } else {
      message.offset = 0;
    }
    return message;
  },
};

const baseEventLogConsumeResp: object = {};

export const EventLogConsumeResp = {
  encode(
    message: EventLogConsumeResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.start !== undefined) {
      EventLogConsumeResp_SessionStart.encode(
        message.start,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.item !== undefined) {
      EventLogConsumeItem.encode(
        message.item,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.stop !== undefined) {
      EventLogConsumeResp_SessionStop.encode(
        message.stop,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventLogConsumeResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventLogConsumeResp } as EventLogConsumeResp;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = EventLogConsumeResp_SessionStart.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.item = EventLogConsumeItem.decode(reader, reader.uint32());
          break;
        case 3:
          message.stop = EventLogConsumeResp_SessionStop.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EventLogConsumeResp>): EventLogConsumeResp {
    const message = { ...baseEventLogConsumeResp } as EventLogConsumeResp;
    if (object.start !== undefined && object.start !== null) {
      message.start = EventLogConsumeResp_SessionStart.fromPartial(
        object.start
      );
    } else {
      message.start = undefined;
    }
    if (object.item !== undefined && object.item !== null) {
      message.item = EventLogConsumeItem.fromPartial(object.item);
    } else {
      message.item = undefined;
    }
    if (object.stop !== undefined && object.stop !== null) {
      message.stop = EventLogConsumeResp_SessionStop.fromPartial(object.stop);
    } else {
      message.stop = undefined;
    }
    return message;
  },
};

const baseEventLogConsumeResp_SessionStart: object = { partitions: 0 };

export const EventLogConsumeResp_SessionStart = {
  encode(
    message: EventLogConsumeResp_SessionStart,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.partitions) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventLogConsumeResp_SessionStart {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventLogConsumeResp_SessionStart,
    } as EventLogConsumeResp_SessionStart;
    message.partitions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.partitions.push(reader.int32());
            }
          } else {
            message.partitions.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<EventLogConsumeResp_SessionStart>
  ): EventLogConsumeResp_SessionStart {
    const message = {
      ...baseEventLogConsumeResp_SessionStart,
    } as EventLogConsumeResp_SessionStart;
    message.partitions = [];
    if (object.partitions !== undefined && object.partitions !== null) {
      for (const e of object.partitions) {
        message.partitions.push(e);
      }
    }
    return message;
  },
};

const baseEventLogConsumeResp_SessionStop: object = { partitions: 0 };

export const EventLogConsumeResp_SessionStop = {
  encode(
    message: EventLogConsumeResp_SessionStop,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.partitions) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventLogConsumeResp_SessionStop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventLogConsumeResp_SessionStop,
    } as EventLogConsumeResp_SessionStop;
    message.partitions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.partitions.push(reader.int32());
            }
          } else {
            message.partitions.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<EventLogConsumeResp_SessionStop>
  ): EventLogConsumeResp_SessionStop {
    const message = {
      ...baseEventLogConsumeResp_SessionStop,
    } as EventLogConsumeResp_SessionStop;
    message.partitions = [];
    if (object.partitions !== undefined && object.partitions !== null) {
      for (const e of object.partitions) {
        message.partitions.push(e);
      }
    }
    return message;
  },
};

const baseEventLogConsumeItem: object = { partition: 0, offset: 0, lag: 0 };

export const EventLogConsumeItem = {
  encode(
    message: EventLogConsumeItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partition !== 0) {
      writer.uint32(8).int32(message.partition);
    }
    if (message.offset !== 0) {
      writer.uint32(16).int64(message.offset);
    }
    if (message.payload.length !== 0) {
      writer.uint32(26).bytes(message.payload);
    }
    if (message.lag !== 0) {
      writer.uint32(32).int64(message.lag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventLogConsumeItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventLogConsumeItem } as EventLogConsumeItem;
    message.payload = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partition = reader.int32();
          break;
        case 2:
          message.offset = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.payload = reader.bytes();
          break;
        case 4:
          message.lag = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<EventLogConsumeItem>): EventLogConsumeItem {
    const message = { ...baseEventLogConsumeItem } as EventLogConsumeItem;
    if (object.partition !== undefined && object.partition !== null) {
      message.partition = object.partition;
    } else {
      message.partition = 0;
    }
    if (object.offset !== undefined && object.offset !== null) {
      message.offset = object.offset;
    } else {
      message.offset = 0;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
    } else {
      message.payload = new Uint8Array();
    }
    if (object.lag !== undefined && object.lag !== null) {
      message.lag = object.lag;
    } else {
      message.lag = 0;
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
