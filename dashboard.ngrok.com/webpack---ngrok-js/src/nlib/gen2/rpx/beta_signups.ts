// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { BetaSignup_Feature, BetaSignup } from "../rpx/model";
import { Empty, ID } from "../pb/types";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "rpx";

export interface BetaSignupListResp {
  signups: BetaSignup[];
}

export interface BetaSignupsPutReq {
  feature: BetaSignup_Feature;
  userId: ID | undefined;
  accountId: ID | undefined;
  explicit: boolean;
}

export interface BetaSignupsGetByFeatureReq {
  feature: BetaSignup_Feature;
}

export interface BetaSignupsGetByUserReq {
  userId: ID | undefined;
}

export interface BetaSignupsGetByUserAndAccountReq {
  userId: ID | undefined;
  accountId: ID | undefined;
}

export interface BetaSignupsGetByAccountReq {
  accountId: ID | undefined;
}

export interface BetaSignupsDeleteReq {
  id: ID | undefined;
  userId: ID | undefined;
}

export interface BetaSignupsEnrollReq {
  userId: ID | undefined;
  accountId: ID | undefined;
  force: boolean;
}

export interface BetaSignupsGetStatusReq {
  accountId: ID | undefined;
}

export interface BetaSignupsGetStatusResp {
  allow: boolean;
  ignore: boolean;
}

const baseBetaSignupListResp: object = {};

export const BetaSignupListResp = {
  encode(
    message: BetaSignupListResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.signups) {
      BetaSignup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BetaSignupListResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBetaSignupListResp } as BetaSignupListResp;
    message.signups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signups.push(BetaSignup.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<BetaSignupListResp>): BetaSignupListResp {
    const message = { ...baseBetaSignupListResp } as BetaSignupListResp;
    message.signups = [];
    if (object.signups !== undefined && object.signups !== null) {
      for (const e of object.signups) {
        message.signups.push(BetaSignup.fromPartial(e));
      }
    }
    return message;
  },
};

const baseBetaSignupsPutReq: object = { feature: 0, explicit: false };

export const BetaSignupsPutReq = {
  encode(
    message: BetaSignupsPutReq,
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
    if (message.explicit === true) {
      writer.uint32(32).bool(message.explicit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BetaSignupsPutReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBetaSignupsPutReq } as BetaSignupsPutReq;
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
          message.explicit = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<BetaSignupsPutReq>): BetaSignupsPutReq {
    const message = { ...baseBetaSignupsPutReq } as BetaSignupsPutReq;
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
    if (object.explicit !== undefined && object.explicit !== null) {
      message.explicit = object.explicit;
    } else {
      message.explicit = false;
    }
    return message;
  },
};

const baseBetaSignupsGetByFeatureReq: object = { feature: 0 };

export const BetaSignupsGetByFeatureReq = {
  encode(
    message: BetaSignupsGetByFeatureReq,
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
  ): BetaSignupsGetByFeatureReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBetaSignupsGetByFeatureReq,
    } as BetaSignupsGetByFeatureReq;
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
    object: DeepPartial<BetaSignupsGetByFeatureReq>
  ): BetaSignupsGetByFeatureReq {
    const message = {
      ...baseBetaSignupsGetByFeatureReq,
    } as BetaSignupsGetByFeatureReq;
    if (object.feature !== undefined && object.feature !== null) {
      message.feature = object.feature;
    } else {
      message.feature = 0;
    }
    return message;
  },
};

const baseBetaSignupsGetByUserReq: object = {};

export const BetaSignupsGetByUserReq = {
  encode(
    message: BetaSignupsGetByUserReq,
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
  ): BetaSignupsGetByUserReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBetaSignupsGetByUserReq,
    } as BetaSignupsGetByUserReq;
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
    object: DeepPartial<BetaSignupsGetByUserReq>
  ): BetaSignupsGetByUserReq {
    const message = {
      ...baseBetaSignupsGetByUserReq,
    } as BetaSignupsGetByUserReq;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    return message;
  },
};

const baseBetaSignupsGetByUserAndAccountReq: object = {};

export const BetaSignupsGetByUserAndAccountReq = {
  encode(
    message: BetaSignupsGetByUserAndAccountReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BetaSignupsGetByUserAndAccountReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBetaSignupsGetByUserAndAccountReq,
    } as BetaSignupsGetByUserAndAccountReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = ID.decode(reader, reader.uint32());
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

  fromPartial(
    object: DeepPartial<BetaSignupsGetByUserAndAccountReq>
  ): BetaSignupsGetByUserAndAccountReq {
    const message = {
      ...baseBetaSignupsGetByUserAndAccountReq,
    } as BetaSignupsGetByUserAndAccountReq;
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
    return message;
  },
};

const baseBetaSignupsGetByAccountReq: object = {};

