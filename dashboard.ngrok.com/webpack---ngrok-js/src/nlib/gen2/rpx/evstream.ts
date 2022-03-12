// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from 'long';
import { grpc } from '@improbable-eng/grpc-web';
import _m0 from 'protobufjs/minimal';
import { EventType, EventFormat, EventStream, EventDestination, EventField, EventTarget } from '../rpx/model_evstream';
import { EventTypeV1, EventSubscription, EventSource } from '../rpx/model_evsub';

import { Empty, ID, OptString, OptDouble, OptBool } from '../pb/types';
import { StreamItem, SyncReq } from '../rpx/stream';
import { EventLogConsumeResp, EventLogConsumeReq } from '../rpx/model_evlog';
import { BrowserHeaders } from 'browser-headers';

import { Paging } from '../rpx/model';

export const protobufPackage = 'rpx';

export interface EventStreamGetByAccountReq {
accountId: number,
paging: Paging | undefined,
}

export interface EventStreamGetByIDReq {
id: ID | undefined,
accountId: number,
}

export interface EventStreamCreateReq {
accountId: number,
metadata: string,
description: string,
eventType: EventType,
destinationIds: ID[],
fields: EventField[],
samplingRate: number,
}

export interface EventStreamUpdateReq {
id: ID | undefined,
accountId: number,
metadata: OptString | undefined,
description: OptString | undefined,
destinationIds: ID[],
fields: EventField[],
samplingRate: OptDouble | undefined,
}

export interface EventStreamDeleteReq {
id: ID | undefined,
accountId: number,
}

export interface EventStreamDeleteByAccountReq {
accountId: number,
}

export interface EventStreamList {
eventStreams: EventStream[],
next: Paging | undefined,
}

export interface EventDestinationGetByAccountReq {
accountId: number,
paging: Paging | undefined,
}

export interface EventDestinationGetByIDReq {
id: ID | undefined,
accountId: number,
}

export interface EventDestinationUpdateReq {
id: ID | undefined,
accountId: number,
metadata: OptString | undefined,
description: OptString | undefined,
format: EventFormat,
target: EventTarget | undefined,
enabled: OptBool | undefined,
verifyWithTestEvent: boolean,
}

export interface EventDestinationCreateReq {
accountId: number,
accountKsuid: ID | undefined,
metadata: string,
description: string,
format: EventFormat,
target: EventTarget | undefined,
enabled: boolean,
verifyWithTestEvent: boolean,
}

export interface EventDestinationDeleteReq {
id: ID | undefined,
accountId: number,
}

export interface EventDestinationDeleteByAccountReq {
accountId: number,
}

export interface EventDestinationList {
eventDestinations: EventDestination[],
next: Paging | undefined,
}

export interface EventDestinationCheckReq {
/** @deprecated */
streamId: ID | undefined,
/** @deprecated */
destinationId: ID | undefined,
/** @deprecated */
format: EventFormat,
target: EventTarget | undefined,
sealed: boolean,
}

export interface EventDestinationCheckResp {
eventId: ID | undefined,
}

export interface EventSubscriptionList {
eventSubscriptions: EventSubscription[],
next: Paging | undefined,
}

export interface EventSubscriptionGetByAccountReq {
accountId: ID | undefined,
legacyAccountId: number,
paging: Paging | undefined,
}

export interface EventSubscriptionGetByIDReq {
id: ID | undefined,
accountId: ID | undefined,
}

export interface EventSubscriptionCreateReq {
accountId: ID | undefined,
legacyAccountId: number,
metadata: string,
description: string,
/**
 * Note: The subscription ID and created time can be unset in these, as they
 * will be ignored.
 */
eventSources: EventSource[],
eventDestinationIds: ID[],
}

export interface EventSubscriptionUpdateReq {
id: ID | undefined,
accountId: ID | undefined,
metadata: OptString | undefined,
description: OptString | undefined,
/**
 * Note: The subscription ID and created time can be unset in these, as they
 * will be ignored.
 */
eventSources: EventSource[],
eventDestinationIds: ID[],
}

export interface EventSubscriptionDeleteReq {
id: ID | undefined,
accountId: ID | undefined,
}

export interface EventSubscriptionDeleteByAccountReq {
accountId: ID | undefined,
}

export interface EventSubscriptionReplicateAllReq {
apply: boolean,
}

export interface EventSubscriptionReplicateAllResp {
rowsReplicated: number,
}

export interface EventSourceList {
eventSources: EventSource[],
}

export interface EventSubscriptionSourceCreateReq {
accountId: ID | undefined,
eventSubscriptionId: ID | undefined,
eventType: EventTypeV1,
filter: string,
fields: EventField[],
}

export interface EventSubscriptionSourceGetBySubscriptionIDReq {
accountId: ID | undefined,
eventSubscriptionId: ID | undefined,
}

export interface EventSubscriptionSourceGetByTypeReq {
accountId: ID | undefined,
eventSubscriptionId: ID | undefined,
eventType: EventTypeV1,
}

export interface EventSubscriptionSourceUpdateReq {
accountId: ID | undefined,
eventSubscriptionId: ID | undefined,
eventType: EventTypeV1,
filter: OptString | undefined,
fields: EventField[],
}

export interface EventSubscriptionSourceDeleteReq {
accountId: ID | undefined,
eventSubscriptionId: ID | undefined,
eventType: EventTypeV1,
}

export interface EventSubscriptionDestinationCreateReq {
accountId: ID | undefined,
eventSubscriptionId: ID | undefined,
eventDestinationId: ID | undefined,
}

export interface EventSubscriptionDestinationDeleteReq {
accountId: ID | undefined,
eventSubscriptionId: ID | undefined,
eventDestinationId: ID | undefined,
}

const baseEventStreamGetByAccountReq: object = { accountId: 0 };

export const EventStreamGetByAccountReq = {
            encode(
      message: EventStreamGetByAccountReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.paging !== undefined) {
          Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventStreamGetByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventStreamGetByAccountReq } as EventStreamGetByAccountReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.paging = Paging.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventStreamGetByAccountReq>): EventStreamGetByAccountReq {
      const message = { ...baseEventStreamGetByAccountReq } as EventStreamGetByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.paging !== undefined && object.paging !== null) {
message.paging = Paging.fromPartial(object.paging);
} else {
message.paging = undefined
}
return message;
}
          };

const baseEventStreamGetByIDReq: object = { accountId: 0 };

export const EventStreamGetByIDReq = {
            encode(
      message: EventStreamGetByIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventStreamGetByIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventStreamGetByIDReq } as EventStreamGetByIDReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventStreamGetByIDReq>): EventStreamGetByIDReq {
      const message = { ...baseEventStreamGetByIDReq } as EventStreamGetByIDReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseEventStreamCreateReq: object = { accountId: 0,metadata: "",description: "",eventType: 0,fields: 0,samplingRate: 0 };

export const EventStreamCreateReq = {
            encode(
      message: EventStreamCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.metadata !== "") {
          writer.uint32(18).string(message.metadata);
        }
if (message.description !== "") {
          writer.uint32(26).string(message.description);
        }
if (message.eventType !== 0) {
          writer.uint32(32).int32(message.eventType);
        }
for (const v of message.destinationIds) {
            ID.encode(v!, writer.uint32(42).fork()).ldelim();
          }
writer.uint32(50).fork();
          for (const v of message.fields) {
            writer.int32(v);
          }
          writer.ldelim();
if (message.samplingRate !== 0) {
          writer.uint32(57).double(message.samplingRate);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventStreamCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventStreamCreateReq } as EventStreamCreateReq;
message.destinationIds = [];
message.fields = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.metadata = reader.string();
break;
case 3:
message.description = reader.string();
break;
case 4:
message.eventType = reader.int32() as any;
break;
case 5:
message.destinationIds.push(ID.decode(reader, reader.uint32()));
break;
case 6:
if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fields.push(reader.int32() as any);
            }
          } else {
            message.fields.push(reader.int32() as any);
          }
