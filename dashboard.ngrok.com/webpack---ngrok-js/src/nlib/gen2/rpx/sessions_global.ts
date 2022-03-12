// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Session, Paging } from "../rpx/model";
import { Empty } from "../pb/types";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "rpx";

export interface SessionsGlobalGetByAccountReq {
  accountId: number;
  paging: Paging | undefined;
}

export interface SessionsGlobalGetByAccountResp {
  sessions: Session[];
  next: Paging | undefined;
}

export interface SessionsGlobalGetByIDReq {
  id: string;
  accountId: number;
}

export interface SessionsGlobalStopReq {
  id: string;
}

export interface SessionsGlobalRestartReq {
  id: string;
}

export interface SessionsGlobalUpdateReq {
  id: string;
  version: string;
}

export interface SessionsGlobalDisconnectReq {
  id: string;
  ignoreAccount: boolean;
}

export interface SessionsGlobalCountPerAccountReq {}

export interface SessionsGlobalCountPerAccountResp {
  result: { [key: number]: number };
}

export interface SessionsGlobalCountPerAccountResp_ResultEntry {
  key: number;
  value: number;
}

export interface SessionsGlobalGetByLBAddrResp {
  sessions: string[];
}

export interface SessionsGlobalGetByLBAddrReq {
  lbAddr: string;
}

const baseSessionsGlobalGetByAccountReq: object = { accountId: 0 };

export const SessionsGlobalGetByAccountReq = {
  encode(
    message: SessionsGlobalGetByAccountReq,
    writer: _m0.Writer = _m0.Writer.create()
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
    length?: number
  ): SessionsGlobalGetByAccountReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSessionsGlobalGetByAccountReq,
    } as SessionsGlobalGetByAccountReq;
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

  fromPartial(
    object: DeepPartial<SessionsGlobalGetByAccountReq>
  ): SessionsGlobalGetByAccountReq {
    const message = {
      ...baseSessionsGlobalGetByAccountReq,
    } as SessionsGlobalGetByAccountReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    if (object.paging !== undefined && object.paging !== null) {
      message.paging = Paging.fromPartial(object.paging);
    } else {
      message.paging = undefined;
    }
    return message;
  },
};

const baseSessionsGlobalGetByAccountResp: object = {};

