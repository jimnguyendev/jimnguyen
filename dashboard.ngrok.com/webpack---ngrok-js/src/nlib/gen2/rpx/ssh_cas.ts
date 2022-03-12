// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { CertKeyType, SSHCA, Paging } from "../rpx/model";
import { Empty, ID, OptString } from "../pb/types";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "rpx";

export interface SSHCAsGetByIDReq {
  id: ID | undefined;
  accountId: number;
}

export interface SSHCAsGetByAccountReq {
  accountId: number;
  paging: Paging | undefined;
}

export interface SSHCAListResp {
  sshcas: SSHCA[];
  next: Paging | undefined;
}

export interface SSHCAsCreateReq {
  keyType: CertKeyType;
  keySize: SSHCAsCreateReq_KeySize;
  ellipticCurve: SSHCAsCreateReq_EllipticCurve;
  accountId: number;
  description: string;
  metadata: string;
}

export enum SSHCAsCreateReq_KeySize {
  KEY_SIZE_UNDEFINED = 0,
  KEY_SIZE_2048 = 1,
  KEY_SIZE_4096 = 2,
}

export enum SSHCAsCreateReq_EllipticCurve {
  ELLIPTIC_CURVE_UNDEFINED = 0,
  ELLIPTIC_CURVE_P256 = 1,
  ELLIPTIC_CURVE_P384 = 2,
  ELLIPTIC_CURVE_P521 = 3,
}

export interface SSHCAsUpdateReq {
  id: ID | undefined;
  description: OptString | undefined;
  metadata: OptString | undefined;
}

export interface SSHCAsDeleteReq {
  id: ID | undefined;
}

export interface SSHCAsDeleteByAccountReq {
  accountId: number;
}

const baseSSHCAsGetByIDReq: object = { accountId: 0 };

