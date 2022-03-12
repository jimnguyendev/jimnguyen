// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { PasswordReset } from "../rpx/model";
import { BrowserHeaders } from "browser-headers";
import { ID } from "../pb/types";

export const protobufPackage = "rpx";

export interface PasswordResetListResp {
  passwordResets: PasswordReset[];
}

export interface PasswordResetsCreateReq {
  email: string;
}

export interface PasswordResetsGetByTokenReq {
  token: string;
}

export interface PasswordResetsRedeemReq {
  token: string;
  password: string;
}

export interface PasswordResetsGetByUserReq {
  userId: ID | undefined;
}

const basePasswordResetListResp: object = {};

export const PasswordResetListResp = {
  encode(
    message: PasswordResetListResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.passwordResets) {
      PasswordReset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PasswordResetListResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePasswordResetListResp } as PasswordResetListResp;
    message.passwordResets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.passwordResets.push(
            PasswordReset.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<PasswordResetListResp>
  ): PasswordResetListResp {
    const message = { ...basePasswordResetListResp } as PasswordResetListResp;
    message.passwordResets = [];
    if (object.passwordResets !== undefined && object.passwordResets !== null) {
      for (const e of object.passwordResets) {
        message.passwordResets.push(PasswordReset.fromPartial(e));
      }
    }
    return message;
  },
};

const basePasswordResetsCreateReq: object = { email: "" };

export const PasswordResetsCreateReq = {
  encode(
    message: PasswordResetsCreateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PasswordResetsCreateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePasswordResetsCreateReq,
    } as PasswordResetsCreateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<PasswordResetsCreateReq>
  ): PasswordResetsCreateReq {
    const message = {
      ...basePasswordResetsCreateReq,
    } as PasswordResetsCreateReq;
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    return message;
  },
};

const basePasswordResetsGetByTokenReq: object = { token: "" };

export const PasswordResetsGetByTokenReq = {
  encode(
    message: PasswordResetsGetByTokenReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PasswordResetsGetByTokenReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePasswordResetsGetByTokenReq,
    } as PasswordResetsGetByTokenReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<PasswordResetsGetByTokenReq>
  ): PasswordResetsGetByTokenReq {
    const message = {
      ...basePasswordResetsGetByTokenReq,
    } as PasswordResetsGetByTokenReq;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
};

const basePasswordResetsRedeemReq: object = { token: "", password: "" };

export const PasswordResetsRedeemReq = {
  encode(
    message: PasswordResetsRedeemReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PasswordResetsRedeemReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePasswordResetsRedeemReq,
    } as PasswordResetsRedeemReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<PasswordResetsRedeemReq>
  ): PasswordResetsRedeemReq {
    const message = {
      ...basePasswordResetsRedeemReq,
    } as PasswordResetsRedeemReq;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    } else {
      message.password = "";
    }
    return message;
  },
};

const basePasswordResetsGetByUserReq: object = {};

export const PasswordResetsGetByUserReq = {
  encode(
    message: PasswordResetsGetByUserReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PasswordResetsGetByUserReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePasswordResetsGetByUserReq,
    } as PasswordResetsGetByUserReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<PasswordResetsGetByUserReq>
  ): PasswordResetsGetByUserReq {
    const message = {
      ...basePasswordResetsGetByUserReq,
    } as PasswordResetsGetByUserReq;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    return message;
  },
};

/**
 * -------------------
 * PasswordResets
 * -------------------
 */
export interface PasswordResets {
  Create(
    request: DeepPartial<PasswordResetsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<PasswordReset>;
  GetByToken(
    request: DeepPartial<PasswordResetsGetByTokenReq>,
    metadata?: grpc.Metadata
  ): Promise<PasswordReset>;
  GetByUser(
    request: DeepPartial<PasswordResetsGetByUserReq>,
    metadata?: grpc.Metadata
  ): Promise<PasswordResetListResp>;
  Redeem(
    request: DeepPartial<PasswordResetsRedeemReq>,
    metadata?: grpc.Metadata
  ): Promise<PasswordReset>;
}

export class PasswordResetsClientImpl implements PasswordResets {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.GetByToken = this.GetByToken.bind(this);
    this.GetByUser = this.GetByUser.bind(this);
    this.Redeem = this.Redeem.bind(this);
  }

  Create(
    request: DeepPartial<PasswordResetsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<PasswordReset> {
    return this.rpc.unary(
      PasswordResetsCreateDesc,
      PasswordResetsCreateReq.fromPartial(request),
      metadata
    );
  }

  GetByToken(
    request: DeepPartial<PasswordResetsGetByTokenReq>,
    metadata?: grpc.Metadata
  ): Promise<PasswordReset> {
    return this.rpc.unary(
      PasswordResetsGetByTokenDesc,
      PasswordResetsGetByTokenReq.fromPartial(request),
      metadata
    );
  }

  GetByUser(
    request: DeepPartial<PasswordResetsGetByUserReq>,
    metadata?: grpc.Metadata
  ): Promise<PasswordResetListResp> {
    return this.rpc.unary(
      PasswordResetsGetByUserDesc,
      PasswordResetsGetByUserReq.fromPartial(request),
      metadata
    );
  }

  Redeem(
    request: DeepPartial<PasswordResetsRedeemReq>,
    metadata?: grpc.Metadata
  ): Promise<PasswordReset> {
    return this.rpc.unary(
      PasswordResetsRedeemDesc,
      PasswordResetsRedeemReq.fromPartial(request),
      metadata
    );
  }
}

export const PasswordResetsDesc = {
  serviceName: "rpx.PasswordResets",
};

export const PasswordResetsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: PasswordResetsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PasswordResetsCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...PasswordReset.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const PasswordResetsGetByTokenDesc: UnaryMethodDefinitionish = {
  methodName: "GetByToken",
  service: PasswordResetsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PasswordResetsGetByTokenReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...PasswordReset.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const PasswordResetsGetByUserDesc: UnaryMethodDefinitionish = {
  methodName: "GetByUser",
  service: PasswordResetsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PasswordResetsGetByUserReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...PasswordResetListResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const PasswordResetsRedeemDesc: UnaryMethodDefinitionish = {
  methodName: "Redeem",
  service: PasswordResetsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PasswordResetsRedeemReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...PasswordReset.decode(data),
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
