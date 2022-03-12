// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import {
  FeatureRequest_Feature,
  FeatureRequest,
} from "../rpx/model_feature_request";
import { BrowserHeaders } from "browser-headers";
import { ID } from "../pb/types";

export const protobufPackage = "rpx";

export interface FeatureRequestListResp {
  featureRequests: FeatureRequest[];
}

export interface FeatureRequestsCreateReq {
  feature: FeatureRequest_Feature;
  userId: ID | undefined;
  accountId: ID | undefined;
  request: string;
}

export interface FeatureRequestsGetByFeatureReq {
  feature: FeatureRequest_Feature;
}

export interface FeatureRequestsGetByUserReq {
  userId: ID | undefined;
}

export interface FeatureRequestsGetByAccountReq {
  accountId: ID | undefined;
}

export interface FeatureRequestsGetSuggestionsReq {
  feature: FeatureRequest_Feature;
}

export interface FeatureRequestsGetSuggestionsResp {
  suggestions: string[];
}

const baseFeatureRequestListResp: object = {};

export const FeatureRequestListResp = {
  encode(
    message: FeatureRequestListResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.featureRequests) {
      FeatureRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FeatureRequestListResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeatureRequestListResp } as FeatureRequestListResp;
    message.featureRequests = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.featureRequests.push(
            FeatureRequest.decode(reader, reader.uint32())
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
    object: DeepPartial<FeatureRequestListResp>
  ): FeatureRequestListResp {
    const message = { ...baseFeatureRequestListResp } as FeatureRequestListResp;
    message.featureRequests = [];
    if (
      object.featureRequests !== undefined &&
      object.featureRequests !== null
    ) {
      for (const e of object.featureRequests) {
        message.featureRequests.push(FeatureRequest.fromPartial(e));
      }
    }
    return message;
  },
};

const baseFeatureRequestsCreateReq: object = { feature: 0, request: "" };

export const FeatureRequestsCreateReq = {
  encode(
    message: FeatureRequestsCreateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.feature !== 0) {
      writer.uint32(8).int32(message.feature);
    }
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(18).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(26).fork()).ldelim();
    }
    if (message.request !== "") {
      writer.uint32(34).string(message.request);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FeatureRequestsCreateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFeatureRequestsCreateReq,
    } as FeatureRequestsCreateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feature = reader.int32() as any;
          break;
        case 2:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountId = ID.decode(reader, reader.uint32());
          break;
        case 4:
          message.request = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<FeatureRequestsCreateReq>
  ): FeatureRequestsCreateReq {
    const message = {
      ...baseFeatureRequestsCreateReq,
    } as FeatureRequestsCreateReq;
    if (object.feature !== undefined && object.feature !== null) {
      message.feature = object.feature;
    } else {
      message.feature = 0;
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    if (object.request !== undefined && object.request !== null) {
      message.request = object.request;
    } else {
      message.request = "";
    }
    return message;
  },
};

const baseFeatureRequestsGetByFeatureReq: object = { feature: 0 };

export const FeatureRequestsGetByFeatureReq = {
  encode(
    message: FeatureRequestsGetByFeatureReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.feature !== 0) {
      writer.uint32(8).int32(message.feature);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FeatureRequestsGetByFeatureReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFeatureRequestsGetByFeatureReq,
    } as FeatureRequestsGetByFeatureReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feature = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<FeatureRequestsGetByFeatureReq>
  ): FeatureRequestsGetByFeatureReq {
    const message = {
      ...baseFeatureRequestsGetByFeatureReq,
    } as FeatureRequestsGetByFeatureReq;
    if (object.feature !== undefined && object.feature !== null) {
      message.feature = object.feature;
    } else {
      message.feature = 0;
    }
    return message;
  },
};

const baseFeatureRequestsGetByUserReq: object = {};

export const FeatureRequestsGetByUserReq = {
  encode(
    message: FeatureRequestsGetByUserReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FeatureRequestsGetByUserReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFeatureRequestsGetByUserReq,
    } as FeatureRequestsGetByUserReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    object: DeepPartial<FeatureRequestsGetByUserReq>
  ): FeatureRequestsGetByUserReq {
    const message = {
      ...baseFeatureRequestsGetByUserReq,
    } as FeatureRequestsGetByUserReq;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    return message;
  },
};

const baseFeatureRequestsGetByAccountReq: object = {};

export const FeatureRequestsGetByAccountReq = {
  encode(
    message: FeatureRequestsGetByAccountReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FeatureRequestsGetByAccountReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFeatureRequestsGetByAccountReq,
    } as FeatureRequestsGetByAccountReq;
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

  fromPartial(
    object: DeepPartial<FeatureRequestsGetByAccountReq>
  ): FeatureRequestsGetByAccountReq {
    const message = {
      ...baseFeatureRequestsGetByAccountReq,
    } as FeatureRequestsGetByAccountReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    return message;
  },
};

const baseFeatureRequestsGetSuggestionsReq: object = { feature: 0 };

export const FeatureRequestsGetSuggestionsReq = {
  encode(
    message: FeatureRequestsGetSuggestionsReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.feature !== 0) {
      writer.uint32(8).int32(message.feature);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FeatureRequestsGetSuggestionsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFeatureRequestsGetSuggestionsReq,
    } as FeatureRequestsGetSuggestionsReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feature = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<FeatureRequestsGetSuggestionsReq>
  ): FeatureRequestsGetSuggestionsReq {
    const message = {
      ...baseFeatureRequestsGetSuggestionsReq,
    } as FeatureRequestsGetSuggestionsReq;
    if (object.feature !== undefined && object.feature !== null) {
      message.feature = object.feature;
    } else {
      message.feature = 0;
    }
    return message;
  },
};