export const BetaSignupsGetByAccountReq = {
  encode(
    message: BetaSignupsGetByAccountReq,
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
  ): BetaSignupsGetByAccountReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBetaSignupsGetByAccountReq,
    } as BetaSignupsGetByAccountReq;
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
    object: DeepPartial<BetaSignupsGetByAccountReq>
  ): BetaSignupsGetByAccountReq {
    const message = {
      ...baseBetaSignupsGetByAccountReq,
    } as BetaSignupsGetByAccountReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    return message;
  },
};

const baseBetaSignupsDeleteReq: object = {};

export const BetaSignupsDeleteReq = {
  encode(
    message: BetaSignupsDeleteReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BetaSignupsDeleteReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBetaSignupsDeleteReq } as BetaSignupsDeleteReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
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

  fromPartial(object: DeepPartial<BetaSignupsDeleteReq>): BetaSignupsDeleteReq {
    const message = { ...baseBetaSignupsDeleteReq } as BetaSignupsDeleteReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    return message;
  },
};

const baseBetaSignupsEnrollReq: object = { force: false };

export const BetaSignupsEnrollReq = {
  encode(
    message: BetaSignupsEnrollReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountId !== undefined) {
      ID.encode(message.accountId, writer.uint32(18).fork()).ldelim();
    }
    if (message.force === true) {
      writer.uint32(24).bool(message.force);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BetaSignupsEnrollReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBetaSignupsEnrollReq } as BetaSignupsEnrollReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        case 2:
          message.accountId = ID.decode(reader, reader.uint32());
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

  fromPartial(object: DeepPartial<BetaSignupsEnrollReq>): BetaSignupsEnrollReq {
    const message = { ...baseBetaSignupsEnrollReq } as BetaSignupsEnrollReq;
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
    if (object.force !== undefined && object.force !== null) {
      message.force = object.force;
    } else {
      message.force = false;
    }
    return message;
  },
};

const baseBetaSignupsGetStatusReq: object = {};

export const BetaSignupsGetStatusReq = {
  encode(
    message: BetaSignupsGetStatusReq,
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
  ): BetaSignupsGetStatusReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBetaSignupsGetStatusReq,
    } as BetaSignupsGetStatusReq;
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
    object: DeepPartial<BetaSignupsGetStatusReq>
  ): BetaSignupsGetStatusReq {
    const message = {
      ...baseBetaSignupsGetStatusReq,
    } as BetaSignupsGetStatusReq;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = ID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    return message;
  },
};

const baseBetaSignupsGetStatusResp: object = { allow: false, ignore: false };

export const BetaSignupsGetStatusResp = {
  encode(
    message: BetaSignupsGetStatusResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.allow === true) {
      writer.uint32(8).bool(message.allow);
    }
    if (message.ignore === true) {
      writer.uint32(16).bool(message.ignore);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BetaSignupsGetStatusResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBetaSignupsGetStatusResp,
    } as BetaSignupsGetStatusResp;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allow = reader.bool();
          break;
        case 2:
          message.ignore = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<BetaSignupsGetStatusResp>
  ): BetaSignupsGetStatusResp {
    const message = {
      ...baseBetaSignupsGetStatusResp,
    } as BetaSignupsGetStatusResp;
    if (object.allow !== undefined && object.allow !== null) {
      message.allow = object.allow;
    } else {
      message.allow = false;
    }
    if (object.ignore !== undefined && object.ignore !== null) {
      message.ignore = object.ignore;
    } else {
      message.ignore = false;
    }
    return message;
  },
};

/**
 * The BetaSignups service tracks new 'beta' features that users are
 * interested in trailing.
 */
