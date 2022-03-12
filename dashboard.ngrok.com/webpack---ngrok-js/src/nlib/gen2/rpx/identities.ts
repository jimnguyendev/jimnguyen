// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import {
  IdentityProvider,
  Identity,
  PasswordIdentity,
  GoogleIdentity,
  GithubIdentity,
} from "../rpx/model";
import { BrowserHeaders } from "browser-headers";
import { ID } from "../pb/types";
import { Account } from "../rpx/model_account";
import { EnrichedError } from "../pb/enriched_error";

export const protobufPackage = "rpx";

export interface IdentitiesCreateReq {
  userId: ID | undefined;
  password: PasswordIdentity | undefined;
  google: GoogleIdentity | undefined;
  github: GithubIdentity | undefined;
}

export interface IdentitiesCreateResp {
  ident: Identity | undefined;
  /**
   * when an identity is created, the owning user may be automatically
   * added to accounts (e.g. if the user connects with Google and there is an
   * account configured to add all users with that Google Apps domain)
   */
  accountsJoined: Account[];
  /**
   * when an identity is added, the system may attempt to add you to other accounts.
   * if we fail to add you to those accounts (e.g. because they are over the limit, those
   * errors are included here)
   */
  joinErrors: EnrichedError[];
}

export interface IdentitiesDeleteReq {
  identId: ID | undefined;
  userId: ID | undefined;
  /**
   * XXX: deprecate when complete account delete becomes a service call
   * delete even if this the user's last identity, only for complete account deletion
   */
  force: boolean;
}

export interface IdentitiesGetByUserReq {
  userId: ID | undefined;
}

export interface IdentitiesGetByUserResp {
  idents: Identity[];
}

export interface IdentitiesGetByProviderForUserReq {
  userId: ID | undefined;
  provider: IdentityProvider;
}

export interface IdentitiesGetByProviderIDReq {
  providerId: string;
  provider: IdentityProvider;
}

const baseIdentitiesCreateReq: object = {};

export const IdentitiesCreateReq = {
  encode(
    message: IdentitiesCreateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(42).fork()).ldelim();
    }
    if (message.password !== undefined) {
      PasswordIdentity.encode(
        message.password,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.google !== undefined) {
      GoogleIdentity.encode(message.google, writer.uint32(26).fork()).ldelim();
    }
    if (message.github !== undefined) {
      GithubIdentity.encode(message.github, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IdentitiesCreateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIdentitiesCreateReq } as IdentitiesCreateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.password = PasswordIdentity.decode(reader, reader.uint32());
          break;
        case 3:
          message.google = GoogleIdentity.decode(reader, reader.uint32());
          break;
        case 4:
          message.github = GithubIdentity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<IdentitiesCreateReq>): IdentitiesCreateReq {
    const message = { ...baseIdentitiesCreateReq } as IdentitiesCreateReq;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = PasswordIdentity.fromPartial(object.password);
    } else {
      message.password = undefined;
    }
    if (object.google !== undefined && object.google !== null) {
      message.google = GoogleIdentity.fromPartial(object.google);
    } else {
      message.google = undefined;
    }
    if (object.github !== undefined && object.github !== null) {
      message.github = GithubIdentity.fromPartial(object.github);
    } else {
      message.github = undefined;
    }
    return message;
  },
};

const baseIdentitiesCreateResp: object = {};