export const SSHCAsGetByIDReq = {
  encode(
    message: SSHCAsGetByIDReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountId !== 0) {
      writer.uint32(16).int64(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SSHCAsGetByIDReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSSHCAsGetByIDReq } as SSHCAsGetByIDReq;
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

  fromPartial(object: DeepPartial<SSHCAsGetByIDReq>): SSHCAsGetByIDReq {
    const message = { ...baseSSHCAsGetByIDReq } as SSHCAsGetByIDReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    return message;
  },
};

const baseSSHCAsGetByAccountReq: object = { accountId: 0 };

export const SSHCAsGetByAccountReq = {
  encode(
    message: SSHCAsGetByAccountReq,
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
  ): SSHCAsGetByAccountReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSSHCAsGetByAccountReq } as SSHCAsGetByAccountReq;
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
    object: DeepPartial<SSHCAsGetByAccountReq>
  ): SSHCAsGetByAccountReq {
    const message = { ...baseSSHCAsGetByAccountReq } as SSHCAsGetByAccountReq;
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

const baseSSHCAListResp: object = {};

export const SSHCAListResp = {
  encode(
    message: SSHCAListResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.sshcas) {
      SSHCA.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.next !== undefined) {
      Paging.encode(message.next, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SSHCAListResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSSHCAListResp } as SSHCAListResp;
    message.sshcas = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sshcas.push(SSHCA.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<SSHCAListResp>): SSHCAListResp {
    const message = { ...baseSSHCAListResp } as SSHCAListResp;
    message.sshcas = [];
    if (object.sshcas !== undefined && object.sshcas !== null) {
      for (const e of object.sshcas) {
        message.sshcas.push(SSHCA.fromPartial(e));
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

const baseSSHCAsCreateReq: object = {
  keyType: 0,
  keySize: 0,
  ellipticCurve: 0,
  accountId: 0,
  description: "",
  metadata: "",
};

export const SSHCAsCreateReq = {
  encode(
    message: SSHCAsCreateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyType !== 0) {
      writer.uint32(8).int32(message.keyType);
    }
    if (message.keySize !== 0) {
      writer.uint32(16).int32(message.keySize);
    }
    if (message.ellipticCurve !== 0) {
      writer.uint32(24).int32(message.ellipticCurve);
    }
    if (message.accountId !== 0) {
      writer.uint32(32).int64(message.accountId);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.metadata !== "") {
      writer.uint32(50).string(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SSHCAsCreateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSSHCAsCreateReq } as SSHCAsCreateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyType = reader.int32() as any;
          break;
        case 2:
          message.keySize = reader.int32() as any;
          break;
        case 3:
          message.ellipticCurve = reader.int32() as any;
          break;
        case 4:
          message.accountId = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<SSHCAsCreateReq>): SSHCAsCreateReq {
    const message = { ...baseSSHCAsCreateReq } as SSHCAsCreateReq;
    if (object.keyType !== undefined && object.keyType !== null) {
      message.keyType = object.keyType;
    } else {
      message.keyType = 0;
    }
    if (object.keySize !== undefined && object.keySize !== null) {
      message.keySize = object.keySize;
    } else {
      message.keySize = 0;
    }
    if (object.ellipticCurve !== undefined && object.ellipticCurve !== null) {
      message.ellipticCurve = object.ellipticCurve;
    } else {
      message.ellipticCurve = 0;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
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
    return message;
  },
};

const baseSSHCAsUpdateReq: object = {};

export const SSHCAsUpdateReq = {
  encode(
    message: SSHCAsUpdateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.description !== undefined) {
      OptString.encode(message.description, writer.uint32(34).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      OptString.encode(message.metadata, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SSHCAsUpdateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSSHCAsUpdateReq } as SSHCAsUpdateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        case 4:
          message.description = OptString.decode(reader, reader.uint32());
          break;
        case 5:
          message.metadata = OptString.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<SSHCAsUpdateReq>): SSHCAsUpdateReq {
    const message = { ...baseSSHCAsUpdateReq } as SSHCAsUpdateReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = OptString.fromPartial(object.description);
    } else {
      message.description = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = OptString.fromPartial(object.metadata);
    } else {
      message.metadata = undefined;
    }
    return message;
  },
};

const baseSSHCAsDeleteReq: object = {};

export const SSHCAsDeleteReq = {
  encode(
    message: SSHCAsDeleteReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SSHCAsDeleteReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSSHCAsDeleteReq } as SSHCAsDeleteReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<SSHCAsDeleteReq>): SSHCAsDeleteReq {
    const message = { ...baseSSHCAsDeleteReq } as SSHCAsDeleteReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

const baseSSHCAsDeleteByAccountReq: object = { accountId: 0 };

export const SSHCAsDeleteByAccountReq = {
  encode(
    message: SSHCAsDeleteByAccountReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).int64(message.accountId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SSHCAsDeleteByAccountReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSSHCAsDeleteByAccountReq,
    } as SSHCAsDeleteByAccountReq;
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

  fromPartial(
    object: DeepPartial<SSHCAsDeleteByAccountReq>
  ): SSHCAsDeleteByAccountReq {
    const message = {
      ...baseSSHCAsDeleteByAccountReq,
    } as SSHCAsDeleteByAccountReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = object.accountId;
    } else {
      message.accountId = 0;
    }
    return message;
  },
};

/** This service stores SSH certificate authorities. */
export interface SSHCAs {
  GetByID(
    request: DeepPartial<SSHCAsGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCA>;
  GetByAccount(
    request: DeepPartial<SSHCAsGetByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCAListResp>;
  Create(
    request: DeepPartial<SSHCAsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCA>;
  Update(
    request: DeepPartial<SSHCAsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCA>;
  Delete(
    request: DeepPartial<SSHCAsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCA>;
  DeleteByAccount(
    request: DeepPartial<SSHCAsDeleteByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
}

export class SSHCAsClientImpl implements SSHCAs {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetByID = this.GetByID.bind(this);
    this.GetByAccount = this.GetByAccount.bind(this);
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
    this.DeleteByAccount = this.DeleteByAccount.bind(this);
  }

  GetByID(
    request: DeepPartial<SSHCAsGetByIDReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCA> {
    return this.rpc.unary(
      SSHCAsGetByIDDesc,
      SSHCAsGetByIDReq.fromPartial(request),
      metadata
    );
  }

  GetByAccount(
    request: DeepPartial<SSHCAsGetByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCAListResp> {
    return this.rpc.unary(
      SSHCAsGetByAccountDesc,
      SSHCAsGetByAccountReq.fromPartial(request),
      metadata
    );
  }

  Create(
    request: DeepPartial<SSHCAsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCA> {
    return this.rpc.unary(
      SSHCAsCreateDesc,
      SSHCAsCreateReq.fromPartial(request),
      metadata
    );
  }

  Update(
    request: DeepPartial<SSHCAsUpdateReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCA> {
    return this.rpc.unary(
      SSHCAsUpdateDesc,
      SSHCAsUpdateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<SSHCAsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<SSHCA> {
    return this.rpc.unary(
      SSHCAsDeleteDesc,
      SSHCAsDeleteReq.fromPartial(request),
      metadata
    );
  }

  DeleteByAccount(
    request: DeepPartial<SSHCAsDeleteByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      SSHCAsDeleteByAccountDesc,
      SSHCAsDeleteByAccountReq.fromPartial(request),
      metadata
    );
  }
}

export const SSHCAsDesc = {
  serviceName: "rpx.SSHCAs",
};

export const SSHCAsGetByIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetByID",
  service: SSHCAsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SSHCAsGetByIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...SSHCA.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const SSHCAsGetByAccountDesc: UnaryMethodDefinitionish = {
  methodName: "GetByAccount",
  service: SSHCAsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SSHCAsGetByAccountReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...SSHCAListResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const SSHCAsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: SSHCAsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SSHCAsCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...SSHCA.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const SSHCAsUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: SSHCAsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SSHCAsUpdateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...SSHCA.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const SSHCAsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: SSHCAsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SSHCAsDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...SSHCA.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const SSHCAsDeleteByAccountDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteByAccount",
  service: SSHCAsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SSHCAsDeleteByAccountReq.encode(this).finish();
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