break;
case 7:
message.samplingRate = reader.double();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventStreamCreateReq>): EventStreamCreateReq {
      const message = { ...baseEventStreamCreateReq } as EventStreamCreateReq;
message.destinationIds = [];
message.fields = [];
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.metadata !== undefined && object.metadata !== null) {
message.metadata = object.metadata;
} else {
message.metadata = ""
}
if (object.description !== undefined && object.description !== null) {
message.description = object.description;
} else {
message.description = ""
}
if (object.eventType !== undefined && object.eventType !== null) {
message.eventType = object.eventType;
} else {
message.eventType = 0
}
if (object.destinationIds !== undefined && object.destinationIds !== null) {
for (const e of object.destinationIds) {
            message.destinationIds.push(ID.fromPartial(e));
          }
}
if (object.fields !== undefined && object.fields !== null) {
for (const e of object.fields) {
            message.fields.push(e);
          }
}
if (object.samplingRate !== undefined && object.samplingRate !== null) {
message.samplingRate = object.samplingRate;
} else {
message.samplingRate = 0
}
return message;
}
          };

const baseEventStreamUpdateReq: object = { accountId: 0,fields: 0 };

export const EventStreamUpdateReq = {
            encode(
      message: EventStreamUpdateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
if (message.metadata !== undefined) {
          OptString.encode(message.metadata, writer.uint32(26).fork()).ldelim();
        }
if (message.description !== undefined) {
          OptString.encode(message.description, writer.uint32(34).fork()).ldelim();
        }
for (const v of message.destinationIds) {
            ID.encode(v!, writer.uint32(42).fork()).ldelim();
          }
writer.uint32(50).fork();
          for (const v of message.fields) {
            writer.int32(v);
          }
          writer.ldelim();
if (message.samplingRate !== undefined) {
          OptDouble.encode(message.samplingRate, writer.uint32(58).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventStreamUpdateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventStreamUpdateReq } as EventStreamUpdateReq;
message.destinationIds = [];
message.fields = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 3:
message.metadata = OptString.decode(reader, reader.uint32());
break;
case 4:
message.description = OptString.decode(reader, reader.uint32());
break;
case 5:
message.destinationIds.push(ID.decode(reader, reader.uint32()));
break;
case 6:
if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fields.push(reader.int32() as any);
            }
          } else {
            message.fields.push(reader.int32() as any);
          }
break;
case 7:
message.samplingRate = OptDouble.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventStreamUpdateReq>): EventStreamUpdateReq {
      const message = { ...baseEventStreamUpdateReq } as EventStreamUpdateReq;
message.destinationIds = [];
message.fields = [];
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.metadata !== undefined && object.metadata !== null) {
message.metadata = OptString.fromPartial(object.metadata);
} else {
message.metadata = undefined
}
if (object.description !== undefined && object.description !== null) {
message.description = OptString.fromPartial(object.description);
} else {
message.description = undefined
}
if (object.destinationIds !== undefined && object.destinationIds !== null) {
for (const e of object.destinationIds) {
            message.destinationIds.push(ID.fromPartial(e));
          }
}
if (object.fields !== undefined && object.fields !== null) {
for (const e of object.fields) {
            message.fields.push(e);
          }
}
if (object.samplingRate !== undefined && object.samplingRate !== null) {
message.samplingRate = OptDouble.fromPartial(object.samplingRate);
} else {
message.samplingRate = undefined
}
return message;
}
          };

const baseEventStreamDeleteReq: object = { accountId: 0 };