export const SessionsGlobalGetByAccountResp = {
  encode(
    message: SessionsGlobalGetByAccountResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.next !== undefined) {
      Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SessionsGlobalGetByAccountResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSessionsGlobalGetByAccountResp,
    } as SessionsGlobalGetByAccountResp;
    message.sessions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessions.push(Session.decode(reader, reader.uint32()));
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

  fromPartial(
    object: DeepPartial<SessionsGlobalGetByAccountResp>
  ): SessionsGlobalGetByAccountResp {
    const message = {
      ...baseSessionsGlobalGetByAccountResp,
    } as SessionsGlobalGetByAccountResp;
    message.sessions = [];
    if (object.sessions !== undefined && object.sessions !== null) {
      for (const e of object.sessions) {
        message.sessions.push(Session.fromPartial(e));
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

const baseSessionsGlobalGetByIDReq: object = { id: "", accountId: 0 };

export const SessionsGlobalGetByIDReq = {
  encode(
    message: SessionsGlobalGetByIDReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).int64(message.accountId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SessionsGlobalGetByIDReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSessionsGlobalGetByIDReq,
    } as SessionsGlobalGetByIDReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
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

  fromPartial(
    object: DeepPartial<SessionsGlobalGetByIDReq>
  ): SessionsGlobalGetByIDReq {
    const message = {
      ...baseSessionsGlobalGetByIDReq,
    } as SessionsGlobalGetByIDReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    return message;
  },
};

const baseSessionsGlobalStopReq: object = { id: "" };

export const SessionsGlobalStopReq = {
  encode(
    message: SessionsGlobalStopReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SessionsGlobalStopReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSessionsGlobalStopReq } as SessionsGlobalStopReq;
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

  fromPartial(
    object: DeepPartial<SessionsGlobalStopReq>
  ): SessionsGlobalStopReq {
    const message = { ...baseSessionsGlobalStopReq } as SessionsGlobalStopReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseSessionsGlobalRestartReq: object = { id: "" };

export const SessionsGlobalRestartReq = {
  encode(
    message: SessionsGlobalRestartReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SessionsGlobalRestartReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSessionsGlobalRestartReq,
    } as SessionsGlobalRestartReq;
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

  fromPartial(
    object: DeepPartial<SessionsGlobalRestartReq>
  ): SessionsGlobalRestartReq {
    const message = {
      ...baseSessionsGlobalRestartReq,
    } as SessionsGlobalRestartReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseSessionsGlobalUpdateReq: object = { id: "", version: "" };

export const SessionsGlobalUpdateReq = {
  encode(
    message: SessionsGlobalUpdateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SessionsGlobalUpdateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSessionsGlobalUpdateReq,
    } as SessionsGlobalUpdateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<SessionsGlobalUpdateReq>
  ): SessionsGlobalUpdateReq {
    const message = {
      ...baseSessionsGlobalUpdateReq,
    } as SessionsGlobalUpdateReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = "";
    }
    return message;
  },
};

const baseSessionsGlobalDisconnectReq: object = {
  id: "",
  ignoreAccount: false,
};

export const SessionsGlobalDisconnectReq = {
  encode(
    message: SessionsGlobalDisconnectReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.ignoreAccount === true) {
      writer.uint32(16).bool(message.ignoreAccount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SessionsGlobalDisconnectReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSessionsGlobalDisconnectReq,
    } as SessionsGlobalDisconnectReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.ignoreAccount = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<SessionsGlobalDisconnectReq>
  ): SessionsGlobalDisconnectReq {
    const message = {
      ...baseSessionsGlobalDisconnectReq,
    } as SessionsGlobalDisconnectReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.ignoreAccount !== undefined && object.ignoreAccount !== null) {
      message.ignoreAccount = object.ignoreAccount;
    } else {
      message.ignoreAccount = false;
    }
    return message;
  },
};

const baseSessionsGlobalCountPerAccountReq: object = {};

export const SessionsGlobalCountPerAccountReq = {
  encode(
    _: SessionsGlobalCountPerAccountReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SessionsGlobalCountPerAccountReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSessionsGlobalCountPerAccountReq,
    } as SessionsGlobalCountPerAccountReq;
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

  fromPartial(
    _: DeepPartial<SessionsGlobalCountPerAccountReq>
  ): SessionsGlobalCountPerAccountReq {
    const message = {
      ...baseSessionsGlobalCountPerAccountReq,
    } as SessionsGlobalCountPerAccountReq;
    return message;
  },
};

const baseSessionsGlobalCountPerAccountResp: object = {};

export const SessionsGlobalCountPerAccountResp = {
  encode(
    message: SessionsGlobalCountPerAccountResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.result).forEach(([key, value]) => {
      SessionsGlobalCountPerAccountResp_ResultEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SessionsGlobalCountPerAccountResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSessionsGlobalCountPerAccountResp,
    } as SessionsGlobalCountPerAccountResp;
    message.result = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = SessionsGlobalCountPerAccountResp_ResultEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.result[entry1.key] = entry1.value;
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
    object: DeepPartial<SessionsGlobalCountPerAccountResp>
  ): SessionsGlobalCountPerAccountResp {
    const message = {
      ...baseSessionsGlobalCountPerAccountResp,
    } as SessionsGlobalCountPerAccountResp;
    message.result = {};
    if (object.result !== undefined && object.result !== null) {
      Object.entries(object.result).forEach(([key, value]) => {
        if (value !== undefined) {
          message.result[Number(key)] = Number(value);
        }
      });
    }
    return message;
  },
};

const baseSessionsGlobalCountPerAccountResp_ResultEntry: object = {
  key: 0,
  value: 0,
};

export const SessionsGlobalCountPerAccountResp_ResultEntry = {
  encode(
    message: SessionsGlobalCountPerAccountResp_ResultEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SessionsGlobalCountPerAccountResp_ResultEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSessionsGlobalCountPerAccountResp_ResultEntry,
    } as SessionsGlobalCountPerAccountResp_ResultEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.value = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<SessionsGlobalCountPerAccountResp_ResultEntry>
  ): SessionsGlobalCountPerAccountResp_ResultEntry {
    const message = {
      ...baseSessionsGlobalCountPerAccountResp_ResultEntry,
    } as SessionsGlobalCountPerAccountResp_ResultEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseSessionsGlobalGetByLBAddrResp: object = { sessions: "" };

export const SessionsGlobalGetByLBAddrResp = {
  encode(
    message: SessionsGlobalGetByLBAddrResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.sessions) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SessionsGlobalGetByLBAddrResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSessionsGlobalGetByLBAddrResp,
    } as SessionsGlobalGetByLBAddrResp;
    message.sessions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.sessions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<SessionsGlobalGetByLBAddrResp>
  ): SessionsGlobalGetByLBAddrResp {
    const message = {
      ...baseSessionsGlobalGetByLBAddrResp,
    } as SessionsGlobalGetByLBAddrResp;
    message.sessions = [];
    if (object.sessions !== undefined && object.sessions !== null) {
      for (const e of object.sessions) {
        message.sessions.push(e);
      }
    }
    return message;
  },
};

const baseSessionsGlobalGetByLBAddrReq: object = { lbAddr: "" };

export const SessionsGlobalGetByLBAddrReq = {
  encode(
    message: SessionsGlobalGetByLBAddrReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lbAddr !== "") {
      writer.uint32(10).string(message.lbAddr);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SessionsGlobalGetByLBAddrReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSessionsGlobalGetByLBAddrReq,
    } as SessionsGlobalGetByLBAddrReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lbAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<SessionsGlobalGetByLBAddrReq>
  ): SessionsGlobalGetByLBAddrReq {
    const message = {
      ...baseSessionsGlobalGetByLBAddrReq,
    } as SessionsGlobalGetByLBAddrReq;
    if (object.lbAddr !== undefined && object.lbAddr !== null) {
      message.lbAddr = object.lbAddr;
    } else {
      message.lbAddr = "";
    }
    return message;
  },
};

export interface SessionsGlobal {
  GetByAccount(
    request: DeepPartial<SessionsGlobalGetByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<SessionsGlobalGetByAccountResp>;
  GetByID(
    request: DeepPartial<SessionsGlobalGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Session>;
  GetByLBAddr(
    request: DeepPartial<SessionsGlobalGetByLBAddrReq>,
    metadata?: grpc.Metadata
  ): Promise<SessionsGlobalGetByLBAddrResp>;
  Stop(
    request: DeepPartial<SessionsGlobalStopReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  Restart(
    request: DeepPartial<SessionsGlobalRestartReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  Update(
    request: DeepPartial<SessionsGlobalUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  Disconnect(
    request: DeepPartial<SessionsGlobalDisconnectReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  CountPerAccount(
    request: DeepPartial<SessionsGlobalCountPerAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<SessionsGlobalCountPerAccountResp>;
}

export class SessionsGlobalClientImpl implements SessionsGlobal {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetByAccount = this.GetByAccount.bind(this);
    this.GetByID = this.GetByID.bind(this);
    this.GetByLBAddr = this.GetByLBAddr.bind(this);
    this.Stop = this.Stop.bind(this);
    this.Restart = this.Restart.bind(this);
    this.Update = this.Update.bind(this);
    this.Disconnect = this.Disconnect.bind(this);
    this.CountPerAccount = this.CountPerAccount.bind(this);
  }

  GetByAccount(
    request: DeepPartial<SessionsGlobalGetByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<SessionsGlobalGetByAccountResp> {
    return this.rpc.unary(
      SessionsGlobalGetByAccountDesc,
      SessionsGlobalGetByAccountReq.fromPartial(request),
      metadata
    );
  }

  GetByID(
    request: DeepPartial<SessionsGlobalGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Session> {
    return this.rpc.unary(
      SessionsGlobalGetByIDDesc,
      SessionsGlobalGetByIDReq.fromPartial(request),
      metadata
    );
  }

  GetByLBAddr(
    request: DeepPartial<SessionsGlobalGetByLBAddrReq>,
    metadata?: grpc.Metadata
  ): Promise<SessionsGlobalGetByLBAddrResp> {
    return this.rpc.unary(
      SessionsGlobalGetByLBAddrDesc,
      SessionsGlobalGetByLBAddrReq.fromPartial(request),
      metadata
    );
  }

  Stop(
    request: DeepPartial<SessionsGlobalStopReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      SessionsGlobalStopDesc,
      SessionsGlobalStopReq.fromPartial(request),
      metadata
    );
  }

  Restart(
    request: DeepPartial<SessionsGlobalRestartReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      SessionsGlobalRestartDesc,
      SessionsGlobalRestartReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<SessionsGlobalUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      SessionsGlobalUpdateDesc,
      SessionsGlobalUpdateReq.fromPartial(request),
      metadata
    );
  }

  Disconnect(
    request: DeepPartial<SessionsGlobalDisconnectReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      SessionsGlobalDisconnectDesc,
      SessionsGlobalDisconnectReq.fromPartial(request),
      metadata
    );
  }

  CountPerAccount(
    request: DeepPartial<SessionsGlobalCountPerAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<SessionsGlobalCountPerAccountResp> {
    return this.rpc.unary(
      SessionsGlobalCountPerAccountDesc,
      SessionsGlobalCountPerAccountReq.fromPartial(request),
      metadata
    );
  }
}

export const SessionsGlobalDesc = {
  serviceName: "rpx.SessionsGlobal",
};

export const SessionsGlobalGetByAccountDesc: UnaryMethodDefinitionish = {
  methodName: "GetByAccount",
  service: SessionsGlobalDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SessionsGlobalGetByAccountReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...SessionsGlobalGetByAccountResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const SessionsGlobalGetByIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetByID",
  service: SessionsGlobalDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SessionsGlobalGetByIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Session.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const SessionsGlobalGetByLBAddrDesc: UnaryMethodDefinitionish = {
  methodName: "GetByLBAddr",
  service: SessionsGlobalDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SessionsGlobalGetByLBAddrReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...SessionsGlobalGetByLBAddrResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const SessionsGlobalStopDesc: UnaryMethodDefinitionish = {
  methodName: "Stop",
  service: SessionsGlobalDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SessionsGlobalStopReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const SessionsGlobalRestartDesc: UnaryMethodDefinitionish = {
  methodName: "Restart",
  service: SessionsGlobalDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SessionsGlobalRestartReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const SessionsGlobalUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: SessionsGlobalDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SessionsGlobalUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const SessionsGlobalDisconnectDesc: UnaryMethodDefinitionish = {
  methodName: "Disconnect",
  service: SessionsGlobalDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SessionsGlobalDisconnectReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Empty.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const SessionsGlobalCountPerAccountDesc: UnaryMethodDefinitionish = {
  methodName: "CountPerAccount",
  service: SessionsGlobalDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SessionsGlobalCountPerAccountReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...SessionsGlobalCountPerAccountResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR
  extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
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
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
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