export const IdentitiesCreateResp = {
  encode(
    message: IdentitiesCreateResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ident !== undefined) {
      Identity.encode(message.ident, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.accountsJoined) {
      Account.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.joinErrors) {
      EnrichedError.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IdentitiesCreateResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIdentitiesCreateResp } as IdentitiesCreateResp;
    message.accountsJoined = [];
    message.joinErrors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ident = Identity.decode(reader, reader.uint32());
          break;
        case 2:
          message.accountsJoined.push(Account.decode(reader, reader.uint32()));
          break;
        case 3:
          message.joinErrors.push(
            EnrichedError.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<IdentitiesCreateResp>): IdentitiesCreateResp {
    const message = { ...baseIdentitiesCreateResp } as IdentitiesCreateResp;
    message.accountsJoined = [];
    message.joinErrors = [];
    if (object.ident !== undefined && object.ident !== null) {
      message.ident = Identity.fromPartial(object.ident);
    } else {
      message.ident = undefined;
    }
    if (object.accountsJoined !== undefined && object.accountsJoined !== null) {
      for (const e of object.accountsJoined) {
        message.accountsJoined.push(Account.fromPartial(e));
      }
    }
    if (object.joinErrors !== undefined && object.joinErrors !== null) {
      for (const e of object.joinErrors) {
        message.joinErrors.push(EnrichedError.fromPartial(e));
      }
    }
    return message;
  },
};

const baseIdentitiesDeleteReq: object = { force: false };

export const IdentitiesDeleteReq = {
  encode(
    message: IdentitiesDeleteReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identId !== undefined) {
      ID.encode(message.identId, writer.uint32(34).fork()).ldelim();
    }
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(42).fork()).ldelim();
    }
    if (message.force === true) {
      writer.uint32(24).bool(message.force);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IdentitiesDeleteReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIdentitiesDeleteReq } as IdentitiesDeleteReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.identId = ID.decode(reader, reader.uint32());
          break;
        case 5:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        case 3:
          message.force = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<IdentitiesDeleteReq>): IdentitiesDeleteReq {
    const message = { ...baseIdentitiesDeleteReq } as IdentitiesDeleteReq;
    if (object.identId !== undefined && object.identId !== null) {
      message.identId = ID.fromPartial(object.identId);
    } else {
      message.identId = undefined;
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    if (object.force !== undefined && object.force !== null) {
      message.force = object.force;
    } else {
      message.force = false;
    }
    return message;
  },
};

const baseIdentitiesGetByUserReq: object = {};

export const IdentitiesGetByUserReq = {
  encode(
    message: IdentitiesGetByUserReq,
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
  ): IdentitiesGetByUserReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIdentitiesGetByUserReq } as IdentitiesGetByUserReq;
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
    object: DeepPartial<IdentitiesGetByUserReq>
  ): IdentitiesGetByUserReq {
    const message = { ...baseIdentitiesGetByUserReq } as IdentitiesGetByUserReq;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    return message;
  },
};

const baseIdentitiesGetByUserResp: object = {};

export const IdentitiesGetByUserResp = {
  encode(
    message: IdentitiesGetByUserResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.idents) {
      Identity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IdentitiesGetByUserResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseIdentitiesGetByUserResp,
    } as IdentitiesGetByUserResp;
    message.idents = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idents.push(Identity.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<IdentitiesGetByUserResp>
  ): IdentitiesGetByUserResp {
    const message = {
      ...baseIdentitiesGetByUserResp,
    } as IdentitiesGetByUserResp;
    message.idents = [];
    if (object.idents !== undefined && object.idents !== null) {
      for (const e of object.idents) {
        message.idents.push(Identity.fromPartial(e));
      }
    }
    return message;
  },
};

const baseIdentitiesGetByProviderForUserReq: object = { provider: 0 };

export const IdentitiesGetByProviderForUserReq = {
  encode(
    message: IdentitiesGetByProviderForUserReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(26).fork()).ldelim();
    }
    if (message.provider !== 0) {
      writer.uint32(16).int32(message.provider);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IdentitiesGetByProviderForUserReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseIdentitiesGetByProviderForUserReq,
    } as IdentitiesGetByProviderForUserReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.provider = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<IdentitiesGetByProviderForUserReq>
  ): IdentitiesGetByProviderForUserReq {
    const message = {
      ...baseIdentitiesGetByProviderForUserReq,
    } as IdentitiesGetByProviderForUserReq;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = 0;
    }
    return message;
  },
};

const baseIdentitiesGetByProviderIDReq: object = {
  providerId: "",
  provider: 0,
};