export const EventStreamDeleteReq = {
            encode(
      message: EventStreamDeleteReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventStreamDeleteReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventStreamDeleteReq } as EventStreamDeleteReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventStreamDeleteReq>): EventStreamDeleteReq {
      const message = { ...baseEventStreamDeleteReq } as EventStreamDeleteReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseEventStreamDeleteByAccountReq: object = { accountId: 0 };

export const EventStreamDeleteByAccountReq = {
            encode(
      message: EventStreamDeleteByAccountReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventStreamDeleteByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventStreamDeleteByAccountReq } as EventStreamDeleteByAccountReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventStreamDeleteByAccountReq>): EventStreamDeleteByAccountReq {
      const message = { ...baseEventStreamDeleteByAccountReq } as EventStreamDeleteByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseEventStreamList: object = {  };

export const EventStreamList = {
            encode(
      message: EventStreamList,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.eventStreams) {
            EventStream.encode(v!, writer.uint32(10).fork()).ldelim();
          }
if (message.next !== undefined) {
          Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventStreamList {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventStreamList } as EventStreamList;
message.eventStreams = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.eventStreams.push(EventStream.decode(reader, reader.uint32()));
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

fromPartial(object: DeepPartial<EventStreamList>): EventStreamList {
      const message = { ...baseEventStreamList } as EventStreamList;
message.eventStreams = [];
if (object.eventStreams !== undefined && object.eventStreams !== null) {
for (const e of object.eventStreams) {
            message.eventStreams.push(EventStream.fromPartial(e));
          }
}
if (object.next !== undefined && object.next !== null) {
message.next = Paging.fromPartial(object.next);
} else {
message.next = undefined
}
return message;
}
          };

const baseEventDestinationGetByAccountReq: object = { accountId: 0 };

export const EventDestinationGetByAccountReq = {
            encode(
      message: EventDestinationGetByAccountReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
if (message.paging !== undefined) {
          Paging.encode(message.paging, writer.uint32(26).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventDestinationGetByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventDestinationGetByAccountReq } as EventDestinationGetByAccountReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 3:
message.paging = Paging.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventDestinationGetByAccountReq>): EventDestinationGetByAccountReq {
      const message = { ...baseEventDestinationGetByAccountReq } as EventDestinationGetByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.paging !== undefined && object.paging !== null) {
message.paging = Paging.fromPartial(object.paging);
} else {
message.paging = undefined
}
return message;
}
          };

const baseEventDestinationGetByIDReq: object = { accountId: 0 };

export const EventDestinationGetByIDReq = {
            encode(
      message: EventDestinationGetByIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventDestinationGetByIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventDestinationGetByIDReq } as EventDestinationGetByIDReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventDestinationGetByIDReq>): EventDestinationGetByIDReq {
      const message = { ...baseEventDestinationGetByIDReq } as EventDestinationGetByIDReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseEventDestinationUpdateReq: object = { accountId: 0,format: 0,verifyWithTestEvent: false };

export const EventDestinationUpdateReq = {
            encode(
      message: EventDestinationUpdateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
if (message.metadata !== undefined) {
          OptString.encode(message.metadata, writer.uint32(26).fork()).ldelim();
        }
if (message.description !== undefined) {
          OptString.encode(message.description, writer.uint32(34).fork()).ldelim();
        }
if (message.format !== 0) {
          writer.uint32(40).int32(message.format);
        }
if (message.target !== undefined) {
          EventTarget.encode(message.target, writer.uint32(50).fork()).ldelim();
        }
if (message.enabled !== undefined) {
          OptBool.encode(message.enabled, writer.uint32(58).fork()).ldelim();
        }
if (message.verifyWithTestEvent === true) {
          writer.uint32(64).bool(message.verifyWithTestEvent);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventDestinationUpdateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventDestinationUpdateReq } as EventDestinationUpdateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 3:
message.metadata = OptString.decode(reader, reader.uint32());
break;
case 4:
message.description = OptString.decode(reader, reader.uint32());
break;
case 5:
message.format = reader.int32() as any;
break;
case 6:
message.target = EventTarget.decode(reader, reader.uint32());
break;
case 7:
message.enabled = OptBool.decode(reader, reader.uint32());
break;
case 8:
message.verifyWithTestEvent = reader.bool();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventDestinationUpdateReq>): EventDestinationUpdateReq {
      const message = { ...baseEventDestinationUpdateReq } as EventDestinationUpdateReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.metadata !== undefined && object.metadata !== null) {
message.metadata = OptString.fromPartial(object.metadata);
} else {
message.metadata = undefined
}
if (object.description !== undefined && object.description !== null) {
message.description = OptString.fromPartial(object.description);
} else {
message.description = undefined
}
if (object.format !== undefined && object.format !== null) {
message.format = object.format;
} else {
message.format = 0
}
if (object.target !== undefined && object.target !== null) {
message.target = EventTarget.fromPartial(object.target);
} else {
message.target = undefined
}
if (object.enabled !== undefined && object.enabled !== null) {
message.enabled = OptBool.fromPartial(object.enabled);
} else {
message.enabled = undefined
}
if (object.verifyWithTestEvent !== undefined && object.verifyWithTestEvent !== null) {
message.verifyWithTestEvent = object.verifyWithTestEvent;
} else {
message.verifyWithTestEvent = false
}
return message;
}
          };

const baseEventDestinationCreateReq: object = { accountId: 0,metadata: "",description: "",format: 0,enabled: false,verifyWithTestEvent: false };

export const EventDestinationCreateReq = {
            encode(
      message: EventDestinationCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
if (message.accountKsuid !== undefined) {
          ID.encode(message.accountKsuid, writer.uint32(74).fork()).ldelim();
        }
if (message.metadata !== "") {
          writer.uint32(18).string(message.metadata);
        }
if (message.description !== "") {
          writer.uint32(26).string(message.description);
        }
if (message.format !== 0) {
          writer.uint32(40).int32(message.format);
        }
if (message.target !== undefined) {
          EventTarget.encode(message.target, writer.uint32(50).fork()).ldelim();
        }
if (message.enabled === true) {
          writer.uint32(56).bool(message.enabled);
        }
if (message.verifyWithTestEvent === true) {
          writer.uint32(64).bool(message.verifyWithTestEvent);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventDestinationCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventDestinationCreateReq } as EventDestinationCreateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
case 9:
message.accountKsuid = ID.decode(reader, reader.uint32());
break;
case 2:
message.metadata = reader.string();
break;
case 3:
message.description = reader.string();
break;
case 5:
message.format = reader.int32() as any;
break;
case 6:
message.target = EventTarget.decode(reader, reader.uint32());
break;
case 7:
message.enabled = reader.bool();
break;
case 8:
message.verifyWithTestEvent = reader.bool();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventDestinationCreateReq>): EventDestinationCreateReq {
      const message = { ...baseEventDestinationCreateReq } as EventDestinationCreateReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
if (object.accountKsuid !== undefined && object.accountKsuid !== null) {
message.accountKsuid = ID.fromPartial(object.accountKsuid);
} else {
message.accountKsuid = undefined
}
if (object.metadata !== undefined && object.metadata !== null) {
message.metadata = object.metadata;
} else {
message.metadata = ""
}
if (object.description !== undefined && object.description !== null) {
message.description = object.description;
} else {
message.description = ""
}
if (object.format !== undefined && object.format !== null) {
message.format = object.format;
} else {
message.format = 0
}
if (object.target !== undefined && object.target !== null) {
message.target = EventTarget.fromPartial(object.target);
} else {
message.target = undefined
}
if (object.enabled !== undefined && object.enabled !== null) {
message.enabled = object.enabled;
} else {
message.enabled = false
}
if (object.verifyWithTestEvent !== undefined && object.verifyWithTestEvent !== null) {
message.verifyWithTestEvent = object.verifyWithTestEvent;
} else {
message.verifyWithTestEvent = false
}
return message;
}
          };

const baseEventDestinationDeleteReq: object = { accountId: 0 };

export const EventDestinationDeleteReq = {
            encode(
      message: EventDestinationDeleteReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== 0) {
          writer.uint32(16).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventDestinationDeleteReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventDestinationDeleteReq } as EventDestinationDeleteReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = longToNumber(reader.int64() as Long);
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventDestinationDeleteReq>): EventDestinationDeleteReq {
      const message = { ...baseEventDestinationDeleteReq } as EventDestinationDeleteReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseEventDestinationDeleteByAccountReq: object = { accountId: 0 };

export const EventDestinationDeleteByAccountReq = {
            encode(
      message: EventDestinationDeleteByAccountReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== 0) {
          writer.uint32(8).int64(message.accountId);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventDestinationDeleteByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventDestinationDeleteByAccountReq } as EventDestinationDeleteByAccountReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = longToNumber(reader.int64() as Long);
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventDestinationDeleteByAccountReq>): EventDestinationDeleteByAccountReq {
      const message = { ...baseEventDestinationDeleteByAccountReq } as EventDestinationDeleteByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = object.accountId;
} else {
message.accountId = 0
}
return message;
}
          };

const baseEventDestinationList: object = {  };

export const EventDestinationList = {
            encode(
      message: EventDestinationList,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.eventDestinations) {
            EventDestination.encode(v!, writer.uint32(10).fork()).ldelim();
          }
if (message.next !== undefined) {
          Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventDestinationList {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventDestinationList } as EventDestinationList;
message.eventDestinations = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.eventDestinations.push(EventDestination.decode(reader, reader.uint32()));
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

fromPartial(object: DeepPartial<EventDestinationList>): EventDestinationList {
      const message = { ...baseEventDestinationList } as EventDestinationList;
message.eventDestinations = [];
if (object.eventDestinations !== undefined && object.eventDestinations !== null) {
for (const e of object.eventDestinations) {
            message.eventDestinations.push(EventDestination.fromPartial(e));
          }
}
if (object.next !== undefined && object.next !== null) {
message.next = Paging.fromPartial(object.next);
} else {
message.next = undefined
}
return message;
}
          };

const baseEventDestinationCheckReq: object = { format: 0,sealed: false };

export const EventDestinationCheckReq = {
            encode(
      message: EventDestinationCheckReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.streamId !== undefined) {
          ID.encode(message.streamId, writer.uint32(10).fork()).ldelim();
        }
if (message.destinationId !== undefined) {
          ID.encode(message.destinationId, writer.uint32(18).fork()).ldelim();
        }
if (message.format !== 0) {
          writer.uint32(32).int32(message.format);
        }
if (message.target !== undefined) {
          EventTarget.encode(message.target, writer.uint32(42).fork()).ldelim();
        }
if (message.sealed === true) {
          writer.uint32(48).bool(message.sealed);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventDestinationCheckReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventDestinationCheckReq } as EventDestinationCheckReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.streamId = ID.decode(reader, reader.uint32());
break;
case 2:
message.destinationId = ID.decode(reader, reader.uint32());
break;
case 4:
message.format = reader.int32() as any;
break;
case 5:
message.target = EventTarget.decode(reader, reader.uint32());
break;
case 6:
message.sealed = reader.bool();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventDestinationCheckReq>): EventDestinationCheckReq {
      const message = { ...baseEventDestinationCheckReq } as EventDestinationCheckReq;
if (object.streamId !== undefined && object.streamId !== null) {
message.streamId = ID.fromPartial(object.streamId);
} else {
message.streamId = undefined
}
if (object.destinationId !== undefined && object.destinationId !== null) {
message.destinationId = ID.fromPartial(object.destinationId);
} else {
message.destinationId = undefined
}
if (object.format !== undefined && object.format !== null) {
message.format = object.format;
} else {
message.format = 0
}
if (object.target !== undefined && object.target !== null) {
message.target = EventTarget.fromPartial(object.target);
} else {
message.target = undefined
}
if (object.sealed !== undefined && object.sealed !== null) {
message.sealed = object.sealed;
} else {
message.sealed = false
}
return message;
}
          };

const baseEventDestinationCheckResp: object = {  };

export const EventDestinationCheckResp = {
            encode(
      message: EventDestinationCheckResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.eventId !== undefined) {
          ID.encode(message.eventId, writer.uint32(10).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventDestinationCheckResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventDestinationCheckResp } as EventDestinationCheckResp;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.eventId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventDestinationCheckResp>): EventDestinationCheckResp {
      const message = { ...baseEventDestinationCheckResp } as EventDestinationCheckResp;
if (object.eventId !== undefined && object.eventId !== null) {
message.eventId = ID.fromPartial(object.eventId);
} else {
message.eventId = undefined
}
return message;
}
          };

const baseEventSubscriptionList: object = {  };

export const EventSubscriptionList = {
            encode(
      message: EventSubscriptionList,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.eventSubscriptions) {
            EventSubscription.encode(v!, writer.uint32(10).fork()).ldelim();
          }
if (message.next !== undefined) {
          Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventSubscriptionList {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventSubscriptionList } as EventSubscriptionList;
message.eventSubscriptions = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.eventSubscriptions.push(EventSubscription.decode(reader, reader.uint32()));
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

fromPartial(object: DeepPartial<EventSubscriptionList>): EventSubscriptionList {
      const message = { ...baseEventSubscriptionList } as EventSubscriptionList;
message.eventSubscriptions = [];
if (object.eventSubscriptions !== undefined && object.eventSubscriptions !== null) {
for (const e of object.eventSubscriptions) {
            message.eventSubscriptions.push(EventSubscription.fromPartial(e));
          }
}
if (object.next !== undefined && object.next !== null) {
message.next = Paging.fromPartial(object.next);
} else {
message.next = undefined
}
return message;
}
          };

const baseEventSubscriptionGetByAccountReq: object = { legacyAccountId: 0 };

export const EventSubscriptionGetByAccountReq = {
            encode(
      message: EventSubscriptionGetByAccountReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
        }
if (message.legacyAccountId !== 0) {
          writer.uint32(24).int64(message.legacyAccountId);
        }
if (message.paging !== undefined) {
          Paging.encode(message.paging, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventSubscriptionGetByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventSubscriptionGetByAccountReq } as EventSubscriptionGetByAccountReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = ID.decode(reader, reader.uint32());
break;
case 3:
message.legacyAccountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.paging = Paging.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventSubscriptionGetByAccountReq>): EventSubscriptionGetByAccountReq {
      const message = { ...baseEventSubscriptionGetByAccountReq } as EventSubscriptionGetByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
if (object.legacyAccountId !== undefined && object.legacyAccountId !== null) {
message.legacyAccountId = object.legacyAccountId;
} else {
message.legacyAccountId = 0
}
if (object.paging !== undefined && object.paging !== null) {
message.paging = Paging.fromPartial(object.paging);
} else {
message.paging = undefined
}
return message;
}
          };

const baseEventSubscriptionGetByIDReq: object = {  };

export const EventSubscriptionGetByIDReq = {
            encode(
      message: EventSubscriptionGetByIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventSubscriptionGetByIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventSubscriptionGetByIDReq } as EventSubscriptionGetByIDReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventSubscriptionGetByIDReq>): EventSubscriptionGetByIDReq {
      const message = { ...baseEventSubscriptionGetByIDReq } as EventSubscriptionGetByIDReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
return message;
}
          };

const baseEventSubscriptionCreateReq: object = { legacyAccountId: 0,metadata: "",description: "" };

export const EventSubscriptionCreateReq = {
            encode(
      message: EventSubscriptionCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
        }
if (message.legacyAccountId !== 0) {
          writer.uint32(32).int64(message.legacyAccountId);
        }
if (message.metadata !== "") {
          writer.uint32(18).string(message.metadata);
        }
if (message.description !== "") {
          writer.uint32(26).string(message.description);
        }
for (const v of message.eventSources) {
            EventSource.encode(v!, writer.uint32(42).fork()).ldelim();
          }
for (const v of message.eventDestinationIds) {
            ID.encode(v!, writer.uint32(50).fork()).ldelim();
          }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventSubscriptionCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventSubscriptionCreateReq } as EventSubscriptionCreateReq;
message.eventSources = [];
message.eventDestinationIds = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = ID.decode(reader, reader.uint32());
break;
case 4:
message.legacyAccountId = longToNumber(reader.int64() as Long);
break;
case 2:
message.metadata = reader.string();
break;
case 3:
message.description = reader.string();
break;
case 5:
message.eventSources.push(EventSource.decode(reader, reader.uint32()));
break;
case 6:
message.eventDestinationIds.push(ID.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventSubscriptionCreateReq>): EventSubscriptionCreateReq {
      const message = { ...baseEventSubscriptionCreateReq } as EventSubscriptionCreateReq;
message.eventSources = [];
message.eventDestinationIds = [];
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
if (object.legacyAccountId !== undefined && object.legacyAccountId !== null) {
message.legacyAccountId = object.legacyAccountId;
} else {
message.legacyAccountId = 0
}
if (object.metadata !== undefined && object.metadata !== null) {
message.metadata = object.metadata;
} else {
message.metadata = ""
}
if (object.description !== undefined && object.description !== null) {
message.description = object.description;
} else {
message.description = ""
}
if (object.eventSources !== undefined && object.eventSources !== null) {
for (const e of object.eventSources) {
            message.eventSources.push(EventSource.fromPartial(e));
          }
}
if (object.eventDestinationIds !== undefined && object.eventDestinationIds !== null) {
for (const e of object.eventDestinationIds) {
            message.eventDestinationIds.push(ID.fromPartial(e));
          }
}
return message;
}
          };

const baseEventSubscriptionUpdateReq: object = {  };

export const EventSubscriptionUpdateReq = {
            encode(
      message: EventSubscriptionUpdateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(18).fork()).ldelim();
        }
if (message.metadata !== undefined) {
          OptString.encode(message.metadata, writer.uint32(26).fork()).ldelim();
        }
if (message.description !== undefined) {
          OptString.encode(message.description, writer.uint32(34).fork()).ldelim();
        }
for (const v of message.eventSources) {
            EventSource.encode(v!, writer.uint32(42).fork()).ldelim();
          }
for (const v of message.eventDestinationIds) {
            ID.encode(v!, writer.uint32(50).fork()).ldelim();
          }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventSubscriptionUpdateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventSubscriptionUpdateReq } as EventSubscriptionUpdateReq;
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
message.metadata = OptString.decode(reader, reader.uint32());
break;
case 4:
message.description = OptString.decode(reader, reader.uint32());
break;
case 5:
message.eventSources.push(EventSource.decode(reader, reader.uint32()));
break;
case 6:
message.eventDestinationIds.push(ID.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventSubscriptionUpdateReq>): EventSubscriptionUpdateReq {
      const message = { ...baseEventSubscriptionUpdateReq } as EventSubscriptionUpdateReq;
message.eventSources = [];
message.eventDestinationIds = [];
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
if (object.metadata !== undefined && object.metadata !== null) {
message.metadata = OptString.fromPartial(object.metadata);
} else {
message.metadata = undefined
}
if (object.description !== undefined && object.description !== null) {
message.description = OptString.fromPartial(object.description);
} else {
message.description = undefined
}
if (object.eventSources !== undefined && object.eventSources !== null) {
for (const e of object.eventSources) {
            message.eventSources.push(EventSource.fromPartial(e));
          }
}
if (object.eventDestinationIds !== undefined && object.eventDestinationIds !== null) {
for (const e of object.eventDestinationIds) {
            message.eventDestinationIds.push(ID.fromPartial(e));
          }
}
return message;
}
          };