const baseFeatureRequestsGetSuggestionsResp: object = { suggestions: "" };

export const FeatureRequestsGetSuggestionsResp = {
  encode(
    message: FeatureRequestsGetSuggestionsResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.suggestions) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FeatureRequestsGetSuggestionsResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFeatureRequestsGetSuggestionsResp,
    } as FeatureRequestsGetSuggestionsResp;
    message.suggestions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.suggestions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<FeatureRequestsGetSuggestionsResp>
  ): FeatureRequestsGetSuggestionsResp {
    const message = {
      ...baseFeatureRequestsGetSuggestionsResp,
    } as FeatureRequestsGetSuggestionsResp;
    message.suggestions = [];
    if (object.suggestions !== undefined && object.suggestions !== null) {
      for (const e of object.suggestions) {
        message.suggestions.push(e);
      }
    }
    return message;
  },
};

/**
 * The FeatureRequests service tracks targeted requests for missing features or
 * choices in the product.
 */
export interface FeatureRequests {
  /** Create a new feature request */
  Create(
    request: DeepPartial<FeatureRequestsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<FeatureRequest>;
  /** Get feature requests by feature */
  GetByFeature(
    request: DeepPartial<FeatureRequestsGetByFeatureReq>,
    metadata?: grpc.Metadata
  ): Promise<FeatureRequestListResp>;
  /** Get feature requests by user */
  GetByUser(
    request: DeepPartial<FeatureRequestsGetByUserReq>,
    metadata?: grpc.Metadata
  ): Promise<FeatureRequestListResp>;
  /** Get feature requests by account */
  GetByAccount(
    request: DeepPartial<FeatureRequestsGetByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<FeatureRequestListResp>;
  /**
   * Get a list of suggestions to be used to show autocomplete choices. At
   * initial implementation, this returns all unique strings longer than 3
   * characters that have been requested by more than 10 different accounts.
   */
  GetSuggestions(
    request: DeepPartial<FeatureRequestsGetSuggestionsReq>,
    metadata?: grpc.Metadata
  ): Promise<FeatureRequestsGetSuggestionsResp>;
}

export class FeatureRequestsClientImpl implements FeatureRequests {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.GetByFeature = this.GetByFeature.bind(this);
    this.GetByUser = this.GetByUser.bind(this);
    this.GetByAccount = this.GetByAccount.bind(this);
    this.GetSuggestions = this.GetSuggestions.bind(this);
  }

  Create(
    request: DeepPartial<FeatureRequestsCreateReq>,
    metadata?: grpc.Metadata
  ): Promise<FeatureRequest> {
    return this.rpc.unary(
      FeatureRequestsCreateDesc,
      FeatureRequestsCreateReq.fromPartial(request),
      metadata
    );
  }

  GetByFeature(
    request: DeepPartial<FeatureRequestsGetByFeatureReq>,
    metadata?: grpc.Metadata
  ): Promise<FeatureRequestListResp> {
    return this.rpc.unary(
      FeatureRequestsGetByFeatureDesc,
      FeatureRequestsGetByFeatureReq.fromPartial(request),
      metadata
    );
  }

  GetByUser(
    request: DeepPartial<FeatureRequestsGetByUserReq>,
    metadata?: grpc.Metadata
  ): Promise<FeatureRequestListResp> {
    return this.rpc.unary(
      FeatureRequestsGetByUserDesc,
      FeatureRequestsGetByUserReq.fromPartial(request),
      metadata
    );
  }

  GetByAccount(
    request: DeepPartial<FeatureRequestsGetByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<FeatureRequestListResp> {
    return this.rpc.unary(
      FeatureRequestsGetByAccountDesc,
      FeatureRequestsGetByAccountReq.fromPartial(request),
      metadata
    );
  }

  GetSuggestions(
    request: DeepPartial<FeatureRequestsGetSuggestionsReq>,
    metadata?: grpc.Metadata
  ): Promise<FeatureRequestsGetSuggestionsResp> {
    return this.rpc.unary(
      FeatureRequestsGetSuggestionsDesc,
      FeatureRequestsGetSuggestionsReq.fromPartial(request),
      metadata
    );
  }
}

export const FeatureRequestsDesc = {
  serviceName: "rpx.FeatureRequests",
};

export const FeatureRequestsCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: FeatureRequestsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return FeatureRequestsCreateReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...FeatureRequest.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const FeatureRequestsGetByFeatureDesc: UnaryMethodDefinitionish = {
  methodName: "GetByFeature",
  service: FeatureRequestsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return FeatureRequestsGetByFeatureReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...FeatureRequestListResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const FeatureRequestsGetByUserDesc: UnaryMethodDefinitionish = {
  methodName: "GetByUser",
  service: FeatureRequestsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return FeatureRequestsGetByUserReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...FeatureRequestListResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const FeatureRequestsGetByAccountDesc: UnaryMethodDefinitionish = {
  methodName: "GetByAccount",
  service: FeatureRequestsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return FeatureRequestsGetByAccountReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...FeatureRequestListResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const FeatureRequestsGetSuggestionsDesc: UnaryMethodDefinitionish = {
  methodName: "GetSuggestions",
  service: FeatureRequestsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return FeatureRequestsGetSuggestionsReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...FeatureRequestsGetSuggestionsResp.decode(data),
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