export const IdentitiesGetByProviderIDReq = {
  encode(
    message: IdentitiesGetByProviderIDReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.providerId !== "") {
      writer.uint32(10).string(message.providerId);
    }
    if (message.provider !== 0) {
      writer.uint32(16).int32(message.provider);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IdentitiesGetByProviderIDReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseIdentitiesGetByProviderIDReq,
    } as IdentitiesGetByProviderIDReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerId = reader.string();
          break;
        case 2:
          message.provider = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<IdentitiesGetByProviderIDReq>
  ): IdentitiesGetByProviderIDReq {
    const message = {
      ...baseIdentitiesGetByProviderIDReq,
    } as IdentitiesGetByProviderIDReq;
    if (object.providerId !== undefined && object.providerId !== null) {
      message.providerId = object.providerId;
    } else {
      message.providerId = "";
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = 0;
    }
    return message;
  },
};

/**
 * -------------------
 * Identities
 * -------------------
 */
export interface Identities {
  Create(
    request: DeepPartial<IdentitiesCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<IdentitiesCreateResp>;
  Delete(
    request: DeepPartial<IdentitiesDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Identity>;
  GetByUser(
    request: DeepPartial<IdentitiesGetByUserReq>,
    metadata?: grpc.Metadata
  ): Promise<IdentitiesGetByUserResp>;
  GetByProviderForUser(
    request: DeepPartial<IdentitiesGetByProviderForUserReq>,
    metadata?: grpc.Metadata
  ): Promise<Identity>;
  GetByProviderID(
    request: DeepPartial<IdentitiesGetByProviderIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Identity>;
}

export class IdentitiesClientImpl implements Identities {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Delete = this.Delete.bind(this);
    this.GetByUser = this.GetByUser.bind(this);
    this.GetByProviderForUser = this.GetByProviderForUser.bind(this);
    this.GetByProviderID = this.GetByProviderID.bind(this);
  }

  Create(
    request: DeepPartial<IdentitiesCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<IdentitiesCreateResp> {
    return this.rpc.unary(
      IdentitiesCreateDesc,
      IdentitiesCreateReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<IdentitiesDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<Identity> {
    return this.rpc.unary(
      IdentitiesDeleteDesc,
      IdentitiesDeleteReq.fromPartial(request),
      metadata
    );
  }

  GetByUser(
    request: DeepPartial<IdentitiesGetByUserReq>,
    metadata?: grpc.Metadata
  ): Promise<IdentitiesGetByUserResp> {
    return this.rpc.unary(
      IdentitiesGetByUserDesc,
      IdentitiesGetByUserReq.fromPartial(request),
      metadata
    );
  }

  GetByProviderForUser(
    request: DeepPartial<IdentitiesGetByProviderForUserReq>,
    metadata?: grpc.Metadata
  ): Promise<Identity> {
    return this.rpc.unary(
      IdentitiesGetByProviderForUserDesc,
      IdentitiesGetByProviderForUserReq.fromPartial(request),
      metadata
    );
  }

  GetByProviderID(
    request: DeepPartial<IdentitiesGetByProviderIDReq>,
    metadata?: grpc.Metadata
  ): Promise<Identity> {
    return this.rpc.unary(
      IdentitiesGetByProviderIDDesc,
      IdentitiesGetByProviderIDReq.fromPartial(request),
      metadata
    );
  }
}

export const IdentitiesDesc = {
  serviceName: "rpx.Identities",
};

export const IdentitiesCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: IdentitiesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return IdentitiesCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...IdentitiesCreateResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const IdentitiesDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: IdentitiesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return IdentitiesDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Identity.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const IdentitiesGetByUserDesc: UnaryMethodDefinitionish = {
  methodName: "GetByUser",
  service: IdentitiesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return IdentitiesGetByUserReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...IdentitiesGetByUserResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const IdentitiesGetByProviderForUserDesc: UnaryMethodDefinitionish = {
  methodName: "GetByProviderForUser",
  service: IdentitiesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return IdentitiesGetByProviderForUserReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Identity.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const IdentitiesGetByProviderIDDesc: UnaryMethodDefinitionish = {
  methodName: "GetByProviderID",
  service: IdentitiesDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return IdentitiesGetByProviderIDReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...Identity.decode(data),
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