const baseEventSubscriptionDeleteReq: object = {  };

export const EventSubscriptionDeleteReq = {
            encode(
      message: EventSubscriptionDeleteReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.id !== undefined) {
          ID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventSubscriptionDeleteReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventSubscriptionDeleteReq } as EventSubscriptionDeleteReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.id = ID.decode(reader, reader.uint32());
break;
case 2:
message.accountId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventSubscriptionDeleteReq>): EventSubscriptionDeleteReq {
      const message = { ...baseEventSubscriptionDeleteReq } as EventSubscriptionDeleteReq;
if (object.id !== undefined && object.id !== null) {
message.id = ID.fromPartial(object.id);
} else {
message.id = undefined
}
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
return message;
}
          };

const baseEventSubscriptionDeleteByAccountReq: object = {  };

export const EventSubscriptionDeleteByAccountReq = {
            encode(
      message: EventSubscriptionDeleteByAccountReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventSubscriptionDeleteByAccountReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventSubscriptionDeleteByAccountReq } as EventSubscriptionDeleteByAccountReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventSubscriptionDeleteByAccountReq>): EventSubscriptionDeleteByAccountReq {
      const message = { ...baseEventSubscriptionDeleteByAccountReq } as EventSubscriptionDeleteByAccountReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
return message;
}
          };

const baseEventSubscriptionReplicateAllReq: object = { apply: false };

export const EventSubscriptionReplicateAllReq = {
            encode(
      message: EventSubscriptionReplicateAllReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.apply === true) {
          writer.uint32(8).bool(message.apply);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventSubscriptionReplicateAllReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventSubscriptionReplicateAllReq } as EventSubscriptionReplicateAllReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.apply = reader.bool();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventSubscriptionReplicateAllReq>): EventSubscriptionReplicateAllReq {
      const message = { ...baseEventSubscriptionReplicateAllReq } as EventSubscriptionReplicateAllReq;
if (object.apply !== undefined && object.apply !== null) {
message.apply = object.apply;
} else {
message.apply = false
}
return message;
}
          };

const baseEventSubscriptionReplicateAllResp: object = { rowsReplicated: 0 };