export interface BetaSignups {
  Put(
    request: DeepPartial<BetaSignupsPutReq>,
    metadata?: grpc.Metadata
  ): Promise<BetaSignup>;
  GetByFeature(
    request: DeepPartial<BetaSignupsGetByFeatureReq>,
    metadata?: grpc.Metadata
  ): Promise<BetaSignupListResp>;
  GetByUser(
    request: DeepPartial<BetaSignupsGetByUserReq>,
    metadata?: grpc.Metadata
  ): Promise<BetaSignupListResp>;
  GetByAccount(
    request: DeepPartial<BetaSignupsGetByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<BetaSignupListResp>;
  GetByUserAndAccount(
    request: DeepPartial<BetaSignupsGetByUserAndAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<BetaSignupListResp>;
  Delete(
    request: DeepPartial<BetaSignupsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<BetaSignup>;
  Enroll(
    request: DeepPartial<BetaSignupsEnrollReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  GetStatus(
    request: DeepPartial<BetaSignupsGetStatusReq>,
    metadata?: grpc.Metadata
  ): Promise<BetaSignupsGetStatusResp>;
}

export class BetaSignupsClientImpl implements BetaSignups {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Put = this.Put.bind(this);
    this.GetByFeature = this.GetByFeature.bind(this);
    this.GetByUser = this.GetByUser.bind(this);
    this.GetByAccount = this.GetByAccount.bind(this);
    this.GetByUserAndAccount = this.GetByUserAndAccount.bind(this);
    this.Delete = this.Delete.bind(this);
    this.Enroll = this.Enroll.bind(this);
    this.GetStatus = this.GetStatus.bind(this);
  }

  Put(
    request: DeepPartial<BetaSignupsPutReq>,
    metadata?: grpc.Metadata
  ): Promise<BetaSignup> {
    return this.rpc.unary(
      BetaSignupsPutDesc,
      BetaSignupsPutReq.fromPartial(request),
      metadata
    );
  }

  GetByFeature(
    request: DeepPartial<BetaSignupsGetByFeatureReq>,
    metadata?: grpc.Metadata
  ): Promise<BetaSignupListResp> {
    return this.rpc.unary(
      BetaSignupsGetByFeatureDesc,
      BetaSignupsGetByFeatureReq.fromPartial(request),
      metadata
    );
  }

  GetByUser(
    request: DeepPartial<BetaSignupsGetByUserReq>,
    metadata?: grpc.Metadata
  ): Promise<BetaSignupListResp> {
    return this.rpc.unary(
      BetaSignupsGetByUserDesc,
      BetaSignupsGetByUserReq.fromPartial(request),
      metadata
    );
  }

  GetByAccount(
    request: DeepPartial<BetaSignupsGetByAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<BetaSignupListResp> {
    return this.rpc.unary(
      BetaSignupsGetByAccountDesc,
      BetaSignupsGetByAccountReq.fromPartial(request),
      metadata
    );
  }

  GetByUserAndAccount(
    request: DeepPartial<BetaSignupsGetByUserAndAccountReq>,
    metadata?: grpc.Metadata
  ): Promise<BetaSignupListResp> {
    return this.rpc.unary(
      BetaSignupsGetByUserAndAccountDesc,
      BetaSignupsGetByUserAndAccountReq.fromPartial(request),
      metadata
    );
  }

  Delete(
    request: DeepPartial<BetaSignupsDeleteReq>,
    metadata?: grpc.Metadata
  ): Promise<BetaSignup> {
    return this.rpc.unary(
      BetaSignupsDeleteDesc,
      BetaSignupsDeleteReq.fromPartial(request),
      metadata
    );
  }

  Enroll(
    request: DeepPartial<BetaSignupsEnrollReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      BetaSignupsEnrollDesc,
      BetaSignupsEnrollReq.fromPartial(request),
      metadata
    );
  }

  GetStatus(
    request: DeepPartial<BetaSignupsGetStatusReq>,
    metadata?: grpc.Metadata
  ): Promise<BetaSignupsGetStatusResp> {
    return this.rpc.unary(
      BetaSignupsGetStatusDesc,
      BetaSignupsGetStatusReq.fromPartial(request),
      metadata
    );
  }
}

export const BetaSignupsDesc = {
  serviceName: "rpx.BetaSignups",
};

export const BetaSignupsPutDesc: UnaryMethodDefinitionish = {
  methodName: "Put",
  service: BetaSignupsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BetaSignupsPutReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...BetaSignup.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const BetaSignupsGetByFeatureDesc: UnaryMethodDefinitionish = {
  methodName: "GetByFeature",
  service: BetaSignupsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BetaSignupsGetByFeatureReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...BetaSignupListResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const BetaSignupsGetByUserDesc: UnaryMethodDefinitionish = {
  methodName: "GetByUser",
  service: BetaSignupsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BetaSignupsGetByUserReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...BetaSignupListResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const BetaSignupsGetByAccountDesc: UnaryMethodDefinitionish = {
  methodName: "GetByAccount",
  service: BetaSignupsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BetaSignupsGetByAccountReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...BetaSignupListResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const BetaSignupsGetByUserAndAccountDesc: UnaryMethodDefinitionish = {
  methodName: "GetByUserAndAccount",
  service: BetaSignupsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BetaSignupsGetByUserAndAccountReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...BetaSignupListResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const BetaSignupsDeleteDesc: UnaryMethodDefinitionish = {
  methodName: "Delete",
  service: BetaSignupsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BetaSignupsDeleteReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...BetaSignup.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const BetaSignupsEnrollDesc: UnaryMethodDefinitionish = {
  methodName: "Enroll",
  service: BetaSignupsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BetaSignupsEnrollReq.encode(this).finish();
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

export const BetaSignupsGetStatusDesc: UnaryMethodDefinitionish = {
  methodName: "GetStatus",
  service: BetaSignupsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BetaSignupsGetStatusReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...BetaSignupsGetStatusResp.decode(data),
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
