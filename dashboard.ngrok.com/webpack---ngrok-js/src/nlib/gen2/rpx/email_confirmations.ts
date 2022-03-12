// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Empty, ID } from "../pb/types";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "rpx";

export interface EmailConfirmationsUserReq {
  userId: ID | undefined;
  /** Set by the DashUsers SetEmail method, otherwise it will be populate directly in the RPC call. */
  email: string;
}

export interface EmailConfirmationsCodeReq {
  code: string;
}

export interface EmailConfirmationsVerifiedResp {
  verified: boolean;
}

export interface EmailConfirmationsEmailResp {
  email: string;
}

const baseEmailConfirmationsUserReq: object = { email: "" };

export const EmailConfirmationsUserReq = {
  encode(
    message: EmailConfirmationsUserReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== undefined) {
      ID.encode(message.userId, writer.uint32(10).fork()).ldelim();
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EmailConfirmationsUserReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEmailConfirmationsUserReq,
    } as EmailConfirmationsUserReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = ID.decode(reader, reader.uint32());
          break;
        case 2:
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
    object: DeepPartial<EmailConfirmationsUserReq>
  ): EmailConfirmationsUserReq {
    const message = {
      ...baseEmailConfirmationsUserReq,
    } as EmailConfirmationsUserReq;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = ID.fromPartial(object.userId);
    } else {
      message.userId = undefined;
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    return message;
  },
};

const baseEmailConfirmationsCodeReq: object = { code: "" };

export const EmailConfirmationsCodeReq = {
  encode(
    message: EmailConfirmationsCodeReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EmailConfirmationsCodeReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEmailConfirmationsCodeReq,
    } as EmailConfirmationsCodeReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<EmailConfirmationsCodeReq>
  ): EmailConfirmationsCodeReq {
    const message = {
      ...baseEmailConfirmationsCodeReq,
    } as EmailConfirmationsCodeReq;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    return message;
  },
};

const baseEmailConfirmationsVerifiedResp: object = { verified: false };

export const EmailConfirmationsVerifiedResp = {
  encode(
    message: EmailConfirmationsVerifiedResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.verified === true) {
      writer.uint32(8).bool(message.verified);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EmailConfirmationsVerifiedResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEmailConfirmationsVerifiedResp,
    } as EmailConfirmationsVerifiedResp;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verified = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(
    object: DeepPartial<EmailConfirmationsVerifiedResp>
  ): EmailConfirmationsVerifiedResp {
    const message = {
      ...baseEmailConfirmationsVerifiedResp,
    } as EmailConfirmationsVerifiedResp;
    if (object.verified !== undefined && object.verified !== null) {
      message.verified = object.verified;
    } else {
      message.verified = false;
    }
    return message;
  },
};

const baseEmailConfirmationsEmailResp: object = { email: "" };

export const EmailConfirmationsEmailResp = {
  encode(
    message: EmailConfirmationsEmailResp,
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
  ): EmailConfirmationsEmailResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEmailConfirmationsEmailResp,
    } as EmailConfirmationsEmailResp;
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
    object: DeepPartial<EmailConfirmationsEmailResp>
  ): EmailConfirmationsEmailResp {
    const message = {
      ...baseEmailConfirmationsEmailResp,
    } as EmailConfirmationsEmailResp;
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    return message;
  },
};