export const EventSubscriptionReplicateAllResp = {
            encode(
      message: EventSubscriptionReplicateAllResp,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.rowsReplicated !== 0) {
          writer.uint32(8).int32(message.rowsReplicated);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventSubscriptionReplicateAllResp {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventSubscriptionReplicateAllResp } as EventSubscriptionReplicateAllResp;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.rowsReplicated = reader.int32();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventSubscriptionReplicateAllResp>): EventSubscriptionReplicateAllResp {
      const message = { ...baseEventSubscriptionReplicateAllResp } as EventSubscriptionReplicateAllResp;
if (object.rowsReplicated !== undefined && object.rowsReplicated !== null) {
message.rowsReplicated = object.rowsReplicated;
} else {
message.rowsReplicated = 0
}
return message;
}
          };

const baseEventSourceList: object = {  };

export const EventSourceList = {
            encode(
      message: EventSourceList,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
for (const v of message.eventSources) {
            EventSource.encode(v!, writer.uint32(10).fork()).ldelim();
          }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventSourceList {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventSourceList } as EventSourceList;
message.eventSources = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.eventSources.push(EventSource.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventSourceList>): EventSourceList {
      const message = { ...baseEventSourceList } as EventSourceList;
message.eventSources = [];
if (object.eventSources !== undefined && object.eventSources !== null) {
for (const e of object.eventSources) {
            message.eventSources.push(EventSource.fromPartial(e));
          }
}
return message;
}
          };

const baseEventSubscriptionSourceCreateReq: object = { eventType: 0,filter: "",fields: 0 };

export const EventSubscriptionSourceCreateReq = {
            encode(
      message: EventSubscriptionSourceCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
        }
if (message.eventSubscriptionId !== undefined) {
          ID.encode(message.eventSubscriptionId, writer.uint32(18).fork()).ldelim();
        }
if (message.eventType !== 0) {
          writer.uint32(24).int32(message.eventType);
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

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventSubscriptionSourceCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventSubscriptionSourceCreateReq } as EventSubscriptionSourceCreateReq;
message.fields = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = ID.decode(reader, reader.uint32());
break;
case 2:
message.eventSubscriptionId = ID.decode(reader, reader.uint32());
break;
case 3:
message.eventType = reader.int32() as any;
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

fromPartial(object: DeepPartial<EventSubscriptionSourceCreateReq>): EventSubscriptionSourceCreateReq {
      const message = { ...baseEventSubscriptionSourceCreateReq } as EventSubscriptionSourceCreateReq;
message.fields = [];
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
if (object.eventSubscriptionId !== undefined && object.eventSubscriptionId !== null) {
message.eventSubscriptionId = ID.fromPartial(object.eventSubscriptionId);
} else {
message.eventSubscriptionId = undefined
}
if (object.eventType !== undefined && object.eventType !== null) {
message.eventType = object.eventType;
} else {
message.eventType = 0
}
if (object.filter !== undefined && object.filter !== null) {
message.filter = object.filter;
} else {
message.filter = ""
}
if (object.fields !== undefined && object.fields !== null) {
for (const e of object.fields) {
            message.fields.push(e);
          }
}
return message;
}
          };

const baseEventSubscriptionSourceGetBySubscriptionIDReq: object = {  };

export const EventSubscriptionSourceGetBySubscriptionIDReq = {
            encode(
      message: EventSubscriptionSourceGetBySubscriptionIDReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
        }
if (message.eventSubscriptionId !== undefined) {
          ID.encode(message.eventSubscriptionId, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventSubscriptionSourceGetBySubscriptionIDReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventSubscriptionSourceGetBySubscriptionIDReq } as EventSubscriptionSourceGetBySubscriptionIDReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = ID.decode(reader, reader.uint32());
break;
case 2:
message.eventSubscriptionId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventSubscriptionSourceGetBySubscriptionIDReq>): EventSubscriptionSourceGetBySubscriptionIDReq {
      const message = { ...baseEventSubscriptionSourceGetBySubscriptionIDReq } as EventSubscriptionSourceGetBySubscriptionIDReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
if (object.eventSubscriptionId !== undefined && object.eventSubscriptionId !== null) {
message.eventSubscriptionId = ID.fromPartial(object.eventSubscriptionId);
} else {
message.eventSubscriptionId = undefined
}
return message;
}
          };

const baseEventSubscriptionSourceGetByTypeReq: object = { eventType: 0 };

export const EventSubscriptionSourceGetByTypeReq = {
            encode(
      message: EventSubscriptionSourceGetByTypeReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
        }
if (message.eventSubscriptionId !== undefined) {
          ID.encode(message.eventSubscriptionId, writer.uint32(18).fork()).ldelim();
        }
if (message.eventType !== 0) {
          writer.uint32(24).int32(message.eventType);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventSubscriptionSourceGetByTypeReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventSubscriptionSourceGetByTypeReq } as EventSubscriptionSourceGetByTypeReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = ID.decode(reader, reader.uint32());
break;
case 2:
message.eventSubscriptionId = ID.decode(reader, reader.uint32());
break;
case 3:
message.eventType = reader.int32() as any;
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventSubscriptionSourceGetByTypeReq>): EventSubscriptionSourceGetByTypeReq {
      const message = { ...baseEventSubscriptionSourceGetByTypeReq } as EventSubscriptionSourceGetByTypeReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
if (object.eventSubscriptionId !== undefined && object.eventSubscriptionId !== null) {
message.eventSubscriptionId = ID.fromPartial(object.eventSubscriptionId);
} else {
message.eventSubscriptionId = undefined
}
if (object.eventType !== undefined && object.eventType !== null) {
message.eventType = object.eventType;
} else {
message.eventType = 0
}
return message;
}
          };

const baseEventSubscriptionSourceUpdateReq: object = { eventType: 0,fields: 0 };

export const EventSubscriptionSourceUpdateReq = {
            encode(
      message: EventSubscriptionSourceUpdateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
        }
if (message.eventSubscriptionId !== undefined) {
          ID.encode(message.eventSubscriptionId, writer.uint32(18).fork()).ldelim();
        }
if (message.eventType !== 0) {
          writer.uint32(24).int32(message.eventType);
        }
if (message.filter !== undefined) {
          OptString.encode(message.filter, writer.uint32(34).fork()).ldelim();
        }
writer.uint32(42).fork();
          for (const v of message.fields) {
            writer.int32(v);
          }
          writer.ldelim();
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventSubscriptionSourceUpdateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventSubscriptionSourceUpdateReq } as EventSubscriptionSourceUpdateReq;
message.fields = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = ID.decode(reader, reader.uint32());
break;
case 2:
message.eventSubscriptionId = ID.decode(reader, reader.uint32());
break;
case 3:
message.eventType = reader.int32() as any;
break;
case 4:
message.filter = OptString.decode(reader, reader.uint32());
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

fromPartial(object: DeepPartial<EventSubscriptionSourceUpdateReq>): EventSubscriptionSourceUpdateReq {
      const message = { ...baseEventSubscriptionSourceUpdateReq } as EventSubscriptionSourceUpdateReq;
message.fields = [];
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
if (object.eventSubscriptionId !== undefined && object.eventSubscriptionId !== null) {
message.eventSubscriptionId = ID.fromPartial(object.eventSubscriptionId);
} else {
message.eventSubscriptionId = undefined
}
if (object.eventType !== undefined && object.eventType !== null) {
message.eventType = object.eventType;
} else {
message.eventType = 0
}
if (object.filter !== undefined && object.filter !== null) {
message.filter = OptString.fromPartial(object.filter);
} else {
message.filter = undefined
}
if (object.fields !== undefined && object.fields !== null) {
for (const e of object.fields) {
            message.fields.push(e);
          }
}
return message;
}
          };

const baseEventSubscriptionSourceDeleteReq: object = { eventType: 0 };

export const EventSubscriptionSourceDeleteReq = {
            encode(
      message: EventSubscriptionSourceDeleteReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
        }
if (message.eventSubscriptionId !== undefined) {
          ID.encode(message.eventSubscriptionId, writer.uint32(18).fork()).ldelim();
        }
if (message.eventType !== 0) {
          writer.uint32(24).int32(message.eventType);
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventSubscriptionSourceDeleteReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventSubscriptionSourceDeleteReq } as EventSubscriptionSourceDeleteReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = ID.decode(reader, reader.uint32());
break;
case 2:
message.eventSubscriptionId = ID.decode(reader, reader.uint32());
break;
case 3:
message.eventType = reader.int32() as any;
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventSubscriptionSourceDeleteReq>): EventSubscriptionSourceDeleteReq {
      const message = { ...baseEventSubscriptionSourceDeleteReq } as EventSubscriptionSourceDeleteReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
if (object.eventSubscriptionId !== undefined && object.eventSubscriptionId !== null) {
message.eventSubscriptionId = ID.fromPartial(object.eventSubscriptionId);
} else {
message.eventSubscriptionId = undefined
}
if (object.eventType !== undefined && object.eventType !== null) {
message.eventType = object.eventType;
} else {
message.eventType = 0
}
return message;
}
          };

const baseEventSubscriptionDestinationCreateReq: object = {  };

export const EventSubscriptionDestinationCreateReq = {
            encode(
      message: EventSubscriptionDestinationCreateReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
        }
if (message.eventSubscriptionId !== undefined) {
          ID.encode(message.eventSubscriptionId, writer.uint32(18).fork()).ldelim();
        }
if (message.eventDestinationId !== undefined) {
          ID.encode(message.eventDestinationId, writer.uint32(26).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventSubscriptionDestinationCreateReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventSubscriptionDestinationCreateReq } as EventSubscriptionDestinationCreateReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = ID.decode(reader, reader.uint32());
break;
case 2:
message.eventSubscriptionId = ID.decode(reader, reader.uint32());
break;
case 3:
message.eventDestinationId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventSubscriptionDestinationCreateReq>): EventSubscriptionDestinationCreateReq {
      const message = { ...baseEventSubscriptionDestinationCreateReq } as EventSubscriptionDestinationCreateReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
if (object.eventSubscriptionId !== undefined && object.eventSubscriptionId !== null) {
message.eventSubscriptionId = ID.fromPartial(object.eventSubscriptionId);
} else {
message.eventSubscriptionId = undefined
}
if (object.eventDestinationId !== undefined && object.eventDestinationId !== null) {
message.eventDestinationId = ID.fromPartial(object.eventDestinationId);
} else {
message.eventDestinationId = undefined
}
return message;
}
          };

const baseEventSubscriptionDestinationDeleteReq: object = {  };

export const EventSubscriptionDestinationDeleteReq = {
            encode(
      message: EventSubscriptionDestinationDeleteReq,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
if (message.accountId !== undefined) {
          ID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
        }
if (message.eventSubscriptionId !== undefined) {
          ID.encode(message.eventSubscriptionId, writer.uint32(18).fork()).ldelim();
        }
if (message.eventDestinationId !== undefined) {
          ID.encode(message.eventDestinationId, writer.uint32(26).fork()).ldelim();
        }
return writer;
},

decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): EventSubscriptionDestinationDeleteReq {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventSubscriptionDestinationDeleteReq } as EventSubscriptionDestinationDeleteReq;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.accountId = ID.decode(reader, reader.uint32());
break;
case 2:
message.eventSubscriptionId = ID.decode(reader, reader.uint32());
break;
case 3:
message.eventDestinationId = ID.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromPartial(object: DeepPartial<EventSubscriptionDestinationDeleteReq>): EventSubscriptionDestinationDeleteReq {
      const message = { ...baseEventSubscriptionDestinationDeleteReq } as EventSubscriptionDestinationDeleteReq;
if (object.accountId !== undefined && object.accountId !== null) {
message.accountId = ID.fromPartial(object.accountId);
} else {
message.accountId = undefined
}
if (object.eventSubscriptionId !== undefined && object.eventSubscriptionId !== null) {
message.eventSubscriptionId = ID.fromPartial(object.eventSubscriptionId);
} else {
message.eventSubscriptionId = undefined
}
if (object.eventDestinationId !== undefined && object.eventDestinationId !== null) {
message.eventDestinationId = ID.fromPartial(object.eventDestinationId);
} else {
message.eventDestinationId = undefined
}
return message;
}
          };

export interface EventStreams {
GetByAccount(request: DeepPartial<EventStreamGetByAccountReq>,metadata?: grpc.Metadata): Promise<EventStreamList>;
GetByID(request: DeepPartial<EventStreamGetByIDReq>,metadata?: grpc.Metadata): Promise<EventStream>;
Create(request: DeepPartial<EventStreamCreateReq>,metadata?: grpc.Metadata): Promise<EventStream>;
Update(request: DeepPartial<EventStreamUpdateReq>,metadata?: grpc.Metadata): Promise<EventStream>;
Delete(request: DeepPartial<EventStreamDeleteReq>,metadata?: grpc.Metadata): Promise<Empty>;
DeleteByAccount(request: DeepPartial<EventStreamDeleteByAccountReq>,metadata?: grpc.Metadata): Promise<Empty>;
/** Replication */
Sync(request: DeepPartial<SyncReq>,metadata?: grpc.Metadata): Promise<StreamItem>;
}