/** The EmailConfirmations service tracks email confirmations for user emails. */
export interface EmailConfirmations {
  /**
   * Sends or resends an email confirmation code for the user.
   * Creates a row in the `email_confirmation` table if it does not exist.
   */
  SendConfirmationCode(
    request: DeepPartial<EmailConfirmationsUserReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  /** Gets if the email is has been verified by the user. */
  CheckEmailVerified(
    request: DeepPartial<EmailConfirmationsUserReq>,
    metadata?: grpc.Metadata
  ): Promise<EmailConfirmationsVerifiedResp>;
  /** Updates the user's email for the given code to be verified. */
  VerifyEmail(
    request: DeepPartial<EmailConfirmationsCodeReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
  /** Get pending email confirmation for the user. */
  GetPendingEmail(
    request: DeepPartial<EmailConfirmationsUserReq>,
    metadata?: grpc.Metadata
  ): Promise<EmailConfirmationsEmailResp>;
  /** Cancel pending email confirmation for the user. */
  CancelPendingEmail(
    request: DeepPartial<EmailConfirmationsUserReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty>;
}

export class EmailConfirmationsClientImpl implements EmailConfirmations {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SendConfirmationCode = this.SendConfirmationCode.bind(this);
    this.CheckEmailVerified = this.CheckEmailVerified.bind(this);
    this.VerifyEmail = this.VerifyEmail.bind(this);
    this.GetPendingEmail = this.GetPendingEmail.bind(this);
    this.CancelPendingEmail = this.CancelPendingEmail.bind(this);
  }

  SendConfirmationCode(
    request: DeepPartial<EmailConfirmationsUserReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      EmailConfirmationsSendConfirmationCodeDesc,
      EmailConfirmationsUserReq.fromPartial(request),
      metadata
    );
  }

  CheckEmailVerified(
    request: DeepPartial<EmailConfirmationsUserReq>,
    metadata?: grpc.Metadata
  ): Promise<EmailConfirmationsVerifiedResp> {
    return this.rpc.unary(
      EmailConfirmationsCheckEmailVerifiedDesc,
      EmailConfirmationsUserReq.fromPartial(request),
      metadata
    );
  }

  VerifyEmail(
    request: DeepPartial<EmailConfirmationsCodeReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      EmailConfirmationsVerifyEmailDesc,
      EmailConfirmationsCodeReq.fromPartial(request),
      metadata
    );
  }

  GetPendingEmail(
    request: DeepPartial<EmailConfirmationsUserReq>,
    metadata?: grpc.Metadata
  ): Promise<EmailConfirmationsEmailResp> {
    return this.rpc.unary(
      EmailConfirmationsGetPendingEmailDesc,
      EmailConfirmationsUserReq.fromPartial(request),
      metadata
    );
  }

  CancelPendingEmail(
    request: DeepPartial<EmailConfirmationsUserReq>,
    metadata?: grpc.Metadata
  ): Promise<Empty> {
    return this.rpc.unary(
      EmailConfirmationsCancelPendingEmailDesc,
      EmailConfirmationsUserReq.fromPartial(request),
      metadata
    );
  }
}

export const EmailConfirmationsDesc = {
  serviceName: "rpx.EmailConfirmations",
};

export const EmailConfirmationsSendConfirmationCodeDesc: UnaryMethodDefinitionish =
  {
    methodName: "SendConfirmationCode",
    service: EmailConfirmationsDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary() {
        return EmailConfirmationsUserReq.encode(this).finish();
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

export const EmailConfirmationsCheckEmailVerifiedDesc: UnaryMethodDefinitionish =
  {
    methodName: "CheckEmailVerified",
    service: EmailConfirmationsDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary() {
        return EmailConfirmationsUserReq.encode(this).finish();
      },
    } as any,
    responseType: {
      deserializeBinary(data: Uint8Array) {
        return {
          ...EmailConfirmationsVerifiedResp.decode(data),
          toObject() {
            return this;
          },
        };
      },
    } as any,
  };

export const EmailConfirmationsVerifyEmailDesc: UnaryMethodDefinitionish = {
  methodName: "VerifyEmail",
  service: EmailConfirmationsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EmailConfirmationsCodeReq.encode(this).finish();
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

export const EmailConfirmationsGetPendingEmailDesc: UnaryMethodDefinitionish = {
  methodName: "GetPendingEmail",
  service: EmailConfirmationsDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EmailConfirmationsUserReq.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...EmailConfirmationsEmailResp.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const EmailConfirmationsCancelPendingEmailDesc: UnaryMethodDefinitionish =
  {
    methodName: "CancelPendingEmail",
    service: EmailConfirmationsDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary() {
        return EmailConfirmationsUserReq.encode(this).finish();
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