export class EventStreamsClientImpl implements EventStreams {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.GetByAccount = this.GetByAccount.bind(this);this.GetByID = this.GetByID.bind(this);this.Create = this.Create.bind(this);this.Update = this.Update.bind(this);this.Delete = this.Delete.bind(this);this.DeleteByAccount = this.DeleteByAccount.bind(this);this.Sync = this.Sync.bind(this);}

    GetByAccount(
      request: DeepPartial<EventStreamGetByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<EventStreamList> {
      return this.rpc.unary(
        EventStreamsGetByAccountDesc,
        EventStreamGetByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByID(
      request: DeepPartial<EventStreamGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<EventStream> {
      return this.rpc.unary(
        EventStreamsGetByIDDesc,
        EventStreamGetByIDReq.fromPartial(request),
        metadata,
      );
    }
  
    Create(
      request: DeepPartial<EventStreamCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<EventStream> {
      return this.rpc.unary(
        EventStreamsCreateDesc,
        EventStreamCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<EventStreamUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<EventStream> {
      return this.rpc.unary(
        EventStreamsUpdateDesc,
        EventStreamUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<EventStreamDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        EventStreamsDeleteDesc,
        EventStreamDeleteReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteByAccount(
      request: DeepPartial<EventStreamDeleteByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        EventStreamsDeleteByAccountDesc,
        EventStreamDeleteByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    Sync(
      request: DeepPartial<SyncReq>,
      metadata?: grpc.Metadata,
    ): Promise<StreamItem> {
      return this.rpc.invoke(
        EventStreamsSyncDesc,
        request,
        metadata,
      );
    }
  }

export const EventStreamsDesc = {
      serviceName: "rpx.EventStreams",
    };

export const EventStreamsGetByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "GetByAccount",
      service: EventStreamsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventStreamGetByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EventStreamList.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventStreamsGetByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByID",
      service: EventStreamsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventStreamGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EventStream.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventStreamsCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: EventStreamsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventStreamCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EventStream.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventStreamsUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: EventStreamsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventStreamUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EventStream.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventStreamsDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: EventStreamsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventStreamDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventStreamsDeleteByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteByAccount",
      service: EventStreamsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventStreamDeleteByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventStreamsSyncDesc: UnaryMethodDefinitionish = {
      methodName: "Sync",
      service: EventStreamsDesc,
      requestStream: false,
      responseStream: true,
      requestType: {
    serializeBinary() {
      return SyncReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...StreamItem.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export interface EventDestinations {
GetByAccount(request: DeepPartial<EventDestinationGetByAccountReq>,metadata?: grpc.Metadata): Promise<EventDestinationList>;
GetByID(request: DeepPartial<EventDestinationGetByIDReq>,metadata?: grpc.Metadata): Promise<EventDestination>;
Create(request: DeepPartial<EventDestinationCreateReq>,metadata?: grpc.Metadata): Promise<EventDestination>;
Update(request: DeepPartial<EventDestinationUpdateReq>,metadata?: grpc.Metadata): Promise<EventDestination>;
Delete(request: DeepPartial<EventDestinationDeleteReq>,metadata?: grpc.Metadata): Promise<Empty>;
DeleteByAccount(request: DeepPartial<EventDestinationDeleteByAccountReq>,metadata?: grpc.Metadata): Promise<Empty>;
/** Replication */
Sync(request: DeepPartial<SyncReq>,metadata?: grpc.Metadata): Promise<StreamItem>;
}

export class EventDestinationsClientImpl implements EventDestinations {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.GetByAccount = this.GetByAccount.bind(this);this.GetByID = this.GetByID.bind(this);this.Create = this.Create.bind(this);this.Update = this.Update.bind(this);this.Delete = this.Delete.bind(this);this.DeleteByAccount = this.DeleteByAccount.bind(this);this.Sync = this.Sync.bind(this);}

    GetByAccount(
      request: DeepPartial<EventDestinationGetByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<EventDestinationList> {
      return this.rpc.unary(
        EventDestinationsGetByAccountDesc,
        EventDestinationGetByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByID(
      request: DeepPartial<EventDestinationGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<EventDestination> {
      return this.rpc.unary(
        EventDestinationsGetByIDDesc,
        EventDestinationGetByIDReq.fromPartial(request),
        metadata,
      );
    }
  
    Create(
      request: DeepPartial<EventDestinationCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<EventDestination> {
      return this.rpc.unary(
        EventDestinationsCreateDesc,
        EventDestinationCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<EventDestinationUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<EventDestination> {
      return this.rpc.unary(
        EventDestinationsUpdateDesc,
        EventDestinationUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<EventDestinationDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        EventDestinationsDeleteDesc,
        EventDestinationDeleteReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteByAccount(
      request: DeepPartial<EventDestinationDeleteByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        EventDestinationsDeleteByAccountDesc,
        EventDestinationDeleteByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    Sync(
      request: DeepPartial<SyncReq>,
      metadata?: grpc.Metadata,
    ): Promise<StreamItem> {
      return this.rpc.invoke(
        EventDestinationsSyncDesc,
        request,
        metadata,
      );
    }
  }

export const EventDestinationsDesc = {
      serviceName: "rpx.EventDestinations",
    };

export const EventDestinationsGetByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "GetByAccount",
      service: EventDestinationsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventDestinationGetByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EventDestinationList.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventDestinationsGetByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByID",
      service: EventDestinationsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventDestinationGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EventDestination.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventDestinationsCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: EventDestinationsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventDestinationCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EventDestination.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventDestinationsUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: EventDestinationsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventDestinationUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EventDestination.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventDestinationsDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: EventDestinationsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventDestinationDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventDestinationsDeleteByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteByAccount",
      service: EventDestinationsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventDestinationDeleteByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventDestinationsSyncDesc: UnaryMethodDefinitionish = {
      methodName: "Sync",
      service: EventDestinationsDesc,
      requestStream: false,
      responseStream: true,
      requestType: {
    serializeBinary() {
      return SyncReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...StreamItem.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export interface EventDestinationChecker {
Check(request: DeepPartial<EventDestinationCheckReq>,metadata?: grpc.Metadata): Promise<EventDestinationCheckResp>;
}

export class EventDestinationCheckerClientImpl implements EventDestinationChecker {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.Check = this.Check.bind(this);}

    Check(
      request: DeepPartial<EventDestinationCheckReq>,
      metadata?: grpc.Metadata,
    ): Promise<EventDestinationCheckResp> {
      return this.rpc.unary(
        EventDestinationCheckerCheckDesc,
        EventDestinationCheckReq.fromPartial(request),
        metadata,
      );
    }
  }

export const EventDestinationCheckerDesc = {
      serviceName: "rpx.EventDestinationChecker",
    };

export const EventDestinationCheckerCheckDesc: UnaryMethodDefinitionish = {
      methodName: "Check",
      service: EventDestinationCheckerDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventDestinationCheckReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EventDestinationCheckResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export interface EventStreamReports {
Stream(request: DeepPartial<EventLogConsumeReq>,metadata?: grpc.Metadata): Promise<EventLogConsumeResp>;
}

export class EventStreamReportsClientImpl implements EventStreamReports {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.Stream = this.Stream.bind(this);}

    Stream(
      request: DeepPartial<EventLogConsumeReq>,
      metadata?: grpc.Metadata,
    ): Promise<EventLogConsumeResp> {
      return this.rpc.invoke(
        EventStreamReportsStreamDesc,
        request,
        metadata,
      );
    }
  }

export const EventStreamReportsDesc = {
      serviceName: "rpx.EventStreamReports",
    };

export const EventStreamReportsStreamDesc: UnaryMethodDefinitionish = {
      methodName: "Stream",
      service: EventStreamReportsDesc,
      requestStream: false,
      responseStream: true,
      requestType: {
    serializeBinary() {
      return EventLogConsumeReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EventLogConsumeResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export interface EventSubscriptions {
GetByAccount(request: DeepPartial<EventSubscriptionGetByAccountReq>,metadata?: grpc.Metadata): Promise<EventSubscriptionList>;
GetByID(request: DeepPartial<EventSubscriptionGetByIDReq>,metadata?: grpc.Metadata): Promise<EventSubscription>;
Create(request: DeepPartial<EventSubscriptionCreateReq>,metadata?: grpc.Metadata): Promise<EventSubscription>;
Update(request: DeepPartial<EventSubscriptionUpdateReq>,metadata?: grpc.Metadata): Promise<EventSubscription>;
Delete(request: DeepPartial<EventSubscriptionDeleteReq>,metadata?: grpc.Metadata): Promise<Empty>;
DeleteByAccount(request: DeepPartial<EventSubscriptionDeleteByAccountReq>,metadata?: grpc.Metadata): Promise<Empty>;
/** Replication */
ReplicateAll(request: DeepPartial<EventSubscriptionReplicateAllReq>,metadata?: grpc.Metadata): Promise<EventSubscriptionReplicateAllResp>;
Sync(request: DeepPartial<SyncReq>,metadata?: grpc.Metadata): Promise<StreamItem>;
}

export class EventSubscriptionsClientImpl implements EventSubscriptions {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.GetByAccount = this.GetByAccount.bind(this);this.GetByID = this.GetByID.bind(this);this.Create = this.Create.bind(this);this.Update = this.Update.bind(this);this.Delete = this.Delete.bind(this);this.DeleteByAccount = this.DeleteByAccount.bind(this);this.ReplicateAll = this.ReplicateAll.bind(this);this.Sync = this.Sync.bind(this);}

    GetByAccount(
      request: DeepPartial<EventSubscriptionGetByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<EventSubscriptionList> {
      return this.rpc.unary(
        EventSubscriptionsGetByAccountDesc,
        EventSubscriptionGetByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByID(
      request: DeepPartial<EventSubscriptionGetByIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<EventSubscription> {
      return this.rpc.unary(
        EventSubscriptionsGetByIDDesc,
        EventSubscriptionGetByIDReq.fromPartial(request),
        metadata,
      );
    }
  
    Create(
      request: DeepPartial<EventSubscriptionCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<EventSubscription> {
      return this.rpc.unary(
        EventSubscriptionsCreateDesc,
        EventSubscriptionCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<EventSubscriptionUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<EventSubscription> {
      return this.rpc.unary(
        EventSubscriptionsUpdateDesc,
        EventSubscriptionUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<EventSubscriptionDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        EventSubscriptionsDeleteDesc,
        EventSubscriptionDeleteReq.fromPartial(request),
        metadata,
      );
    }
  
    DeleteByAccount(
      request: DeepPartial<EventSubscriptionDeleteByAccountReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        EventSubscriptionsDeleteByAccountDesc,
        EventSubscriptionDeleteByAccountReq.fromPartial(request),
        metadata,
      );
    }
  
    ReplicateAll(
      request: DeepPartial<EventSubscriptionReplicateAllReq>,
      metadata?: grpc.Metadata,
    ): Promise<EventSubscriptionReplicateAllResp> {
      return this.rpc.unary(
        EventSubscriptionsReplicateAllDesc,
        EventSubscriptionReplicateAllReq.fromPartial(request),
        metadata,
      );
    }
  
    Sync(
      request: DeepPartial<SyncReq>,
      metadata?: grpc.Metadata,
    ): Promise<StreamItem> {
      return this.rpc.invoke(
        EventSubscriptionsSyncDesc,
        request,
        metadata,
      );
    }
  }

export const EventSubscriptionsDesc = {
      serviceName: "rpx.EventSubscriptions",
    };

export const EventSubscriptionsGetByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "GetByAccount",
      service: EventSubscriptionsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventSubscriptionGetByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EventSubscriptionList.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventSubscriptionsGetByIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetByID",
      service: EventSubscriptionsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventSubscriptionGetByIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EventSubscription.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventSubscriptionsCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: EventSubscriptionsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventSubscriptionCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EventSubscription.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventSubscriptionsUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: EventSubscriptionsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventSubscriptionUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EventSubscription.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventSubscriptionsDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: EventSubscriptionsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventSubscriptionDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventSubscriptionsDeleteByAccountDesc: UnaryMethodDefinitionish = {
      methodName: "DeleteByAccount",
      service: EventSubscriptionsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventSubscriptionDeleteByAccountReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventSubscriptionsReplicateAllDesc: UnaryMethodDefinitionish = {
      methodName: "ReplicateAll",
      service: EventSubscriptionsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventSubscriptionReplicateAllReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EventSubscriptionReplicateAllResp.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventSubscriptionsSyncDesc: UnaryMethodDefinitionish = {
      methodName: "Sync",
      service: EventSubscriptionsDesc,
      requestStream: false,
      responseStream: true,
      requestType: {
    serializeBinary() {
      return SyncReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...StreamItem.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export interface EventSubscriptionSources {
Create(request: DeepPartial<EventSubscriptionSourceCreateReq>,metadata?: grpc.Metadata): Promise<EventSource>;
GetBySubscriptionID(request: DeepPartial<EventSubscriptionSourceGetBySubscriptionIDReq>,metadata?: grpc.Metadata): Promise<EventSourceList>;
GetByType(request: DeepPartial<EventSubscriptionSourceGetByTypeReq>,metadata?: grpc.Metadata): Promise<EventSource>;
Update(request: DeepPartial<EventSubscriptionSourceUpdateReq>,metadata?: grpc.Metadata): Promise<EventSource>;
Delete(request: DeepPartial<EventSubscriptionSourceDeleteReq>,metadata?: grpc.Metadata): Promise<Empty>;
}

export class EventSubscriptionSourcesClientImpl implements EventSubscriptionSources {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.Create = this.Create.bind(this);this.GetBySubscriptionID = this.GetBySubscriptionID.bind(this);this.GetByType = this.GetByType.bind(this);this.Update = this.Update.bind(this);this.Delete = this.Delete.bind(this);}

    Create(
      request: DeepPartial<EventSubscriptionSourceCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<EventSource> {
      return this.rpc.unary(
        EventSubscriptionSourcesCreateDesc,
        EventSubscriptionSourceCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    GetBySubscriptionID(
      request: DeepPartial<EventSubscriptionSourceGetBySubscriptionIDReq>,
      metadata?: grpc.Metadata,
    ): Promise<EventSourceList> {
      return this.rpc.unary(
        EventSubscriptionSourcesGetBySubscriptionIDDesc,
        EventSubscriptionSourceGetBySubscriptionIDReq.fromPartial(request),
        metadata,
      );
    }
  
    GetByType(
      request: DeepPartial<EventSubscriptionSourceGetByTypeReq>,
      metadata?: grpc.Metadata,
    ): Promise<EventSource> {
      return this.rpc.unary(
        EventSubscriptionSourcesGetByTypeDesc,
        EventSubscriptionSourceGetByTypeReq.fromPartial(request),
        metadata,
      );
    }
  
    Update(
      request: DeepPartial<EventSubscriptionSourceUpdateReq>,
      metadata?: grpc.Metadata,
    ): Promise<EventSource> {
      return this.rpc.unary(
        EventSubscriptionSourcesUpdateDesc,
        EventSubscriptionSourceUpdateReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<EventSubscriptionSourceDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        EventSubscriptionSourcesDeleteDesc,
        EventSubscriptionSourceDeleteReq.fromPartial(request),
        metadata,
      );
    }
  }

export const EventSubscriptionSourcesDesc = {
      serviceName: "rpx.EventSubscriptionSources",
    };

export const EventSubscriptionSourcesCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: EventSubscriptionSourcesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventSubscriptionSourceCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EventSource.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventSubscriptionSourcesGetBySubscriptionIDDesc: UnaryMethodDefinitionish = {
      methodName: "GetBySubscriptionID",
      service: EventSubscriptionSourcesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventSubscriptionSourceGetBySubscriptionIDReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EventSourceList.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventSubscriptionSourcesGetByTypeDesc: UnaryMethodDefinitionish = {
      methodName: "GetByType",
      service: EventSubscriptionSourcesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventSubscriptionSourceGetByTypeReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EventSource.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventSubscriptionSourcesUpdateDesc: UnaryMethodDefinitionish = {
      methodName: "Update",
      service: EventSubscriptionSourcesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventSubscriptionSourceUpdateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...EventSource.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventSubscriptionSourcesDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: EventSubscriptionSourcesDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventSubscriptionSourceDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export interface EventSubscriptionDestinations {
Create(request: DeepPartial<EventSubscriptionDestinationCreateReq>,metadata?: grpc.Metadata): Promise<Empty>;
Delete(request: DeepPartial<EventSubscriptionDestinationDeleteReq>,metadata?: grpc.Metadata): Promise<Empty>;
}

export class EventSubscriptionDestinationsClientImpl implements EventSubscriptionDestinations {
  
    private readonly rpc: Rpc;
    
    constructor(rpc: Rpc) {
  this.rpc = rpc;this.Create = this.Create.bind(this);this.Delete = this.Delete.bind(this);}

    Create(
      request: DeepPartial<EventSubscriptionDestinationCreateReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        EventSubscriptionDestinationsCreateDesc,
        EventSubscriptionDestinationCreateReq.fromPartial(request),
        metadata,
      );
    }
  
    Delete(
      request: DeepPartial<EventSubscriptionDestinationDeleteReq>,
      metadata?: grpc.Metadata,
    ): Promise<Empty> {
      return this.rpc.unary(
        EventSubscriptionDestinationsDeleteDesc,
        EventSubscriptionDestinationDeleteReq.fromPartial(request),
        metadata,
      );
    }
  }

export const EventSubscriptionDestinationsDesc = {
      serviceName: "rpx.EventSubscriptionDestinations",
    };

export const EventSubscriptionDestinationsCreateDesc: UnaryMethodDefinitionish = {
      methodName: "Create",
      service: EventSubscriptionDestinationsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventSubscriptionDestinationCreateReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

export const EventSubscriptionDestinationsDeleteDesc: UnaryMethodDefinitionish = {
      methodName: "Delete",
      service: EventSubscriptionDestinationsDesc,
      requestStream: false,
      responseStream: false,
      requestType: {
    serializeBinary() {
      return EventSubscriptionDestinationDeleteReq.encode(this).finish();
    },
  } as any,
      responseType: {
    deserializeBinary(data: Uint8Array) {
      return { ...Empty.decode(data), toObject() { return this; } };
    }
  } as any,
    };

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> { requestStream: any; responseStream: any; }

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
unary<T extends UnaryMethodDefinitionish>(
      methodDesc: T,
      request: any,
      metadata: grpc.Metadata | undefined,
    ): Promise<any>;
invoke(..._: any[]): Promise<any>;
}

export class GrpcWebImpl {
      private host: string;
      private options: 
    {
      transport?: grpc.TransportFactory,
      streamingTransport?: grpc.TransportFactory,
      debug?: boolean,
      metadata?: grpc.Metadata,
    }
  ;
      
      constructor(host: string, options: 
    {
      transport?: grpc.TransportFactory,
      streamingTransport?: grpc.TransportFactory,
      debug?: boolean,
      metadata?: grpc.Metadata,
    }
  ) {
        this.host = host;
        this.options = options;
      }
  
    unary<T extends UnaryMethodDefinitionish>(
      methodDesc: T,
      _request: any,
      metadata: grpc.Metadata | undefined
    ): Promise<any> {
      const request = { ..._request, ...methodDesc.requestType };
      const maybeCombinedMetadata =
        metadata && this.options.metadata
          ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
          : metadata || this.options.metadata;
      return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
          request,
          host: this.host,
          metadata: maybeCombinedMetadata,
          transport: this.options.transport,
          debug: this.options.debug,
          onEnd: function (response) {
            if (response.status === grpc.Code.OK) {
              resolve(response.message);
            } else {
              const err = new Error(response.statusMessage) as any;
              err.code = response.status;
              err.metadata = response.trailers;
              reject(err);
            }
          },
        });
      });
    }
  
    invoke(..._: any[]): Promise<any> {
      throw new Error('Unsupported.');
    }
  }

declare var self: any | undefined;
      declare var window: any | undefined;
      var globalThis: any = (() => {
        if (typeof globalThis !== "undefined") return globalThis;
        if (typeof self !== "undefined") return self;
        if (typeof window !== "undefined") return window;
        if (typeof global !== "undefined") return global;
        throw "Unable to locate global object";
      })();





type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
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
          throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER")
        }
        return long.toNumber();
      }



if (_m0.util.Long !== Long) {
        _m0.util.Long = Long as any;
        _m0.configure();
      }

